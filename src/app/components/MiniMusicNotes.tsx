"use client";

import { useEffect, useState, useRef } from "react";

interface Note {
  id: number;
  symbol: string;
}

export default function MiniMusicNotes({ isPlaying }: { isPlaying: boolean }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const noteIdRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        const newNote: Note = {
          id: noteIdRef.current++,
          symbol: Math.random() > 0.5 ? "♪" : "♫",
        };
        setNotes((prev) => [...prev, newNote]);

        setTimeout(() => {
          setNotes((prev) => prev.filter((n) => n.id !== newNote.id));
        }, 6000);
      }, 800);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setNotes([]);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <>
      <div className="relative w-full overflow-hidden pointer-events-none" style={{ height: '8vw' }}>
        {notes.map((note) => (
          <span
            key={note.id}
            className="absolute text-white mini-note-wave"
            style={{
              top: '-30%',
              left: '-2vw',
              fontSize: '7.2vw',
              fontWeight: 900,
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              transform: 'translateY(-50%)',
            }}
          >
            {note.symbol}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes miniWaveAcross {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          10% { transform: translateX(10vw) translateY(-1vw); }
          20% { transform: translateX(20vw) translateY(1vw); }
          30% { transform: translateX(30vw) translateY(-1vw); }
          40% { transform: translateX(40vw) translateY(1vw); }
          50% { transform: translateX(50vw) translateY(-1vw); }
          60% { transform: translateX(60vw) translateY(1vw); }
          70% { transform: translateX(70vw) translateY(-1vw); }
          80% { transform: translateX(80vw) translateY(1vw); }
          90% { transform: translateX(90vw) translateY(-1vw); }
          97% { opacity: 1; }
          100% {
            transform: translateX(calc(100vw + 5px)) translateY(1vw);
            opacity: 1;
          }
        }
        .mini-note-wave {
          animation: miniWaveAcross 6s linear forwards;
        }
      `}</style>
    </>
  );
}
