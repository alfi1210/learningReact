import { useEffect, useState } from "react";
import Styles from "./DigitalClock.module.css";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridian}`;
  }

  function padZero(number: number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className={Styles.DigitalClockCntainer}>
      <div className={Styles.DigitalClock}>
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}
