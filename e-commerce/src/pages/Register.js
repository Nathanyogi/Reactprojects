import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setRegisterDetails , registerFunc} from "../redux/slice/registerSlice";
import { useSelector , useDispatch } from "react-redux";
import '../App.css';

export default function Register(){

    const {registerStatus,registerDetails} = useSelector((state) => state.RegisterSlice)
    const  Navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() =>{
        if(registerStatus){
            Navigate('/login')
        }
    },[registerStatus])


    return(
        <>
        <div className="container mt-5 w-50">
            <div className="bg-primary text-white rounded py-3 w-75 m-auto p-4">
                <h3 className="text-center mt-3">REGISTER FROM</h3>
                <input className="form-control mt-3" placeholder="Name" onChange={(e) =>dispatch(setRegisterDetails({...registerDetails,name:e.target.value}))}/>
                <input className="form-control mt-3" placeholder="Email" onChange={(e) => dispatch(setRegisterDetails({...registerDetails,email:e.target.value}))}/>
                <input className="form-control mt-3" placeholder="Password" type='password' onChange={(e) => dispatch(setRegisterDetails({...registerDetails,password:e.target.value}))}/>
                <div className="d-flex mt-3 ">
                    <input className="form-control me-2" placeholder="Aadhar" onChange={(e) => dispatch(setRegisterDetails({...registerDetails,aadhar:e.target.value}))}/>
                    <input className="form-control" placeholder="Phone" onChange={(e) => dispatch(setRegisterDetails({...registerDetails,phone:e.target.value}))}/>
                </div>
                <div className="text-center my-3">
                    <button className="btn btn-outline-light px-4" type="button" onClick={() => dispatch(registerFunc(registerDetails))}>Register</button>
                </div>
                
            </div>
        </div>
       
        </>
    )
}