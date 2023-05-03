import React, { useContext } from "react";
import { UserContext } from "../../Context/AuthProvider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  console.log(loading);
  console.log(location);
  if (loading) {

    return
  }
  if(user){
    return children;
  }
  return <Navigate to={'/login'} state={{from:location}}></Navigate>;
};

export default PrivetRoute;
