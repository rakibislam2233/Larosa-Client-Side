import React from "react";
import { Rating } from "@smastrom/react-rating";
import LazyLoad from "react-lazy-load";
import "@smastrom/react-rating/style.css";
const MenuFood = ({ dt }) => {
  console.log(dt);
  const { name, picture, rating, price } = dt;
  return (
    <LazyLoad>
        <div className="w-full h-full relative ">
      <LazyLoad>
      <img
        className="w-full h-72 rounded-2xl cursor-pointer"
        src={picture}
        alt=""
      />
      </LazyLoad>
    
      <div className="w-[100%] overflow-hidden  absolute  rounded-2xl top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-rose-50 to-rose-700 opacity-0 hover:opacity-100  duration-500 flex justify-center items-center text-center cursor-pointer">
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <h3 className="font-semibold">Price:${price}</h3>
          <h3 className="flex items-center gap-1">
            {" "}
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            {rating}
          </h3>
          <button className="py-2 px-5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </LazyLoad>
    
  );
};

export default MenuFood;
