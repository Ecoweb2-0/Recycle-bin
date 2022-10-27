const express=require("express");
const app = express();

app.use(express.json());

//importar la ruta
const productos= require("./routes/products")
const ventas= require("./routes/sales")



//ruta para el navegador
app.use('/api',productos)
app.use('/api',ventas)


module.exports=app