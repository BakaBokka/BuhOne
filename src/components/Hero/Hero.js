import Button from "../Button/Button";
import "./Hero.scss";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider/Slider";

function Hero() {
  //Стили для кнопки
  const buttonStyle = {
    marginBottom: "120px",
  };

  const sliderStyles = {
    backgroundColor: "rgba(0, 95, 163, 0.2);",
  };


  const breakpoints = {};

  //Массив во слайдами
  const slides = [];
  for (let i = 0; i < 4; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <Button text={"Наша презентация"} margin={buttonStyle} />
        ...
      </SwiperSlide>
    );
  }

  return (
    <section className="Hero">
      <div className="Hero__content">
        <h1 className="Hero__title">Бухгалтерские услуги в Санкт-Петербурге</h1>
        <Slider slides={slides} slidesPerView={1} breakpoints={breakpoints} />

      </div>
    </section>
  );
}

export default Hero;
