// src/App.tsx
import KanbanBoard from "./components/KanbanBoard";
import Header from "./components/Header";
import { useState } from "react";
import { users } from "./data/db";

function App() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-4 px-10 pt-10">
      <Header
        selectedUser={selectedUser}
        onUserSelect={setSelectedUser}
        users={users}
      />
      <KanbanBoard selectedUser={selectedUser} users={users} />
    </div>
  );
}

export default App;
