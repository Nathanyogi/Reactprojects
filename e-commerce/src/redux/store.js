import { configureStore } from "@reduxjs/toolkit";
import MainRouteSlice from "./slice/mainSlice";
import HomeSlice from "./slice/homeSlice";
import RegisterSlice from "./slice/registerSlice";


export const store = configureStore({
    reducer:{
        MainRouteSlice,
        HomeSlice,
        RegisterSlice,
    }
})