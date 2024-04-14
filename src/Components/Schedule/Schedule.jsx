import React from "react";
import "./Schedule.css";

function Schedule() {
  const data = [
    {
      id: 1,
      img: "class-1.jpg",
      title: "Drawing Classes",
      desc: "Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo",
      age: "3 - 6 Years",
      seats: "40 seats",
      time: "08:00-10:00",
      fees: "$2/monght",
    },
    {
      id: 2,
      img: "class-1.jpg",
      title: "Drawing Classes",
      desc: "Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo",
      age: "3 - 6 Years",
      seats: "40 seats",
      time: "08:00-10:00",
      fees: "$2/monght",
    },
    {
      id: 3,
      img: "class-1.jpg",
      title: "Drawing Classes",
      desc: "Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo",
      age: "3 - 6 Years",
      seats: "40 seats",
      time: "08:00-10:00",
      fees: "$2/monght",
    },
  ];
  return (
    <div className="schedule">
      {data.map((item) => (
        <div className="schedule-container">
          <div
            className="schedule-img"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="schedule-title">
            <h1 className="schedule-title1">{item.title}</h1>
            <p className="schedule-desc">{item.desc}</p>
          </div>
          <div>
            <div className="timing">
              <p className="age-title">Age of Kids </p>
              <p className="age">{item.age}</p>
            </div>
            <div className="timing">
              <p className="age-title">Total Seats </p>
              <p className="age">{item.seats}</p>
            </div>
            <div className="timing">
              <p className="age-title">Class Time </p>
              <p className="age">{item.time}</p>
            </div>
            <div className="timing">
              <p className="age-title">Tuition Fees </p>
              <p className="age">{item.fees}</p>
            </div>
          </div>
          <button className="join-btn">Join Now</button>
        </div>
      ))}
    </div>
  );
}

export default Schedule;
