import React, { useContext } from "react";
import Header from "../../Pages/Shared/Header/Header";
import Footer from "../../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../Context/AuthProvider/AuthProvider";
import { BeatLoader } from "react-spinners";
/** this  is main layout Start  */
const Main = () => {
    const {loading} = useContext(UserContext);
  return(
    <div>
        {
            loading ? <div className="w-full bg-[#212428] h-screen flex justify-center items-center"><BeatLoader
            color={"#10B981"}
            loading={loading}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> </div>: <div className="font-bodyFont">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
            
          </div>
        }
    </div>
  )
};
/** main layout end  */
export default Main;
