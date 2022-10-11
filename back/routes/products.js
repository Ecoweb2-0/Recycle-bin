const express= require("express")
const router=express.Router();

const {getProducts} =require("../controllers/productsController")

router.route( '/productos').get(getProducts) // ruta para ver productos

module.exports=router;