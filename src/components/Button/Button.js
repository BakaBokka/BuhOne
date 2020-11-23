import "./Button.scss";

function Button({text, margin}) {

return <button className="Button" style={margin}>{text}</button>;
}

export default Button;
