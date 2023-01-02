import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    registerDetails:{
        name : "",
        email : "",
        password :"",
        aadhar : "",
        phone:"",
        cart:[],
    },
    registerStatus:false
}

export const RegisterSlice = createSlice({
    name:"RegisterSlice",
    initialState,
    reducers:{
        setRegisterDetails:(state,action) =>{
            state.registerDetails = action.payload
        },
        setRegisterStatus:(state,action) =>{
            state.registerStatus = action.payload
        }
    }
})

export const registerFunc = (registerDetails) =>async(dispatch) =>{
    try{
        let {data}  = await axios.post('http://localhost:4000/register',JSON.stringify(registerDetails))
        if(data === 'success'){
            alert("Registration Completed");
            dispatch(setRegisterStatus(true))
        }
        else{
            alert('Registration Failed')
        }
    }
    catch(error){
        console.log(error)
    }
    
}

export const {setRegisterDetails,setRegisterStatus} = RegisterSlice.actions

export default RegisterSlice.reducer