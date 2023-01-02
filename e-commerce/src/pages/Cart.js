import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { setLoginLocation, setToCart } from "../redux/slice/mainSlice";
import { useLocation, useNavigate } from "react-router-dom";
import '../App.css';
import { setshowCart } from "../redux/slice/homeSlice";


export default function Cart(){
    const {LoggedDetail,Cart} = useSelector((state) => state.MainRouteSlice)
    const {showCart} = useSelector((state) => state.HomeSlice)

    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(()=>{
        dispatch(setshowCart([...Cart]))
    },[Cart])

    let RemoveItem = (index) =>{
        let cartState = [...Cart]
        cartState.splice(index,1);
        dispatch(setToCart(cartState))
    }

    let BuyNow = () =>{
        LoggedDetail.IsLogged ? Navigate('/buynow'): Navigate('/login');dispatch(setLoginLocation(location.pathname));
    }

    let Increase = (detail) =>{
        let dummyCart = [...Cart]
        let updatedCart = dummyCart.map((item) => {
            if(item.product == detail.product){
                item = {...item,qty:item.qty + 1}
            }
            return item
        });
        dispatch(setToCart(updatedCart))
    }

    let Decrease = (detail) =>{
        let dummyCart = [...Cart]
        let updatedCart = dummyCart.map((item) => {
            if(item.product == detail.product){
                if(item.qty > 1){
                    item = {...item,qty:item.qty - 1}
                }
                else{
                    alert('Mininum Quantity is 1')
                }
            }
            return item
        });
        dispatch(setToCart(updatedCart))
    }

    console.log(showCart)
    return(
        <>
        {showCart.length > 0 ? (
            <div className="row container mt-3 cart-div m-0 mx-auto">
                <div className="col-8">
                    <div>
                        {showCart.map((detail,index) => (
                            <div className='row bg-white align-items-center border border-1 mt-3 shadow-sm' key={index}>
                                <div className='col-4'>
                                    <img src={detail.img} className="img-height w-100 p-2"/>
                                </div>
                            <div className='col-8'>
                                <p className='card-text'> {detail.product}</p>
                                <h3>Rs: {detail.offer_price}</h3>
                                <p className='text-success'><span className='me-2'><s className='text-secondary'>{detail.original_price}</s></span>{detail.offer}off</p>
                                <p>{detail.delivery}</p>
                                <div>
                                    <button className='btn bg-secondary' onClick={() =>RemoveItem(index)}> RemoveItem</button>
                                    <span className="float-end">
                                        <button type="button" className="btn btn-primary" onClick={() =>Decrease(detail)}>-</button>
                                        <label className="mx-2">QTY:({detail.qty})</label>
                                        <button type="button" className="btn btn-primary" onClick={() =>Increase(detail)}>+</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="text-center my-3">
                        <button className="btn btn-warning btn-lg rounded-0" onClick={BuyNow}>BuyNow</button>
                    </div>
                </div>
                <div className="col-4 mt-3 price-card">
                    <div className="card shadow-sm">
                        <div className="card-header text-secondary">
                            <h5>PRICE DETAILS</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item fw-semibold">Original Price<span className="float-end text-danger">Rs:{showCart.reduce(((acc,detail) => acc +parseInt(detail.qty * detail.original_price)),0)}</span></li>
                            <li className="list-group-item fw-semibold">Your Savings<span className="float-end text-success">Rs:{showCart.reduce(((acc,detail) => acc + parseInt((detail.qty * detail.original_price) - (detail.qty * detail.offer_price))),0)}</span></li>
                        </ul>
                        <div className="card-footer">
                            <h5>Final Price<span className="float-end text-primary">Rs:{showCart.reduce(((acc,detail) => acc + parseInt(detail.qty * detail.offer_price)),0)}</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        ) : <h1 className="text-secondary text-center mt-5">Cart is Empty......</h1>}
        
        </>
    )
}