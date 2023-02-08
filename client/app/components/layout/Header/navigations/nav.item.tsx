import { FC } from "react";
import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";
import { IMenuItem } from "@/components/fakeData/navigations/nav.types";
import styles from "./nav.module.scss";
const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  return (
    <li className={styles.item} key={item.id}>
      <span className={styles.icon}>
        <MaterialIcon name={item.icon} />
      </span>
      <span>{item.title}</span>
    </li>
  );
};

export default MenuItem;
