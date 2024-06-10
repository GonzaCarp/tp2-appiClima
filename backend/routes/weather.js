const express = require('express')
const Weather = require('../models/weather')
const router = express.Router()

router.post('/', async (req, res) => {
    const {city, country, temperature, condition, conditionText, icon} = req.body;
    try {
        const newWeather = new Weather({
            city,
            country,
            temperature,
            condition,
            conditionText,
            icon
        })
        await newWeather.save()
        res.status(201).json(newWeather)
    } catch (error) {
        res.status(500).json({mensaje: 'Error al guardar los datos meteorológicos'})
    }
})

router.get('/', async (req,res) => {
    try {
        const weatherData = await Weather.find()
        res.json(weatherData)
    } catch (error) {
        res.status (500).json({mensaje: 'Error al obtener datos meteorológicos'})
    }
})

module.exports = router;