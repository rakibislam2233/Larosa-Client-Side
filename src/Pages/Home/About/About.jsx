import React, { useEffect } from "react";
import images from "../../../assets/images/chef/download.png";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full bg-[#212428]  pt-24 px-5">
      <h2 className="text-4xl text-center font-semibold text-teal-500">
        About Us
      </h2>
      <div className="w-full h-full max-w-6xl mx-auto md:flex justify-between items-center">
        <div className="md:w-[50%]">
          <img className="w-full h-fullrounded-full" src={images} alt="" />
        </div>
        <div className="md:md:w-[50%] space-y-3">
          <h1 className="text-5xl text-white">Our philosophy</h1>
          <p className="text-xl text-gray-400">
            Welcome to the wonderful world of beets! I am delighted you are
            here. A lot of people ask me, "Why beets?" in which I respond with a
            cheeky grin, "'Beets' Me!" Actually, beets intrigue me as I think
            they are vibrantly diverse, spectacularly nutritious, and remarkably
            under-utilized.
          </p>
          <button className="py-2 px-5 animate-pulse bg-teal-500 rounded-full text-white">
            View Our Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
