import React, { useContext } from "react";
import { UserContext } from "../../Context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  console.log(loading);
  console.log(location);
  if (loading) {
    return <div className="w-full h-[100vh] bg-[#212428] flex justify-center items-center"><h3 className="text-6xl"><GridLoader
    color={"#10B981"}
    loading={loading}
    size={40}
    aria-label="Loading Spinner"
    data-testid="loader"
  /></h3></div>
    
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivetRoute;
