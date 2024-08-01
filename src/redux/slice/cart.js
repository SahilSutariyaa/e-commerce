import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addCart: (state, action) => {
            state.cart = [...state.cart, action.payload]

        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter((product) => {
                return product.id !== action.payload;
            });
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }

})

export const { addCart, removeCart,clearCart } = cartSlice.actions

const cartSliceReducer = cartSlice.reducer


export default cartSliceReducer;