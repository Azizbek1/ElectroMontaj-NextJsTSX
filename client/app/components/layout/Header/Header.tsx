import { FC } from "react";

import styles from "./Header.module.scss";

import NavigationsTop from "./navigations/nav";
import {
  address,
  addressPhone,
  menus,
} from "@/components/fakeData/navigations/nav";
import SipperSlider from "@/components/ui/swipper/Swipper";
import { sliders } from "@/components/fakeData/sliders/slider";
import Navbar from "./navbar/navbar";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.center}>
        <div className={styles.headerFlex}>
          <div className={styles.navigationAdress}>
            <NavigationsTop menu={address} />
          </div>
          <div className={styles.addressPhone}>
            <NavigationsTop menu={addressPhone} />
          </div>
        </div>
      </div>

      {/* ===================  Navigation  =================== */}
      <div className={styles.navigation}>
        <Navbar menu={menus} />
      </div>
      {/* ===================  Slider  =================== */}
      <div className={styles.slider}>
        <SipperSlider slide={sliders} />
      </div>
    </div>
  );
};

export default Header;
