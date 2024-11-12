// src/components/KanbanBoard.tsx
import { useState } from "react";
import Column from "./Column";
import TaskForm from "./TaskForm";
import AddTaskButton from "./AddTaskButton";
import { initialTasks, columns, priorities } from "../data/db";
import { Task, User } from "../types";

interface KanbanBoardProps {
  selectedUser: string | null;
  users: User[]; // Añadimos la prop 'users' para pasarlo a los subcomponentes
}

export default function KanbanBoard({ selectedUser, users }: KanbanBoardProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]);
    setIsAddingTask(false);
  };

  const handleEditTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setEditingTask(null);
  };

  const handleEditClick = (task: Task) => {
    if (task.status === "backlog") {
      setEditingTask(task);
      setIsAddingTask(false);
    }
  };

  const handleDropTask = (taskId: string, newStatus: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          // Verificar si la tarea tiene usuarios asignados y si está cambiando a una columna diferente de 'backlog'
          if (newStatus !== "backlog" && task.assignees.length === 0) {
            alert("La tarea necesita un usuario asignado para moverla.");
            return task; // Mantener el estado actual si no tiene asignados
          }
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  const filteredTasks = selectedUser
    ? tasks.filter((task) => task.assignees.includes(selectedUser))
    : tasks;

  return (
    <div>
      {!isAddingTask && !editingTask && (
        <AddTaskButton onClick={() => setIsAddingTask(true)} />
      )}

      {(isAddingTask || editingTask) && (
        <div className="flex justify-center items-center">
          <TaskForm
            users={users}
            priorities={priorities}
            onSubmit={editingTask ? handleEditTask : handleAddTask}
            onDelete={handleDeleteTask}
            onCancel={() => {
              setIsAddingTask(false);
              setEditingTask(null);
            }}
            initialTask={editingTask || undefined}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={filteredTasks.filter((task) => task.status === column.id)}
            users={users}
            priorities={priorities}
            onEditTask={handleEditClick}
            onDropTask={handleDropTask}
          />
        ))}
      </div>
    </div>
  );
}
