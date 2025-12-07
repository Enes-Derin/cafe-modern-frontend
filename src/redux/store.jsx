import { configureStore } from "@reduxjs/toolkit";;

import galleryReducer from "../redux/slice/gallerySlice";
import menuItemReducer from "../redux/slice/menuItemSlice";
import categoryReducer from "../redux/slice/categorySlice";

export const store = configureStore({
    reducer: {
        gallery: galleryReducer,
        menuItem: menuItemReducer,
        category: categoryReducer,
    },
});

export default store;