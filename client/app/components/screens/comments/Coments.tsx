import { FC } from "react";
import { Meta } from "@/utils/meta";
import styles from "./coments.module.scss";
import ComentsItem from "./ComentsItem";
import { ComentsItemsData } from "@/components/fakeData/coments/comentsData";
import Image from "next/image";
const Coments: FC = () => {
  return (
    <Meta title="Отзывы" description="">
      <div className={styles.coments}>
        <h2 className={styles.comentsTitle}>Отзывы</h2>
        <div className={styles.containerFlex}>
          {ComentsItemsData.map((item) => (
            <ComentsItem
              name={item.name}
              date={item.date}
              key={item.id}
              text={item.text}
            />
          ))}
        </div>
        <div className={styles.poginations}>
          <ul className={styles.poginationsMenu}>
            <li className={styles.poginationsItems}>1</li>
            <li className={styles.poginationsItems}>2</li>
            <li className={styles.poginationsItems}>3</li>
            <li className={styles.poginationsItems}>4</li>
            <li className={styles.poginationsItems}>5</li>
          </ul>
        </div>
      </div>
      <div className={styles.formComments}>
       
        <div className={styles.fomFl}>
          <div className={styles.itemCom}>
          <h4>Написать отзыв</h4>
            <form action="">
              <div className={styles.formInputs}>
                <input type="text" placeholder="Ведите имя" />
              </div>
              <div className={styles.formInputs}>
                <input type="text" placeholder="Ведите Емаил" />
              </div>
              <div className={styles.formInputs}>
                <textarea
                  placeholder="Ваш отзыв"
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                ></textarea>
              </div>
              <button className={styles.button}>Отправить</button>
            </form>
          </div>
          <div className={styles.itemCom}>
            <Image src="/png/3527167.png" alt="png" width={500} height={500} />
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default Coments;
