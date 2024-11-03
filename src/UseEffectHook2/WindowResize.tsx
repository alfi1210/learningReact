import { useEffect, useState } from "react";

interface WindowResizeProps {}

export default function WindowResize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  useEffect(() => {
    document.title = `Size ${windowWidth}x${windowHeight}px`;
  }, [windowWidth, windowHeight]);

  function handleWindowSize() {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  return (
    <h3>
      Window size: {windowWidth}x{windowHeight}
    </h3>
  );
}
