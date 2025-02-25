import { ChangeEvent, FormEvent, JSX } from "react";
import { type Task, type TaskProps } from "./type";

const Task = ({ text, setText, setTaskList }: TaskProps): JSX.Element => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text === "") {
      alert("Field Cannot be Empty");
      return;
    }

    const id = (Math.random() * 20).toString();
    const taskToPush: Task = {
      id: id,
      task: text,
      status: false,
    };

    setTaskList((prevTask) => [...prevTask, taskToPush]);

    setText("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          className="task-input"
        />
        <button type="submit" className="task-button">
          Add
        </button>
      </form>
    </>
  );
};
export default Task;
