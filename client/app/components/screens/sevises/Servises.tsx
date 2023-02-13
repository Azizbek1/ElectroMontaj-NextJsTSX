import { FC } from "react";
import { Meta } from "@/utils/meta";
import styles from "./servises.module.scss";
import ServisesItem from "./ServisesItem";
import { servisesItem } from "@/components/fakeData/servises/servises";
const Servises: FC = () => {
  return (
    <Meta title="Услуги" description="">
      <div className={styles.servises}>
        <h2 className={styles.servisesTitle}>Услуги</h2>
        <div className={styles.servisesFlex}>
          {servisesItem.map((item) => {
            return (
              <ServisesItem
                image={item.image}
                title={item.title}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </Meta>
  );
};

export default Servises;
