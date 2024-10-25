import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import CategorySlice from "./Slices/CategorySlice";
import SearchSlice from "./Slices/SearchSlice";
import ThemeSlice from "./Slices/ThemeSlice";


 const Store = configureStore({
    reducer:{
        cart:CartSlice,
        cat:CategorySlice,
        search:SearchSlice,
        theme:ThemeSlice,
    }
});

export default Store;