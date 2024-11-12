// src/components/Header.tsx
import UserFilterButtons from "./UserFilterButtons";
import { User } from "../types";

interface HeaderProps {
  selectedUser: string | null;
  onUserSelect: (userId: string | null) => void;
  users: User[];
}

const Header: React.FC<HeaderProps> = ({
  selectedUser,
  onUserSelect,
  users,
}) => {
  return (
    <div className="mb-8">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">FlowBoard 📋</h1>
      </div>

      {/* Filtro de usuarios */}
      <UserFilterButtons
        users={users}
        selectedUser={selectedUser}
        onUserSelect={onUserSelect}
      />
    </div>
  );
};

export default Header;
