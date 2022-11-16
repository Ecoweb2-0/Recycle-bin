const express=require("express")
const router=express.Router();

const {allOrders, 
    newOrder, 
    getOneOrder, 
    myOrders,
    updateOrder, 
    deleteOrder, 
    } = require("../controllers/orderController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");



//Rutas admin
router.route('/orden/:id').get(isAuthenticatedUser, authorizeRoles("admin"), getOneOrder); //Ruta para consultar por id
router.route('/orden/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder);//Creacion de la ruta de actualizacion
router.route('/orden/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder); //Creacion de la ruta de eliminacion por id
router.route('/orden/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newOrder); //establecemos la ruta
router.route('/admin/ordenes').get(isAuthenticatedUser, authorizeRoles("admin"), allOrders); //establecemos la ruta

//Ruta usuario
router.route('/miOrden/id').get(isAuthenticatedUser, myOrders); //consultar usuario su orden


module.exports=router;