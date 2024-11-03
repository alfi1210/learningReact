import { useEffect, useState } from "react";
import styles from "./DigitalClock2.module.css";

export default function DigitalClock2() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.title = formatTime();
  }, [time]);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meidian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meidian}`;
  }
  function padZero(number: number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className={styles.clockContainer}>
      <div className={styles.digitalClock}>
        <i className="fa-regular fa-clock fa-xs"></i>
        <br />
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}
