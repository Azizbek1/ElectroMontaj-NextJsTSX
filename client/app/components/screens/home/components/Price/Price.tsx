import { FC } from "react";
import styles from "./price.module.scss";

const Price: FC = () => {
  return (
    <div className={styles.price}>
      <h2 className={styles.priceTitle}>
        Основные типы квартир и цены на электрику под ключ
      </h2>
      <div className={styles.flexItem}>
        <div className={styles.item}>
          <h3>Однокомнатная</h3>
          <ul>
            <li>Площадь: от 31 до 40 м2</li>
            <li>Розетка 220В - 13 шт</li>
            <li>Выключатель 6 шт</li>
            <li>Точка освещения 6 шт</li>
            <li>Сборка и монтаж электрощита 1 шт</li>
            <li>
              Штробление стен, фиксация кабеля в штробе, укладка кабеля в гофру,
              уборка строительного мусора
            </li>
            <li className={styles.price}>
              <span>400 000 сум.</span>
              <button>Отправить заявку</button>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3>Однокомнатная</h3>
          <ul>
            <li>Площадь: от 31 до 40 м2</li>
            <li>Розетка 220В - 13 шт</li>
            <li>Выключатель 6 шт</li>
            <li>Точка освещения 6 шт</li>
            <li>Сборка и монтаж электрощита 1 шт</li>
            <li>
              Штробление стен, фиксация кабеля в штробе, укладка кабеля в гофру,
              уборка строительного мусора
            </li>
            <li className={styles.price}>
              <span>400 000 сум.</span>
              <button>Отправить заявку</button>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3>Однокомнатная</h3>
          <ul>
            <li>Площадь: от 31 до 40 м2</li>
            <li>Розетка 220В - 13 шт</li>
            <li>Выключатель 6 шт</li>
            <li>Точка освещения 6 шт</li>
            <li>Сборка и монтаж электрощита 1 шт</li>
            <li>
              Штробление стен, фиксация кабеля в штробе, укладка кабеля в гофру,
              уборка строительного мусора
            </li>
            <li className={styles.price}>
              <span>400 000 сум.</span>
              <button>Отправить заявку</button>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Price;
