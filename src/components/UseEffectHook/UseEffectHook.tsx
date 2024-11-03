import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./UseEffectHook.module.css";
import WidthHight from "./WidthHight";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }
  function selectColor() {
    setColor((color) => (color === "green" ? "red" : "green"));
    console.log(color);
  }

  return (
    <div className={styles.container}>
      <h2 style={{ color: color }}>Count: {count}</h2>
      <Button cls="fa fa-plus" funct={increment} />
      <Button cls="fa fa-times" funct={resetCount} />
      <Button cls="fa fa-minus" funct={decrement} />
      <Button cls="fa fa-trash" funct={() => setCount(0)} />
      <Button cls="fa fa-plus" funct={() => setCount(count + 5)} />
      <Button cls="fa fa-plus" funct={() => setCount(count + 10)} />
      <Button cls="fa fa-plus" funct={() => setCount(count + 100)} />
      <Button cls="fas fa-palette" funct={selectColor} />

      <WidthHight />
    </div>
  );
}
