import SipperSlider from "@/components/ui/swipper/Swipper";
import React from "react";
import styles from "./slider.module.scss";
import { sliders } from "@/components/fakeData/sliders/slider";
export default function Slider() {
  return (
    <div className={styles.slider}>
      <SipperSlider slide={sliders} />
    </div>
  );
}
