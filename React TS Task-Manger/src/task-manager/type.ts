export type Task = {
  id: string;
  task: string;
  status: boolean;
};
export type TaskProps = {
  text: string;
  setText: (text: string) => void;
  // setTaskList: (value: Task) => Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};
export type TaskListProps = {
  taskList: Task[];
  setTaskList: (text: Task[]) => void;
};
