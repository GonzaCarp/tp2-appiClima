const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
    city: {type: String, require: true},
    country: {type: String, require:true},
    temperature: {type: String, require:true},
    condition: {type: String, require:true},
    conditionText: {type: String, require:true},
    icon: {type: String, require:true},
})

module.exports = mongoose.model('Weather', WeatherSchema);