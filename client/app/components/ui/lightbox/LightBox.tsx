import Image from "next/image";
import styles from "./Lightbox.module.scss";
import { MaterialIcon } from "../icons/MaterialIcon";
const LightBox = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}: any) => {
  const handleClick = (e: any) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <div className={styles.overlay} onClick={handleClick}>
      <Image src={clickedImg} alt="bigger pic" width={500} height={330} />
      <div className={styles.close} onClick={handleClick}>
        <MaterialIcon name="MdOutlineClear" />
      </div>
      <div onClick={handelRotationLeft} className={styles.arrows}>
        <div className={styles.leftIcon}>
          <MaterialIcon name="MdChevronLeft" />
        </div>
      </div>
      <div onClick={handelRotationRight} className={styles.arrows}>
        <div className={styles.rightIcon}>
          <MaterialIcon name="MdChevronRight" />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
