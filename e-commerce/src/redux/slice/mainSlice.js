import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


 
const initialState = {
    LoggedDetail:{
        IsLogged:false,
        UserName:null,
        UserId:null,
    },
    LoginLocation:null,
    LoginDetail:{
        name:'Nathan',
        password:'Nathan@04',
    },
    Cart:[],
}

export const MainRouteSlice = createSlice({
    name:"MainRouteSlice",
    initialState,
    reducers:{
        setIsLoggedDetail:(state,action) =>{
            state.LoggedDetail = action.payload
        },
        setLoginLocation:(state,action) =>{
            state.LoginLocation = action.payload
        },
        setLoginDetail:(state,action) =>{
            state.LoginDetail = action.payload
        },
        setToCart:(state,action) =>{
          state.Cart = action.payload  
        }
    }

})


export const loggedStatus = (LoginDetail) => async(dispatch) =>{
    try{
        let {data} = await axios.post('http://localhost:4000/login',JSON.stringify(LoginDetail))
        if(data.status === "success"){
            const user= data.data.name;
            const cart = JSON.parse(data.data.cart)
            localStorage.setItem('flipcartLogin',JSON.stringify({IsLogged:true,UserName:user,UserId:data.data.id}))
            dispatch(setIsLoggedDetail({IsLogged:true,UserName:user,UserId:data.data.id}))
            dispatch(setToCart(cart))
        }
        else{
            alert('username and password not match')
        }
    }
    catch(error){
        console.log(error)
    }
}

export const AddToCart = (item) => async() =>{
    try{
        let {data} = await axios.post('http://localhost:4000/updateCart',JSON.stringify(item))
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

export const getFromCart = (UserId) => async(dispatch) =>{
    try{
        let {data} = await axios.post('http://localhost:4000/readFromCart',JSON.stringify({id:UserId}))
        console.log(JSON.parse(data))
        dispatch(setToCart(JSON.parse(data)))
    }
    catch(error){
        console.log(error);
    }
}




export const {setIsLoggedDetail,setLoginLocation,setLoginDetail,setToCart} = MainRouteSlice.actions

export default MainRouteSlice.reducer