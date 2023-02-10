import { IDover } from "@/components/fakeData/dover/dover.types";
import styles from "./portfolio.module.scss";
import Image from "next/image";
import { IPort } from "@/components/fakeData/portfolio/portfolio.types";

const PortfolioItem = ({ link, title, image, id }: IPort) => {
  return (
    <div className={styles.item} key={id}>
      <div className={styles.itemImage}>
        <Image src={`/jpg/${image}`} alt="jpg" width={500} height={330} layout="responsive" />
      </div>
      <div className={styles.itemBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{link}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;