// В файле ProtectedRoute.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useStudent } from "../../hooks/useStudent";
import { useTeacher } from "../../hooks/useTeacher";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth, isLoadingAuth } = useAuth();
  const { isStudent, isLoadingStudent } = useStudent();
  const { isTeacher, isLoadingTeacher } = useTeacher();

  useEffect(() => {
    if (!isAuth && !isLoadingAuth) {
      navigate("/auth");
    }
    if (
      isAuth &&
      !isStudent &&
      !isLoadingStudent &&
      !isTeacher &&
      !isLoadingTeacher
    ) {
      navigate("/waitingForAccess");
    }
  }, [
    isAuth,
    isLoadingAuth,
    isStudent,
    isLoadingStudent,
    isTeacher,
    isLoadingTeacher,
    navigate,
  ]);

  return (
    <>{!isLoadingAuth && isAuth && (isStudent || isTeacher) && children}</>
  );
};

