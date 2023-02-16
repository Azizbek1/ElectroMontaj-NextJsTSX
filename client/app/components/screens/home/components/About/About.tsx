import { FC } from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import { AppLinkTheme, Applink } from "@/components/elements/AppLink/Applink";
const About: FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutExtra}>
        <div className={styles.aboutTitle}>
          <h2 className={styles.title}>О компании «Электромонтаж Сервис»</h2>
          <p className={styles.text}>
            Таким образом сложившаяся структура организации позволяет оценить
            значение новых предложений. Таким образом дальнейшее развитие
            различных форм деятельности влечет за собой процесс внедрения и
            модернизации позиций, занимаемых участниками в отношении
            поставленных задач.
          </p>
          <p className={styles.text}>
            Таким образом постоянное информационно-пропагандистское обеспечение
            нашей деятельности способствует подготовки и реализации системы
            обучения кадров, соответствует насущным потребностям.
          </p>
          <p className={styles.text}>
            Разнообразный и богатый опыт начало повседневной работы по
            формированию позиции обеспечивает широкому кругу (специалистов)
            участие в формировании новых предложений.
          </p>
          <p className={styles.text}>
            Задача организации, в особенности же реализация намеченных плановых
            заданий играет важную роль.
          </p>
          <div className={styles.appLinl}>
            <Applink theme={AppLinkTheme.ORANGE} href={"/about"}>
              Подробне
            </Applink>
          </div>
        </div>
        <div className={styles.images}>
          <Image src="/png/about-min.png" alt="png" width={475} height={519} />
        </div>
      </div>
    </div>
  );
};

export default About;
