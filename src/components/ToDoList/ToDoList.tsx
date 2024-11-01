import { useState } from "react";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
  const [newTask, setNewTask] = useState("");

  function imputChange(e: any) {
    setNewTask(e.target.value);
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
      <button>
        <i className="fa-solid fa-plus fa-xs"></i>
      </button>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={styles.task}>
              {task}
              <button>
                <i className="fas fa-trash-can fa-xs"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
