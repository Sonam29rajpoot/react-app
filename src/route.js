import React from 'react'
import { Routes, Route } from "react-router-dom";
import CategoryProducts from './components/Category/category';
import Registration from './components/Registration/registration';
import Login from './components/Login/login';
import AddToCart from './components/Add-to-cart/AddToCart';
import Home from './components/Home/Home';
import PrivateRoute from './privateRoute';

const RoutePage = () => {

    return (
        <>
            <Routes>

                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/reg" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="" element={<Login />} />

                <Route path='/user' element={<PrivateRoute />}>
                    <Route path="categorie/:productId" element={<CategoryProducts />} />
                    <Route path="AddToCart" element={<AddToCart />} />
                </Route>

            </Routes>
        </>
    )
}

export default RoutePage;

