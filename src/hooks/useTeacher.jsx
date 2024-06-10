// В файле useAuth.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export const useTeacher = () => {
  const [isTeacher, setIsTeacher] = useState(false);
  const [isLoadingTeacher, setIsLoadingTeacher] = useState(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const userResponse = await axios.get("http://127.0.0.1:8000/api/user/");
        if (userResponse) {
          await axios.get(
            `http://127.0.0.1:8000/api/user/${userResponse.data.user.id}/teacher/`
          );
          setIsTeacher(true);
        }
      } catch (error) {
        console.error(error);
        setIsTeacher(false);
      } finally {
        setIsLoadingTeacher(false);
      }
    };

    checkUserStatus();
  }, []);

  return { isTeacher, isLoadingTeacher };
};

