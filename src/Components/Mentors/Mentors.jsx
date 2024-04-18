import React from "react";
import "./Mentors.css";

function Mentors() {
  const data = [
    {
      id: 1,
      img: "class-1.jpg",
      name: "Vivek sir",
      sub: "principle",
    },
    {
      id: 2,
      img: "class-1.jpg",
      name: "Vivek sir",
      sub: "art",
    },
    {
      id: 3,
      img: "class-1.jpg",
      name: "Vivek sir",
      sub: "music",
    },
    {
      id: 4,
      img: "class-1.jpg",
      name: "Vivek sir",
      sub: "language",
    },
  ];
  return (
    <div>
      <div className="mentors">
        <h1>Meet Our Teachers</h1>
      </div>
      <div className="mentor-container">
        {data.map((item) => (
          <div className="mentor-card">
            <p
              className="mentor-img"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></p>
            <p className="mentor-name">{item.name}</p>
            <p className="mentor-sub">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentors;
