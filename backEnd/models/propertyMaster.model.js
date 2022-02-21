const mongoose = require('mongoose')

var propertyMasterSchema = new mongoose.Schema
({
    title: {type: String, lowercase: true},
    businessType: {type: String, lowercase: true},
    propertyType: {type: String, lowercase: true},
    city: {type: String, lowercase: true},
    zone: {type: String, lowercase: true},
    address: {type: String, lowercase: true},
    description: {type: String, lowercase: true},
    price: {type: Number},
    propertyImages: {type: String},
    rooms: {type: Number},
    bathrooms: {type: Number},
    area: {type: Number},
    adviser: {type: String, tittle: true},
    status: {type: Boolean, default: true},
    created_at: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Propertys_Master', propertyMasterSchema)