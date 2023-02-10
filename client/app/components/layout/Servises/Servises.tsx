import { FC } from "react";
import styles from "./servises.module.scss";
import ServisesItemBlock from "./ServiseItemBlock";
import { servisesItem } from "@/components/fakeData/servises/servises";

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
         <button>Посмотреть все услуги</button>
      </div>
    </div>
  );
};

export default Servises;
