import "./Burger.scss";

function Burger({ handleClick }) {
  return (
    <div className="Burger" onClick={handleClick}>
      <div className="Burger__line"></div>
      <div className="Burger__line"></div>
      <div className="Burger__line"></div>
    </div>
  );
}

export default Burger;
