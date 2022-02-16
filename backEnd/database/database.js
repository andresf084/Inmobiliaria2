const mongoose = require('mongoose'),
config = require('../configuration/config')

mongoose.connect(config.Urldb)
    .then(db => console.log("Connect to DB"))
    .catch(err => console.log(err))

module.exports = mongoose