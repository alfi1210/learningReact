import { useState } from "react";
import style from "./UpdateArrayObjects.module.css";

export default function UpdateArrayOvjects() {
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
      <h2>List of cars</h2>
      <ul>
        {cars.map((car: any, index: number) => (
          <li key={index}>
            {car.year} {car.make} {car.model}
            <button onClick={() => handleRemoveCar(index)}>
              <i className="fas fa-car">&nbsp;&nbsp;</i>
              <i className="fa fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />{" "}
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
