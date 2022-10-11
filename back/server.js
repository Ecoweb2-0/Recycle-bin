const app=require("./app")// Arrancar el servidor

//Setear el archivo de confirguracion 
const dotenv= require("dotenv");
const { connect } = require("mongoose");
dotenv.config({path: 'back/config/config.env'})

connectDatabase();