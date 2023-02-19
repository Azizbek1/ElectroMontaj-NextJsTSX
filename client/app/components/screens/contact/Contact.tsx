import { FC } from "react";
import { Meta } from "@/utils/meta";
import styles from "./contact.module.scss";
import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";
const Contact: FC = () => {
  return (
    <Meta title="Контакт" description="">
      <div className={styles.contact}>
        <h2 className={styles.contactTitle}>Контакт</h2>
        <div className={styles.contactFlex}>
          <div className={styles.contactFlexMenu}>
            <ul className={styles.menuCon}>
              <li className={styles.menuItems}>
                <span className={styles.flexIcon}>
                  <span className={styles.icon}>
                    <MaterialIcon name="MdCall" />
                  </span>
                  <span className={styles.rejIco}>Адрес:</span>
                </span>
                <p>г. Москва, ул. Калужская, 80, офис 315</p>
              </li>
              <li className={styles.menuItems}>
                <span className={styles.flexIcon}>
                  <span className={styles.icon}>
                    <MaterialIcon name="MdCall" />
                  </span>
                  <span className={styles.rejIco}>Телефоны:</span>
                </span>
                <p>+998 (90) 999 99 99</p>
                <p>+998 (90) 999 99 99</p>
              </li>
              <li className={styles.menuItems}>
                <span className={styles.flexIcon}>
                  <span className={styles.icon}>
                    <MaterialIcon name="MdCall" />
                  </span>
                  <span className={styles.rejIco}>E-mail:</span>
                </span>
                <a href="#">electro@gmail.com</a>
              </li>
              <li className={styles.menuItems}>
                <span className={styles.flexIcon}>
                  <span className={styles.icon}>
                    <MaterialIcon name="MdCall" />
                  </span>
                  <span className={styles.rejIco}>Режим работы:</span>
                </span>
                <p>Пн - Пт: c 8.00 - 19.00 Сб - Вс: c 9.00 - 15.00</p>
              </li>
            </ul>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24016.44787904497!2d69.21623249999999!3d41.198753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1676368330756!5m2!1sru!2s"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={styles.formContact}>
          <h4>
            Если у вас возникли вопросы или предложения, мы будем рады их
            рассмотреть. Для этого заполните форму ниже.
          </h4>
          <div>
            <form className={styles.from}>
              <div className={styles.inputsFlex}>
                <div className={styles.inputss}>
                  <div className={styles.inputItem}>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className={styles.inputItem}>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Емаил"
                    />
                  </div>
                  <div className={styles.inputItem}>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Телефон"
                    />
                  </div>
                  
                </div>
                <div className={styles.inputText}>
                  <textarea
                    placeholder="Ваше Сообшения"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name=""
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>
              </div>
              <button className={styles.button}>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default Contact;
