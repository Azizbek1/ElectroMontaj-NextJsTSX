import { ReactNode } from 'react';

import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}
// Import Swiper styles
import "swiper/css";
const SliderPage = ({ settings, children }: SliderProps) => {
  return (
    <>
      <Swiper>
          {children}
      </Swiper>
    </>
  );
};

export default SliderPage;
