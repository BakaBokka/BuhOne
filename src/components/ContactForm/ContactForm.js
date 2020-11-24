import React, { useState } from "react";
import Button from "../Button/Button";
import { useFormik } from "formik";
import classNames from "classnames/bind";
import "./ContactForm.scss";

//Стили для кнопки
const buttonStyle = {
  position: " absolute",
  bottom: "-110px",
  right: "0",
};

const ContactForm = () => {
  const [isInvalid, setInvalid] = useState(false);

  //Валидация
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Это обязательное поле";
      setInvalid(true);
    } else if (values.firstName.length > 20) {
      errors.firstName = "Ой, больше 20 символов нельзя";
      setInvalid(true);
    }

    if (!values.lastName) {
      errors.lastName = "Это обязательное поле";
      setInvalid(true);
    } else if (values.lastName.length > 20) {
      errors.lastName = "Ой, больше 20 символов нельзя";
      setInvalid(true);
    }

    if (!values.userMessage) {
      errors.userMessage = "Это обязательное поле";
      setInvalid(true);
    } else if (!/^[а-яА-ЯёЁa-zA-Z0-9\s]+$/i.test(values.userMessage)) {
      errors.userMessage = "Только буквы или цифры, пожалуйста";
      setInvalid(true);
    } else if (values.userMessage.length > 100) {
      errors.userMessage = "Ой, больше 100 символов нельзя";
      setInvalid(true);
    }

    return errors;
  };

  //Класс подсвечивает поле красным, если валидация провалилась
  const validClass = [{ ContactForm__input_invalid: isInvalid === true }];

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
    <form
      className="ContactForm__form"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <div className="ContactForm__content">
        <div className="ContactForm__container">
          <div className="ContactForm__inputs">
            <label className="ContactForm__label" htmlFor="firstName">
              Имя
            </label>
            <input
              className={classNames(
                "ContactForm__input",
                formik.touched.firstName && formik.errors.firstName
                  ? validClass
                  : ""
              )}
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              maxLength="21"
              placeholder="Иван"
            />
            <div className="ContactForm__error">
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
          </div>
          <div className="ContactForm__inputs">
            <label className="ContactForm__label" htmlFor="lastName">
              Фамилия
            </label>
            <input
              className={classNames(
                "ContactForm__input",
                formik.touched.lastName && formik.errors.lastName
                  ? validClass
                  : ""
              )}
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              maxLength="21"
              placeholder="Иванов"
            />
            <div className="ContactForm__error">
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
        </div>

        <label className="ContactForm__label" htmlFor="userMessage">
          Сообщение
        </label>
        <textarea
          className={classNames(
            "ContactForm__textarea",
            formik.touched.userMessage && formik.errors.userMessage
              ? validClass
              : ""
          )}
          id="userMessage"
          name="userMessage"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userMessage}
          maxLength="101"
          placeholder="Ваше сообщение"
        />
        <div className="ContactForm__error ContactForm__error_textarea">
          {formik.touched.userMessage && formik.errors.userMessage ? (
            <div>{formik.errors.userMessage}</div>
          ) : null}
        </div>
      </div>
      <Button
        className="ContactForm__button"
        text={"Отправить сообщение"}
        style={buttonStyle}
      />
    </form>
  );
};

export default ContactForm;
