import React from "react";
import { Link } from "react-router-dom";
const ChefDetails = ({ data }) => {
  const { id, name, picture, years_of_experience, num_recipes, likes } = data;
  return (
    <div className="w-full h-full py-5  rounded-xl shadow-2xl space-y-2 text-white">
      <img
        className="w-full h-72 rounded cursor-pointer"
        src={data?.picture}
        alt=""
      />
      <div className="p-3 ">
        <h3 className="text-2xl">{data?.name}</h3>
        <h2>Years of experience : {data?.years_of_experience} Years</h2>
        <p>Number of Recipes : {data?.num_recipes} Item</p>
        <p>Total Likes : {data?.likes}</p>
      </div>
      <Link to={`/chefDetails/${id}`}>
        <button className="py-2 px-5 bg-teal-500 rounded-full hover:bg-rose-500 duration-300 mx-2">
          View Recipes
        </button>
      </Link>
    </div>
  );
};

export default ChefDetails;
