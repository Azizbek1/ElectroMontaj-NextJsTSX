import { FC, useState } from "react";
import styles from "./portfolio.module.scss";
import { portItems } from "@/components/fakeData/portfolio/portfolio";
import PortfolioItem from "./PortfolioItem";
import { AppLinkTheme, Applink } from "@/components/elements/AppLink/Applink";
const Portfolio: FC = () => {

  return (
    <div className={styles.portfolio}>
      <h2 className={styles.portfolioTitle}>ПРОЕКТЫ, ВЫПОЛНЕННЫЕ НАШЕЙ КОМПАНИЕЙ В 2019 ГОДУ</h2>
    <hr className={styles.hr} />
      <p className={styles.portfolioText}>
        Мы заблаговременно оговариваем сроки выполнения и соблюдаем все
        договоренности!
      </p>
      <div className={styles.portfolioFLex}>
        {portItems.map((item) => (
          <PortfolioItem
            image={item.image}
            title={item.title}
            key={item.id}
            link={item.link}
          />
        ))}
      </div>
      <div className={styles.button}>
        <Applink theme={AppLinkTheme.ORANGE} href={"/servises"}>
          Посмотреть ешё
        </Applink>
      </div>
    </div>
  );
};

export default Portfolio;
