import cartActionTypes  from "./type-cart";

const INITIAL_STATE = {
    hidden:true,
    cartItems:[],
}

const cartReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return{
                ...state,
                hidden:!state.hidden
            }
        
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:[...state.cartItems , action.payload]
            }
        default: 
        return state;
}
}

export default cartReducer;