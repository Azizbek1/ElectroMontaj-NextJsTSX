import { FC, useState } from "react";
import cn from "classnames";
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
import MenuToogle from "@/components/ui/menutoggle/MenuToogle";

const Header: FC = () => {
  const useToggle = (initial = false) => {
    const [isActive, setIsActive] = useState(initial);
    const toggle = () => setIsActive(!isActive);
    return { isActive, toggle };
  };
  const { isActive, toggle } = useToggle(false);
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
        <div
          className={cn(styles.navbar__row, styles.hidden_menu, {
            [styles.hidden_menu_active]: isActive,
          })}
        >
          <Navbar menu={menus} />
        </div>
        <div className={styles.menuToggle}>
          <MenuToogle isActive={isActive} toggle={toggle} />
        </div>
      </div>

      {/* ===================  Slider  =================== */}
      <div className={styles.slider}>
        <SipperSlider slide={sliders} />
      </div>
    </div>
  );
};

export default Header;
