// src/components/TaskForm.tsx
import { useState } from "react";
import { Task, User, Priority } from "../types";

interface TaskFormProps {
  users: User[];
  priorities: Priority[];
  onSubmit: (task: Task) => void;
  onCancel: () => void;
  onDelete?: (taskId: string) => void;
  initialTask?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({
  users,
  priorities,
  onSubmit,
  onCancel,
  onDelete,
  initialTask,
}) => {
  const [task, setTask] = useState<Task>(
    initialTask || {
      id: Date.now().toString(),
      title: "",
      description: "",
      assignees: [],
      priority: "medium",
      dueDate: "",
      status: "backlog",
    }
  );

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const maxDescriptionLength = 500;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handlePriorityChange = (priorityId: string) => {
    setTask({ ...task, priority: priorityId });
  };

  const validateForm = () => {
    const newErrors = {
      title: task.title ? "" : "El título es obligatorio.",
      description: task.description ? "" : "La descripción es obligatoria.",
      dueDate: task.dueDate ? "" : "La fecha límite es obligatoria.",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(task);
    }
  };

  return (
    <div className="w-full md:mx-40 mb-4 p-4 bg-gray-800 rounded-lg">
      <input
        type="text"
        name="title"
        placeholder="Título de la tarea"
        value={task.title}
        onChange={handleInputChange}
        maxLength={50}
        className="w-full mb-2 p-2 bg-gray-700 rounded border-none text-gray-200 focus-within:bg-gray-200 focus-within:text-gray-800"
      />
      {errors.title && (
        <p className="text-red-500 text-xs mb-2">{errors.title}</p>
      )}

      {/* Campo de Descripción con Contador de Caracteres */}
      <div className="relative">
        <textarea
          name="description"
          placeholder="Descripción"
          value={task.description}
          onChange={handleInputChange}
          maxLength={maxDescriptionLength}
          className="w-full mb-2 p-2 bg-gray-700 rounded border-none text-gray-200 focus-within:bg-gray-200 focus-within:text-gray-800"
        />
        <span className="absolute bottom-5 right-2 text-xs text-gray-400">
          {task.description.length}/{maxDescriptionLength}
        </span>
      </div>
      {errors.description && (
        <p className="text-red-500 text-xs mb-2 ">{errors.description}</p>
      )}

      {/* Contenedor flex para Selector de Prioridad y Campo de Fecha Límite */}
      <div className="flex flex-col md:flex-row gap-4 mb-2">
        <div className="flex-1">
          <label className="block text-sm mb-1">Prioridad:</label>
          <div className="flex gap-2">
            {priorities.map((priority) => (
              <button
                key={priority.id}
                onClick={() => handlePriorityChange(priority.id)}
                className={`px-3 py-1 rounded ${
                  task.priority === priority.id ? priority.color : "bg-gray-700"
                }`}
              >
                {priority.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm mb-1">Fecha límite:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
            className="w-auto p-2 mb-2 bg-gray-300 rounded border-none text-gray-800"
          />
          {errors.dueDate && (
            <p className="text-red-500 text-xs ">{errors.dueDate}</p>
          )}
        </div>
      </div>

      {/* Asignación múltiple */}
      <div className="mb-2">
        <label className="block text-sm mb-1">Asignar a:</label>
        <div className="flex flex-wrap gap-2">
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() =>
                setTask((prevTask) => {
                  const assignees = prevTask.assignees.includes(user.id)
                    ? prevTask.assignees.filter((id) => id !== user.id)
                    : [...prevTask.assignees, user.id];
                  return { ...prevTask, assignees };
                })
              }
              className={`flex items-center gap-2 px-3 py-1 rounded ${
                task.assignees.includes(user.id) ? "bg-cyan-700" : "bg-gray-700"
              }`}
            >
              <span>{user.avatar}</span>
              <span>{user.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-cyan-900 rounded hover:bg-cyan-600 "
        >
          {initialTask ? "Actualizar" : "Guardar"}
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-blue-900 rounded hover:bg-blue-600"
        >
          Cancelar
        </button>
        {initialTask && onDelete && (
          <button
            onClick={() => onDelete(task.id)}
            className="px-4 py-2 bg-red-900 rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskForm;
