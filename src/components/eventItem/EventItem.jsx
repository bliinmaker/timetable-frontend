import React from "react";

export const EventItem = ({ subjectTitle, teacherFullName, groupTitle }) => {
  return (
    <div
      style={{
        backgroundColor: "#8090c4",
        color: "white",
        padding: "10px",
        display: "grid",
        gap: "10px",
        fontSize: "0.8rem",
      }}
    >
      <p style={{ fontSize: "1rem" }}>{subjectTitle}</p>
      <p>Учитель: {teacherFullName}</p>
      <p>{groupTitle}</p>
    </div>
  );
};
