import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import LoginSlice from "./slices/loginSlice";
import FormSlice from "./slices/fromSlice";
import ViewSlice from "./slices/viewSlice";

export const store =  configureStore({
    reducer:{
        mainSlice,
        LoginSlice,
        FormSlice,
        ViewSlice,
    }
})