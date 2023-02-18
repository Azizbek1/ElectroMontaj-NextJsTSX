import { FC, useState } from "react";
import styles from "./portfolio.module.scss";
import { PortItems } from "@/components/fakeData/portfolio/portfolio";
import PortfolioItem from "./PortfolioItem";
import { AppLinkTheme, Applink } from "@/components/elements/AppLink/Applink";
import LightBox from "@/components/ui/lightbox/LightBox";

const Portfolio: FC = () => {
  const [clickedImg, setClickedImg] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<any>(null);
  const handleClick = (item: any, index: number) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
  };
  const handelRotationRight = () => {
    const totalLength = PortItems.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = PortItems.data[0].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = PortItems.data.filter((item) => {
      return PortItems.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = PortItems.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = PortItems.data[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = PortItems.data.filter((item) => {
      return PortItems.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <div className={styles.portfolio}>
      <h2 className={styles.portfolioTitle}>
        ПРОЕКТЫ, ВЫПОЛНЕННЫЕ НАШЕЙ КОМПАНИЕЙ В 2019 ГОДУ
      </h2>
      <hr className={styles.hr} />
      <p className={styles.portfolioText}>
        Мы заблаговременно оговариваем сроки выполнения и соблюдаем все
        договоренности!
      </p>
      <div className={styles.portfolioFLex}>
        {PortItems.data.map((item, index) => (
          <PortfolioItem
            image={item.image}
            title={item.title}
            key={index}
            link={item.link}
            handleClick={handleClick}
            schet={index}
          />
        ))}
        {clickedImg && (
          <LightBox
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
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
