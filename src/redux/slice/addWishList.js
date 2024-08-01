import { createSlice } from "@reduxjs/toolkit";


const wishListSlices = createSlice({
    name: "wishList",
    initialState: {
        wishList: []
    },
    reducers: {
        addWishList: (state, action) => {
            state.wishList = [...state.wishList, action.payload]
        },

        removeWishList: (state, action) => {
            state.wishList = state.wishList.filter((product) => {
                return product.id !== action.payload;
            });
        },

    }
})

export const { addWishList, removeWishList } = wishListSlices.actions;
const wishListSlicesReducer = wishListSlices.reducer
export default wishListSlicesReducer;