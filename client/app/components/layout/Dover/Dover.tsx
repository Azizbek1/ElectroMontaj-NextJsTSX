import { FC } from "react";
import styles from "./dover.module.scss";
import { doverItem } from "@/components/fakeData/dover/dover";
import DoverItemBox from "./DoverItem";

const Dover: FC = () => {
  return (
    <div className={styles.dover}>
      <h2 className={styles.doverTitle}>ПОЧЕМУ НАМ ДОВЕРЯЮТ СОТНИ КЛИЕНТОВ</h2>
      <div>
        {doverItem.map((item) => (
          <DoverItemBox
            image={item.image}
            title={item.title}
            key={item.id}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Dover;
