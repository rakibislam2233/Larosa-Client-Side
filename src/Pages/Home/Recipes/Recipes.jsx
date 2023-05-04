import React, { useEffect, useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "@smastrom/react-rating/style.css";
import toast, { Toaster } from "react-hot-toast";
const Recipes = ({ rp }) => {
  const [like, setLike] = useState(false);
  const { name, picture, ingredients, method, rating } = rp;
  const handelButton = () => {
    toast.success("Your Food Added Favorite List");
    setLike(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="border border-[#212428] shadow-2xl rounded-2xl p-5 space-y-3 flex flex-col justify-between">
      <div>
        <img className="w-full h-96 rounded-2xl" src={picture} alt="" />
        <h3 className="text-2xl">{name}</h3>
        <p>
          <span className="text-xl">Ingredients</span> : <br /> {ingredients}
        </p>
        <p>
          <span className="text-xl">
            <span className="text-xl">
              Method: <br />{" "}
            </span>
          </span>
          {method}
        </p>
      </div>
      <div className="flex justify-between">
        <h3 className="flex items-center gap-1">
          {" "}
          <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
          {rating}
        </h3>
        <div>
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`My Favorite`}
            data-tooltip-place="top"
            disabled={like}
            className={`${like ? "text-rose-500" : ""}`}
            onClick={handelButton}
          >
            <MdOutlineFavorite className="w-6 h-6"></MdOutlineFavorite>
          </button>
          <Tooltip id="my-tooltip" />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
