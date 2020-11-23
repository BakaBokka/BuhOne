import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceGrid from "../ServiceGrid/ServiceGrid";
import "./Service.scss";

function Service({cards}) {
  
const subtitleStyles = {
  marginTop: "0",
  marginBottom: "100px",
}

  return (
    <section className="Service">
      <div className="Service__content">
        <SectionTitle text={"Наши услуги"}/>
        <SectionSubtitle text={"Мы специализируемся"} style={subtitleStyles}/>
        <ServiceGrid cardsArr={cards}/>
      </div>
    </section>
  );
}

export default Service;
