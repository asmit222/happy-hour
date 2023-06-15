import React, { useState, useRef, TouchEvent, useEffect } from "react";
import "./App.css";
import DayTemplate from "./Days/DayTemplate";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const [showPage, setShowPage] = useState(true);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const [dragOffsetX, setDragOffsetX] = useState(0);
  const handleTouchMove = (event: TouchEvent) => {
    if (touchStartRef.current !== null) {
      const touchX = event.touches[0].clientX;
      const difference = touchStartRef.current - touchX;

      if (Math.abs(difference) > 20) {
        setDragOffsetX(difference);

        // Apply sliding effect to the container
        const container = containerRef.current;
        if (container) {
          container.style.transform = `translateX(${-difference}px)`;
          container.style.opacity = String(
            1 - Math.abs(difference / window.innerWidth)
          );
        }
      }
    }
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
      containerRef.current?.classList.add("slide-left");
      setTimeout(() => {
        containerRef.current?.classList.remove("slide-left");
      }, 300);
    } else if (difference < -threshold) {
      // Swipe left to right (previous page)
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      } else if (currentPage === 0) {
        setCurrentPage(6);
      }
      containerRef.current?.classList.add("slide-right");
      setTimeout(() => {
        containerRef.current?.classList.remove("slide-right");
      }, 300);
    }

    // Reset the sliding effect
    setDragOffsetX(0);
    const container = containerRef.current;
    if (container) {
      container.style.transform = "";
      container.style.opacity = "";
    }

    setShowPage(false);
    setTimeout(() => {
      setShowPage(true);
    }, 5);
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
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="pages">
        {showPage && <DayTemplate currDay={currentPage} />}
      </div>
    </div>
  );
};

export default App;
