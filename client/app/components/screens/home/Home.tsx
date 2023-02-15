import { FC, useEffect, useState } from "react";
import { Meta } from "@/utils/meta";
import Servises from "./components/Servises/Servises";
import Dover from "./components/Dover/Dover";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import About from "./components/About/About";
import News from "./components/News/News";
import Slider from "./components/Slider/Slider";
import Modal from "@/components/ui/modal/Modal";
import {mockResponse as response, Transaction} from "@/components/ui/modal/data";

const Home: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [
    currentTransaction,
    setCurrentTransaction
  ] = useState<Transaction | null>(null);

  const openModal = (transaction: Transaction) => {
    setModalOpen(true);
    setCurrentTransaction(transaction);
  };

  useEffect(() => {
    setTransactions(response.data.transactions);
  }, []);
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
        transaction={currentTransaction}
        closeModal={() => {
          setModalOpen(false);
        }}
      />
    </Meta>
  );
};

export default Home;
