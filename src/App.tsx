import React, { useState, useRef, TouchEvent, useEffect } from "react";
import "./App.css";
import Monday from "./Days/Monday";
import Tuesday from "./Days/Tuesday";
import Wednesday from "./Days/Wednesday";
import Thursday from "./Days/Thursday";
import Friday from "./Days/Friday";
import Saturday from "./Days/Saturday";
import Sunday from "./Days/Sunday";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStartRef.current! - touchEnd;
    const threshold = 100; // Minimum swipe distance required

    if (difference > threshold) {
      // Swipe right to left (next page)
      if (currentPage < 6) {
        setCurrentPage(currentPage + 1);
      } else if (currentPage === 6) {
        setCurrentPage(0);
      }
    } else if (difference < -threshold) {
      // Swipe left to right (previous page)
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      } else if (currentPage === 0) {
        setCurrentPage(6);
      }
    }
  };

  const getDayOfWeek = (): number => {
    const currentDate = new Date();
    let dayOfWeek = currentDate.getDay();

    // Adjust Sunday to be 6 instead of 0
    if (dayOfWeek === 0) {
      dayOfWeek = 6;
    } else {
      dayOfWeek -= 1;
    }

    return dayOfWeek;
  };

  useEffect(() => {
    setCurrentPage(getDayOfWeek());
  }, []);

  return (
    <div
      className="App"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="pages">
        {currentPage === 0 && <Monday />}
        {currentPage === 1 && <Tuesday />}
        {currentPage === 2 && <Wednesday />}
        {currentPage === 3 && <Thursday />}
        {currentPage === 4 && <Friday />}
        {currentPage === 5 && <Saturday />}
        {currentPage === 6 && <Sunday />}
      </div>
    </div>
  );
};

export default App;
