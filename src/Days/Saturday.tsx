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
      </ul>
    </div>
  );
};

export default Saturday;
