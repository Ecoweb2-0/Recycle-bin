const express= require("express")
const ruta=express.Router();

const {getSales, newSale, getSaleById, updateSale, deleteSale} =require("../controllers/ventasController")

ruta.route('/Ventas').get(getSales) // ruta para ver Ventas
ruta.route('/Venta/nueva').post(newSale); // establecemos la ruta de nuevo Venta
ruta.route('/Venta/:id').get(getSaleById);
ruta.route('/Venta/:id').put(updateSale); //Ruta para actualizar
ruta.route('/Venta/:id').delete(deleteSale); // Ruta para eliminar

module.exports=ruta;