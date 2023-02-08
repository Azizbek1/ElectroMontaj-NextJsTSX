import { FC } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";
import { IMenuItem } from "@/components/fakeData/navigations/nav.types";
import styles from "./navbar.module.scss";
const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath } = useRouter();
  if (item.link) {
    return (
      <li
        className={cn({ [styles.active]: asPath === item.link })}
        key={item.id}
      >
        <Link href={`${item.link}`}>
          <a className={styles.links}>
            <MaterialIcon name={item.icon} />
            <span>{item.title}</span>
          </a>
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <MaterialIcon name={item.icon} />
        <span>{item.title}</span>
      </li>
    );
  }
};

export default MenuItem;
