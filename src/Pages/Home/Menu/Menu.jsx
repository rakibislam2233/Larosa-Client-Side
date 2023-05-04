import React, { useEffect, useState } from "react";
import MenuFood from "../MenuFood/MenuFood";
import BeatLoader from "react-spinners/BeatLoader";
const Menu = () => {
  const [datas, setData] = useState([]);
  const [loading,setLoading] = useState(true);
   /** this is useEffect . when user click menu link then data fetching  */
  useEffect(() => {
    fetch("https://bengali-chef-server-site-rakibislam2233.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => {setData(data),setLoading(false)});
  }, []);
  return (
   <>
   {/* this is a menu section*/}
   {
    loading ?  <div className="w-full bg-[#212428] h-screen flex justify-center items-center"><BeatLoader
    color={"#10B981"}
    loading={loading}
    size={40}
    aria-label="Loading Spinner"
    data-testid="loader"
  /> </div> : <div className="w-full bg-[#212428]  pt-24 px-5">
    <h2 className="text-4xl text-center font-semibold text-teal-500">
      Our Menu
    </h2>
    <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
      {datas.map((data) => <MenuFood key={data.id} data={data}></MenuFood>)}
    </div>
  </div>
   }
   {/*menu section end*/}
   </>
  );
};

export default Menu;
