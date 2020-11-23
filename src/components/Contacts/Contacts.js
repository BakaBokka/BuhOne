import Button from "../Button/Button";
import phone from "../../images/whitephone-ico.svg";
import mail from "../../images/whitemail-ico.svg";
import "./Contacts.scss";

import ContactForm from "../ContactForm/ContactForm";

function Contacts() {
  return (
    <section className="Contacts">
      <div className="Contacts__content">
        <div className="Contacts__container">
          <div className="Contacts__info">
            <h2 className="Contacts__title">Связь с нами</h2>
            <p className="Contacts__text">
              У вас остались вопросы? Напишите нам - мы ответим в ближайшее
              время!
            </p>
            <ul className="Contacts__list">
              <li className="Contacts__list-item">
                <a href="tel:+71112223344" className="Contacts__list-link">
                  <img
                    src={phone}
                    alt="Иконка телефона"
                    className="Contacts__list-ico"
                  />{" "}
                  +7 (111) 222-33-44
                </a>
              </li>
              <li className="Contacts__list-item">
                <a
                  href="mailto:order@bu-one.ru"
                  className="Contacts__list-link"
                >
                  <img
                    src={mail}
                    alt="Иконка email"
                    className="Contacts__list-ico"
                  />{" "}
                  order@bu-one.ru
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>

        <Button text={"Отправить сообщение"} />
      </div>
    </section>
  );
}

export default Contacts;
