import React from "react";
import "./home.scss";
import Banner from "../Section/Banner/banner";
import About from "../Section/About/About";
import Promo from "../Section/Promo/Promo";
import AP from "../Section/AboutVireya/AP";
import Residential from "../Section/Residential/Residential";
import Lokasi from "../Section/Lokasi/lokasi";
import Scrolltohashelement from "../Pages/ScrollToHashElement";

const home = () => {
  return (
    <div className="home">
      <Scrolltohashelement />
      <Banner />
      <About />
      <Promo />
      <AP />
      <Residential />
      <Lokasi />
    </div>
  );
};

export default home;
