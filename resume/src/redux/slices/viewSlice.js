import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState ={
    viewResume:null,
}

export const ViewSlice = createSlice({
    name:'ViewSlice',
    initialState,
    reducers:{
        setViewResume:(state,action) =>{
            state.viewResume = action.payload
        }
    }
})

export const GetViewSlice = (id,UserName) => async(dispatch) =>{
    let {data} = await axios.get(`http://karka.academy/api/action.php?request=get_react_resume_by_id&&user=${UserName}&&id=${id}`);
    let viewdata = JSON.parse(data.data.data)
    dispatch(setViewResume(viewdata))
}

export const { setViewResume } = ViewSlice.actions;

export default ViewSlice.reducer