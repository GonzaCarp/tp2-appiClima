const express = require ('express')
const cors = require ('cors')
const connectDB = require ('./config/db')
const weatherRoutes = require ('./routes/weather')

const app = express()

//conexion a Mongo
connectDB();

//Middleware
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`)
});

