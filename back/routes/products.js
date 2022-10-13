const express= require("express")
const router=express.Router();

const {getProducts, newProduct} =require("../controllers/productsController")

router.route( '/productos').get(getProducts) // ruta para ver productos
router.route('/producto/nuevo').post(newProduct); // establecemos la ruta de nuevo producto

module.exports=router;