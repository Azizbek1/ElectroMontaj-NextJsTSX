import { FC } from "react";
import { Meta } from "@/utils/meta";
import Servises from "@/components/layout/Servises/Servises";
import Dover from "@/components/layout/Dover/Dover";
const Home: FC = () => {
  return (
    <Meta title="Электро-монтаж" description="">
      <Servises />
      <Dover />
    </Meta>
  );
};

export default Home;
