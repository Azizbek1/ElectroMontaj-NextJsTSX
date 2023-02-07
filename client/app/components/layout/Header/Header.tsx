import { FC } from "react";

import styles from "./Header.module.scss";
import logo from "@/assets/png/logo.png";
import Image from "next/image";
import NavigationsTop from "./navigations/nav";
import { address, addressPhone, menus } from "@/components/fakeData/navigations/nav";
import SipperSlider from "@/components/ui/swipper/Swipper";
import { sliders } from "@/components/fakeData/sliders/slider";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.center}>
        <div className="">
          <div className="">
            <a className="" href="/">
              <Image
                src={logo}
                width={247}
                height={72}
                alt="Электро Монтаж"
                draggable={false}
              />
            </a>
          </div>
          <div className="">
            <NavigationsTop menu={address} />
          </div>
          <div>
              <NavigationsTop menu={addressPhone} />
          </div>
        </div>
        <div>
          <NavigationsTop menu={menus} />
        </div>
      </div>
      <div className={styles.slider}>
        <SipperSlider slide={sliders}  />
      </div>
    </div>
  );
};

export default Header;
