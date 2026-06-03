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

const sampleEvents: Record<string, Event[]> = {};

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

      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 z-0">
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]" style={{ backgroundImage: "url('/images/desktop_background_v2.png')", transform: "scaleY(-1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]" style={{ backgroundImage: "url('/images/desktop_background_v2.png')" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
      </div>

      {/* === CONTENT LAYER (px values based on 1199px viewport) === */}
      <div className="relative z-10">
        <div style={{ maxWidth: '1199px', margin: '0 auto' }}>
          {/* Page Title */}
          <div className="text-center" style={{ marginTop: '92px', marginBottom: '36px' }}>
            <div className="flex items-center justify-center" style={{ gap: '18px' }}>
              <h1
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                style={{
                  fontSize: '60.8px',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                  marginTop: '10px',
                }}
              >
                Events
              </h1>
            </div>
            <p
              className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
              style={{
                fontSize: '45.3px',
                fontWeight: 900,
                letterSpacing: '0.2em',
                marginTop: '-10px',
                textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* Stacked Layout */}
          <div
            className="flex flex-col items-center"
            style={{ marginInline: '36px', marginBottom: '48px', gap: '4.8px', marginTop: '-24px' }}
          >
            {/* TOP BOX - Text */}
            <div
              style={{ width: '899px', padding: '4.8px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', borderRadius: '12px' }}
            >
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]" style={{ borderRadius: '8.4px', padding: '24px' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white italic text-center"
                  style={{
                    fontSize: '21.6px',
                    lineHeight: '.5',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                  }}
                >
                  Where the Drip • Drop • Vibe comes to life.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white"
                  style={{
                    fontSize: '21.6px',
                    lineHeight: '1.7',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                    marginTop: '18px',
                  }}
                >
                  Events on the calendar:<br />listening parties, live music, open mics, trivia nights, and more.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                  style={{
                    fontSize: '21.6px',
                    lineHeight: '.5',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                    marginTop: '18px',
                  }}
                >
                  Sip. Spin. Stay.
                </p>
              </div>
            </div>

            {/* BOTTOM BOX - Calendar */}
            <div
              style={{ width: '899px', padding: '4.8px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', borderRadius: '12px', marginTop: '6px' }}
            >
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full" style={{ borderRadius: '8.4px', padding: '12px 24px 24px 24px', paddingBottom: '5px' }}>
                {/* Month Navigation */}
                <div className="flex items-center justify-between" style={{ marginBottom: '12px',}}>
                  <button
                    onClick={() => {
                      const prev = month === 0 ? 11 : month - 1;
                      const prevYear = month === 0 ? year - 1 : year;
                      setMonth(prev);
                      setYear(prevYear);
                      setSelectedDay(null);
                    }}
                    className="text-white active:scale-125 duration-150 transition-all"
                    style={{ padding: '12px 12px 12px 12px' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '36px', height: '36px', }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '27.4px', letterSpacing: '0.1em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
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
                    style={{ padding: '12px' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '36px', height: '36px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7" style={{ gap: '6px', marginBottom: '6px' }}>
                  {DAYS.map((day) => (
                    <div
                      key={day}
                      className="text-center font-[family-name:var(--font-bebas-neue)] text-white/60 uppercase"
                      style={{ fontSize: '25px', letterSpacing: '0.05em' }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
              <div style={{ maxWidth: '899px', margin: '0 auto' }}>
                <div className="grid grid-cols-7" style={{ gap: '6px' }}>
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
                          aspectRatio: '2',
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
                          style={{ fontSize: '28.6px', marginTop: '12px', }}
                        >
                          {day}
                        </span>
                        <div
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: hasEvents ? (isSelected ? '#fff' : '#f06830') : 'transparent',
                            marginTop: '2.4px',
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
                <div style={{ height: '4.8px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <div
                  style={{
                    background: '#2d1f1a',
                    padding: '30px',
                    paddingBottom: '48px',
                    maxHeight: '50vh',
                    overflowY: 'auto',
                  }}
                >
                  {/* Header + Close */}
                  <div className="flex items-center justify-between" style={{ marginBottom: '24px' }}>
                    <span
                      className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                      style={{ fontSize: '24px', letterSpacing: '0.05em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      {MONTHS[month]} {selectedDay}, {year}
                    </span>
                    <button
                      onClick={() => setSelectedDay(null)}
                      className="text-white active:scale-125 duration-150 transition-all"
                      style={{ padding: '6px' }}
                    >
                      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '30px', height: '30px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div style={{ height: '2.4px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', marginBottom: '24px' }} />

                  {eventsForSelectedDay.length > 0 ? (
                    <div className="flex" style={{ gap: '24px', flexWrap: 'wrap' }}>
                      {eventsForSelectedDay.map((event, i) => (
                        <div key={i} style={{ flex: '1', minWidth: '240px' }}>
                          <div className="flex items-center" style={{ gap: '9.6px', marginBottom: '6px' }}>
                            <div style={{ width: '15.6px', height: '15.6px', borderRadius: '50%', background: event.color, flexShrink: 0 }} />
                            <span
                              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                              style={{ fontSize: '21.6px', letterSpacing: '0.05em', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
                            >
                              {event.title}
                            </span>
                          </div>
                          <span
                            className="font-[family-name:var(--font-bebas-neue)] uppercase"
                            style={{ fontSize: '28.8px', color: event.color, letterSpacing: '0.1em', marginLeft: '21.6px', display: 'block' }}
                          >
                            {event.time}
                          </span>
                          <p
                            className="font-[family-name:var(--font-libre-baskerville)] text-white/80"
                            style={{ fontSize: '21.6px', lineHeight: '1.6', marginLeft: '21.6px', marginTop: '6px' }}
                          >
                            {event.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] text-white text-center"
                      style={{ fontSize: '19.2px' }}
                    >
                      No events today. The drinks and records are still flowing.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <DesktopFooterXL />
      </div>

    </div>
    </>
  );
}
