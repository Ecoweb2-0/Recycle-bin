<<<<<<< HEAD
import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO } from '../constants/cartConstants'
=======
import { ADD_TO_CART, REMOVE_ITEM_CART } from '../constants/cartConstants'
>>>>>>> fc3bfc1eb8577ee6b78bc0e492051900a383a44a

export const cartReducer = (state = { cartItems: []}, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            const item = action.payload;

            const isItemExist = state.cartItems.find(i => i.product === item.product)

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.product !== action.payload)
            }
<<<<<<< HEAD
        case SAVE_SHIPPING_INFO:
            return{
                ...state,
                shippingInfo: action.payload
            }
=======
>>>>>>> fc3bfc1eb8577ee6b78bc0e492051900a383a44a

        default:
            return state
    }
}