const mongoose = require('mongoose');
const Schema= mongoose.Schema;


const restauranteSchema = new Schema({
    nomePerfilRestaurante :String,
    endereco :String,
    horarioFuncionamento:String,
    temFraldario :String,
    temBrinquedao:String,

});

module.exports = mongoose.model('Restaurante', restauranteSchema);