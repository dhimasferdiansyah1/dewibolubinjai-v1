"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = format(time, "HH:mm:ss");
  const formattedDate = format(time, "dd/MM/yyyy");

  return (
    <div className="scale-75">
      <div className="clock">
        <div suppressHydrationWarning={true} className="time">
          {formattedTime}
        </div>
        <div suppressHydrationWarning={true} className="date">
          {formattedDate}
        </div>
      </div>

      <style jsx>{`
        .clock {
          font-size: 24px;
          text-align: center;
        }

        .time {
          font-size: 1.5em;
        }

        .date {
          font-size: 1em;
        }
      `}</style>
    </div>
  );
};

export default Clock;
