import type { GetStaticProps, NextPage } from "next";
import Home from "@/screens/home/Home";
import { SlideService } from "@/services/sliders/slide.service";
import { DoverService } from "@/services/dover/dover.service";
const HomePage: NextPage = (props) => {
  return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: sliders } = await SlideService.getAll();
    const { data: dover } = await DoverService.getAll();
    return {
      props: { sliders, dover },
    };
  } catch (error) {
    return {
      props: {
        sliders: [],
      },
    };
  }
};
export default HomePage;
