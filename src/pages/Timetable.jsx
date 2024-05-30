import React from "react";
import arrows from "../assets/arrows.svg";

const Timetable = () => {
  // useEffect(() => {
  //     if(localStorage.getItem('access_token') === null){
  //         window.location.href = '/auth'
  //     }
  //     else{
  //      (async () => {
  //        try {
  //          const {data} = await axios.get(
  //                         'http://localhost:8000/home/', {
  //                          headers: {
  //                             'Content-Type': 'application/json'
  //                          }}
  //                        );
  //          setMessage(data.message);
  //       } catch (e) {
  //         console.log('not auth')
  //       }
  //      })()};
  //  }, []);
  return (
    <div className="timetable">
      <div className="timetable__up">
        <div className="timetable-wrap-text">
          <h1 className="timetable__title">расписание</h1>
          <div className="timetable-wrap-text__wrap">
            <p className="timetable__text">
              16-22 <span>октября</span>
            </p>
            <img src={arrows} alt="" />
          </div>
        </div>
        <div className="timetable__userinfo">И.И.Иванова - 1-11-23</div>
      </div>
      <div className="timetable__down">
        <div className="timetable__down__time">
          <p className="timetable__down__time__text">
            9:00<span>10:30</span>
          </p>
          <p className="timetable__down__time__text">
            10:45<span>12:15</span>
          </p>
          <p className="timetable__down__time__text">
            13:15<span>14:45</span>
          </p>
          <p className="timetable__down__time__text">
            15:00<span>16:30</span>
          </p>
          <p className="timetable__down__time__text">
            16:45<span>18:15</span>
          </p>
          <p className="timetable__down__time__text">
            18:30<span>20:00</span>
          </p>
        </div>
        <div className="timetable__down__items">
          <h3>Понедельник</h3>
          {/* {Response.map(() => {
                    <div className="timetable__down__item">

                    </div>
                })} */}
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
           
          </div>
        </div>
        <div className="timetable__down__items">
          <h3>Вторник</h3>
          {/* {Response.map(() => {
                    <div className="timetable__down__item">

                    </div>
                })} */}
          <div className="timetable__down__item timetable__down__item_extra">
           
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
           
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
        </div>
        <div className="timetable__down__items">
          <h3>Среда</h3>
          {/* {Response.map(() => {
                    <div className="timetable__down__item">

                    </div>
                })} */}
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
           
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
          
          </div>
        </div>
        <div className="timetable__down__items">
          <h3>Четверг</h3>
          {/* {Response.map(() => {
                    <div className="timetable__down__item">

                    </div>
                })} */}
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
           
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
            
          </div>
        </div>
        <div className="timetable__down__items">
          <h3>Пятница</h3>
          {/* {Response.map(() => {
                    <div className="timetable__down__item">

                    </div>
                })} */}
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
           
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
            
          </div>
          <div className="timetable__down__item timetable__down__item_extra ">
            
          </div>
        </div>
        <div className="timetable__down__items">
          <h3>Суббота</h3>
          {/* {Response.map(() => {
                    <div className="timetable__down__item">

                    </div>
                })} */}
          <div className="timetable__down__item timetable__down__item_extra">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
          <div className="timetable__down__item timetable__down__item_extra">
            {/* <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p> */}
          </div>
          <div className="timetable__down__item">
            <h3 className="timetable__down__title">Высшая Математика</h3>
            <p className="timetable__down__type">Лекция</p>
            <p className="timetable__down__audience">кабинет 6-205</p>
            <p className="timetable__down__teacher">К.В.Иванов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;

