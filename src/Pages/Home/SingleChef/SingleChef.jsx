import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleChef = () => {
  const recipe = useLoaderData();
  const { id, name,description, picture, years_of_experience, num_recipes,likes,recipes } =
    recipe;
    console.log(recipes);
  return (
    <div className="w-full  bg-[#212428] pt-24 p-5 text-slate-300">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <div className="w-[50%] space-y-4">
          <img className="w-full mx-auto rounded-xl" src={picture} alt="" />
          <div>
            <h3 className="text-3xl">{name}</h3>
            <h3>{description}</h3>
            <h2>Years of experience : {years_of_experience}</h2>
            <p>Number of Recipes : {num_recipes}</p>
            <p>Total Likes : {likes}</p>
          </div>
        </div>
        <div>
            {
                
            }
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
