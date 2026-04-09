"use client";

import { useEffect, useState, useRef } from "react";

interface Note {
  id: number;
  symbol: string;
}

const sizePresets = {
  mobile: { height: '40vw', marginTop: '-5vw', fontSize: '10.6vw', left: '-3vw', top: '50%', wave: '4.6vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', speed: '8s', unit: 'vw' },
  desktop: { height: '15vw', marginTop: '-3vw', fontSize: '5vw', left: '-2vw', top: '50%', wave: '2vw', textShadow: 'none', speed: '10s', unit: 'vw' },
  xl: { height: '10vw', marginTop: '-1vw', fontSize: '3.5vw', left: '-1.5vw', top: '50%', wave: '1.5vw', textShadow: 'none', speed: '8s', unit: 'vw' },
  xlFixed: { height: '210px', marginTop: '-42px', fontSize: '70px', left: '-28px', top: '50%', wave: '28px', textShadow: 'none', speed: '10s', unit: 'px' },
};

export default function MusicNotes({ isPlaying, size = "mobile" }: { isPlaying: boolean; size?: "mobile" | "desktop" | "xl" | "xlFixed" }) {
  const s = sizePresets[size];
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
        }, 10000);
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
      <div className="relative w-full overflow-hidden pointer-events-none" style={{ height: s.height, marginTop: s.marginTop }}>
        {notes.map((note) => (
          <span
            key={note.id}
            className={`absolute text-white music-note-wave-${size}`}
            style={{
              top: s.top,
              left: s.left,
              fontSize: s.fontSize,
              fontWeight: 900,
              textShadow: s.textShadow,
            }}
          >
            {note.symbol}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes waveAcross-${size} {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          10% {
            transform: translateX(10vw) translateY(-${s.wave});
          }
          20% {
            transform: translateX(20vw) translateY(${s.wave});
          }
          30% {
            transform: translateX(30vw) translateY(-${s.wave});
          }
          40% {
            transform: translateX(40vw) translateY(${s.wave});
          }
          50% {
            transform: translateX(50vw) translateY(-${s.wave});
          }
          60% {
            transform: translateX(60vw) translateY(${s.wave});
          }
          70% {
            transform: translateX(70vw) translateY(-${s.wave});
          }
          80% {
            transform: translateX(80vw) translateY(${s.wave});
          }
          90% {
            transform: translateX(90vw) translateY(-${s.wave});
          }
          97% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 5px)) translateY(${s.wave});
            opacity: 1;
          }
        }
        .music-note-wave-${size} {
          animation: waveAcross-${size} ${s.speed} linear forwards;
        }
      `}</style>
    </>
  );
}
