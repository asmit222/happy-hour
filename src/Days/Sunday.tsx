import React, { useState, useRef, TouchEvent, useEffect } from "react";

const Sunday: React.FC = () => {
  return (
    <div className="dayContainer">
      <div className="dayTitle">Sunday</div>
      <ul>
        <li>
          Category 2
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </li>
        <li>
          Category 3
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sunday;
