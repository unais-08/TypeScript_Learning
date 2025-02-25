import { type TaskListProps } from "./type";

const TaskList = ({ taskList, setTaskList }: TaskListProps) => {
  function toggleTaskStatus(taskId: string) {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTaskList(updatedTasks);
  }

  return (
    <>
      <div className="task-list">
        {taskList.map((singleTask) => (
          <li
            key={singleTask.id}
            className={`task-item ${singleTask.status ? "completed" : ""}`}
          >
            <input
              type="checkbox" // ✅ Change type from "radio" to "checkbox"
              checked={singleTask.status}
              onChange={() => toggleTaskStatus(singleTask.id)}
              className="task-checkbox"
            />
            <span>{singleTask.task}</span>
          </li>
        ))}
      </div>
    </>
  );
};

export default TaskList;
