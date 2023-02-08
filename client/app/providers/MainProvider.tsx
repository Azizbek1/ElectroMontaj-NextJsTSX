import HeadProvider from "./HeadProvider/HeadProvider";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const MainProvider: FC = ({ children}) => {
  return (
    <HeadProvider>
      <Layout>{children}</Layout>
    </HeadProvider>
  );
};

export default MainProvider;
