import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub, BsGoogle, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
    /** here is a useContext   */ 
  const { signIn, googleSignIn, githubSignIn } = useContext(UserContext);
  console.log(githubSignIn);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
    /** here is a useLocation. it is a reat hook   */
  const location = useLocation();
    /** here is a useNavigate . it is a reat hook  */
  const naviget = useNavigate();
  const from = location?.state?.from.pathname || "/";
   /** here is a handellogin function */
  const handelLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (email == "") {
      return setError("Please enter your email");
    } else if (password.length == 0) {
      return setError("Please enter your password");
    }
    signIn(email, password)
      .then((result) => {
        const users = result.user;
        setError("");
        form.reset();
        naviget(from, { replace: true });
        toast.success("Loging Successfully");
      })
      .catch((err) => {
        setError(err.message)
      });
  };
   /** here is a Googlelogin function */
  const googleLogin = () => {
    googleSignIn()
      .then((result) => {
        const users = result.user;
        console.log(users);
        naviget(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message)
      });
  };
   /** here is a Githublogin function */
  const gitHubLogin = () => {
    githubSignIn()
      .then((result) => {
        const users = result.user;
        console.log(users);
        naviget(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message)
      });
  };
  return (
     /** Login section start */
    <div className="w-full  flex justify-center py-20 px-5">
      <div className="w-full lg:w-[30%] bg-gray-200 pb-5 mt-4 rounded">
        <h2 className="text-3xl font-semibold text-center py-5">
          Please Login
        </h2>
        {error && (
          <div className="alert alert-error shadow-lg my-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2>{error}</h2>
            </div>
          </div>
        )}
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
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="absolute top-[80px] right-5 cursor-pointer">
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
                Remember me
              </label>
            </div>
            <div>
              <button className="underline text-amber-500">
                Forget Password
              </button>
            </div>
          </div>
          <button className="bg-teal-500 w-full text-white text-sm uppercase rounded-full  px-6 py-3">
            Sign in
          </button>
          <div className="text-center  py-2">
            <h2>
              Don't have an accoutn? Please{" "}
              <Link className="text-amber-500" to="/register">
                Create an account
              </Link>{" "}
            </h2>
          </div>
          <div className="text-center flex justify-center items-center gap-3">
            <div className="w-full h-0.5 bg-slate-600"></div>
            <h2 className="font-semibold">or</h2>
            <div className="w-full h-0.5  bg-slate-600"></div>
          </div>
          <div className="space-y-3">
            <div
              onClick={googleLogin}
              className="w-full cursor-pointer py-2 px-5 bg-teal-500  flex items-center gap-2  justify-center rounded-full font-semibold"
            >
              <BsGoogle className="w-6 h-6 text-white"></BsGoogle> Continue with
              Google
            </div>
            <div
              onClick={gitHubLogin}
              className="w-full py-2 px-5 bg-amber-500 cursor-pointer flex items-center gap-2  justify-center rounded-full font-semibold"
            >
              <BsGithub className="w-6 h-6 text-white"></BsGithub> Continue with
              Github
            </div>
          </div>
        </form>
      </div>
    </div>
      /** Login section end */
  );
};

export default Login;
