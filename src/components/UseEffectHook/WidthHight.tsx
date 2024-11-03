import { useEffect, useState } from "react";

export default function WidthHight() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const [width, setWidth] = useState(windowWidth);
  const [height, setHeight] = useState(windowHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("evnt added");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("evnt removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size ${width}x${height} px`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <p>
      Size of <i className="fas fa-window-maximize"></i>: {width}x{height}
      px
    </p>
  );
}
