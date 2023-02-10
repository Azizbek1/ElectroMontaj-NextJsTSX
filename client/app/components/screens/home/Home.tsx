import { FC } from "react";
import { Meta } from "@/utils/meta";
import Servises from "./components/Servises/Servises";
import Dover from "./components/Dover/Dover";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import About from "./components/About/About";
import Footer from "@/components/layout/Footer/Footer";

const Home: FC = () => {
  return (
    <Meta title="Электро-монтаж" description="">
      <Servises />
      <Dover />
      <Portfolio />
      <Price />
      <About  />
      <Footer  />
    </Meta>
  );
};

export default Home;
