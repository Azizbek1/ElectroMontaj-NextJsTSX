import { IDover } from "@/components/fakeData/dover/dover.types";
import styles from "./portfolio.module.scss";
import Image from "next/image";
import { IPort } from "@/components/fakeData/portfolio/portfolio.types";

const PortfolioItem = ({ link, title, image, id }: IPort) => {
  return (
    <div className={styles.item} key={id}>
      <div className={styles.itemImage}>
        <Image src={`/png/${image}`} alt="png" width={60} height={60} />
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{link}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;