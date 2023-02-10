import { FC } from "react";
import { Meta } from "@/utils/meta";
import Servises from "@/components/layout/Servises/Servises";
const Home: FC = () => {
  return (
    <Meta title="Электро-монтаж" description="">
      <Servises />
    </Meta>
  );
};

export default Home;
