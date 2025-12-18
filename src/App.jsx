import { useState } from "react";
import TaskManager from "./components/TaskManager";
import Notes from "./components/Notes";
import FocusTimer from "./components/FocusTimer";
import ProgressSummary from "./components/ProgressSummary";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Student Productivity Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskManager tasks={tasks} setTasks={setTasks} />
          <Notes />
          <FocusTimer />
          <ProgressSummary tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
