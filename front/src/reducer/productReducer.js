import { STATES } from "mongoose";
import { ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_SUCCESS,

    CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST} from "../constants/productConstants";

export const productsReducer = (state ={ products: []}, action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true,
                productos:[]
            }

        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,
                productos: action.payload.productos,
                cantidad: action.payload.cantidad
            }

        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
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
// REDUCE PARA DETALLES DEL PRODUCTO
export const productsDetailsReducer = (state ={ product: {}}, action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                ...state,
                loading:true,
                
            }

        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product: action.payload.product,
                
            }

        case PRODUCT_DETAILS_FAIL:
            return{
                ...state,
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