import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const pRouteAuth = useSelector((state) => state.authReducer);
  console.log("privaterouting,isLoggedIn", isLoggedIn);
  console.log("9999999", pRouteAuth);
  //   let isLoggedIn = true;
  // if(isLoggedIn){
  //     return <Outlet/>
  // }else{
  //     return <Navigate to={"/login"}/>
  // }
  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
