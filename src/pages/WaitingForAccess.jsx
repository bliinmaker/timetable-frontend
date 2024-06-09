import React from "react";
import { Link } from "react-router-dom";

export const WaitingForAccess = () => {
  return (
    <div className="waiting">
      <h1 className="waiting__title">Ожидайте подтверждения профиля</h1>
      <Link className="waiting__link" to="/auth">
        <span>Авторизоваться</span>
      </Link>
    </div>
  );
};

