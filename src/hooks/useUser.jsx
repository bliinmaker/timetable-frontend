// В файле useAuth.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export const useUser = () => {
  const [isUser, setIsUser] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const userResponse = await axios.get("http://127.0.0.1:8000/api/user/");
        if (userResponse) {
          await axios.get(
            `http://127.0.0.1:8000/api/user/${userResponse.data.user.id}/student/`
          );
          setIsUser(true);
        }
      } catch (error) {
        console.error(error);
        setIsUser(false);
      } finally {
        setIsLoadingUser(false);
      }
    };

    checkUserStatus();
  }, []);

  return { isUser, isLoadingUser };
};

