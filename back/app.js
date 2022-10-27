const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")

app.use(express.json());

//importar la ruta
const productos= require("./routes/products")
const ventas= require("./routes/sales")
const usuarios=require("./routes/auth")



//ruta para el navegador
app.use('/api',productos)
app.use('/api',ventas)
app.use('/api',usuarios)

//Manejo de errores
app.use(errorMiddleware)


module.exports=app