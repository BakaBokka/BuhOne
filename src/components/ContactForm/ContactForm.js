import React from "react";
import Button from "../Button/Button";
import { useFormik } from "formik";
import "./ContactForm.scss";

//Стили для кнопки
const buttonStyle = {
  position: " absolute",
  bottom: "-110px",
  right: "0",
};

//Валидация
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Это обязательное поле";
  } else if (values.firstName.length > 20) {
    errors.firstName = "Ой, больше 20 символов нельзя";
  }

  if (!values.lastName) {
    errors.lastName = "Это обязательное поле";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Ой, больше 20 символов нельзя";
  }

  if (!values.userMessage) {
    errors.userMessage = "Это обязательное поле";
  } else if (!/^[а-яА-ЯёЁa-zA-Z0-9\s]+$/i.test(values.userMessage)) {
    errors.userMessage = "Только буквы или цифры, пожалуйста";
  }else if (values.userMessage.length > 100) {
    errors.userMessage = "Ой, больше 100 символов нельзя";
  }

  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userMessage: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="ContactForm__form" onSubmit={formik.handleSubmit}>
      <div className="ContactForm__content">
        <div className="ContactForm__container">
          <div className="ContactForm__inputs">
            <label className="ContactForm__label" htmlFor="firstName">
              Имя
            </label>
            <input
              className="ContactForm__input"
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              maxLength="21"
              placeholder="Иван"
            />
            <div className="ContactForm__error">
              {formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
          </div>
          <div className="ContactForm__inputs">
            <label className="ContactForm__label" htmlFor="lastName">
              Фамилия
            </label>
            <input
              className="ContactForm__input"
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              maxLength="21"
              placeholder="Иванов"
            />
            <div className="ContactForm__error">
              {formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
        </div>

        <label className="ContactForm__label" htmlFor="userMessage">
          Сообщение
        </label>
        <textarea
          className="ContactForm__textarea"
          id="userMessage"
          name="userMessage"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userMessage}
          maxLength="101"
          placeholder="Ваше сообщение"
        />
        <div className="ContactForm__error ContactForm__error_textarea">
          {formik.errors.userMessage ? (
            <div>{formik.errors.userMessage}</div>
          ) : null}
        </div>
      </div>
      <Button className="ContactForm__button" text={"Отправить сообщение"} style={buttonStyle}/>
    </form>
  );
};

export default ContactForm;
