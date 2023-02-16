import { FC } from "react";
import styles from "./servises.module.scss";
import ServisesItemBlock from "./ServiseItemBlock";
import { servisesItem } from "@/components/fakeData/servises/servises";
import Link from "next/link";
import { AppLinkTheme, Applink } from "@/components/elements/AppLink/Applink";

const Servises: FC = () => {
  return (
    <div className={styles.servises}>
      <h2 className={styles.servisesTitle}>Услуги</h2>
      <div className={styles.servisesFLex}>
        {servisesItem.map((item) => {
          return (
            <ServisesItemBlock
              image={item.image}
              title={item.title}
              key={item.id}
            />
          );
        })}
      </div>
      <div className={styles.seeServises}>
        <Applink theme={AppLinkTheme.ORANGE} href={"/servises"}>
          Посмотреть все услуги
        </Applink>
      </div>
    </div>
  );
};

export default Servises;
