import React, { useState, useEffect, useMemo, useCallback } from "react";
import { EventItem } from "../components/eventItem/EventItem";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export const Timetable = () => {
  const [student, setStudent] = useState([]);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userResponse = await axios.get("http://127.0.0.1:8000/api/user/");

      if (userResponse) {
        const studentResponse = await axios.get(
          `http://127.0.0.1:8000/api/user/${userResponse.data.user.id}/student/`
        );
        setStudent(studentResponse.data);
        console.log(studentResponse.data.group.title);
        const lessonsResponse = await axios.get(
          "http://127.0.0.1:8000/api/lessons"
        );
        setLessons(lessonsResponse.data);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  const filteredLessons =
    lessons && student
      ? lessons.filter((lesson) => lesson.group.title === student.group.title)
      : [];

  const events = filteredLessons.map((lesson) => ({
    id: lesson.id,
    title: lesson.subject.title,
    start: lesson.start_time,
    end: lesson.end_time,
    extendedProps: {
      subjectTitle: lesson.subject.title,
      teacherFullName: lesson.teacher.full_name,
      groupTitle: lesson.group.title,
    },
  }));

  return (
    <div className="timetable">
      <div className="timetable__up">
        <div className="timetable-wrap-text">
          <h1 className="timetable__title">расписание</h1>
        </div>
        <div className="timetable__userinfo">
          {student && student?.group?.title
            ? `${student.full_name} - ${student.group.title}`
            : ""}
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "timeGridWeek,timeGridDay",
        }}
        buttonText={{
          today: "сегодня",
          month: "месяц",
          week: "неделя",
          day: "день",
          list: "лист",
        }}
        events={events}
        eventContent={({ event }) => (
          <EventItem
            subjectTitle={event.extendedProps.subjectTitle}
            teacherFullName={event.extendedProps.teacherFullName}
            groupTitle={event.extendedProps.groupTitle}
          />
        )}
        locale="ru"
        locales={["ru"]} // Добавьте русскую локаль
        localeOptions={{
          titles: {
            today: "cегодня", // Переопределение строки "today"
          },
        }}
        timeZone="Europe/Moscow"
        slotMinTime="9:00:00"
        slotMaxTime="21:00:00"
        firstDay={1}
        hiddenDays={[0]}
        eventBackgroundColor="#8090c4"
        slotDuration="00:15:00"
      />
    </div>
  );
};

