"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopFooterXL from "../components/DesktopFooterXL";
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

export default function EventsXL() {
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
      <DesktopNav size="xl" />
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

      {/* === BACKGROUND LAYER (stays vw) === */}
      <div className="absolute inset-0 z-0">
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]" style={{ backgroundImage: "url('/images/desktop_background_v2.png')", transform: "scaleY(-1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]" style={{ backgroundImage: "url('/images/desktop_background_v2.png')" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
      </div>

      {/* === CONTENT LAYER (px values based on 1400px) === */}
      <div className="relative z-10">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Header - Back Button */}
          <header className="flex items-center" style={{ paddingTop: '77px', paddingBottom: '21px', paddingLeft: '42px' }}>
            <Link
              href="/"
              className="flex items-center text-white active:scale-105 duration-150 transition-all"
              style={{ gap: '7px' }}
            >
              <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '70px', height: '70px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span
                className="font-[family-name:var(--font-bebas-neue)]"
                style={{ fontSize: '60.2px', letterSpacing: '0.05em', marginLeft: '7px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
              >Back</span>
            </Link>
          </header>

          {/* Page Title */}
          <div className="text-center" style={{ marginTop: '-70px', marginBottom: '42px' }}>
            <div className="flex items-center justify-center" style={{ gap: '21px' }}>
              <img
                src="/images/calendar.svg"
                alt=""
                className="pointer-events-none"
                style={{
                  width: '70px',
                  filter: 'brightness(0) invert(1) drop-shadow(0px 0px 10px rgba(0,0,0,0.5))',
                }}
              />
              <h1
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                style={{
                  fontSize: '63px',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                  paddingLeft: '7px',
                }}
              >
                Events
              </h1>
            </div>
          </div>

          {/* Two Column Layout */}
          <div
            className="flex"
            style={{ marginInline: '42px', marginBottom: '56px', gap: '5.6px' }}
          >
            {/* LEFT BOX - Text */}
            <div
              className="flex-1"
              style={{ padding: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', borderRadius: '14px' }}
            >
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full" style={{ borderRadius: '9.8px', padding: '35px' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white"
                  style={{ fontSize: '25.2px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
                >
                  Drip. Drop. Vibe.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white"
                  style={{ fontSize: '25.2px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.6)', marginTop: '21px' }}
                >
                  This isn&apos;t just a coffee shop — it&apos;s where the room comes alive.
                  Espresso Groove is your stage, your hangout, your nightly soundtrack.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white"
                  style={{ fontSize: '25.2px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.6)', marginTop: '21px' }}
                >
                  From laid-back vinyl listening sessions to open mics, trivia nights, and intimate acoustic
                  sets — every event is part of the experience. The coffee flows, the records spin, and
                  the vibe builds.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white"
                  style={{ fontSize: '25.2px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.6)', marginTop: '21px' }}
                >
                  Check the calendar. Pull up. Stay awhile.
                </p>
              </div>
            </div>

            {/* RIGHT BOX - Calendar */}
            <div
              className="flex-[1.5]"
              style={{ padding: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', borderRadius: '14px' }}
            >
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full" style={{ borderRadius: '9.8px', padding: '28px', paddingBottom: '7px' }}>
                {/* Month Navigation */}
                <div className="flex items-center justify-between" style={{ marginBottom: '28px' }}>
                  <button
                    onClick={() => {
                      const prev = month === 0 ? 11 : month - 1;
                      const prevYear = month === 0 ? year - 1 : year;
                      setMonth(prev);
                      setYear(prevYear);
                      setSelectedDay(null);
                    }}
                    className="text-white active:scale-125 duration-150 transition-all"
                    style={{ padding: '14px' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '42px', height: '42px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '37.8px', letterSpacing: '0.1em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
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
                    style={{ padding: '14px' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '42px', height: '42px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7" style={{ gap: '7px', marginBottom: '14px' }}>
                  {DAYS.map((day) => (
                    <div
                      key={day}
                      className="text-center font-[family-name:var(--font-bebas-neue)] text-white/60 uppercase"
                      style={{ fontSize: '35px', letterSpacing: '0.05em' }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7" style={{ gap: '7px' }}>
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
                          style={{ fontSize: '39.2px' }}
                        >
                          {day}
                        </span>
                        <div
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            background: hasEvents ? (isSelected ? '#fff' : '#f06830') : 'transparent',
                            marginTop: '2.8px',
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sheet */}
        {selectedDay !== null && (
          <>
            <div
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.6)' }}
              onClick={() => setSelectedDay(null)}
            />
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
              <div style={{ height: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
              <div
                style={{
                  background: '#2d1f1a',
                  padding: '35px',
                  paddingBottom: '56px',
                  maxHeight: '50vh',
                  overflowY: 'auto',
                }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: '28px' }}>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '28px', letterSpacing: '0.05em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                  >
                    {MONTHS[month]} {selectedDay}, {year}
                  </span>
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="text-white active:scale-125 duration-150 transition-all"
                    style={{ padding: '7px' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '35px', height: '35px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div style={{ height: '2.8px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', marginBottom: '28px' }} />

                {eventsForSelectedDay.length > 0 ? (
                  <div className="flex" style={{ gap: '28px', flexWrap: 'wrap' }}>
                    {eventsForSelectedDay.map((event, i) => (
                      <div key={i} style={{ flex: '1', minWidth: '280px' }}>
                        <div className="flex items-center" style={{ gap: '11.2px', marginBottom: '7px' }}>
                          <div style={{ width: '18.2px', height: '18.2px', borderRadius: '50%', background: event.color, flexShrink: 0 }} />
                          <span
                            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                            style={{ fontSize: '25.2px', letterSpacing: '0.05em', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
                          >
                            {event.title}
                          </span>
                        </div>
                        <span
                          className="font-[family-name:var(--font-bebas-neue)] uppercase"
                          style={{ fontSize: '33.6px', color: event.color, letterSpacing: '0.1em', marginLeft: '25.2px', display: 'block' }}
                        >
                          {event.time}
                        </span>
                        <p
                          className="font-[family-name:var(--font-libre-baskerville)] text-white/80"
                          style={{ fontSize: '25.2px', lineHeight: '1.6', marginLeft: '25.2px', marginTop: '7px' }}
                        >
                          {event.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p
                    className="font-[family-name:var(--font-libre-baskerville)] text-white text-center"
                    style={{ fontSize: '22.4px' }}
                  >
                    No events this day — but the coffee&apos;s still on.
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        <DesktopFooterXL />
      </div>

    </div>
    </>
  );
}
