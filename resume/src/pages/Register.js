import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function Register(){
    const  Navigate = useNavigate()

    const [registerDetails,setRegisterDetails] = useState({
        request :"create_candidate",
        name : "",
        email : "",
        password :"",
        aadhar : "",
        address : "",
        phone:"",
        city:"",
        area:"",
        pin:"",
        })

        let registerFunc = async() =>{
            let {data}  = await axios.post('http://karka.academy/api/action.php',JSON.stringify(registerDetails))
            if(data.status == 'success'){
                alert("Registration Completed")
                Navigate('/')
            }
            else{
                alert('Registration Failed')
            }
        }

        // let getMembers =async() =>{
        //     let {data}  = await axios.get('http://karka.academy/api/action.php?request=getAllMembers')
        // }

        
    return(
        <>
        <div className="d-flex justify-content-center mt-5">
            <div className="register-page container bg-dark text-white rounded py-3 w-50">
                <h3 className="text-center ">REGISTER FROM</h3>
                <input className="form-control" placeholder="Name" onChange={(e) => setRegisterDetails({...registerDetails,name:e.target.value})}/>
                <input className="form-control mt-2" placeholder="Email" onChange={(e) => setRegisterDetails({...registerDetails,email:e.target.value})}/>
                <input className="form-control mt-2" placeholder="Password" type='password' onChange={(e) => setRegisterDetails({...registerDetails,password:e.target.value})}/>
                <div className="d-flex mt-2 ">
                    <input className="form-control me-2" placeholder="Aadhar" onChange={(e) => setRegisterDetails({...registerDetails,aadhar:e.target.value})}/>
                    <input className="form-control" placeholder="Phone" onChange={(e) => setRegisterDetails({...registerDetails,phone:e.target.value})}/>
                </div>
                <textarea className="w-100 mt-2" placeholder="Address" onChange={(e) => setRegisterDetails({...registerDetails,address:e.target.value})}/>
                <div className="d-flex">
                    <input className="form-control me-2" placeholder="city" onChange={(e) => setRegisterDetails({...registerDetails,city:e.target.value})}/>
                    <input className="form-control" placeholder="District" onChange={(e) => setRegisterDetails({...registerDetails,area:e.target.value})} />
                </div>
                <div className="w-50 mt-2 m-auto d-flex justify-content-center ">
                    <input className="form-control" placeholder="pincode" onChange={(e) => setRegisterDetails({...registerDetails,pin:e.target.value})}/>
                </div>
                <div className="text-center mt-3">
                <button className="btn btn-primary" type="button" onClick={registerFunc}>Register</button>
                </div>
                
            </div>
        </div>
       
        </>
    )
}