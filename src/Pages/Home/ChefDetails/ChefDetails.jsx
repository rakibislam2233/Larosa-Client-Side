import React, { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
const ChefDetails = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id, name, picture, years_of_experience, num_recipes, likes } = data;
  return (
     /** cherDetails Section Start  */
    <div className="w-full h-full py-5  rounded-xl shadow-2xl space-y-2 text-gray-400">
     <LazyLoad>
     <img
        className="w-full h-72 rounded cursor-pointer"
        src={data?.picture}
        alt=""
      />
     </LazyLoad>
      <div className="p-3 ">
        <h3 className="text-2xl">{data?.name}</h3>
        <h2>Years of experience : {data?.years_of_experience} Years</h2>
        <p>Number of Recipes : {data?.num_recipes} Item</p>
        <p>Total Likes : {data?.likes}</p>
      </div>
      <Link to={`/chefDetails/${id}`}>
        <button className="py-2 px-5 bg-teal-500 rounded-full hover:bg-rose-500 duration-300 mx-2 text-white">
          View Recipes
        </button>
      </Link>
    </div>
  /** cherDetails Section end  */
  );
};

export default ChefDetails;
