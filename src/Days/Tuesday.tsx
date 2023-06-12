import React, { useState, useRef, TouchEvent, useEffect } from "react";

const Tuesday: React.FC = () => {
  return (
    <div className="dayContainer">
      <div className="dayTitle">Tuesday</div>
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
              $7 Tequila Tuesdays - 4 P.M. - Close (5 Craft Tequila Cocktails)
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

export default Tuesday;
