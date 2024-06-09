// В файле ProtectedRoute.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth, isLoadingAuth } = useAuth();
  const { isUser, isLoadingUser } = useUser();

  useEffect(() => {
    if (!isAuth && !isLoadingAuth) {
      navigate("/auth");
    }
    if (!isUser && !isLoadingUser) {
      navigate("/waitingForAccess");
    }
  }, [isAuth, isLoadingAuth, isUser, isLoadingUser, navigate]);

  return (
    <>{!isLoadingAuth && !isLoadingUser && isAuth && isUser && children}</>
  );
};

