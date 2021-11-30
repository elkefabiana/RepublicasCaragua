//Pacote de rotas
const express = require('express');
//Classe do usuário criado no model com o Mongoose
const User = require('../models/User');
//Pacote de Encriptação de Dados
const bcrypt = require('bcrypt');
//Pacote de Token de Autenticação
const jwt = require('jsonwebtoken');
//Segredo de token para autenticar
const authConfig = require('../../config/auth.json');

//Pacote que gera codigo encriptado para recuperar a senha
const crypto  = require('crypto');

//Pacote que realiza o envio de emails
const mailer = require('../../modules/mailer');

//Criando as rotas
const router = express.Router();


//Função para gerar o token do usuário
function gerenateToken(params = {}){
    return jwt.sign({ params }, authConfig.secret,{
        expiresIn: 86400,
    });
}


//Começa aqui a Rota de Registro de Usuário
router.post('/register', async (req, res) => {
    //pega o parametro de email da requisição
    const {email} = req.body;
   try{
    //Verifica no banco se já existe algum cadastro com o email enviado
    if(await User.findOne({email}))
    return res.status(400).send({error: 'Email already used!'});
    
    //Insere no banco de dados a requisição do novo usuário
    const user = await User.create(req.body); 
    user.password = undefined;
    return res.send({
        user,
        token: gerenateToken({id: user.id})
      });
   

   }catch(err){

    return res.status(400).send({error: 'Registration Failed'});

}   
    
});
//Acaba aqui a Rota de Registro de Usuário

//Começa aqui a Rota de Autenticação do Usuário
router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email}).select('+password');
  //Verificar se existe algum usuário do no banco caso não ele retorna um erro
  if(!user)return res.status(400).send({error: "User not exist's"})

  //compara a senha enviada na requisição e compara usando o hash de encriptação de dados
  if(!await bcrypt.compare(password, user.password)){
    return res.status(400).send({error: "Invalid Password"});
  }

  //Exclui a senha da requisição para não retornar para o cliente
  user.password = undefined;
   

  //Retorna os dados do usuário e o TOKEN gerado
  return res.send({
      user,
      token: gerenateToken({id: user.id})
    });
});
//Acaba aqui a rota de Autenticação do Usuário


//Começa aqui a rota de Recuperação de Usuário 
router.post('/forgot_password', async (req, res) => {
   
const {email} = req.body;

try {
    const user = await User.findOne({email});
    if(!user)return res.status(400).send({error: "User not exist's"})
    //gerado Token para recuperar a senha
    const tokenForgot = crypto.randomBytes(20).toString('hex');
    //Pega a data e hora atual e soma mais uma hora para expirar
    const expireDateTime = new Date();
    expireDateTime.setHours(expireDateTime.getHours()+1)
    //Consulta o usuário e atualiza os dados
    
    await User.findByIdAndUpdate(user.id, { 
    $set: { passwordResetToken: tokenForgot, 
            passwordResetExpiresToken: expireDateTime 
          }});
    console.log(tokenForgot, expireDateTime)
     
    
    var mail = {
        to: email,
        from: 'devfigueiredo@gmail.com',
        template: 'auth/forgot_password',
        context: {
            tokenForgot
        }}

     mailer.sendMail(mail, (error,info) => {
        if(error) {
          console.log(error);
          res.json(error);
        }
        console.log("email is send");
        res.json(info)
      });



} catch (err) {
    console.log("Deu erro aqui ó:"+err)
    return res.status(400).send({error: "Error on Forgot Password"});
}

});
//Acaba aqui a rota de recuperação de usuário

//Começa aqui a rota de Reset de Senha do Usuário
router.post('/reset_password', async (req, res) => {
const {email, token, password} = req.body;

//Realiza a consulta do usuário no banco
const user = await User.findOne({email}).select('+passwordResetToken passwordResetExpiresToken');
//Verificar se existe algum usuário do no banco caso não ele retorna um erro
if(!user)return res.status(400).send({error: "User not exist's"})

if(token !== user.passwordResetToken){
  res.status(400).send({error: 'Token invalid'})
}
DateTimeNow = new Date();

if(DateTimeNow>user.passwordResetExpiresToken){
  res.status(400).send({error: 'Token Expired, Request again a new Forgot password'})
}

user.password = password;
await user.save();
user.password = undefined;
res.send(user);


try{

}catch(err){
res.status(400).send({error: "Cannot possible reset password"});
}

});

//Acaba aqui A Rota de Reset de Senha do Usuário





module.exports = app => app.use('/auth', router);