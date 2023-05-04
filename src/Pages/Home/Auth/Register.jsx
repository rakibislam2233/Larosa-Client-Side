import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub, BsGoogle, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
const Register = () => {
  const { createUser} = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const naviget = useNavigate();
  /**This is a create new user function   */
  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    setError("");
    if(name==''){
      return setError("Please enter a your name")
    }
    else if(email==''){
     return setError("Please enter a your email");
    }else if(password.length==0){
      return setError("Please enter a your password")
    }
    else if(password.length<6){
      return setError("Password minimum six characters")
    }
    createUser(email, password)
      .then((result) => {
        const users = result.user;
        updateUserInfo(users, name, photoUrl);
        toast.success("Your Register Successfully");
        naviget("/");
        form.reset();
      })
      .catch(() => {});
  };
  const updateUserInfo = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="w-full  pt-20  flex justify-center p-5">
      <div className="w-full lg:w-[30%] bg-gray-200 mt-4 pb-5 rounded">
        <h2 className="text-3xl font-semibold text-center py-5">
          Create an account
        </h2>
        {
          error ? <div className="alert alert-error shadow-lg my-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           <h3>{error}</h3>
          </div>
        </div>: ''
        }
        <form onSubmit={handelRegister} className="w-4/5 mx-auto relative">
          <div className="flex items-center bg-white rounded  mb-4">
            <span className="px-3">
              <FaUser className="text-[#6B7280]"></FaUser>
            </span>
            <input
              className="w-full h-12 focus:outline-none px-3"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex items-center bg-white rounded  mb-4">
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
              className="w-full h-12 focus:outline-none px-3"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex items-center bg-white rounded  mb-4">
            <span className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
            <input
              className="w-full h-12 focus:outline-none"
              type="text"
              name="photoUrl"
              placeholder="Enter Your PhotUrl"
            />
          </div>
          <div className="flex items-center bg-white rounded  mb-4">
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
              className="w-full h-12 focus:outline-none px-3"
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="absolute top-[205px] cursor-pointer right-5">
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <BsEyeFill></BsEyeFill>
              ) : (
                <BsEyeSlashFill></BsEyeSlashFill>
              )}
            </span>
          </div>
          <div className="mb-4 flex justify-between">
            <div>
              <input type="checkbox" name="remember" className="mr-1" />
              <label for="remember" className="text-sm text-gray-600">
                Accpect{" "}
                <Link className="text-amber-500" to="">
                  Trams and Condition
                </Link>
              </label>
            </div>
          </div>
          <button className="bg-teal-500 w-full text-white text-sm uppercase rounded-full  px-6 py-3">
            Sign up
          </button>
          <div className="text-center  py-2">
            <h2>
              Already have an accoutn? Please
              <Link className="text-amber-500" to="/login">
                Login
              </Link>
            </h2>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
