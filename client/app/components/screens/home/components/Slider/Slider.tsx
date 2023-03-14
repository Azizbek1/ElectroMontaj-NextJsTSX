import SipperSlider from "@/components/ui/swipper/Swipper";
import React from "react";
import styles from "./slider.module.scss";
export default function Slider(props: any) {
  const {items} = props
  return (
    <div className={styles.slider}>
      <SipperSlider slide={items} />
    </div>
  );
}
