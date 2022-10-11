const express=require("express");
const app = express();

app.use(express.json());

//importar la ruta
const productos= require("./routes/products")

//ruta para el navegador
app.use('/api',productos)

module.exports=app