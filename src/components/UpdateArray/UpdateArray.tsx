import { useState } from "react";
import SelectFruits from "./SelectFruits";
import styles from "./UpdateArray.module.css";

export default function UpdateArray() {
  const [fruits, setFruits] = useState<string[]>([]);

  function addFood(fruit = "newInputFruit") {
    if (fruit === "newInputFruit") {
      const newFood = (
        document.getElementById("fooodInput") as HTMLInputElement
      ).value;
      if (newFood !== "") {
        setFruits((f) => [...f, newFood]);
        (document.getElementById("fooodInput") as HTMLInputElement).value = "";
      }
    } else if (fruit !== "") {
      setFruits((f) => [...f, fruit]);
    }
  }

  function removeFood(index: number) {
    const updatedArray = fruits.filter((_, i) => index !== i);
    setFruits(updatedArray);
  }

  return (
    <div className={styles.container}>
      <h1>List of fruits</h1>
      <ul>
        {fruits.map((food, index) => (
          <li key={index}>
            <span className={styles.text}>{food}&nbsp;</span>
            <button onClick={() => removeFood(index)}>
              <i className="fa fa-trash fa-xs"></i>
            </button>
          </li>
        ))}
      </ul>
      <br />
      <hr />
      <input
        id="fooodInput"
        type="text"
        placeholder="Add a new fruit..."
        onKeyDown={(e) => e.key === "Enter" && addFood()}
      />
      <button onClick={() => addFood("newInputFruit")}>
        <i className="fa fa-plus"></i>
      </button>
      <br />
      <hr />
      <SelectFruits addFood={addFood} />
    </div>
  );
}
