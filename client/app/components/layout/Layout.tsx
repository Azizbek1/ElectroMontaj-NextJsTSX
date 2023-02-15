import { FC } from "react";

import styles from "./Layout.module.scss";
import Header from "./Header/Header";
import FooterLayout from "./Footer/Footer";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.center}>{children}</div>
      <FooterLayout />
    </div>
  );
};

export default Layout;
