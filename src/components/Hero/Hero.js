import Button from "../Button/Button";
import "./Hero.scss";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider/Slider";

function Hero() {
  //Стили для кнопки
  const buttonStyle = {
    marginBottom: "120px",
  };

  const breakpoints = {};

  //Массив во слайдами
  const slides = [];
  for (let i = 0; i < 4; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <Button text={"Наша презентация"} style={buttonStyle} />
        ...
      </SwiperSlide>
    );
  }

  return (
    <section className="Hero" id="anc1">
      <div className="Hero__content">
        <h1 className="Hero__title">Бухгалтерские услуги в Санкт-Петербурге</h1>
        <Slider slides={slides} slidesPerView={1} breakpoints={breakpoints} />
      </div>
    </section>
  );
}

export default Hero;
