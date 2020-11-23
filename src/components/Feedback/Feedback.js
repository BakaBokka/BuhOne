import "./Feedback.scss";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import FeedbackSlide from "../FeedbackSlide/FeedbackSlide";

import { SwiperSlide } from "swiper/react";

import Slider from "../Slider/Slider";

function Feedback({ feedback }) {
  const subtitleStyles = {
    marginTop: "0",
    marginBottom: "80px",
  };

  const breakpoints = {};

  const slides = feedback.map((feedback) => (
    <SwiperSlide key={feedback.id}>
      <FeedbackSlide
        ava={feedback.ava}
        text={feedback.text}
        name={feedback.name}
        caption={feedback.caption}
      />
    </SwiperSlide>
  ));
  return (
    <section className="Feedback">
      <div className="Feedback__content">
        <SectionTitle text={"Отзывы"} />
        <SectionSubtitle text={"Ваши благодарности"} style={subtitleStyles} />
        <Slider slides={slides} slidesPerView={1} breakpoints={breakpoints} />
      </div>
    </section>
  );
}

export default Feedback;
