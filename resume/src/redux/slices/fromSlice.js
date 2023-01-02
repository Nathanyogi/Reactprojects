import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ResumeData:{
        skills:[],
        interests:[],
        computer_literacy:[],
        education:[],
    },
    Temp:{
        skills:"",
        interests:"",
        computer_literacy:"",
        education:{
            course:'',
            year:'',
            institute:'',
            stream:'',
            percentage:'',
        }
    },
    getUserResume:[]
}

export const FormSlice = createSlice({
    name:"FormSlice",
    initialState,
    reducers:{
        setResumeData:(state,action) =>{
            state.ResumeData = action.payload
        },
        setTemp:(state,action) =>{
            state.Temp = action.payload
        },
        setGetUserResume:(state,action) =>{
            state.getUserResume = action.payload
        },
    }
})

export const {setResumeData,setTemp,setGetUserResume} = FormSlice.actions;

export default FormSlice.reducer