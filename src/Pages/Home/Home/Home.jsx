import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Chef from "../Chef/Chef";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";
import Service from "../Service/Sercivie";

const Home = () => {
  return (
    <div>
      {/* this is a banner component */}
      <Banner></Banner>
      {/* this is a about component */}
      <About></About>
      {/* this is a service component */}
      <Service></Service>
      {/* this is a menu component */}
      <Menu></Menu>
      {/* this is a chef component */}
      <Chef></Chef>
      {/* this is a contact component */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
