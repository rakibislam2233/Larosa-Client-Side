import React, {useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFacebook, BsGoogle,BsEyeFill,BsEyeSlashFill} from "react-icons/bs";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    const {signIn} = useContext(UserContext);
    const [showPassword,setShowPassword] = useState(false);
    const [error,setError] = useState('');
    const location = useLocation();
    console.log(location);
    const naviget = useNavigate()
    const from = location?.state?.from.pathname || '/';
    const handelLogin = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        console.log(email,password)
        if (!/[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
            setError('Password must be at least 8 characters long and can only contain uppercase letters, lowercase letters, digits, and special characters');
        }
        signIn(email,password)
        .then(result=>{
          const users = result.user;
          console.log(users);
          naviget(from,{replace:true})
          toast.success('Loging Successfully');
          from.reset()
        })
        .catch(err=>{
          setError(err.message);
        })
    }
  return (
    <div className="w-full  pt-20 flex justify-center p-5">
  <div className="w-full lg:w-[30%] bg-gray-200 pb-5 mt-4 rounded">
    <h2 className="text-3xl font-semibold text-center py-5">Please Login</h2>
        <form onSubmit={handelLogin} className="w-4/5 mx-auto relative">
          <div className="flex items-center bg-white rounded mb-4 relative">
            <span className="px-3">
              <svg
                className="fill-current text-gray-500 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
              </svg>
            </span>
            <input
              className="w-full h-12 focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required

            />
          </div>
          <div className="flex items-center bg-white rounded  mb-4 relative">
            <span className="px-3">
              <svg
                className="fill-current text-gray-500 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
            </span>
            <input
              className="w-full h-12 focus:outline-none"
              type={`${showPassword?"text":"password"}`}
              name="password"
              placeholder="Password"
              required
            />
          </div>
          
          <div className="absolute top-[80px] right-5 cursor-pointer">
            <span  onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <BsEyeFill></BsEyeFill>:<BsEyeSlashFill></BsEyeSlashFill>}</span>
          </div>
          <div className="mb-4 flex justify-between">
            <div>
            <input type="checkbox" name="remember" className="mr-1" />
            <label for="remember" className="text-sm text-gray-600">
              Remember me
            </label>
            </div>
            <div>
                <button className="underline text-amber-500">Forget Password</button>
            </div>
          </div>
          <h3 className="text-rose-700">{error}</h3>
          <button className="bg-teal-500 w-full text-white text-sm uppercase rounded-full  px-6 py-3">
            Sign in
          </button>
          <div className="text-center  py-2">
            <h2>Don't have an accoutn? Please <Link className="text-amber-500" to='/register'>Create an account</Link> </h2>
          </div>
          <div className="text-center flex justify-center items-center gap-3">
            <div className="w-full h-0.5 bg-slate-600"></div>
            <h2 className="font-semibold">or</h2>
            <div className="w-full h-0.5  bg-slate-600"></div>
          </div>
          <div className="space-y-3">
            <button className="w-full py-2 px-5 bg-amber-500  flex items-center gap-2  justify-center rounded-full font-semibold"><BsFacebook className="w-6 h-6 text-white"></BsFacebook> Continue with Facebook</button>
            <button className="w-full py-2 px-5 bg-teal-500  flex items-center gap-2  justify-center rounded-full font-semibold"><BsGoogle className="w-6 h-6 text-white"></BsGoogle> Continue with Google</button>
          </div>
        </form>
      </div>
    
    </div>
  );
};

export default Login;
