const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports =(req, res, next)=>{
     //Recebe do Header o Token enviado
    const authHeader = req.headers.authorization;
    //Se não tiver token retorna um erro no header de autorização para logar
    if(!authHeader){
        return res.status(401).send({error: 'No token provided'});
    }

    //Modelo de Token: 'Bearer kd30k9f4j9g09d3ls1004k'
    //Divide o Token em duas partes, sendo a partir do primeiro espaçamento
    const parts = authHeader.split(' ');
     //Verifica se a divisão do token tem apenas duas partes, pois se não tiver retorna erro
     if(!parts.length === 2){
        return res.status(401).send({error: 'Token error'});
    }

    //Salva as duas partes separadas no array do split, uma para scheme e a outra para o token
    const [scheme, token] = parts;

    //Verifica se no scheme está recebendo a palavra Bearer
    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: 'Token incorret formatted'});
    }

    //Passa diversos parametros para o jsonwebtoken verificar
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) res.status(401).send({error: "Token Invalid"})
         
        req.userId = decoded.params.id;

        //Caso tudo acima estiver OK ele continua o processo de logon!
       return next(); 
    });

   

}