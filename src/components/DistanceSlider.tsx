import React, { useState, useEffect } from "react";

const DistanceSlider: React.FC<{
  distance: any;
  setDistance: any;
}> = ({ distance, setDistance }) => {
  useEffect(() => {
    const savedDistance = localStorage.getItem("selectedDistance");
    if (savedDistance) {
      setDistance(Number(savedDistance));
    }
  }, []);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDistance = Number(event.target.value);
    setDistance(selectedDistance);
    localStorage.setItem("selectedDistance", selectedDistance.toString());

    if (!navigator.geolocation) {
      // Geolocation is not supported by the browser
      console.log("Geolocation is not supported");
      return;
    }

    if (!navigator.geolocation.getCurrentPosition) {
      // getCurrentPosition is not supported by the browser
      console.log("Geolocation is not supported");
      return;
    }

    if (!navigator.permissions) {
      // Permissions API is not supported by the browser
      console.log("Permissions API is not supported");
      return;
    }

    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        if (permissionStatus.state === "granted") {
          // User has already granted permission
          return;
        } else if (permissionStatus.state === "prompt") {
          // User has not yet decided, prompt for permission
          return navigator.geolocation.getCurrentPosition(
            () => {},
            () => {},
            { enableHighAccuracy: true }
          );
        } else if (permissionStatus.state === "denied") {
          // User has denied permission
          alert("You must enable location sharing to use this feature.");
          console.log("User has denied geolocation permission");
          return;
        }
      })
      .catch((error) => {
        console.log(
          "Error occurred while checking geolocation permission:",
          error
        );
      });
  };

  return (
    <div className="distanceSlider">
      <input
        type="range"
        min="0"
        max="20"
        value={distance}
        onChange={handleSliderChange}
      />
      <div className="happyHourRadiusText">
        Happy hour radius: {distance} miles
      </div>
    </div>
  );
};

export default DistanceSlider;
