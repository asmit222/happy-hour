import React, { useState, useRef, TouchEvent, useEffect } from "react";

const Wednesday: React.FC = () => {
  return (
    <div className="dayContainer">
      <div className="dayTitle">Wednesday</div>
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
              Barrel Fresh Wednesdays - 4 P.M. - Close (1/2 off all Barrel Fresh
              Wines)
            </li>
            <li>
              Happy Hour - 4-7{" "}
              <ul>
                <li>$2 off Draft Beer + Barrel Fresh Wines by the Glass</li>{" "}
                <li>
                  $5 Premium Spirits
                  <ul>El Jimador</ul>
                  <ul>Old Forrester</ul>
                  <ul>Titos</ul>
                  <ul>Flor De Cana Rum</ul>
                  <ul>Bulldog London Gin</ul>
                </li>
                <li>
                  $6 Bar Specials
                  <ul>Frozen Cocktails</ul>
                  <ul>Noble Sangria</ul>
                  <ul>Classic Martini</ul>
                </li>
              </ul>
            </li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </li>
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

export default Wednesday;
