import React, { useEffect, useState } from "react";
import ChefDetails from "../ChefDetails/ChefDetails";
import BeatLoader from "react-spinners/BeatLoader";
const Chef = () => {
  const [datas, setData] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    fetch("https://bengali-chef-server-site-rakibislam2233.vercel.app/")
      .then((res) => res.json())
      .then((data) => {setData(data),setLoading(false)});
  }, []);
  return (
   <>
   {
    loading ? <div className="w-full bg-[#212428] h-screen flex justify-center items-center"><BeatLoader
    color={"#10B981"}
    loading={loading}
    size={40}
    aria-label="Loading Spinner"
    data-testid="loader"
  /> </div>: <div className="w-full bg-[#212428] pt-24  py-5">
    <h3 className="text-4xl text-center font-semibold text-teal-500 ">
      Our Chef
    </h3>
    <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
      {datas.map((data) => (
        <ChefDetails key={data.id} data={data}></ChefDetails>
      ))}
    </div>
  </div>
   }
   </>
  );
};

export default Chef;
