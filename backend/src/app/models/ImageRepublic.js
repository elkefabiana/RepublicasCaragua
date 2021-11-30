const mongoose = require('../../database');

//type = tipo do campo, required = campo obrigatorio, unique = valor unico, lowercase = converter em caixa baixa, select = escolhe se será possível consultar este campo no select ou nao
const ImageRepublicSchema = new mongoose.Schema({
image_src:{
   type: String, 
   required: true
},
republic:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:'Republic', 
    required: true
  },
assignedToUser:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:'User', 
    required: true
  },
primary:{
    type: Boolean,
    default: false 
},

});

const ImageRepublic = mongoose.model('ImageRepublic', ImageRepublicSchema);
mongoose.set('useFindAndModify', false);

module.exports = ImageRepublic;