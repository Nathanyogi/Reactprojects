import React, { useEffect } from 'react';
import {
    Routes,
    Route,
    useLocation
} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Buynow from './pages/Buynow';
import Register from './pages/Register';
import Footer from './components/footer';
import { useDispatch } from 'react-redux';
import { getFromCart } from './redux/slice/mainSlice';

function MainRoutes(){
    const {pathname} = useLocation()
    const dispatch  = useDispatch()

    return(
        <>
        {pathname !== '/login' && pathname !=='/register' && <Header />}
        <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/products/:name' element={<Products />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/buynow' element={<Buynow />}></Route>
        </Routes>
        {pathname !== '/login' && pathname !=='/register' && pathname !== '/cart' && <Footer />}
        </>
    )
}

export default MainRoutes;