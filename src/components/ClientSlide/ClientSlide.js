
import "./ClientSlide.scss";

function ClientSlide({ logo, url }) {
  return (

    <div className="ClientSlide">
      <a href={url} className="ClientSlide__link">
        <img src={logo} alt="Логотип клиента" className="ClientSlide__image" />
      </a>
    </div>

  );
}

export default ClientSlide;
