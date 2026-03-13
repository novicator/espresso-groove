"use client";

import { useEffect, useState, useRef } from "react";

interface Note {
  id: number;
  symbol: string;
}

export default function MusicNotes({ isPlaying }: { isPlaying: boolean }) {
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
        }, 8000);
      }, 1000);
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
      <div className="relative w-full h-[100px] overflow-hidden pointer-events-none top-[50px]">
        {notes.map((note) => (
          <span
            key={note.id}
            className="absolute left-[-10px] text-[#e8c88c] text-[30px] music-note-wave"
            style={{ top: '50%' }}
          >
            {note.symbol}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes waveAcross {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          10% {
            transform: translateX(calc(10vw)) translateY(-18px);
          }
          20% {
            transform: translateX(calc(20vw)) translateY(18px);
          }
          30% {
            transform: translateX(calc(30vw)) translateY(-18px);
          }
          40% {
            transform: translateX(calc(40vw)) translateY(18px);
          }
          50% {
            transform: translateX(calc(50vw)) translateY(-18px);
          }
          60% {
            transform: translateX(calc(60vw)) translateY(18px);
          }
          70% {
            transform: translateX(calc(70vw)) translateY(-18px);
          }
          80% {
            transform: translateX(calc(80vw)) translateY(18px);
          }
          90% {
            transform: translateX(calc(90vw)) translateY(-18px);
          }
          97% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 5px)) translateY(18px);
            opacity: 1;
          }
        }
        .music-note-wave {
          animation: waveAcross 8s linear forwards;
        }
      `}</style>
    </>
  );
}
