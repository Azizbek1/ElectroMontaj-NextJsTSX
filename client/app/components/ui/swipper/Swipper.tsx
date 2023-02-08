import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

import styles from "./swiper.module.scss";
const SipperSlider = ({ slide }: any) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        modules={[Pagination, /* Autoplay, */ Navigation]}
        className="mySwiper"
      >
        {slide.map((item: any, index: any) => (
          <SwiperSlide key={index}>
            <div className={styles.slider}>
              <div className={styles.absolyute}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.text}>{item.text}</p>
              </div>
              <div className={styles.images}>
                <Image
                  src={`/jpg/${item.images}`}
                  alt="jpg"
                  width="100%"
                  height={600}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SipperSlider;
