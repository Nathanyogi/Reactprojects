import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    LogginData:{
        request:"candidate_login",
        email:'nathanm412200@gmail.',
        password:'12345',
    }
   
}

export const LoginSlice = createSlice({
    name:'LoginSlice',
    initialState,
    reducers:{
        setLoggin:(state,action) => {
            state.LogginData = action.payload
        },
    }
})

export const {setLoggin} = LoginSlice.actions;

export default LoginSlice.reducer