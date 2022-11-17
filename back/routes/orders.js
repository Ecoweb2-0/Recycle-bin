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


router.route("/order/new").post(isAuthenticatedUser, newOrder)
router.route("/order/:id").get(isAuthenticatedUser, getOneOrder)
router.route("/orders/me").get(isAuthenticatedUser, myOrders)

//rutas de admin
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), allOrders)
router.route("admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
router.route("admin/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)

module.exports=router;