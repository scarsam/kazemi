"use client"
import React, { useState, useEffect } from 'react';

interface Props {
  endDate: Date;
}

const CountdownTimer: React.FC<Props> = ({ endDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesDifference = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsDifference = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      daysDifference,
      hoursDifference,
      minutesDifference,
      secondsDifference
    };
  };

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
    <p>
      {String(days).padStart(2, '0')}dagar {String(hours).padStart(2, '0')}timmar {String(minutes).padStart(2, '0')}minuter {String(seconds).padStart(2, '0')}sekunder
    </p>
  );
};

export default CountdownTimer;
