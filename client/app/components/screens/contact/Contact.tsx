import { FC } from "react";
import { Meta } from "@/utils/meta";
import styles from './contact.module.scss'
const Contact: FC = () => {
  return (
    <Meta title="Контакт" description="">
      <h2>Контакт</h2>
      <div>
        <div>
          <ul>
            <li>
              <span> Адрес:</span>
              <p>г. Москва, ул. Калужская, 80, офис 315</p>
            </li>
            <li>
              <span> Телефоны:</span>
              <p>+998 (90) 999 99 99</p>
              <p>+998 (90) 999 99 99</p>
            </li>
            <li>
              <span>E-mail:</span>
              <a href="#">electro@gmail.com</a>
            </li>
            <li>
              <span>Режим работы:</span>
              <p>Пн - Пт: c 8.00 - 19.00 Сб - Вс: c 9.00 - 15.00</p>
            </li>
          </ul>
        </div>
        <div>
          
        </div>
      </div>
    </Meta>
  );
};

export default Contact;
