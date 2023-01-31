import { FC } from "react";

import styles from "./Layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
