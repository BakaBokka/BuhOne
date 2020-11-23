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

  const slides = clients.map((client) => (
    <SwiperSlide  key={client.id} >


      <ClientSlide logo={client.logo} url={client.url}/>
    </SwiperSlide>
  ));
  return (
    <section className="Clients">
      <div className="Clients__content">
        <SectionTitle text={"Наши клиенты"} />
        <SectionSubtitle text={"С нами работают"} style={subtitleStyles} />
        <Slider slides={slides} spaceBetween={30} slidesPerView={4} />
      </div>
    </section>
  );
}

export default Clients;
