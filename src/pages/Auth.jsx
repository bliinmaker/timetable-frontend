import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/UNiVERSiTY.svg";
import "../index.css";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

const formValidationSchema = yup.object({
  email: yup
    .string()
    .email("Введите верный email")
    .required("Поле Email обязательно"),
  password: yup.string().required("Поле Пароль обязательно"),
});

export const Auth = () => {
  const navigation = useNavigate();
  const isAuth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const values = {
      email: email,
      password: password,
    };
    try {
      if (isAuth) {
        await client.post("/api/logout/", values);
      }
      await client.post("/api/login/", values);
      navigation("/");
    } catch (error) {
      console.error("Ошибка при авторизации:", error);
      alert("Пользователь не найден");
    }
  };

  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="auth__logo">
          <img src={Logo} alt="University Logo" />
        </div>
        <h3 className="auth__title">Авторизация</h3>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={formValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <form className="auth__form" onSubmit={handleSubmit}>
              <div className="auth__form__item">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ваш email"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                style={{
                  color: "tomato",
                  fontSize: "10px",
                  fontWeight: "600",
                  textAlign: "left",
                  width: "100%",
                  marginBottom: "5px",
                }}
              />
              <div className="auth__form__item">
                <label htmlFor="password">Пароль</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Ваш пароль"
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                style={{
                  color: "tomato",
                  fontSize: "10px",
                  fontWeight: "600",
                  textAlign: "left",
                  width: "100%",
                  marginBottom: "5px",
                }}
              />
              <div className="auth__form__send">
                <button
                  type="submit"
                  style={{ backgroundColor: isSubmitting ? "#929292" : "#000" }}
                  disabled={isSubmitting}
                >
                  Войти
                </button>
              </div>
            </form>
          )}
        </Formik>
        <p className="auth__text">
          нет аккаунта?
          <Link className="auth__link" to="/register">
            <span> Зарегистрироваться</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
