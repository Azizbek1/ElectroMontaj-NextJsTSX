import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

import styles from "./swiper.module.scss";
import { Htag } from "@/components/elements/Htag/Htag";
const SipperSlider = ({ slide }: any) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {slide.map((item: any, index: any) => (
          <SwiperSlide key={index}>
            <div className={styles.slider}>
              <div className={styles.absolyute}>
                <Htag tag="h1">{item.name}</Htag>
                <Htag tag="h4">{item.slogan}</Htag>
              </div>
              <div className={styles.images}>
                <Image
                  src={`${item.url}`}
                  alt="jpg"
                  width={1400}
                  height={600}
                  quality={100}
                  layout="responsive"
                  priority
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
