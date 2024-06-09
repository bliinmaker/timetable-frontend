// В файле useAuth.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoadingAuth, setIiLoadingAuth] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/session/");
        setIsAuth(response.data.isAuthenticated);
      } catch (error) {
        console.error("Ошибка при проверке статуса авторизации:", error);
        setIsAuth(false);
      } finally {
        setIiLoadingAuth(false);
      }
    };

    checkAuthStatus();
  }, []);

  return { isAuth, isLoadingAuth };
};

