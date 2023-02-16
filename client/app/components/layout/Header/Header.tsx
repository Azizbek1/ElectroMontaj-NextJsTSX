import { FC, useState } from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import NavigationsTop from "./navigations/nav";
import {
  address,
  addressPhone,
  menus,
} from "@/components/fakeData/navigations/nav";
import Navbar from "./navbar/navbar";
import MenuToogle from "@/components/ui/menutoggle/MenuToogle";
import Image from "next/image";
import  logo from '@/assets/png/logo.png';

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
        <div className={styles.logoMD}>
          <Image
            src={logo}
            width={120}
            height={40}
            alt="Электро Монтаж"
            draggable={false}
          />
        </div>
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
    </div>
  );
};

export default Header;
