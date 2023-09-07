import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  console.log("privaterouting", isLoggedIn);
  //   let isLoggedIn = true;
  // if(isLoggedIn){
  //     return <Outlet/>
  // }else{
  //     return <Navigate to={"/login"}/>
  // }
  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
