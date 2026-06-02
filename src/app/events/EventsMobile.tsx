"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

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

export default function EventsMobile() {
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
      <MobileNav />
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
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/menu_background_full.png')", transform: "scaleY(1)" }}
          />
          {/* Footer background panels */}
          <div
            className="h-screen bg-cover bg-center"
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
        <div className="relative z-10">
          {/* Page Title */}
          <div className="text-center" style={{ marginTop: '17vw', marginBottom: '6.1vw' }}>
            <div className="flex items-center justify-center" style={{ gap: '3.1vw' }}>
              <h1
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                style={{
                  fontSize: '10.7vw',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                  marginTop: '3vw',
                }}
              >
                Events
              </h1>
            </div>
            <p
              className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
              style={{
                fontSize: '6.2vw',
                fontWeight: 900,
                letterSpacing: '0.2em',
                marginTop: '0vw',
                textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* Text + Calendar Section */}
          <div
            className="rounded-xl"
            style={{ marginInline: '3vw', marginTop: '-3vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
              {/* Text */}
              <div style={{ paddingBlock: '5vw', paddingInline: '3vw', }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white italic text-center"
                  style={{
                    fontSize: '3.8vw',
                    lineHeight: '1.7',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                  }}
                >
                  Where the Drip • Drop • Vibe comes to life.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white"
                  style={{
                    fontSize: '3.8vw',
                    lineHeight: '1.7',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                    marginTop: '3vw',
                  }}
                >
                  Events on the calendar:<br />listening parties, live music, open mics, trivia nights, and more.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                  style={{
                    fontSize: '3.6vw',
                    lineHeight: '1.7',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                    marginTop: '3vw',
                  }}
                >
                  Sip. Spin. Stay.
                </p>
              </div>

              {/* Gradient Divider */}
              <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Calendar */}
              <div style={{ padding: '4vw' }}>
                {/* Month Navigation */}
                <div className="flex items-center justify-between" style={{ marginBottom: '4vw' }}>
                  <button
                    onClick={() => {
                      const prev = month === 0 ? 11 : month - 1;
                      const prevYear = month === 0 ? year - 1 : year;
                      setMonth(prev);
                      setYear(prevYear);
                      setSelectedDay(null);
                    }}
                    className="text-white active:scale-125 duration-150 transition-all"
                    style={{ padding: '2vw' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '6vw', height: '6vw' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '5vw', letterSpacing: '0.1em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
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
                    style={{ padding: '2vw' }}
                  >
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '6vw', height: '6vw' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7" style={{ gap: '1vw', marginBottom: '2vw' }}>
                  {DAYS.map((day) => (
                    <div
                      key={day}
                      className="text-center font-[family-name:var(--font-bebas-neue)] text-white/60 uppercase"
                      style={{ fontSize: '5.2vw', letterSpacing: '0.05em' }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7" style={{ gap: '1vw' }}>
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
                          style={{ fontSize: '5vw' }}
                        >
                          {day}
                        </span>
                        {hasEvents && (
                          <div
                            style={{
                              width: '1.5vw',
                              height: '1.5vw',
                              borderRadius: '50%',
                              background: isSelected ? '#fff' : '#f06830',
                              marginTop: '0.5vw',
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
          <div style={{ paddingBottom: '8vw' }} />

          <Footer style={{ marginTop: '-10vw' }} />

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
                <div style={{ height: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <div
                  style={{
                    background: '#2d1f1a',
                    padding: '5vw',
                    paddingBottom: '10vw',
                    borderTopLeftRadius: '4vw',
                    borderTopRightRadius: '4vw',
                    maxHeight: '60vh',
                    overflowY: 'auto',
                  }}
                >
                  {/* Handle + Close */}
                  <div className="flex items-center justify-between" style={{ marginBottom: '4vw' }}>
                    <span
                      className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                      style={{ fontSize: '4.5vw', letterSpacing: '0.05em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      {MONTHS[month]} {selectedDay}, {year}
                    </span>
                    <button
                      onClick={() => setSelectedDay(null)}
                      className="text-white active:scale-125 duration-150 transition-all"
                      style={{ padding: '1vw' }}
                    >
                      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '6vw', height: '6vw' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', marginBottom: '4vw' }} />

                  {eventsForSelectedDay.length > 0 ? (
                    eventsForSelectedDay.map((event, i) => (
                      <div key={i} style={{ marginBottom: i < eventsForSelectedDay.length - 1 ? '4vw' : '0' }}>
                        <div className="flex items-center" style={{ gap: '2vw', marginBottom: '1vw' }}>
                          <div style={{ width: '2.5vw', height: '2.5vw', borderRadius: '50%', background: event.color, flexShrink: 0 }} />
                          <span
                            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                            style={{ fontSize: '4.5vw', letterSpacing: '0.05em', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
                          >
                            {event.title}
                          </span>
                        </div>
                        <span
                          className="font-[family-name:var(--font-bebas-neue)] uppercase"
                          style={{ fontSize: '5vw', color: event.color, letterSpacing: '0.1em', marginLeft: '4.5vw', display: 'block' }}
                        >
                          {event.time}
                        </span>
                        <p
                          className="font-[family-name:var(--font-libre-baskerville)] text-white/80"
                          style={{ fontSize: '3.5vw', lineHeight: '1.6', marginLeft: '4.5vw', marginTop: '1vw' }}
                        >
                          {event.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] text-white text-center"
                      style={{ fontSize: '3.8vw' }}
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
      </div>
    </>
  );
}
