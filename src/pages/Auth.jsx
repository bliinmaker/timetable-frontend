import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Logo from "../assets/UNiVERSiTY.svg";
import "../index.css";
import LoginGithub from "react-login-github";


const formCommentSchema = yup.object().shape({
  email: yup.string().required("Поле Email необходимо заполнить"),
  password: yup.string().required("Поле Пароль необходимо заполнить"),
});
export const Auth = () => {
  function onSuccess(e) {
    fetch("http://127.0.0.1:8000/github/", {
      method: "POST",
      body: JSON.stringify({ auth_token: e.code }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.json())
      // .then((response) => {
      //   document.getElementById("email_id").innerText = response["email"];
      //   document.getElementById("auth_token").innerText = response["tokens"];
      // });
  }
  function onFailure(e) {
    alert(e);
  }

  const onSubmitHandlerComment = async (values, { resetForm }) => {
    const { email, password } = values;
    console.log(values);

    // createComment(histPlaceId, {
    // 	email,
    // 	password,
    // }).then(resp => {
    // 	console.log(resp)

    // 	getHistPlace(histPlaceId).then(resp => {
    // 		if (resp.status === 200) {
    // 			setCommentsFresh(resp.data.comments)
    // 		}
    // 	})
    // 	resetForm()
    // })
  };

  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="auth__logo">
          <img src={Logo} alt="" />
        </div>
        <h3 className="auth__title">авторизоваться</h3>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={formCommentSchema}
          onSubmit={onSubmitHandlerComment}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className="auth__form" onSubmit={handleSubmit} method="post">
              {touched.email && errors.email && (
                <span style={{ color: "tomato" }}>{errors.email}</span>
              )}
              <div className="auth__form__item">
                <p>email</p>
                <input
                  value={values.nickName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ваш email"
                  type="text"
                  name="email"
                ></input>
              </div>
              {touched.password && errors.password && (
                <span style={{ color: "tomato" }}>{errors.password}</span>
              )}
              <div className="auth__form__item">
                <p>введите пароль</p>
                <input
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="password"
                  placeholder="Ваш пароль"
                ></input>
              </div>
              <div className="auth__form__send">
                <button type="submit">войти</button>
              </div>
            </form>
          )}
        </Formik>
		<p className="auth__text">
          нет аккаунта?
          <Link className="auth__link" to="/register">
            <span>Зарегистрироваться</span>
          </Link>
        </p>
      <LoginGithub
        clientId="1ba9607aaa7690399da2"
        onSuccess={onSuccess}
        onFailure={onFailure}
        className="github"
      >
        <h2 className="github-name">Войти через github</h2>
      </LoginGithub>
	  </div>
    </div>
  );
};
