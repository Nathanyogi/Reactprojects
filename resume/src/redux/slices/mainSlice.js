import { createSlice } from "@reduxjs/toolkit";

if(!localStorage.getItem('Logindetail')){
    localStorage.setItem('Logindetail',JSON.stringify({status:false,user:""}))
}

const LoggedDetail = JSON.parse(localStorage.getItem('Logindetail'))

const initialState ={
    IsLogged:LoggedDetail.status,
    UserName:LoggedDetail.user,
}

export const MainSlice = createSlice({
    name:'MainSlice',
    initialState,
    reducers:{
        setIsLogged:(state,action) =>{
            state.IsLogged = action.payload
        },
        setUserName:(state,action) =>{
            state.UserName = action.payload
        }
    }
});

export const{setIsLogged,setUserName} = MainSlice.actions;

export default MainSlice.reducer;