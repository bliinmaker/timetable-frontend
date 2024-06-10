import React, { useEffect, useState } from "react";
import axios from "axios";

export const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userResponse = await axios.get("http://127.0.0.1:8000/api/user/");
      if (userResponse) {
        if (userResponse) {
          axios
            .get(
              `http://127.0.0.1:8000/api/user/${userResponse.data.user.id}/student/`
            )
            .then((response) => {
              setUser(response.data);
            })
            .catch(
              axios
                .get(
                  `http://127.0.0.1:8000/api/user/${userResponse.data.user.id}/teacher/`
                )
                .then((response) => {
                  setUser(response.data);
                })
            );
        }
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
      {user && user.group && (
        <div className="student__content">
          <p className="student__content__title">Данные обо мне</p>
          <p>
            <span>имя:</span> {user.full_name}
          </p>
          <p>
            <span>группа:</span> {user.group.title}
          </p>
          <p>
            <span>факультет:</span> {user.group.faculty.title}
          </p>
          <p className="student__content__title student__content__title_extra">
            Предметы моей группы
          </p>
          {user.group.subjects.map((subject) => (
            <p key={subject.id}>- {subject.title}</p>
          ))}
        </div>
      )}
      {user && user.subjects && (
        <div className="student__content">
          <p className="student__content__title">Данные обо мне</p>
          <p>
            <span>имя:</span> {user.full_name}
          </p>
          <p className="student__content__title student__content__title_extra">
            Предметы
          </p>
          {user.subjects.map((subject) => (
            <p key={subject.id}>- {subject.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

