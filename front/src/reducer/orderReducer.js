import {
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
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
    NEW_ORDER_RESET
} from "../constants/orderConstants";

//Ver ordenes
export const ordersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ALL_ORDERS_REQUEST:
        case ADMIN_ORDERS_REQUEST:
            return {
                loading: true,
                orders: []
            }

        case ALL_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload.orders,
                ordersCount: action.payload.ordersCount,
                resPerPage: action.payload.resPerPage,
                filteredOrdersCount: action.payload.filteredOrdersCount
            }
        
        case ADMIN_ORDERS_SUCCESS:
            return {
                loading:false,
                orders:action.payload
            }

        case ALL_ORDERS_FAIL:
        case ADMIN_ORDERS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

//REDUCER PARA TENER TODOS LOS DETALLES
export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {

        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case ORDER_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const newOrderReducer = (state={ order:{} }, action )=>{
    switch(action.type){

        case NEW_ORDER_REQUEST:
            return{
                ...state,
                loading: true
            }

        case NEW_ORDER_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                order: action.payload.order
            }

        case NEW_ORDER_FAIL:
            return{
                ...state,
                error:action.payload
            }
            
        case NEW_ORDER_RESET:
            return{
                ...state,
                success:false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }

        default:
            return state
    }
}