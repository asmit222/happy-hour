import React, { useState, useRef, TouchEvent, useEffect } from "react";

const Saturday: React.FC = () => {
  return (
    <div className="dayContainer">
      <div className="dayTitle">Saturday</div>
      <ul>
        <li>
          <a
            href="https://www.noble-crust.com/events"
            target="_blank"
            rel="noopener noreferrer"
          >
            Noble Crust
          </a>
          <ul>
            <li>
              Saturday Brunchin' - Until 2:30pm ($2 Mimosas, $4 Bloody Marys and
              $4 Red + White Sangria)
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://www.grillsmith.com/happy-hour"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grillsmith
          </a>
          <ul>
            <li>
              Happy Hour - 4-7{" "}
              <ul>
                <li>$5 Select Spirits</li> <li>$4.5 House Wines</li>{" "}
                <li>$7 Craft Cocktails</li> <li>$5 Craft Beers</li>{" "}
                <li>$6 Martinis</li> <li>$8 Margherita Flatbread</li>{" "}
                <li>$6 Filet Tip Egg Roll</li> <li>$6.5 Spicy Thai Shrimp</li>{" "}
                <li>$9 Chicken Gorgonzola Flatbread</li> <li>$5 Pub Pretzel</li>{" "}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Saturday;
