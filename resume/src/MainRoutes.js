import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Form";
import Register from "./pages/Register";
import View from "./pages/View";



export default function MainRoutes(){
 
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/view/:id" element={<View />}></Route>
                </Routes>
            </Router>
        </>
    )
}