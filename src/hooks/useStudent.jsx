// В файле useAuth.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export const useStudent = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [isLoadingStudent, setIsLoadingStudent] = useState(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const userResponse = await axios.get("http://127.0.0.1:8000/api/user/");
        if (userResponse) {
          await axios.get(
            `http://127.0.0.1:8000/api/user/${userResponse.data.user.id}/student/`
          );
          setIsStudent(true);
        }
      } catch (error) {
        console.error(error);
        setIsStudent(false);
      } finally {
        setIsLoadingStudent(false);
      }
    };

    checkUserStatus();
  }, []);

  return { isStudent, isLoadingStudent };
};

