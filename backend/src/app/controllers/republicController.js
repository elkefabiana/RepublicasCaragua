//Pacote de rotas
const express = require('express');

const Republic = require('../models/Republic');
const ImageRepublic = require('../models/ImageRepublic');
  
const authMiddleware = require('../middlewares/auth')
const router = express.Router();
//Para adicionar ao Body de todas as rotas a Verificação do Token
router.use(authMiddleware);


//Consulta de Todas Republicas
router.get('/:status?', async (req, res) => {
  const{status}=req.params;
try {
  var republic; 
  if(!status)
  republic = await Republic.find().populate(['user', 'images']);
  else
  republic = await Republic.find({status}).populate(['user', 'images']);



  res.send(republic)
} catch (err) {
  console.log(err)
  res.send({error: 'Error to select republics'})
}

});


//Consulta do Republica especifica
router.get('/:republic_id', async (req, res) => {
  const {republic_id} = req.params;
  try {
    const republic = await (await Republic.findById(republic_id).populate(['user', 'images']));
    res.send(republic);   
  } catch (err) {
    res.status(400).send({error: 'Error to select this republic'})
  } 
  


 });


//Criação de Republica
router.post('/', async (req, res) => {
  const {title, 
    description,
    republic_like,
    rules,
    address, 
    republic_person_perfil,
    contact,
    capacity,
    quantidy_bedroom,
    quantidy_bathroom,
    bathroom_size_square,
    bedroom_size_square,
    images
   } = req.body;

  try{
  const republic = await Republic.create(
    {
    title, 
    description,
    republic_like,
    rules,
    address, 
    republic_person_perfil,
    contact,
    capacity,
    quantidy_bedroom,
    quantidy_bathroom,
    bathroom_size_square,
    bedroom_size_square,
    user: req.userId
  });
  await Promise.all(images.map(async image=>{
    const republicImage = new ImageRepublic({...image,  assignedToUser: req.userId, republic: republic._id});
    await republicImage.save();
    republic.images.push(republicImage);
  }))
  await republic.save();

  res.send({message: 'A new Republic created'})

}catch(err){
  res.status(400).send({error: 'Ocurred a dificulted to create new republic'})

}
  });


//Atualizaçao do Republica especifico
router.put('/:republic_id', async (req, res) => {
  
const {
  status,
  title, 
  description,
  republic_like,
  rules,
  address, 
  republic_person_perfil,
  contact,
  capacity,
  quantidy_bedroom,
  quantidy_bathroom,
  bathroom_size_square,
  bedroom_size_square,
  images
 } = req.body;

const {republic_id} = req.params
try {
const republic = await Republic.findByIdAndUpdate(
    republic_id, 
    {
      status,
      title, 
      description,
      republic_like,
      rules,
      address, 
      republic_person_perfil,
      contact,
      capacity,
      quantidy_bedroom,
      quantidy_bathroom,
      bathroom_size_square,
      bedroom_size_square,
      user: req.userId
    },
    {new: true}
    );
//Exlui as imagens do banco
    republic.images =[];
    ImageRepublic.remove({republic: republic_id})
    
    //Cria novamente as imagens
    await Promise.all(images.map(async image=>{
      const republicImage = new ImageRepublic({...image,  assignedToUser: req.userId, republic: republic._id});
      await republicImage.save();
      republic.images.push(republicImage);
    }))
    await republic.save();
  
res.send({message: 'Republic updated with success'})
 
} catch (error) {
 res.status(400).send({error: 'Error to update republic'}) 
}

});


//Deletar o Republica especifico
router.delete('/:republic_id', async (req, res) => {
  
});

module.exports = app => app.use('/republics', router);