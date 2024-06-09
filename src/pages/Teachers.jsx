import React, { useEffect, useState } from "react";
import axios from "axios";

export const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/teachers/");
      setTeachers(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  return (
    <div className="teachers">
      <div className="teachers__up">
        <div className="teachers-wrap-text">
          <h1 className="teachers__title">наши учителя</h1>
        </div>
      </div>
      <div className="teachers__content">
        {teachers &&
          teachers.map((teacher) => (
            <div className="teacher__card" key={teacher.id}>
              <p className="teacher__card__teacher">{teacher.full_name}</p>
              {teacher.subjects.map((subject) => (
                <p className="teacher__card__subject" key={subject.id}>
                  {subject.title}
                </p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
