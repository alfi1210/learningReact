import { useEffect, useState } from "react";
import styles from "./DigitalClock3.module.css";

let intervalId: number | undefined;

function DigitalClock3() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    intervalId = setInterval(() => setTime(new Date()), 100);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.title = formatTime();
  }, [time]);

  useEffect(() => {
    const seconds = time.getSeconds();
    if (seconds < 20) {
      document.body.style.backgroundImage = "url('src/assets/bg-image_1.jpg')";
    } else if (seconds < 40 && seconds >= 20) {
      document.body.style.backgroundImage = "url('src/assets/bg-image_2.jpg')";
    } else {
      document.body.style.backgroundImage = "url('src/assets/bg-image_3.jpg')";
    }
  }, [time]);

  function startClock() {
    clearInterval(intervalId);
    intervalId = setInterval(() => setTime(new Date()), 100);
  }

  function stopClock() {
    clearInterval(intervalId);
  }

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${paddZero(hours)}:${paddZero(minutes)}:${paddZero(
      seconds
    )}:${paddMilliseconds(milliseconds)} ${meridian}`;
  }

  function paddZero(nmb: number) {
    return (nmb < 10 ? "0" : "") + nmb;
  }

  function paddMilliseconds(mlsc: number) {
    return (mlsc < 100 ? "0" : "") + (mlsc < 10 ? "0" : "") + mlsc;
  }

  return (
    <div className={styles.clockContainer}>
      <div className={styles.digitalClock}>
        <span>{formatTime()}</span>
      </div>
      <button onClick={stopClock}>
        <i className="fa fa-stop"></i>
      </button>
      <button onClick={startClock}>
        <i className="fa fa-play"></i>
      </button>
    </div>
  );
}

export default DigitalClock3;
