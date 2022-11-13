import { 
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants';

export const ordersReducer = ( state = { orders : [] }, action) => {
    switch(action.type) {
        
        case ALL_ORDERS_REQUEST:
            return{
                loading: true,
                orders:[]
            }
        
        case ALL_ORDERS_SUCCESS:
            return{
                loading: false,
                orders: action.payload.orders,
                ordersCount: action.payload.ordersCount,
                resPerPage: action.payload.resPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            }
        
        case ALL_ORDERS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
             }
        
        default:
            return state;
    }
}

export const orderDetailsReducer = ( state = { order: {}}, action) => {
    switch(action.type) {
        
        case ORDER_DETAILS_REQUEST:
            return{
                ...state,
                loading: true
            }
        
        case ORDER_DETAILS_SUCCESS:
            return{
                loading: false,
                order: action.payload.order
            }
        
        case ORDER_DETAILS_FAIL:
            return{
                ...state,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
             }
        
        default:
            return state;
    }
}