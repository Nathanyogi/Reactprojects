import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setshowCart } from "../redux/slice/homeSlice";

export default function Buynow(){
    const Navigate = useNavigate();
    const dispatch = useDispatch()

    let makeEmptyCart = () =>{
        localStorage.setItem("cart",JSON.stringify([]));
        dispatch(setshowCart([]));
        alert("Your order is placed");
        Navigate('/')
    }
    return(
        <>
        <div className="container my-3 ">
            <div className="w-75 m-auto p-2 border border-1 bg-white shadow">
                <h2 className="text-center bg-primary p-3">Delivery Address</h2>
                <div className="d-flex">
                    <input className="form-control p-3 me-2 text-center border-dark" placeholder="Name"/>
                    <input className="form-control p-3 mx-2 text-center border-dark" placeholder="state"/>
                    <input className="form-control p-3 text-center border-dark" placeholder="District"/>
                </div>
                <div className="w-25 m-auto my-3">
                    <input className="form-control mx-2 p-3  text-center border-dark" placeholder="Pincode"/>
                </div>
                <div className="w-100 d-flex justify-content-between">
                    <textarea className="text-center" rows={5} cols={50} placeholder="Home Address"/>
                    <textarea className="text-center" cols={50} placeholder="Office Adderss"/>
                </div>
                <div className="w-75 m-auto my-2">
                    <h2 className="text-center">Payment Detail</h2>
                    <div className="w-25 m-auto my-3">
                        <input type='radio' name="payment"/><label className="mx-2 fs-5">Cash on delivery</label><br/>
                        <input type='radio' name="payment"/><label  className="mx-2 fs-5">Online Payment</label>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={makeEmptyCart}>BuyNow</button>
                </div>  
            </div>
        </div>
        </>
    )
}