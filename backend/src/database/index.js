const mongoose = require('mongoose');
const urlCluster = 'mongodb+srv://uploadArquivos:upload123@cluster0-lc68s.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.set('useCreateIndex', true)
mongoose.connect(urlCluster, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = global.Promise;



module.exports = mongoose;