import "./ServiceGrid.scss";
import ServiceCard from "../ServiceCard/ServiceCard";
function ServiceGrid({ cardsArr }) {

  const cards = cardsArr.map((card) => (
    <ServiceCard text={card.text} style={card.style} key={card.id} link={card.link} />
  ));

  return (
    <ul className="ServiceGrid">

      {cards}
    </ul>
  );
}

export default ServiceGrid;
