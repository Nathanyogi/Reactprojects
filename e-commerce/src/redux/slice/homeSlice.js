import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    offerProducts:null,
    Allproducts:null,
    SearchProduct:'',
    IsLoad:false,
    showCart:[]
}

export const HomeSlice = createSlice({
    name:'HomeSlice',
    initialState,
    reducers:{
        setOfferProducts:(state,action) =>{
            state.offerProducts = action.payload
        },
        setAllproducts:(state,action) =>{
            state.Allproducts = action.payload
        },
        setSearchProduct:(state,action) =>{
            state.SearchProduct = action.payload
        },
        setIsLoad:(state,action) =>{
            state.IsLoad = action.payload
        },
        setshowCart:(state,action) =>{
            state.showCart = action.payload
        }
    }
});

export const getOfferProducts = () => async(dispatch) =>{
    try{
        dispatch(setIsLoad(true))
        let {data} = await axios.get("http://localhost:4000/offerlist")
        dispatch(setOfferProducts(data))
        dispatch(setIsLoad(false))
    }
    catch(error){
        console.log(error)
    }
}

export const getAllProducts = (title) => async(dispatch) =>{
    try{
        let {data} = await axios.get("http://localhost:4000/allproducts")
        let product = data.filter((value) => value.title === title)
        dispatch(setAllproducts(product))
    }
    catch(error){
        console.log(error)
    }
}



export const {setAllproducts,setOfferProducts,setshowCart,setSearchProduct,setIsLoad}  =  HomeSlice.actions;

export default HomeSlice.reducer