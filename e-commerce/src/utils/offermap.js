import React ,{useState}from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import '../App.css';



function OfferMap({keys}){

    const {offerProducts} = useSelector((state) => state.HomeSlice)
    return(
        <>
        {offerProducts && offerProducts.map((detail,index) =>(
            <div className='home card col text-center pt-2 my-3 m-2 shadow bg-white' key={index} >
            <img className ='card-img-top' src={detail.img} style={{height:'200px'}} alt={index}/>
            <div className='card-body'>
                <h4 className='card-text'>{(detail.product).charAt(0).toUpperCase() + (detail.product).slice(1)}</h4>
                <p className='text-success'>From {detail.price}</p>
                <p className='text-secondary'>{detail.brands}</p>
                <Link to={`/products/${detail.product}`} className='btn btn-primary'>view</Link> 
            </div>
        </div>
        ))}
        </>
    )
}

export default OfferMap;