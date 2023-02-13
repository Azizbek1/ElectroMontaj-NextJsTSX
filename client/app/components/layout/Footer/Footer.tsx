import { FC, useState } from "react";
import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div>
          <ul>
            <li><a href="#">г. Узбекистон, ул. Калужская, 80, офис 315</a></li>
            <li><a href="#">г. Узбекистон, ул. Калужская, 80, офис 315</a></li>
            <li><a href="#">г. Узбекистон, ул. Калужская, 80, офис 315</a></li>
            <li><a href="#">г. Узбекистон, ул. Калужская, 80, офис 315</a></li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
