import "./AboutCard.scss";

function AboutCard({ text, number, link, url }) {
  return (
    <li className="AboutCard">
      <p className="AboutCard__number">{number}</p>
      <p className="AboutCard__text">{text}</p>
      <a className="AboutCard__link" href={url}>
        {link}
      </a>
    </li>
  );
}

export default AboutCard;
