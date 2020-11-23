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

  if (!values.message) {
    errors.message = "Это обязательное поле";
  } else if (values.message.length > 100) {
    errors.message = "Ой, больше 100 символов нельзя";
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.message)) {
    errors.message = 'Invalid message address';
  }
  // else if (!/^[а-яА-ЯёЁa-zA-Z0-9]+$/i.test(values.message)) {
  //   errors.message = "Только буквы или цифры, пожалуйста";
  // }

  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "Иван",
      lastName: "Иванов",
      message: "Ваше сообщение",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },    
  });
  return (
    <form className="ContactForm__form" onSubmit={formik.handleSubmit}>
      <div className="ContactFrom__content">
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

        <label className="ContactForm__label" htmlFor="message">
          Сообщение
        </label>
        <textarea
          className="ContactForm__textarea"
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          maxLength="101"
          // pattern="!/^[а-яА-ЯёЁa-zA-Z0-9]+$/i"
        />
        <div className="ContactForm__error">
          {formik.errors.message ? <>{formik.errors.message}</> : null}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
