import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaUserTie} from "react-icons/fa";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Header = () => {
  const { user, logOut } = useContext(UserContext);
  console.log(user?.photoURL);
  const [show, setShow] = useState(false);
  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <nav className="w-full bg-[#212428]  fixed t z-50  text-white py-5 h-20 px-5">
      <div className="max-w-6xl mx-auto  flex justify-between items-center font-bodyFont">
        <div>
          <Link to={"/"}>
            {" "}
            <h3 className="text-2xl cursor-pointer font-semibold font-bodyFont">
              La<span>Rosa</span>
            </h3>
          </Link>
        </div>
        <ul
          className={`w-[75%] h-[100vh] md:w-auto md:h-auto bg-[#212428] md:bg-transparent text-center text-white  font-semibold  duration-500 md:duration-0  flex flex-col md:flex-row gap-5 absolute md:static  items-center ${
            show ? "top-[80px] space-y-1 left-0 " : "top-[80px]  left-[-500px]"
          }`}
        >
        
        <NavLink to={'/'} className={({isActive})=> isActive?"text-teal-500":""}>Home</NavLink>
        <NavLink to={'/about'} className={({isActive})=> isActive?"text-teal-500":""}>About</NavLink>
        <NavLink to={'/menu'} className={({isActive})=> isActive?"text-teal-500":""}>Menu</NavLink>
        <NavLink to={'/chefs'} className={({isActive})=> isActive?"text-teal-500":""}>Our Chef</NavLink>
        <NavLink to={'/blogs'} className={({isActive})=> isActive?"text-teal-500":""}>Blogs</NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive?"text-teal-500":""}>Contact</NavLink>
        <NavLink  to="/register" className={({isActive})=> isActive?"text-teal-500":""}>Sign up</NavLink>
          {user ? (
            <>
             {
              user.photoURL ?  <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={`${user.displayName}`}
              data-tooltip-place="top"
              className="w-12 h-12 rounded-full ring-2 cursor-pointer ring-teal-500 "
              src={user.photoURL}
              alt=""
            /> : <FaUserTie data-tooltip-id="my-tooltip"
            data-tooltip-content={`${user.displayName}`}
            data-tooltip-place="top" className="w-10 h-10  rounded-full ring-2 cursor-pointer ring-white"></FaUserTie>
             }
              <button
                onClick={handelLogout}
                className="py-2 px-5 bg-teal-500 rounded-full"
              >
                Log out
              </button>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="py-2 px-5 bg-teal-500 rounded-full">
                Login
              </button>
            </Link>
          )}
          <Tooltip id="my-tooltip" />
        </ul>
        <>
          <button
            className="md:hidden duration-500"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <HiX className="w-8 h-8"></HiX>
            ) : (
              <HiMenuAlt3 className="w-8 h-8"></HiMenuAlt3>
            )}
          </button>
        </>
      </div>
    </nav>
  );
};

export default Header;
