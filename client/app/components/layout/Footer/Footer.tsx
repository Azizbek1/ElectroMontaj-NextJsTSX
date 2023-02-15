import styles from "./footer.module.scss";
import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";

const FooterLayout = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerFlex}>
        <div className={styles.footerItem}>
          <h4>Контакты</h4>
          <ul className={styles.menu}>
            <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MaterialIcon name={"MdPhoneForwarded"} /></span>г. Узбекистон, ул. Калужская, 80, офис 315</a></li>
            <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MaterialIcon name={"MdPhoneForwarded"} /></span>г. Узбекистон, ул. Калужская, 80, офис 315</a></li>
            <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MaterialIcon name={"MdPhoneForwarded"} /></span>г. Узбекистон, ул. Калужская, 80, офис 315</a></li>
            <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MaterialIcon name={"MdPhoneForwarded"} /></span>г. Узбекистон, ул. Калужская, 80, офис 315</a></li>
          </ul>
        </div>
        <div className={styles.footerItem}> 
            <h4>Мы в соц сетях</h4>
            <ul className={styles.menu}>
              <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MaterialIcon name={"MdOutlinePersonalVideo"} /></span>Telegram</a></li>
              <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MaterialIcon name={"MdOutlinePersonalVideo"} /></span>Instagram</a></li>
              <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MaterialIcon name={"MdOutlinePersonalVideo"} /></span>Facebook</a></li>
            </ul>
        </div>
        <div className={styles.footerItem}> 
          <button className={styles.button}>Заказать званок</button>
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
