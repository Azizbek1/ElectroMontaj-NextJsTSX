import { INews } from "@/components/fakeData/news/newsData.props";
import Image from "next/image";
import styles from "./news.module.scss";
const NewItemItem = ({ date, title, text, image, id }: INews) => {
  return (
    <div className={styles.item} key={id}>
      <div className={styles.itemImage}>
        <Image src={`/png/${image}`} alt="png" width={170} height={130}  />
      </div>
      <div className={styles.itemBox}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default NewItemItem;
