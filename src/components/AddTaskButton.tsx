// src/components/AddTaskButton.tsx
import { Plus } from "lucide-react";

interface AddTaskButtonProps {
  onClick: () => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mb-4 flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 font-semibold"
    >
      <Plus className="w-5 h-5" />
      Añadir Tarea
    </button>
  );
};

export default AddTaskButton;
