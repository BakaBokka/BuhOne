import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./Slider.scss";

SwiperCore.use([Navigation, Pagination]);

function Slider({ slides, slidesPerView, breakpoints }) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}

      loop
      breakpoints={breakpoints}
      navigation
      
    >
      {slides}
    </Swiper>
  );
}

export default Slider;
