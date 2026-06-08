"use client";

import { useEffect, useState, useRef } from "react";

interface Note {
  id: number;
  symbol: string;
}

const sizePresets = {
  mobile: { height: '8vw', fontSize: '7.2vw', left: '0vw', wave: '1vw', top: '-20%', speed: '6s', unit: 'vw' },
  tablet: { height: '35.52px', fontSize: '35.168px', left: '-5.88px', wave: '2.94px', top: '-30%', speed: '6s', unit: 'px' },
  desktop: { height: '7vw', fontSize: '4vw', left: '-1vw', wave: '0.5vw', top: '0%', speed: '8s', unit: 'vw' },
  xl: { height: '3.3vw', fontSize: '2.4vw', left: '-0.8vw', wave: '0.3vw', top: '0%', speed: '6s', unit: 'vw' },
  xlFixed: { height: '98px', fontSize: '56px', left: '-14px', wave: '7px', top: '0%', speed: '8s', unit: 'px' },
};

export default function MiniMusicNotes({ isPlaying, size = "mobile" }: { isPlaying: boolean; size?: "mobile" | "tablet" | "desktop" | "xl" | "xlFixed" }) {
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
        }, 8000);
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
      <div className="relative w-full overflow-hidden pointer-events-none" style={{ height: s.height, ...(size === 'tablet' ? { width: '100vw', marginLeft: 'calc(50% - 50vw)' } : {}) }}>
        {notes.map((note) => (
          <span
            key={note.id}
            className={`absolute text-white mini-note-wave-${size}`}
            style={{
              top: s.top,
              left: s.left,
              fontSize: s.fontSize,
              fontWeight: 900,
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              transform: 'translateY(-50%)',
            }}
          >
            {note.symbol}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes miniWaveAcross-${size} {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          10% { transform: translateX(10vw) translateY(-${s.wave}); }
          20% { transform: translateX(20vw) translateY(${s.wave}); }
          30% { transform: translateX(30vw) translateY(-${s.wave}); }
          40% { transform: translateX(40vw) translateY(${s.wave}); }
          50% { transform: translateX(50vw) translateY(-${s.wave}); }
          60% { transform: translateX(60vw) translateY(${s.wave}); }
          70% { transform: translateX(70vw) translateY(-${s.wave}); }
          80% { transform: translateX(80vw) translateY(${s.wave}); }
          90% { transform: translateX(90vw) translateY(-${s.wave}); }
          97% { opacity: 1; }
          100% {
            transform: translateX(calc(100vw + 5px)) translateY(${s.wave});
            opacity: 1;
          }
        }
        .mini-note-wave-${size} {
          animation: miniWaveAcross-${size} ${s.speed} linear forwards;
        }
      `}</style>
    </>
  );
}
