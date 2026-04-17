"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopFooter from "../components/DesktopFooter";
import DesktopNav from "../components/DesktopNav";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type Event = {
  title: string;
  time: string;
  description: string;
  color: string;
};

const sampleEvents: Record<string, Event[]> = {
  "2026-04-03": [
    { title: "Trivia Night", time: "7:00 PM", description: "Test your knowledge — coffee & prizes on the line.", color: "#f06830" },
  ],
  "2026-04-05": [
    { title: "Acoustic Saturday", time: "6:00 PM", description: "Live acoustic sets from local artists.", color: "#2a7d7d" },
  ],
  "2026-04-10": [
    { title: "Open Mic Night", time: "7:30 PM", description: "Your stage, your sound. Sign up at the counter.", color: "#4CAF50" },
  ],
  "2026-04-12": [
    { title: "Vinyl Listening Party", time: "5:00 PM", description: "Full album playthrough on our house system. This month: Rumours.", color: "#24ADFF" },
  ],
  "2026-04-17": [
    { title: "Poetry Night", time: "7:00 PM", description: "Spoken word, open floor. Bring your voice.", color: "#d9bc52" },
  ],
  "2026-04-19": [
    { title: "Acoustic Saturday", time: "6:00 PM", description: "Live acoustic sets from local artists.", color: "#2a7d7d" },
  ],
  "2026-04-24": [
    { title: "Trivia Night", time: "7:00 PM", description: "Test your knowledge — coffee & prizes on the line.", color: "#f06830" },
  ],
  "2026-04-26": [
    { title: "Vinyl Listening Party", time: "5:00 PM", description: "Full album playthrough on our house system. This month: Rumours.", color: "#24ADFF" },
    { title: "Open Mic Night", time: "7:30 PM", description: "Your stage, your sound. Sign up at the counter.", color: "#4CAF50" },
  ],
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default function EventsDesktop() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const eventsForSelectedDay = selectedDay
    ? sampleEvents[formatDateKey(year, month, selectedDay)] || []
    : [];

  return (
    <>
      <DesktopNav />
      <style jsx global>{`
        .noisy {
          position: relative;
        }
        .noisy::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.8;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

    <div className="relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden', minHeight: '100vh' }}>

      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]"
          style={{ backgroundImage: "url('/images/desktop_background_v2.png')", transform: "scaleY(-1)" }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]"
          style={{ backgroundImage: "url('/images/desktop_background_v2.png')" }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
          style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
          style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
          style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
          style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }}
        />
      </div>

      {/* === CONTENT LAYER === */}
      <div className="relative z-10">
        {/* Page Title */}
        <div className="text-center" style={{ marginTop: '6vw', marginBottom: '3vw' }}>
          <div className="flex items-center justify-center" style={{ gap: '1.5vw' }}>
            <h1
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '6.6vw',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              }}
            >
              Events
            </h1>
          </div>
          <p
            className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
            style={{
              fontSize: '4.14vw',
              fontWeight: 900,
              letterSpacing: '0.2em',
              marginTop: '-1vw',
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            }}
          >
            Drip • Drop • Vibe
          </p>
        </div>

        {/* Stacked Layout */}
        <div
          className="flex flex-col items-center"
          style={{ marginInline: '3vw', marginBottom: '4vw', gap: '0.4vw', marginTop: '-2vw' }}
        >
          {/* TOP BOX - Text */}
          <div
            className="w-[75vw]"
            style={{ padding: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', borderRadius: '1vw' }}
          >
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a]" style={{ borderRadius: '0.7vw', padding: '2vw' }}>
              <p
                className="font-[family-name:var(--font-libre-baskerville)] text-white italic"
                style={{
                  fontSize: '1.8vw',
                  lineHeight: '.5',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                }}
              >
                Where the vibe comes to life
              </p>
              <p
                className="font-[family-name:var(--font-libre-baskerville)] text-white"
                style={{
                  fontSize: '1.8vw',
                  lineHeight: '1.7',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                  marginTop: '1.5vw',
                }}
              >
                Events on the calendar — listening parties, music, mics, trivia, and more.
              </p>
              <p
                className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                style={{
                  fontSize: '1.8vw',
                  lineHeight: '.5',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                  marginTop: '1.5vw',
                }}
              >
                Your stage. Your hangout. Your soundtrack.
              </p>
            </div>
          </div>

          {/* BOTTOM BOX - Calendar */}
          <div
            style={{ width: '60vw', padding: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', borderRadius: '1vw', marginTop: '0.5vw', }}
          >
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full" style={{ borderRadius: '0.7vw', padding: '2vw', paddingBottom: '0.5vw' }}>
              {/* Month Navigation */}
              <div className="flex items-center justify-between" style={{ marginBottom: '2vw' }}>
                <button
                  onClick={() => {
                    const prev = month === 0 ? 11 : month - 1;
                    const prevYear = month === 0 ? year - 1 : year;
                    setMonth(prev);
                    setYear(prevYear);
                    setSelectedDay(null);
                  }}
                  className="text-white active:scale-125 duration-150 transition-all"
                  style={{ padding: '1vw' }}
                >
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '3vw', height: '3vw' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '2.7vw', letterSpacing: '0.1em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  {MONTHS[month]} {year}
                </span>
                <button
                  onClick={() => {
                    const next = month === 11 ? 0 : month + 1;
                    const nextYear = month === 11 ? year + 1 : year;
                    setMonth(next);
                    setYear(nextYear);
                    setSelectedDay(null);
                  }}
                  className="text-white active:scale-125 duration-150 transition-all"
                  style={{ padding: '1vw' }}
                >
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '3vw', height: '3vw' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7" style={{ gap: '0.5vw', marginBottom: '1vw' }}>
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="text-center font-[family-name:var(--font-bebas-neue)] text-white/60 uppercase"
                    style={{ fontSize: '2.5vw', letterSpacing: '0.05em' }}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7" style={{ gap: '0.5vw' }}>
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dateKey = formatDateKey(year, month, day);
                  const hasEvents = !!sampleEvents[dateKey];
                  const isSelected = selectedDay === day;
                  const isToday =
                    day === now.getDate() &&
                    month === now.getMonth() &&
                    year === now.getFullYear();

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(isSelected ? null : day)}
                      className="flex flex-col items-center justify-center rounded-lg transition-all duration-150"
                      style={{
                        aspectRatio: '1',
                        background: isSelected
                          ? 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)'
                          : isToday
                            ? 'rgba(255,255,255,0.1)'
                            : 'transparent',
                        border: isToday && !isSelected ? '1px solid rgba(255,255,255,0.3)' : 'none',
                      }}
                    >
                      <span
                        className="font-[family-name:var(--font-bebas-neue)] text-white"
                        style={{ fontSize: '2.8vw' }}
                      >
                        {day}
                      </span>
                      <div
                        style={{
                          width: '1vw',
                          height: '1vw',
                          borderRadius: '50%',
                          background: hasEvents ? (isSelected ? '#fff' : '#f06830') : 'transparent',
                          marginTop: '0.2vw',
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sheet */}
        {selectedDay !== null && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.6)' }}
              onClick={() => setSelectedDay(null)}
            />
            {/* Sheet */}
            <div
              className="fixed bottom-0 left-0 right-0 z-50"
              style={{ animation: 'slideUp 0.25s ease-out' }}
            >
              <style>{`
                @keyframes slideUp {
                  from { transform: translateY(100%); }
                  to { transform: translateY(0); }
                }
              `}</style>
              {/* Gradient border top */}
              <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
              <div
                style={{
                  background: '#2d1f1a',
                  padding: '2.5vw',
                  paddingBottom: '4vw',
                  maxHeight: '50vh',
                  overflowY: 'auto',
                }}
              >
                {/* Header + Close */}
                <div className="flex items-center justify-between" style={{ marginBottom: '2vw' }}>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '2vw', letterSpacing: '0.05em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                  >
                    {MONTHS[month]} {selectedDay}, {year}
                  </span>
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="text-white active:scale-125 duration-150 transition-all"
                    style={{ padding: '0.5vw' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '2.5vw', height: '2.5vw' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div style={{ height: '0.2vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', marginBottom: '2vw' }} />

                {eventsForSelectedDay.length > 0 ? (
                  <div className="flex" style={{ gap: '2vw', flexWrap: 'wrap' }}>
                    {eventsForSelectedDay.map((event, i) => (
                      <div key={i} style={{ flex: '1', minWidth: '20vw' }}>
                        <div className="flex items-center" style={{ gap: '0.8vw', marginBottom: '0.5vw' }}>
                          <div style={{ width: '1.3vw', height: '1.3vw', borderRadius: '50%', background: event.color, flexShrink: 0 }} />
                          <span
                            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                            style={{ fontSize: '1.8vw', letterSpacing: '0.05em', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
                          >
                            {event.title}
                          </span>
                        </div>
                        <span
                          className="font-[family-name:var(--font-bebas-neue)] uppercase"
                          style={{ fontSize: '2.4vw', color: event.color, letterSpacing: '0.1em', marginLeft: '1.8vw', display: 'block' }}
                        >
                          {event.time}
                        </span>
                        <p
                          className="font-[family-name:var(--font-libre-baskerville)] text-white/80"
                          style={{ fontSize: '1.8vw', lineHeight: '1.6', marginLeft: '1.8vw', marginTop: '0.5vw' }}
                        >
                          {event.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p
                    className="font-[family-name:var(--font-libre-baskerville)] text-white text-center"
                    style={{ fontSize: '1.6vw' }}
                  >
                    No events this day — but the coffee&apos;s still on.
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        <DesktopFooter />
      </div>

    </div>
    </>
  );
}
