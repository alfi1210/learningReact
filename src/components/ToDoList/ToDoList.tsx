import { useState } from "react";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function imputChange(e: any) {
    setNewTask(e.target.value);
  }

  function addNewTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i: number) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index !== tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className={styles.toDoList}>
      <h2>
        To Do list <i className="fa-solid fa-pen-to-square fa-xs"></i>
      </h2>
      <input
        type="text"
        placeholder="Enter your task..."
        value={newTask}
        onChange={imputChange}
      />
      <button className={styles.addButton} onClick={addNewTask}>
        <i className="fa-solid fa-plus fa-xs"></i>
      </button>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={styles.task}>
              <span className={styles.taskText}>{task}</span>
              <button
                className={styles.deleteButton}
                onClick={() => deleteTask(index)}
              >
                <i className="fas fa-trash-can fa-xs"></i>
              </button>
              <button
                className={styles.moveButton}
                onClick={() => moveTaskUp(index)}
              >
                <i className="fas fa-arrow-up fa-xs"></i>
              </button>
              <button
                className={styles.moveButton}
                onClick={() => moveTaskDown(index)}
              >
                <i className="fas fa-arrow-down fa-xs"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function _(value: string, index: number, array: string[]): value is string {
  throw new Error("Function not implemented.");
}
