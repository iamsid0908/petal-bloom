import React from "react";
import "./Offer.css";

function Offer() {
  const data = [
    {
      id: 1,
      logo: "/public/shield.svg",
      title: "SAFETY FIRST",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      id: 2,
      logo: "/public/education.svg",
      title: "SMALL CLASS SIZE",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      id: 3,
      logo: "/public/help.svg",
      title: "INFANT CARE",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      id: 4,
      logo: "/public/education.svg",
      title: "CRETIVE LESSONS",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      id: 5,
      logo: "/public/vegan.svg",
      title: "CERTIFIED TEACHERS",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      id: 6,
      logo: "/public/planet-earth.svg",
      title: "HAPPY ENVIRONMENT",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
  ];

  return (
    <div>
      <div className="items-offers">
        {data.map((item) => (
          <div className="item-data">
            <div className="img-box">
              <div
                className="logos"
                key={item.id}
                style={{
                  backgroundImage: `url(${item.logo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="info-data">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
