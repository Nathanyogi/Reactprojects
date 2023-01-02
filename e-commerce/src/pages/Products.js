import React, { useEffect} from "react";
import { useLocation,useNavigate, useParams } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux';
import {setLoginLocation, setToCart} from '../redux/slice/mainSlice';
import {getAllProducts} from '../redux/slice/homeSlice'

function Products(){
    const parms = useParams()
    const location = useLocation()
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const {LoggedDetail,Cart} = useSelector((state) => state.MainRouteSlice)
    const {Allproducts} = useSelector((state) => state.HomeSlice)
 
    useEffect(() =>{
        dispatch(getAllProducts(parms.name))
    },[parms.name])

    let addToCart = (detail) =>{
        if(LoggedDetail.IsLogged === true){
            let status = Cart.map((element) => element.product);
            if(! status.includes(detail.product)){
                dispatch(setToCart([...Cart,detail]))
                Navigate('/cart');   
            }
            else{
                alert("Item is already in cart")
            }
        }
       else{
         alert("Please login before add to cart")
       }
    }

    let BuyNow = () =>{
        if(LoggedDetail.IsLogged) {
            Navigate('/buynow')
        }
        else{
            alert("please Login and Buy Product");Navigate('/login');
            dispatch(setLoginLocation(location.pathname))
        }
    }
    return(<>
   <div className="container my-5 bg-white pt-2 shadow-sm">
   {Allproducts && Allproducts.map((detail,index) =>(
        <div key={index+1}>
            <div className='row my-4'>
                <div className="col-4 text-center">
                    <img className="w-100" src={detail.img} style={{height:200}} alt={`img${index + 1}`}/>
                </div>
                <div className="col-6">
                    <h4>{detail.product}</h4>
                    <ul>{JSON.parse(detail.specification).map((spec,index) =>(
                        <li key={index}>{spec}</li>
                    ))}</ul>
                </div>
                <div className="col-2">
                    <h2>₹{detail.offer_price}</h2>
                    <span className="text-secondary"><s>₹{detail.original_price}</s></span><span className="text-success ms-2">{detail.offer}</span>
                    <p>{detail.delivery}</p>
                    <div className="pe-3">
                        <button className='btn btn-warning rounded-0 w-100' onClick={BuyNow}>BUY NOW</button>
                        <button className='btn btn-secondary rounded-0 mt-2 w-100' onClick={() =>addToCart(detail)}> ADD TO CART </button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    ))}
   </div>
    </>)
}

export default Products;