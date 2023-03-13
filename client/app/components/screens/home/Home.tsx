import { FC, useState } from "react";
import { Meta } from "@/utils/meta";
import styles from "./home.module.scss";
import Servises from "./components/Servises/Servises";
import Dover from "./components/Dover/Dover";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import About from "./components/About/About";
import News from "./components/News/News";
import Slider from "./components/Slider/Slider";
import { API_URL } from "api/configs";
const Home: FC = (props) => {
  const { sliders, dover } = props;

  return (
    <Meta title="Электро-монтаж" description="">
      <div className={styles.slider}>
        <Slider items={sliders.data} />
      </div>
      <Servises />
      <Dover items={dover} />
      <Portfolio />
      <Price />
      <About />
      <News />
    </Meta>
  );
};

export default Home;
