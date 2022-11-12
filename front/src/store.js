import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer } from './reducer/productReducer';
import { authReducer } from './reducer/userReducer';
import {ordersReducer, orderDetailsReducer} from './reducer/orderReducer';

const reducer= combineReducers ({
    products:productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    orders: ordersReducer,
    orderDetails: orderDetailsReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;