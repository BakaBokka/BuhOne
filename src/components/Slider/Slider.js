import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./Slider.scss";

SwiperCore.use([Navigation, Pagination]);

function Slider({ slides, spaceBetween, slidesPerView }) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      navigation
      loop
      // centeredSlides
      // slidesPerGroup= {3}

    >
      {slides}
    </Swiper>
  );
}

export default Slider;
