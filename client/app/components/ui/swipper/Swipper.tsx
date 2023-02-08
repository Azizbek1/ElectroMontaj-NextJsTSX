import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

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
              <div>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <Image
                  src={`/jpg/${item.images}`}
                  alt="jpg"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SipperSlider;
