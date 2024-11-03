import { useState } from "react";
import style from "./UpdateArrayObjects.module.css";

export default function UpdateArrayObjects() {
  const [cars, setCars] = useState<any>([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    if (carMake !== "" && carModel !== "") {
      const newCar = { year: carYear, make: carMake, model: carModel };
      setCars((c: any) => [...c, newCar]);
      setCarYear(new Date().getFullYear());
      setCarMake("");
      setCarModel("");
    } else {
      alert("Please enter make and model");
    }
  }
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Removes the car at given index from the list of cars.
   * @param index The index of the car to remove from the list.
   */
  /******  bd57b168-3789-45a6-916a-fe4a6c3a2876  *******/
  function handleRemoveCar(index: number) {
    const updatedCars = cars.filter((_: any, i: number) => i !== index);
    setCars(updatedCars);
  }
  function handleYearChange(event: any) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event: any) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event: any) {
    setCarModel(event.target.value);
  }

  return (
    <div className={style.container}>
      <h2>
        List of&nbsp;&nbsp;<i className="fas fa-car fa-xs"></i>
      </h2>
      <ul>
        {cars.map((car: any, index: number) => (
          <li key={index}>
            <span className={style.carText}>
              {car.year} - {car.make} - {car.model}
            </span>
            <button
              className={style.buttonAdd}
              onClick={() => handleRemoveCar(index)}
            >
              <i className="fa fa-trash fa-hs"></i>
            </button>
          </li>
        ))}
        <hr />
        <hr />

        <h3>
          Car form <i className="fas fa-keyboard fa-xs"></i>
        </h3>
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>
        <i className="fas fa-car">&nbsp;&nbsp;</i>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
}
