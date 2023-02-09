import { FC } from "react";
import MenuItem from "./nav.item";
import { IMenuAddrePhone } from "@/components/fakeData/navigations/nav.types";
import styles from "./navbar.module.scss";
import Image from "next/image";
import logo from "@/assets/png/logo.png";
const Navbar: FC<{ menu: IMenuAddrePhone }> = ({ menu: { items } }) => {
  // const { isActive, toggle } = useToggle<Boolean>(false);
  return (
    <ul className={styles.menu}>
      <div className={styles.logo}>
        <a className={styles.linkLogo} href="/">
          <Image
            src={logo}
            width={120}
            height={40}
            alt="Электро Монтаж"
            draggable={false}
          />
        </a>
      </div>
      <ul className={styles.itemsMenu}>
        {items.map((item: any) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
      <div className={styles.buttons}>
        <button className={styles.button}>Оставить заявку</button>
      </div>
    </ul>
  );
};

export default Navbar;
