import { FC } from "react";
import { Meta } from "@/utils/meta";
import styles from "./news.module.scss";
import { NewsItemsData } from "@/components/fakeData/news/newsData";
import NewItems from "./NewsItems";
const News: FC = () => {
  return (
    <Meta title="Новости" description="">
      <div className={styles.news}>
        <h2 className={styles.newsTitle}>Новости</h2>
        <div className={styles.newsFlex}>
          {NewsItemsData.map((item) => {
            return (
              <NewItems
                date={item.date}
                title={item.title}
                text={item.text}
                image={item.image}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </Meta>
  );
};

export default News;
