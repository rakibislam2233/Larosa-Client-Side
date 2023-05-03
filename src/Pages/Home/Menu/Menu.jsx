import React, { useEffect, useState } from "react";
import MenuFood from "../MenuFood/MenuFood";

const Menu = () => {
  const [datas, setData] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const handelSeeAll = () => {
    setSeeAll(true);
  };
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(datas);
  return (
    <div className="w-full bg-[#212428]  pt-24 px-5">
      <h2 className="text-4xl text-center font-semibold text-teal-500">
        Our Menu
      </h2>
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
        {datas.map((data) =>
          data.recipes.map((dt) => <MenuFood dt={dt}></MenuFood>)
        )}
      </div>
    </div>
  );
};

export default Menu;
