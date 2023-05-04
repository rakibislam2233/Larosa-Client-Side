import React from 'react';
import logo from '../../../assets/images/logo//logo.png'
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const ErrorPage = () => {
    return (
      <>
        <Header></Header>
        <div className='pt-24 py-10 w-full h-screen  bg-[#212428] flex flex-col justify-center items-center font-bodyFont'>
           <div className='relative'>
            <img className='w-full h-96 mx-auto' src={logo}alt="" />
            <div className='absolute bottom-5 flex left-0 right-0 justify-center'>
            <h3 className='uppercase text-5xl font-bold text-[#93ADBE]'>404 Page</h3>
            </div>
           
           </div>
           <div className='flex justify-center'>
           <div >
           <h4 className='text-3xl font-semibold  text-[#93ADBE] pb-5'>Page Not Found</h4>
               <Link to='/'>  <button className='py-2 ml-8 px-5 bg-teal-500 rounded-full font-semibold'>Go To Home Page</button></Link>
           </div>
            </div>
        </div>
        <Footer></Footer>
      </>
    );
};

export default ErrorPage;