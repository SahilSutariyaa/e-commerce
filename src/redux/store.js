import { configureStore } from "@reduxjs/toolkit";
import wishListSlicesReducer from "./slice/addWishList";
import cartSliceReducer from "./slice/cart";


const store = configureStore({
    reducer: {
        wishList: wishListSlicesReducer,
        cart: cartSliceReducer
    }

})

export default store;