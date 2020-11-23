import "./Header.scss";
import logo from "../../images/logo.svg";
import phoneIco from "../../images/phone-ico.png";
import timeIco from "../../images/time-ico.png";
import mailIco from "../../images/mail-ico.png";
import locationIco from "../../images/location-ico.png";

function Header() {
  return (
    <header className="Header">
      <div className="Header__content">
        <a href="#s">
          <img src={logo} alt="Логотип BuhOne" className="Header__logo" />
        </a>
        <nav className="Header__nav">
          <ul className="Header__contacts">
            <li className="Header__contacts-item">
              <a href="tel:+71112223344" className="Header__contacts-link">
              <img src={phoneIco} alt="Иконка телефона" className="Header__nav-ico"/>
                8 (111) 222-33-44
              </a>
            </li>
            <li className="Header__contacts-item">
              <a href="#s" className="Header__contacts-link">
                <img src={timeIco} alt="Иконка Часы Работы" className="Header__nav-ico"/>
                Пн-Пт 10:00-18:00
              </a>
            </li>
            <li className="Header__contacts-item">
              <a href="mailto:order@buhone.ru" className="Header__contacts-link">
              <img src={mailIco} alt="Иконка e-mail" className="Header__nav-ico"/>
                order@buhone.ru
              </a>
            </li>
            <li className="Header__contacts-item">
              <a href="https://yandex.ru/maps/-/CCUArAar2B" className="Header__contacts-link" target="_blank" rel="noreferrer" >
              <img src={locationIco} alt="Иконка адрес" className="Header__nav-ico"/>
                Невский пр. 130
              </a>
            </li>
          </ul>
          <ul className="Header__menu">
            <li className="Header__menu-item">
              <a href="#anc1" className="Header__menu-link">
                Главная
              </a>
            </li>
            <li className="Header__menu-item">
              <a href="#anc2" className="Header__menu-link">
                услуги
              </a>
            </li>
            <li className="Header__menu-item">
              <a href="#anc3" className="Header__menu-link">
                кейсы
              </a>
            </li>
            <li className="Header__menu-item">
              <a href="#anc4" className="Header__menu-link">
                о компании
              </a>
            </li>
            <li className="Header__menu-item">
              <a href="#anc5" className="Header__menu-link">
                контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
