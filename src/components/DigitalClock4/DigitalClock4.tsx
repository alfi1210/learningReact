import { useEffect, useState } from "react";
import css from "./DigitalClock4.module.css";

let intervalId: number | undefined;
export default function DigitalClock4() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    intervalId = setInterval(() => {
      setTime(new Date());
    }, 1);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    document.title = formatTime();
  }, [time]);
  useEffect(() => {
    const seconds = time.getSeconds();
    if (seconds < 10) {
      document.body.style.backgroundImage = "url('src/assets/bg-image_4.jpg')";
    } else if (seconds < 20 && seconds >= 10) {
      document.body.style.backgroundImage = "url('src/assets/bg-image_5.jpg')";
    } else if (seconds < 30 && seconds >= 20) {
      document.body.style.backgroundImage = "url('src/assets/bg-image_6.jpg')";
    } else if (seconds < 40 && seconds >= 30) {
      document.body.style.backgroundImage = "url('src/assets/bg-image_7.jpg')";
    } else if (seconds < 50 && seconds >= 40) {
      document.body.style.backgroundImage = "url('src/assets/bg-image_8.jpg')";
    } else {
      document.body.style.backgroundImage = "url('src/assets/bg-image_9.jpg')";
    }
  }, [time]);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const miliseconds = time.getMilliseconds();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}:${padMilieconds(miliseconds)} ${meridian}`;
  }

  function padZero(number: number) {
    return (number < 10 ? "0" : "") + number;
  }
  function padMilieconds(number: number) {
    return (number < 100 ? "0" : "") + (number < 10 ? "0" : "") + number;
  }

  function stopClock() {
    clearInterval(intervalId);
  }

  function startClock() {
    clearInterval(intervalId);
    intervalId = setInterval(() => setTime(new Date()), 1);
  }

  return (
    <div className={css.container}>
      <div className={css.clockContainer}> </div>
      <div className={css.digitalClock}>
        <span> {formatTime()}</span>
        <br />
        <button onClick={startClock}>
          <i className="fa fa-play"></i>
        </button>
        <button onClick={stopClock}>
          <i className="fa fa-pause"></i>
        </button>{" "}
      </div>
    </div>
  );
}
