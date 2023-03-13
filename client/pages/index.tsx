import type { GetStaticProps, NextPage } from "next";
import Home from "@/screens/home/Home";
const HomePage: NextPage = (props) => {
  return <Home {...props} />;
};
export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await 
    return {
      props: {
        null
      },
    };
  } catch (error) {
   
  }
};
export default HomePage;
