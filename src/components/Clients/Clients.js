import "./Clients.scss";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import ClientSlide from "../ClientSlide/ClientSlide";

import { SwiperSlide } from "swiper/react";

import Slider from "../Slider/Slider";

function Clients({ clients }) {
  const subtitleStyles = {
    marginTop: "0",
    marginBottom: "80px",
  };




  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    1080: {
      // width: 1080,

      slidesPerView: 3,
    },
    1600: {
      // width: 1600,

      slidesPerView: 4,
    },


  }

  const slides = clients.map((client) => (
    <SwiperSlide  key={client.id} tag={"li"} >


      <ClientSlide logo={client.logo} url={client.url}/>
    </SwiperSlide>
  ));
  return (
    <section className="Clients" id="anc3">
      <div className="Clients__content">
        <SectionTitle text={"Наши клиенты"} />
        <SectionSubtitle text={"С нами работают"} style={subtitleStyles} />
        <Slider slides={slides}  slidesPerView={4} breakpoints={breakpoints} tag={"ul"} />
      </div>
    </section>
  );
}

export default Clients;
