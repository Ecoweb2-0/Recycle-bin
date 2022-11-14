const express=require("express")
const router=express.Router();

const getInventario = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");

router.route('/inventarios').get(getInventario)

module.exports=router;