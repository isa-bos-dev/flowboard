// src/components/UserFilterButtons.tsx
import { Users } from "lucide-react";
import { User } from "../types";

interface UserFilterButtonsProps {
  users: User[];
  selectedUser: string | null;
  onUserSelect: (userId: string | null) => void; // Permitir `null` para "Ver todos"
}

const UserFilterButtons: React.FC<UserFilterButtonsProps> = ({
  users,
  selectedUser,
  onUserSelect,
}) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {/* Botón para "Ver todos" */}
      <button
        onClick={() => onUserSelect(null)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          selectedUser === null
            ? "bg-cyan-900"
            : "bg-gray-800 hover:bg-gray-700"
        }`}
      >
        <Users className="w-5 h-5" />
        Ver todos
      </button>

      {/* Botones individuales de usuario */}
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => onUserSelect(user.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            selectedUser === user.id
              ? "bg-cyan-900"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          <span className="text-xl">{user.avatar}</span>
          <span>{user.name}</span>
        </button>
      ))}
    </div>
  );
};

export default UserFilterButtons;
