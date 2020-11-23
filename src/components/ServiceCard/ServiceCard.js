import "./ServiceCard.scss";
import React, { useState } from "react";
import classNames from "classnames/bind";

function ServiceCard({ text, style, link }) {
  const [hover, setHover] = useState(false);

  const handleHoverOn = () => {
    setHover(true);
  };

  const handleHoverOff = () => {
    setHover(false);
  };

  let hoverClass = [{ ServiceCard_hover: hover === true }];

  return (
    <li
      className={classNames("ServiceCard", hoverClass)}
      style={style}
      onMouseOver={handleHoverOn}
      onMouseOut={handleHoverOff}
    >
      <a className="ServiceCard__link" href={link}>
        <h3 className="ServiceCard__title">{text}</h3>
      </a>
    </li>
  );
}

export default ServiceCard;
