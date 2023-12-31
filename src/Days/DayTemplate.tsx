import React, { useState, useRef, TouchEvent, useEffect } from "react";
import data from "../utils/data.js";
import DistanceSlider from "../components/DistanceSlider";
import EmailButton from "../components/EmailButton";

const DayTemplate: React.FC<{ currDay: number }> = ({ currDay }) => {
  const [happyHourData, setHappyHourData]: any = useState([]);
  const [dayName, setDayName]: any = useState("");
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setHappyHourData(data.data);
  }, []);

  useEffect(() => {
    setDayName(getDayOfWeek(currDay));
  }, [currDay]);

  const handleSliderChange = (event) => {
    const selectedDistance = Number(event.target.value);
    setDistance(selectedDistance);
    localStorage.setItem("selectedDistance", selectedDistance.toString());
  };

  const getDayOfWeek = (number: number) => {
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    if (number >= 0 && number <= 6) {
      return daysOfWeek[number];
    } else {
      return "Invalid input. Please provide a number between 0 and 6.";
    }
  };

  const happyHours = happyHourData.map((restaurant) => {
    return (
      restaurant[getDayOfWeek(currDay)].length !== 0 && (
        <div className="happyHoursContainer">
          <div className="restaurantTitle">
            <a
              className={`anchor${currDay}`}
              href={restaurant.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {restaurant.name}
            </a>
          </div>
          {restaurant[getDayOfWeek(currDay)] && (
            <ul>
              {restaurant[getDayOfWeek(currDay)].map((item) => {
                if (typeof item === "string") {
                  return <li>{item}</li>;
                } else {
                  return (
                    <li>
                      {Object.keys(item)[0]}
                      <ul>
                        {item[Object.keys(item)[0]].map((value: any) => {
                          return <li>{value}</li>;
                        })}
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>
          )}
          {/* <hr className="Hdivider"></hr> */}
        </div>
      )
    );
  });

  return (
    <div className="dayContainer">
      {/* <DistanceSlider distance={distance} setDistance={setDistance} /> */}

      <div className={`dayTitle${currDay.toString()}`}>{dayName}</div>
      {happyHours}

      <EmailButton />
    </div>
  );
};

export default DayTemplate;
