import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipes from "../Recipes/Recipes";

const SingleChef = () => {
    /** here is useloader.it is a react hook  */
  const recipe = useLoaderData();
    /** object destruching  */
  const {
    id,
    name,
    description,
    picture,
    years_of_experience,
    num_recipes,
    likes,
    recipes,
  } = recipe;
  return (
      /** here is single Section Start  */
    <div className="w-full  bg-[#212428] pt-24 p-5 text-slate-300">
      <div className="w-full h-full max-w-6xl mx-auto">
        <div className="w-full space-y-5">
          <img className="w-full mx-auto rounded-xl" src={picture} alt="" />
          <div className="text-center w-[50%] mx-auto">
            <h3 className="text-3xl">{name}</h3>
            <h3>{description}</h3>
            <h2 className="text-xl">
              Years of experience : {years_of_experience} Years
            </h2>
            <p className="text-xl">Number of Recipes : {num_recipes} Item</p>
            <p className="text-xl">Total Likes : {likes}</p>
          </div>
        </div>
        <div className="w-full  items-center">
          <h3 className="text-center text-3xl font-semibold py-5">
            My Recipes
          </h3>
          <div className="w-full grid lg:grid-cols-2 gap-5">
            {recipes.map((rp, index) => (
              <Recipes key={index} rp={rp}></Recipes>
            ))}
          </div>
        </div>
      </div>
    </div>
     /** here is single Section Start  */
  );
};

export default SingleChef;
