import { FC } from "react";
import { Meta } from "@/utils/meta";
import styles from "./about.module.scss";
import TopTextContainer from "./components/TopText/TopTextContainer";
const About: FC = () => {
  return (
    <Meta title="О компани" description="">
      <div className={styles.about}>
        <TopTextContainer />
      </div>
    </Meta>
  );
};

export default About;
