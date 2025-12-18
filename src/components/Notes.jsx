import { useState, useEffect } from "react";

export default function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Notes</h2>

      <textarea
        className="w-full bg-zinc-900/60 border border-white/10 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Write your thoughts..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        onClick={() => {
          if (!note.trim()) return;
          setNotes([...notes, { id: Date.now(), text: note }]);
          setNote("");
        }}
        className="mb-5 px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 transition"
      >
        Save Note
      </button>

      <ul className="space-y-3">
        {notes.map((n) => (
          <li
            key={n.id}
            className="flex justify-between items-center bg-zinc-900/40 border border-white/10 rounded-lg px-4 py-2"
          >
            <span>{n.text}</span>
            <button
              onClick={() => setNotes(notes.filter(x => x.id !== n.id))}
              className="text-zinc-400 hover:text-red-400"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
