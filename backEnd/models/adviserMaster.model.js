const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

var adviserMasterSchema = new mongoose.Schema
({
    name: {type: String, titlecase: true},
    id_type: {type: String, lowercase: true},
    identification: {type: String, required: true, unique: true},
    email: {type: String, lowercase: true, required: true, unique: true},
    phone1: {type: Number},
    phone2: {type: Number},
    workCity: {type: String, tittle: true},
    workZone: {type: String, tittle: true},
    user: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    status: {type: Boolean, default: true},
    created_at: {type: Date, default: Date.now()}
})

adviserMasterSchema.methods.generarJWT = () => {
    return jwt.sign({ _id: this._id, name: this.name, user: this.user },"node-house")
}

module.exports = mongoose.model ('Advisers_Master', adviserMasterSchema)