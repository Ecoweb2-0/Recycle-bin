const express= require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} =require("../controllers/productsController")

router.route( '/productos').get(getProducts) // ruta para ver productos
router.route('/producto/nuevo').post(newProduct); // establecemos la ruta de nuevo producto
router.route('/producto/:id').get(getProductById);
router.route('/producto/:id').put(updateProduct); //Ruta para actualizar
router.route('/producto/:id').delete(deleteProduct); // Ruta para eliminar


module.exports=router;