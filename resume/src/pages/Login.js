import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axois from 'axios';
import { useSelector ,useDispatch } from 'react-redux';
import { setIsLogged , setUserName } from '../redux/slices/mainSlice';
import { setLoggin } from '../redux/slices/loginSlice';


export default function Login(){

    const Navigate = useNavigate()

    const {LogginData} = useSelector((state) => state.LoginSlice);
    const {IsLogged} = useSelector((state) => state.mainSlice);
    const dispatch = useDispatch()

    useEffect(()=>{
        if(IsLogged){
            Navigate('/home')
        }
    },[IsLogged])


    let loggedStatus = async() =>{
        let {data} = await axois.post('https://karka.academy/api/action.php',JSON.stringify(LogginData))
        if(data.status === 'success'){
            const userName = data.data.name;
            localStorage.setItem('Logindetail',JSON.stringify({status:true,user:userName}));
            const LoggedDetail = JSON.parse(localStorage.getItem('Logindetail'))
            dispatch(setIsLogged(LoggedDetail.status));
            dispatch(setUserName(LoggedDetail.user));
        }
        else{
            alert('username and password not match')
            dispatch(setIsLogged(false))
        }

    }

    return(
        <>
        <div className='container w-50 h-100 py-5'>
            <div className='bg-dark d-flex justify-content-center text-white py-5 rounded w-75 m-auto'>
                <div className='text-center w-75'>
                    <h3 className='fw-bold mb-2 text-uppercase'>Login</h3>
                    <p className='text-white-50 mb-5'>Please enter your email and password!</p>
                    <div className='w-100'>
                        <input className='form-control mb-4' placeholder='Email' value={LogginData.email} onChange={(e) => dispatch(setLoggin({...LogginData,email:e.target.value}))}/>
                        <input className='form-control mb-4' placeholder='password' value={LogginData.password} type='password'  onChange={(e) => dispatch(setLoggin({...LogginData,password:e.target.value}))} />
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5 mb-4" type="button" onClick={loggedStatus}>Login</button>
                    <div>
                        <p className="mb-0">Don't have an account? <Link to="/register" className="text-white-50 fw-bold">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}