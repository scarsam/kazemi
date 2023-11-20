"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Open_Sans } from "next/font/google";

const open = Open_Sans({ subsets: ["latin"], weight: "400" });

interface Props {
  endDate: Date;
}

const CountdownTimer: React.FC<Props> = ({ endDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutesDifference = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60),
    );
    const secondsDifference = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      daysDifference,
      hoursDifference,
      minutesDifference,
      secondsDifference,
    };
  }, [endDate]);

  useEffect(() => {
    const timerID = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setDays(timeLeft.daysDifference);
      setHours(timeLeft.hoursDifference);
      setMinutes(timeLeft.minutesDifference);
      setSeconds(timeLeft.secondsDifference);
    }, 1000);

    return () => clearInterval(timerID);
  }, [calculateTimeLeft]);

  return (
    <div className="fixed bottom-0 bg-white w-full left-0 right-0 text-center border-t">
      <p className={`my-2 ${open.className} text-sm md:text-base`}>
        🇮🇹{' '}
        {String(days).padStart(2, "0")} dagar {String(hours).padStart(2, "0")}{" "}
        timmar {String(minutes).padStart(2, "0")} minuter{" "}
        {String(seconds).padStart(2, "0")} sekunder 🇮🇹
      </p>
    </div>
  );
};

export default CountdownTimer;
