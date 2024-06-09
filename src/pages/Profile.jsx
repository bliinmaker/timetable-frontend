import React, { useEffect, useState } from "react";
import axios from "axios";

export const Profile = () => {
  const [user, setUser] = useState([]);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userResponse = await axios.get("http://127.0.0.1:8000/api/user/");
      setUser(userResponse.data.user);

      if (userResponse) {
        const studentResponse = await axios.get(
          `http://127.0.0.1:8000/api/user/${userResponse.data.user.id}/student/`
        );
        setStudent(studentResponse.data);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  return (
    <div className="student">
      <div className="student__up">
        <div className="student-wrap-text">
          <h1 className="student__title">личный кабинет</h1>
        </div>
      </div>
      {student && student.group && (
        <div className="student__content">
          <p className="student__content__title">Данные обо мне</p>
          <p> <span>имя:</span> {student.full_name}</p>
          <p> <span>группа:</span> {student.group.title}</p>
          <p> <span>факультет:</span> {student.group.faculty.title}</p>
          <p className="student__content__title student__content__title_extra">Предметы моей группы</p>
          {student.group.subjects.map((subject) => (
            <p key={subject.id}>- {subject.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

