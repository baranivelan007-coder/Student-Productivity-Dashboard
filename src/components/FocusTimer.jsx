import { useState, useEffect } from "react";

export default function FocusTimer() {
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const i = setInterval(() => setTime(t => (t > 0 ? t - 1 : t)), 1000);
    return () => clearInterval(i);
  }, [running]);

  const format = () => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-xl text-center">
      <h2 className="text-xl font-semibold mb-4">Focus Timer</h2>

      <p className="text-5xl font-mono mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
        {format()}
      </p>

      <div className="flex justify-center gap-4">
        <button onClick={() => setRunning(true)} className="btn-blue">Start</button>
        <button onClick={() => setRunning(false)} className="btn-yellow">Pause</button>
        <button
          onClick={() => {
            setRunning(false);
            setTime(1500);
          }}
          className="btn-gray"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
