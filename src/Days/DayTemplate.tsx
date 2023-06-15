import React, { useState, useRef, TouchEvent, useEffect } from "react";
import data from "../utils/data.js";

const DayTemplate: React.FC<{ currDay: number }> = ({ currDay }) => {
  const [happyHourData, setHappyHourData]: any = useState([]);
  const [dayName, setDayName]: any = useState("");

  useEffect(() => {
    setHappyHourData(data.data);
  }, []);

  useEffect(() => {
    setDayName(getDayOfWeek(currDay));
  }, [currDay]);

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
      restaurant[currDay].length !== 0 && (
        <div className="happyHoursContainer">
          <div className="restaurantTitle">
            <a href={restaurant.link} target="_blank" rel="noopener noreferrer">
              {restaurant.name}
            </a>
          </div>
          {restaurant[currDay] && (
            <ul>
              {restaurant[currDay].map((item) => {
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
      {happyHours}

      <div className={`dayTitle${currDay.toString()}`}>{dayName}</div>
    </div>
  );
};

export default DayTemplate;
