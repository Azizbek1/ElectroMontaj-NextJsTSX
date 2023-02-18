import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";
import styles from "./portfolio.module.scss";
import Image from "next/image";

const PortfolioItem = (props: any) => {
  return (
    <div className={styles.item} key={props.id} onClick={() => props.handleClick(props, props.schet)}>
      <div className={styles.itemImage}>
        <div className={styles.hoverOverlay}>
          <div className={styles.icon}>
            <MaterialIcon name="MdOutlineZoomIn" />
          </div>
        </div>
        <Image
          src={`${props.image}`}
          alt="jpg"
          width={500}
          height={330}
          layout="responsive"
        />
      </div>
      <div className={styles.itemBox}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.text}>{props.link}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
