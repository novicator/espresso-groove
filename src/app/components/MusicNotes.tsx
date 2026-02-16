"use client";

import { useEffect, useState, useRef } from "react";

interface MusicNotesProps {
  isPlaying: boolean;
}

interface Note {
  id: number;
  symbol: string;
  startTime: number;
}

export default function MusicNotes({ isPlaying }: MusicNotesProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const noteIdRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      // Spawn a new note every 400ms
      // Spawn a new note every 700ms (slower = fewer notes)
      intervalRef.current = setInterval(() => {
        const newNote: Note = {
          id: noteIdRef.current++,
          symbol: Math.random() > 0.5 ? "♪" : "♫",
          startTime: Date.now(),
        };
        setNotes((prev) => [...prev, newNote]);

        // Remove note after animation completes (4.8s)
        setTimeout(() => {
          setNotes((prev) => prev.filter((n) => n.id !== newNote.id));
        }, 7000);
      }, 550);
    } else {
      // Stop spawning when not playing
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // Clear existing notes
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
      <div className="absolute pointer-events-none overflow-visible text-[#5c3d2e]">
        {notes.map((note, index) => (
          <span
            key={note.id}
            className={`absolute float-note ${index % 2 === 0 ? "odd-note" : ""}`}
          >
            {note.symbol}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes floatNote {
          0% {
            transform: translateX(0) translateY(0) scale(1.2);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 50px)) translateY(-200px) scale(2);
            opacity: 0;
          }
        }
        @keyframes wobble {
          0%,
          100% {
            margin-top: 0;
          }
          50% {
            margin-top: 20px;
          }
        }
        .float-note {
          animation: floatNote 7s linear forwards, wobble 1.5s ease-in-out infinite;
          font-size: 22px;
        }
        .odd-note {
          animation: floatNote 7s linear forwards, wobble 1.5s ease-in-out infinite reverse;
        }
      `}</style>
    </>
  );
}
