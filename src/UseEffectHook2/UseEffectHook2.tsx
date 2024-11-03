import { useEffect, useState } from "react";
import Button2 from "./Button2";
import WindowResize from "./WindowResize";

export default function UseEffectHook2() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.title = `Count: ${count} - ${color}`;
  }, [count, color]);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function restCount() {
    setCount(0);
  }
  function changeColor() {
    setColor(() => (color === "blue" ? "orange" : "blue"));
  }

  return (
    <div>
      <h2 style={{ color: color }}>Counterr: {count}</h2>
      <Button2 cls="fa fa-plus fa-xs" fnct={increment} />
      <Button2 cls="fa fa-trash fa-xs" fnct={restCount} />
      <Button2 cls="fa fa-minus fa-xs" fnct={decrement} />
      <Button2 cls="fa fa-palette fa-xs" fnct={changeColor} />

      <WindowResize />
      <WindowResize />
    </div>
  );
}
