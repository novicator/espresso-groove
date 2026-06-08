"use client";

import { useState } from "react";
import Link from "next/link";
import TabletFooter from "../components/TabletFooter";
import TabletNav from "../components/TabletNav";

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
  "2026-06-15": [
    {
      title: "Vinyl Night",
      time: "7:00 PM – 10:00 PM",
      description: "Spinning rare pressings all night with the staff.",
      color: "#ff6b2b",
    },
    {
      title: "Open Mic",
      time: "8:00 PM",
      description: "Bring your sound. Sign-ups at the bar.",
      color: "#33cccc",
    },
    {
      title: "Late-Night Pour",
      time: "10:00 PM – 12:00 AM",
      description: "Limited release espresso flights.",
      color: "#9b59d0",
    },
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

export default function EventsTablet() {
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
      <TabletNav />
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
      `}</style>

      <div className="relative overflow-hidden min-h-screen">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div
            className="h-screen bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
          />
          <div
            className="h-screen bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/menu_background_full.png')", transform: "scaleY(1)" }}
          />
          {/* Footer background panels */}
          <div
            className="h-screen bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/vibe_background.png')",  transform: 'scaleY(-1)' }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/vibe_background.png')", transform: 'scaleY(1)' }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background.png')", transform: 'scaleY(-1)' }}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-20" style={{ ['--w' as string]: 'min(100vw, 700px)', maxWidth: 'var(--w)', margin: '0 auto'  } as React.CSSProperties}>
          {/* Page Title */}
          <div className="text-center" style={{ marginTop: '89.98px', marginBottom: '17.934px' }}>
            <div className="flex items-center justify-center" style={{ gap: '9.114px' }}>
              <h1
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                style={{
                  fontSize: '49.458px',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                  marginTop: '8.82px',
                }}
              >
                Events
              </h1>
            </div>
            <p
              className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
              style={{
                fontSize: '28.228px',
                fontWeight: 900,
                letterSpacing: '0.2em',
                marginTop: '-5px',
                textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* Text + Calendar Section */}
          <div
            className="rounded-xl"
            style={{ marginInline: 'calc(40.76 * var(--w) / 600)', marginTop: 'calc(-8.82 * var(--w) / 600)', padding: '3.352px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
              {/* Text */}
              <div style={{ paddingBlock: 'calc(14.7 * var(--w) / 600)', paddingInline: 'calc(12.82 * var(--w) / 600)', }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white italic text-center"
                  style={{
                    fontSize: 'calc(17.172 * var(--w) / 600)',
                    lineHeight: '1.7',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                  }}
                >
                  Where the Drip • Drop • Vibe comes to life.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white"
                  style={{
                    fontSize: 'calc(17.172 * var(--w) / 600)',
                    lineHeight: '1.7',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                    marginTop: 'calc(8.82 * var(--w) / 600)',
                  }}
                >
                  Events on the calendar:<br />listening parties, live music, open mics, trivia nights, and more.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                  style={{
                    fontSize: 'calc(16.584 * var(--w) / 600)',
                    lineHeight: '1.7',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                    marginTop: 'calc(8.82 * var(--w) / 600)',
                  }}
                >
                  Sip. Spin. Stay.
                </p>
              </div>

              {/* Gradient Divider */}
              <div style={{ height: '3.176px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Calendar */}
              <div style={{ padding: 'calc(11.76 * var(--w) / 600)' }}>
                {/* Month Navigation */}
                <div className="flex items-center justify-between" style={{ marginBottom: 'calc(11.76 * var(--w) / 600)' }}>
                  <button
                    onClick={() => {
                      const prev = month === 0 ? 11 : month - 1;
                      const prevYear = month === 0 ? year - 1 : year;
                      setMonth(prev);
                      setYear(prevYear);
                      setSelectedDay(null);
                    }}
                    className="text-white active:scale-125 duration-150 transition-all"
                    style={{ padding: 'calc(5.88 * var(--w) / 600)' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: 'calc(22.64 * var(--w) / 600)', height: 'calc(22.64 * var(--w) / 600)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: 'calc(19.7 * var(--w) / 600)', letterSpacing: '0.1em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
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
                    style={{ padding: 'calc(5.88 * var(--w) / 600)' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: 'calc(22.64 * var(--w) / 600)', height: 'calc(22.64 * var(--w) / 600)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7" style={{ gap: '2.94px', marginBottom: 'calc(5.88 * var(--w) / 600)' }}>
                  {DAYS.map((day) => (
                    <div
                      key={day}
                      className="text-center font-[family-name:var(--font-bebas-neue)] text-white/60 uppercase"
                      style={{ fontSize: 'calc(24.288 * var(--w) / 600)', letterSpacing: '0.05em' }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7" style={{ gap: '2.94px' }}>
                  {/* Empty cells for offset */}
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {/* Day cells */}
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
                        className="relative flex flex-col items-center justify-center rounded-lg transition-all duration-150"
                        style={{
                          aspectRatio: '1.3',
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
                          style={{ fontSize: 'calc(21.7 * var(--w) / 600)' }}
                        >
                          {day}
                        </span>
                        {hasEvents && (
                          <div
                            style={{
                              position: 'absolute',
                              bottom: 'calc(4 * var(--w) / 600)',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 'calc(6.41 * var(--w) / 600)',
                              height: 'calc(6.41 * var(--w) / 600)',
                              borderRadius: '50%',
                              background: isSelected ? '#fff' : '#f06830',
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div style={{ paddingBottom: 'calc(23.52 * var(--w) / 600)' }} />

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
                style={{
                  animation: 'slideUp 0.25s ease-out',
                }}
              >
                <style>{`
                  @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                  }
                `}</style>
                {/* Gradient border top */}
                <div style={{ height: '3.352px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <div
                  style={{
                    background: '#2d1f1a',
                    padding: 'calc(14.7 * var(--w) / 600)',
                    paddingBottom: 'calc(29.4 * var(--w) / 600)',
                    borderTopLeftRadius: 'calc(11.76 * var(--w) / 600)',
                    borderTopRightRadius: 'calc(11.76 * var(--w) / 600)',
                    maxHeight: '60vh',
                    overflowY: 'auto',
                  }}
                >
                  {/* Handle + Close */}
                  <div className="flex items-center justify-between" style={{ marginBottom: 'calc(11.76 * var(--w) / 600)' }}>
                    <span
                      className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                      style={{ fontSize: 'calc(19.23 * var(--w) / 600)', letterSpacing: '0.05em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      {MONTHS[month]} {selectedDay}, {year}
                    </span>
                    <button
                      onClick={() => setSelectedDay(null)}
                      className="text-white active:scale-125 duration-150 transition-all"
                      style={{ padding: '2.94px' }}
                    >
                      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: 'calc(22.64 * var(--w) / 600)', height: 'calc(22.64 * var(--w) / 600)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div style={{ height: '3.176px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', marginBottom: 'calc(11.76 * var(--w) / 600)' }} />

                  {eventsForSelectedDay.length > 0 ? (
                    eventsForSelectedDay.map((event, i) => (
                      <div key={i} style={{ marginBottom: i < eventsForSelectedDay.length - 1 ? 'calc(11.76 * var(--w) / 600)' : '0' }}>
                        <div className="flex items-center" style={{ gap: 'calc(5.88 * var(--w) / 600)', marginBottom: '2.94px' }}>
                          <div style={{ width: 'calc(7.35 * var(--w) / 600)', height: 'calc(7.35 * var(--w) / 600)', borderRadius: '50%', background: event.color, flexShrink: 0 }} />
                          <span
                            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                            style={{ fontSize: 'calc(18.23 * var(--w) / 600)', letterSpacing: '0.05em', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
                          >
                            {event.title}
                          </span>
                        </div>
                        <span
                          className="font-[family-name:var(--font-bebas-neue)] uppercase"
                          style={{ fontSize: 'calc(20.7 * var(--w) / 600)', color: event.color, letterSpacing: '0.1em', marginLeft: 'calc(13.23 * var(--w) / 600)', display: 'block' }}
                        >
                          {event.time}
                        </span>
                        <p
                          className="font-[family-name:var(--font-libre-baskerville)] text-white/80"
                          style={{ fontSize: 'calc(15.29 * var(--w) / 600)', lineHeight: '1.6', marginLeft: 'calc(13.23 * var(--w) / 600)', marginTop: '2.94px' }}
                        >
                          {event.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] text-white text-center"
                      style={{ fontSize: 'calc(17.172 * var(--w) / 600)',}}
                    >
                      No events today.<br />
                      The drinks and records are still flowing.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <TabletFooter style={{ marginTop: 'calc(-29.4 * var(--w) / 600)' }} />
      </div>
    </>
  );
}
