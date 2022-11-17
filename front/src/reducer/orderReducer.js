import { CREATE_ORDER_SUCCESS,
    CREATE_ORDER_REQUEST, CREATE_ORDER_FAIL, CLEAR_ERRORS, ADMIN_ORDERS_REQUEST, ADMIN_ORDERS_SUCCESS,ADMIN_ORDERS_FAIL,ORDER_DETAILS_REQUEST,ORDER_DETAILS_SUCCESS,ORDER_DETAILS_FAIL,UPDATE_ORDER_REQUEST,UPDATE_ORDER_SUCCESS,UPDATE_ORDER_RESET,UPDATE_ORDER_FAIL,DELETE_ORDER_REQUEST,DELETE_ORDER_SUCCESS,DELETE_ORDER_FAIL } from "../constants/orderConstants";
    
    export const ordersReducer = (state = { orders: [] }, action) => {
        switch (action.type) {
            case ADMIN_ORDERS_REQUEST:
                return {
                    loading: true,
                    orders: []
                }
                case ADMIN_ORDERS_SUCCESS:
            return {
                loading:false,
                orders:action.payload
            }

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
    export const newOrderReducer = (state = {}, action)=>{
        switch (action.type){
    
            case CREATE_ORDER_REQUEST:
                return{
                    ...state,
                    loading: true
                }
            case CREATE_ORDER_SUCCESS:
                return{
                    loading:false,
                    success: action.payload.success,
                    order: action.payload
                }
            case CREATE_ORDER_FAIL:
                return{
                    loading: false,
                    error: action.payload
                }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null
                }
    
            default:
                return state;
        }
    }
    export const orderReducer= (state = {}, action)=>{
        switch(action.type){
            case DELETE_ORDER_REQUEST:
            case UPDATE_ORDER_REQUEST:
                return{
                    ...state, 
                    loading:true
                }
            case DELETE_ORDER_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    isDeleted: action.payload
                }
    
            case UPDATE_ORDER_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    isUpdated: action.payload
                }
                
            case DELETE_ORDER_FAIL:
            case UPDATE_ORDER_FAIL:
                return{
                    ...state,
                    error: action.payload
                }
                
            case UPDATE_ORDER_RESET:
                return{
                    ...state,
                    isUpdated: false
                }
            case CLEAR_ERRORS:
                return {
                    error:null
                }
            default:
                return state
        }
    }