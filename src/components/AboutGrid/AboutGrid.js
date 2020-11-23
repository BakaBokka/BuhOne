import AboutCard from "../AboutCard/AboutCard";
import "./AboutGrid.scss";
function AboutGrid({ cardsArr }) {
  
  const cards = cardsArr.map((card) => (
    <AboutCard
      text={card.text}
      number={card.number}
      key={card.id}
      link={card.link}
      url={card.url}
    />
  ));

  return <ul className="AboutGrid">{cards}</ul>;
}

export default AboutGrid;
