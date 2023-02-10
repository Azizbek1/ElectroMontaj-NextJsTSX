import { FC } from "react";
import styles from "./news.module.scss";
const News: FC = () => {
  return (
    <div>
      <h2>Новости</h2>
      <div>
        <div className="item">
          <div>Image</div>
          <div>
            <span>20.09.2017</span>
            <a href="#">Организационной деятельности позволяет оценить</a>
            <p>Равным образом сложившаяся структура организации представляет собой интересный</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
