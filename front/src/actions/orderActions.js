import axios from 'axios';

import { 
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants';

// Acciones para obtener el listado completo de ordenes, habilitado para aplicar filtros
export const getOrders = () => async(dispatch)=>{
    try {
        dispatch({type: ALL_ORDERS_REQUEST})

        const {data} = await axios.get('api/admin/orders')

        dispatch({
            type:ALL_ORDERS_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type:ALL_ORDERS_FAIL,
            payload: error.response.data.message
        })
    }
}
// Acciones para obtener el detalle de la orden
export const getOrderDetails = (id) => async (dispath) => {
    try{
        dispath({type: ORDER_DETAILS_REQUEST});
        // Cargar la info de las ordenes en la variable data
        const {data} = await axios.get(`/api/order/${id}`);
        dispath({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        });
    }   catch(error){
        dispath({
            type:ORDER_DETAILS_FAIL,
            payload: error.response.data.message
        });
    }
}

// Limpiar los errores
export const clearErrors = () => async(dispath) => {
    dispath({
        type: CLEAR_ERRORS
    });
}

// Agregar Items a Carrito formando Orden
export const agregarItem =() => async(dispath)=>{
    
}