// src/components/TaskCard.tsx
import { Task, User, Priority } from "../types";
import { Calendar, Edit, AlertTriangle, AlertOctagon } from "lucide-react";

interface TaskCardProps {
  task: Task;
  users: User[];
  priorities: Priority[];
  onEdit?: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  users,
  priorities,
  onEdit,
}) => {
  const taskPriority = priorities.find((p) => p.id === task.priority);
  const assignedUsers = task.assignees.map((id) =>
    users.find((user) => user.id === id)
  );

  // Extraer componentes de fecha
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const dueDate = new Date(task.dueDate);
  const dueDay = dueDate.getDate();
  const dueMonth = dueDate.getMonth();
  const dueYear = dueDate.getFullYear();

  // Comparar fechas
  const isToday =
    dueDay === todayDay && dueMonth === todayMonth && dueYear === todayYear;
  const isPastDue = dueDate < today && !isToday; // Está vencido solo si es menor y no es hoy

  // Asignación de clase e ícono según la fecha
  const dateClass = isPastDue
    ? "bg-red-600"
    : isToday
    ? "bg-orange-500"
    : "bg-gray-600";

  const DateIcon = isPastDue
    ? AlertOctagon
    : isToday
    ? AlertTriangle
    : Calendar;

  const formattedDate = dueDate.toLocaleDateString("en-GB");

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", task.id);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("opacity-50");
  };

  return (
    <div
      className="bg-gray-700 p-3 rounded-lg mb-2 shadow-lg cursor-pointer hover:bg-gray-600 transition-colors"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {/* Encabezado con el título y botón de edición */}
      <div className="flex justify-between items-start mb-2">
        {/* Título */}
        <h3 className="font-medium overflow-hidden break-words">
          {task.title}
        </h3>
        {onEdit && (
          <button
            onClick={() => onEdit(task)}
            className="p-1 hover:bg-gray-500 rounded"
          >
            <Edit className="w-4 h-4" />
          </button>
        )}
      </div>
      {/* Descripción */}
      <p className="text-gray-400 text-sm mb-2 overflow-hidden break-words">
        {task.description}
      </p>

      {/* Etiqueta de prioridad y fecha límite con icono */}
      <div className="flex gap-2 mb-2">
        <span
          className={`text-xs px-2 py-1 rounded ${
            taskPriority?.color || "bg-gray-600"
          }`}
        >
          {taskPriority?.label}
        </span>
        {task.dueDate && (
          <span
            className={`text-xs px-2 py-1 ${dateClass} rounded flex items-center gap-1`}
          >
            <DateIcon className="w-3 h-3" />
            {formattedDate}
          </span>
        )}
      </div>

      {/* Avatares de usuarios asignados */}
      <div className="flex flex-wrap gap-1">
        {assignedUsers.map((user) =>
          user ? (
            <span key={user.id} className="text-xl">
              {user.avatar}
            </span>
          ) : null
        )}
        {task.assignees.length === 0 && (
          <span className="text-gray-400 text-sm">Sin asignar</span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
