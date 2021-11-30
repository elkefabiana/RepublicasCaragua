const path = require('path');
//Pacote de envio de emails NodeMailer
const nodemailer = require('nodemailer');
//Importa as configurações de autenticação do NodeMailer
const {host, port, user, pass} = require('../config/mail.json');

//Importa o pacote de HandleBars para utilizaçao do html no envio do email
const hbs = require('nodemailer-express-handlebars');

//Configura o sistema de envio do Nodemailer de acordo 
const transport = nodemailer.createTransport({
    host,
    port,
    auth: {user, pass}
  });


  transport.use('compile', hbs({
    viewEngine: {
        defaultLayout: undefined,
        partialsDir: path.resolve('./src/app/resources/mail/'),
      },
      viewPath: path.resolve('./src/app/resources/mail/'),
      extName: '.html'
}));
  module.exports = transport;