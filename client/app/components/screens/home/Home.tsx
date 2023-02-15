import { FC, useState } from "react";
import { Meta } from "@/utils/meta";
import Servises from "./components/Servises/Servises";
import Dover from "./components/Dover/Dover";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import About from "./components/About/About";
import News from "./components/News/News";
import Slider from "./components/Slider/Slider";
import Modal from "@/components/ui/modal/Modal";

const Home: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <Meta title="Электро-монтаж" description="">
      <Slider />
      <Servises />
      <Dover />
      <Portfolio />
      <Price />
      <About />
      <News />
      <Modal
        isOpen={modalOpen}
        closeModal={() => {
          setModalOpen(false);
        }}
      >
        <p>asdsadasd</p>
      </Modal>
      <button onClick={() => openModal()}>Click</button>
    </Meta>
  );
};

export default Home;
