import MainProvider from "../app/providers/MainProvider";
import type { AppProps } from "next/app";

import { TypeComponentAuthFields } from "@/shared/types/auth.types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../app/assets/styles/globals.scss";

type TypeAppProps = AppProps & TypeComponentAuthFields;

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default MyApp;
