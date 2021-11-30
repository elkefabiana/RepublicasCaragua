const fs = require('fs');
const path = require('path');


module.exports = app =>{
    //Procura todos os arquivos na pasta atual
  fs.readdirSync(__dirname)
  //Escolhe todos arquivos que não iniciam com '.' e não seja o index.js que é este arquivo
  .filter(file => ((file.indexOf('.')) !== 0 && (file!== 'index.js')))
  //Percorre todos os arquivos encontrados e importa eles passando como parametro o APP para os controllers funcionarem
  .forEach(file => require(path.resolve(__dirname, file))(app))
}