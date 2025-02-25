import { useEffect, useState } from "react";
import TasksForm from "./task-manager";
import TaskList from "./task-manager/TaskList";
import { type Task } from "./task-manager/type";
import "./task-manager/index.css";
function fetchDataFromLocal() {
  const savedTasks = localStorage.getItem("task");
  return savedTasks ? JSON.parse(savedTasks) : [];
}
const App = () => {
  const [text, setText] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>(
    () => fetchDataFromLocal()
    // const savedTasks = localStorage.getItem("task");
    // return savedTasks ? JSON.parse(savedTasks) : [];
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <main>
      <h2>React & TypeScript</h2>
      <TasksForm text={text} setText={setText} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </main>
  );
};

export default App;
