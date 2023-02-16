import { FC, useState } from "react";
import { Meta } from "@/utils/meta";
import Servises from "./components/Servises/Servises";
import Dover from "./components/Dover/Dover";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import About from "./components/About/About";
import News from "./components/News/News";
import Slider from "./components/Slider/Slider";
const Home: FC = () => {

  return (
    <Meta title="Электро-монтаж" description="">
      <Slider />
      <Servises />
      <Dover />
      <Portfolio />
      <Price />
      <About />
      <News />
    </Meta>
  );
};

export default Home;
