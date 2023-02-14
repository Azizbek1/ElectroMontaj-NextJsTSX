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
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Ведите имя</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Файзиев Камил" required/>
              </div>
              <div className={styles.formInputs}>
                <label htmlFor="threE" className="block mb-2 text-sm font-medium text-gray-900 ">Ведите Емаил</label>
                <input type="text" id="threE" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@example.com" required/>
              </div>
              <div className={styles.formInputs}>
              <label htmlFor="threText" className="block mb-2 text-sm font-medium text-gray-900 ">Ваш отзыв</label>
                <textarea
                  placeholder="Lorem lorem ipsum dolor sit amet, consectetur adipis"
                  name=""
                  id="threText"
                  cols={30}
                  rows={10}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
