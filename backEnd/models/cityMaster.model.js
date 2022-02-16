const mongoose = require('mongoose')

var cityMasterSchema = new mongoose.Schema
({
    region: {type: String, tittle: true},
    c_digo_dane_del_departamento: {type: String},
    departamento: {type: String, tittle: true},
    c_digo_dane_del_municipio: {type: String, tittle: true},
    municipio: {type: String, tittle: true},
    status: {type: Boolean, default: true},
    created_at: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Citys_Master', cityMasterSchema)