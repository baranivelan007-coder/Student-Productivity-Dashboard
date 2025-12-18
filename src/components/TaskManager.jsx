import { useState } from "react";

export default function TaskManager({ tasks, setTasks }) {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Task Manager</h2>

      <div className="flex gap-3 mb-5">
        <input
          className="flex-1 bg-zinc-900/60 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 hover:opacity-90 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between bg-zinc-900/40 border border-white/10 rounded-lg px-4 py-2"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleComplete(t.id)}
                className="accent-blue-500"
              />
              <span className={t.completed ? "line-through text-zinc-400" : ""}>
                {t.title}
              </span>
            </div>

            <button
              onClick={() => deleteTask(t.id)}
              className="text-zinc-400 hover:text-red-400 transition"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
