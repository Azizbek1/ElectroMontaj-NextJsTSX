import { FC } from "react";
import styles from "./dover.module.scss";
import { doverItem } from "@/components/fakeData/dover/dover";
import DoverItemBox from "./DoverItem";

const Dover: FC = (props) => {
  const {items} = props
  const {data} = items
  return (
    <div className={styles.dover}>
      <h2 className={styles.doverTitle}>ПОЧЕМУ НАМ ДОВЕРЯЮТ СОТНИ КЛИЕНТОВ</h2>
      <div className={styles.doverFLex}>
        {data.map((item: any) => (
          <DoverItemBox
            image={item.url}
            title={item.name}
            key={item.id}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Dover;
