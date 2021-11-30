const mongoose = require('../../database');
const bcrypt = require('bcrypt');

//type = tipo do campo, required = campo obrigatorio, unique = valor unico, lowercase = converter em caixa baixa, select = escolhe se será possível consultar este campo no select ou nao
const UserSchema = new mongoose.Schema({
name:{
   type: String, 
   required: true
},
email:{
    type: String, 
    unique: true,
    required: true,
    lowercase: true

},
password:{
    type: String,
    required: true,
    select: false
},
passwordResetToken:{
 type: String,
 select: false
},
passwordResetExpiresToken:{
 type: Date,
 select: false
},

createdAt:{
  type: Date,
  default: Date.now
},

UpdatedAt:{
  type: Date,
  default: Date.now
},
});


UserSchema.pre('save', async function(next){
   const hash = await bcrypt.hash(this.password, 10);
   this.password = hash;

   next();
}); 

const User = mongoose.model('User', UserSchema);
mongoose.set('useFindAndModify', false);

module.exports = User;