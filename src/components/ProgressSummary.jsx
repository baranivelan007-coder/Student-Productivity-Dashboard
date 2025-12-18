export default function ProgressSummary({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-5">Progress</h2>

      <div className="space-y-2 text-lg">
        <p>Total Tasks: <b>{total}</b></p>
        <p>Completed: <b>{done}</b></p>
        <p>Progress: <b>{percent}%</b></p>
      </div>

      <div className="mt-4 w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
