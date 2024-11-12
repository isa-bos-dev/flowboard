// src/components/Column.tsx
import TaskCard from "./TaskCard";
import { Task, Column as ColumnType, User, Priority } from "../types";

interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
  users: User[];
  priorities: Priority[];
  onEditTask: (task: Task) => void;
  onDropTask: (taskId: string, newStatus: string) => void;
}

const Column: React.FC<ColumnProps> = ({
  column,
  tasks,
  users,
  priorities,
  onEditTask,
  onDropTask,
}) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    onDropTask(taskId, column.id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-gray-800 rounded-lg p-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
      <div className="min-h-[200px]">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            users={users}
            priorities={priorities}
            onEdit={task.status === "backlog" ? onEditTask : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
