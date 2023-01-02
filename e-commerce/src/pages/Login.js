import React, { useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { setLoginDetail,loggedStatus} from '../redux/slice/mainSlice';
import { setRegisterStatus } from '../redux/slice/registerSlice';


export default function Login(){

    const{LoginLocation,LoginDetail,LoggedDetail} = useSelector((state) => state.MainRouteSlice);
    const{registerStatus} = useSelector((state) => state.RegisterSlice)

    const dispatch = useDispatch()

    const Navigate = useNavigate()

    useEffect(() =>{
        if(LoggedDetail.IsLogged){
            if(LoginLocation !== "\login"){
                Navigate(LoginLocation)
            }
            else{
                Navigate("\home")
            }
        }
    },[LoggedDetail.IsLogged])

    useEffect(() =>{
        if(registerStatus){
            dispatch(setRegisterStatus(false))
        }
        
    },[registerStatus]);

    return(
        <>
        <div className='container w-50 h-100 py-5'>
            <div className='bg-primary d-flex justify-content-center text-white py-5 rounded w-75 m-auto'>
                <div className='text-center w-75'>
                    <h3 className='fw-bold mb-2 text-uppercase'>Login</h3>
                    <p className='text-white-50 mb-5'>Please enter your email and password!</p>
                    <div className='w-100'>
                        <input className='form-control mb-4' placeholder='Email' value={LoginDetail.name} onChange={(e) => dispatch(setLoginDetail({...LoginDetail,name:e.target.value}))}></input>
                        <input className='form-control mb-4' placeholder='password' value={LoginDetail.password} type='password'  onChange={(e) => dispatch(setLoginDetail({...LoginDetail,password:e.target.value}))}></input>
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5 mb-4" type="button" onClick={() =>dispatch(loggedStatus(LoginDetail))}>Login</button>
                    <div>
                        <p className="mb-0">Don't have an account? <Link to="/register" className="text-white-50 fw-bold">Sign Up</Link></p>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}