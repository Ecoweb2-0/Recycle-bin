import axios from "axios"

import { 
    CREATE_ORDER_REQUEST, 
    CREATE_ORDER_SUCCESS, 
    CREATE_ORDER_FAIL, 
    ADMIN_ORDERS_REQUEST,
    ADMIN_ORDERS_SUCCESS,
    ADMIN_ORDERS_FAIL,
    CLEAR_ERRORS,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL


} from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch)=>{
    try{
        dispatch({type: CREATE_ORDER_REQUEST})

        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }

        const {data} = await axios.post("/api/order/new", order, config)

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}
//ADMIN GET ORDERS
export const allOrders = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_ORDERS_REQUEST })

        const { data } = await axios.get('/api/admin/ordenes')

        dispatch({
            type: ADMIN_ORDERS_SUCCESS,
            payload: data.orders
        })
    } catch (error) {
        dispatch({
            type: ADMIN_ORDERS_FAIL,
            payload: error.response.data.message
        })
    }
}
//VER DETALLE DE LA ORDER
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/orden/${id}`)

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data.order
        })
    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//Eliminar una orden (admin)
export const deleteOrder = (id) => async(dispatch)=>{
    try{
        dispatch ({type: DELETE_ORDER_REQUEST})
        const {data} = await axios.delete(`/api/orden/${id}`)

        dispatch({
            type: DELETE_ORDER_SUCCESS,
            payload: data.success
        })
    } catch(error){
        dispatch({
            type: DELETE_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}


//update Product (admin)
export const updateOrder = (id, orderData) => async (dispatch) =>{
    try{
        dispatch ({type: UPDATE_ORDER_REQUEST})

        const config={
            headers: {
                "Content-Type": "application/json"
            }
        }
        const {data} = await axios.put(`/api/orden/${id}`, orderData, config)

        dispatch({
            type: UPDATE_ORDER_SUCCESS,
            payload: data.success
        })
        
    } catch(error){
        dispatch({
            type: UPDATE_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}


//Clear Errors
export const clearErrors = ()=> async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}