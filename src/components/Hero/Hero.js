import Button from "../Button/Button";
import "./Hero.scss";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider/Slider";

function Hero() {
  //Стили для кнопки
  const buttonStyle = {
    marginBottom: "120px",

  };

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
        <Slider slides={slides} spaceBetween={0} slidesPerView={1} />
      </div>
    </section>
  );
}

export default Hero;
