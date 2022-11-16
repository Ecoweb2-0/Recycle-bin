import axios from 'axios';

import {
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS,
    ADMIN_ORDERS_REQUEST,
    ADMIN_ORDERS_SUCCESS,
    ADMIN_ORDERS_FAIL,
    NEW_ORDER_REQUEST,
    NEW_ORDER_SUCCESS,
    NEW_ORDER_FAIL,
    LOAD_ORDER_REQUEST,
    LOAD_ORDER_SUCCESS,
    LOAD_ORDER_FAIL
} from '../constants/orderConstants';

//ADMIN - get orders
export const AllOrders = () => async (dispatch) => {
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

//NUEVA ORDEN -ADMIN
export const newOrder = ( orderData ) => async (dispatch)=>{
    try {
        dispatch({type: NEW_ORDER_REQUEST})

        const config ={ 
            header: { 
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post('/api/orden/nuevo', orderData, config)

        dispatch({
            type: NEW_ORDER_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: NEW_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}

//VER DETALLE DE LA ORDEN
export const getOneOrder = (id) => async (dispatch) => {
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

//USUARIO VER DETALLE DE LA ORDEN
export const myOrders = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_ORDER_REQUEST })

        const { data } = await axios.get(`/api/miOrden/${id}`)

        dispatch({
            type: LOAD_ORDER_SUCCESS,
            payload: data.order
        })
    } catch (error) {
        dispatch({
            type: LOAD_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}