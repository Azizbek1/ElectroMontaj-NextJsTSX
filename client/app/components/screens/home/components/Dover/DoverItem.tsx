import { IDover } from "@/components/fakeData/dover/dover.types";
import styles from "./dover.module.scss";
import Image from "next/image";

const DoverItemBox = ({ text, title, image, id }: IDover) => {
  return (
    <div className={styles.item} key={id}>
      <div className={styles.itemImage}>
        <Image src={`${image}`} alt="png" width={60} height={60} priority />
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default DoverItemBox;
