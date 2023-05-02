import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { UserContext } from '../../../Context/AuthProvider/AuthProvider';
const Header = () => {
  const {user,logOut} = useContext(UserContext)
  console.log(user?.photoURL);
  const [show, setShow] = useState(false);
  const handelLogout = ()=>{
    logOut()
    .then(()=>{

    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
  return (
    <nav className="w-full bg-[#212428]  fixed t z-50  text-white py-5 h-20 px-5">
      <div className="max-w-6xl mx-auto  flex justify-between items-center font-bodyFont">
        <div>
          <h3
            className="text-2xl cursor-pointer font-semibold font-bodyFont"
          >La<span>Rosa</span></h3>
        </div>
        <ul
          className={`w-[75%] h-[100vh] md:w-auto md:h-auto bg-[#212428] md:bg-transparent text-center text-white  font-semibold  duration-200 md:duration-0  flex flex-col md:flex-row gap-5 absolute md:static  items-center ${
            show ? "top-[90px] space-y-1 left-0 " : "top-[90px]  left-[-500px]"
          }`}
        >
          <NavLink className={'hover:text-rose-600 duration-300'} to="/">Home</NavLink>
          <NavLink className={'hover:text-rose-600 duration-300'} to="/about">About</NavLink>
          <NavLink className={'hover:text-rose-600 duration-300'} to="/menu">Menu</NavLink>
          <NavLink className={'hover:text-rose-600 duration-300'} to="/gallery">Gallery</NavLink>
          <NavLink  className={'hover:text-rose-600 duration-300'}  to="/chefs">Our Chef</NavLink>
          <NavLink className={'hover:text-rose-600 duration-300'} to='/blogs'>Blogs</NavLink>
          <NavLink className={'hover:text-rose-600 duration-300'} to="/contact">Contact</NavLink>
          <NavLink className={'hover:text-rose-600 duration-300'} to="/login">Sign In/Up</NavLink>
         {
          user? <>
          <img  className='w-12 h-12 rounded-full ring-2 cursor-pointer ring-teal-500 ' src={user.photoUR} alt="" />
          <button onClick={handelLogout} className='py-2 px-5 bg-teal-500 rounded-full'>Log out</button>
          </> : <Link to={'/login'}><button className='py-2 px-5 bg-teal-500 rounded-full'>Login</button></Link>
         }
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
