import React from 'react';
import Lottie from "lottie-react";
import FavoriteFood from "../../../assets/lotti/favorite food.json";
import Delivery from "../../../assets/lotti/delivari.json";
import Payment from "../../../assets/lotti/payment2.json";
import Enjoy from "../../../assets/lotti/enjoy food.json";
const Service = () => {
    return (
      /** here is service  Section Start  */
        <div className="w-full  bg-[#212428]  pt-24 px-5">
        <h2 className="text-4xl text-center font-semibold text-teal-500">
          Our Service
        </h2>
        <div className="w-full max-w-6xl mx-auto grid  md:grid-cols-2 lg:grid-cols-4 gap-5 text-gray-600">
          <div className="w-full h-full">
            <Lottie animationData={FavoriteFood} loop={true} />
            <h2 className="text-2xl text-gray-400 text-center">Favorite Food</h2>
          </div>
          <div className="w-full h-full">
            <Lottie animationData={Delivery} loop={true} />
            <h2 className="text-2xl text-gray-400 text-center">Fast Delivery</h2>
          </div>
          <div className="w-full h-full">
            <Lottie animationData={Payment} loop={true} />
            <h2 className="text-2xl text-gray-400 text-center">Easy Payment</h2>
          </div>
          <div className="w-full h-full">
            <Lottie animationData={Enjoy} loop={true} />
            <h2 className="text-2xl text-gray-400 text-center">Enjoy Your Food</h2>
          </div>
        </div>
      </div>
        /** here is service  Section end  */
    );
};

export default Service;