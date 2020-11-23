import React from "react";
import { useFormik } from "formik";
import "./ContactForm.scss";

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
  }

  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "Иван",
      lastName: "Иванов",
      userMessage: "Ваше сообщение",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
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
        />
        <div className="ContactForm__error ContactForm__error_textarea">
          {formik.errors.userMessage ? (
            <div>{formik.errors.userMessage}</div>
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
