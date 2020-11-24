import "./Button.scss";

function Button({text, style}) {

return <button className="Button" type="submit" style={style}>{text}</button>;
}

export default Button;
