const mongoose = require('../../database');

//type = tipo do campo, required = campo obrigatorio, unique = valor unico, lowercase = converter em caixa baixa, select = escolhe se será possível consultar este campo no select ou nao
const RepublicSchema = new mongoose.Schema({
  status:{ 
    type: Boolean, 
    default: true
  },
  title:{ 
   type: String, 
   required: true
},
description:{
  type: String, 
  required: true
},
republic_like:{//Male, Female, Other, All
  type: String, 
  required: true
},
rules:{
  type: String,
  required: true
},
address: {
  street: String,
  city: String,
  state: String,
  zip: Number
},
republic_person_perfil:{
  type: String,
  require: true
},
contact: {
  cellphone: String,
  telefone: String,
 },
capacity:{
  type: Number,
  require: true
},
quantidy_bedroom:{
  type: Number,
  require: true
},
quantidy_bathroom:{
  type: Number,
  require: true
},
bathroom_size_square:{
  type: Number,
},
bedroom_size_square:{
  type: Number,
  require: true,
},

user:{
  type: mongoose.SchemaTypes.ObjectId,
  ref:'User', 
  required: true
},
images: [{
  type: mongoose.SchemaTypes.ObjectId,
  ref: 'ImageRepublic'
}],

createdAt:{
  type: Date,
  default: Date.now
},

UpdatedAt:{
  type: Date,
  default: Date.now
},
});



const Republic = mongoose.model('Republic', RepublicSchema);
mongoose.set('useFindAndModify', false);

module.exports = Republic;