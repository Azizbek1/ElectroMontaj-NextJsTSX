import React from "react";
import styles from "./servises.module.scss";
import Image from "next/image";
import { IServises } from "@/components/fakeData/servises/servises.types";
export default function ServisesItem({ image, title, id }: IServises) {
  return (
    <div className={styles.item} key={id}>
      <div className={styles.itemImage}>
        <Image src={`/png/${image}`} alt="png" width={60} height={60} />
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}
