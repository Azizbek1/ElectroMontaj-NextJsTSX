import { FC } from "react";
import styles from "./news.module.scss";
import { NewsItemsData } from "@/components/fakeData/news/newsData";
import NewItemItem from "./NewItem";
const News: FC = () => {
  return (
    <div className={styles.news}>
      <h2 className={styles.Newstitle}>Новости</h2>
      <div className={styles.NewsFlex}>
        {NewsItemsData.map((item) => (
          <NewItemItem
            date={item.date}
            title={item.title}
            text={item.text}
            image={item.image}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
