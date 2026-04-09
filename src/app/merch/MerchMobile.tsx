"use client";

import Link from "next/link";

export default function MerchMobile() {
  return (
    <>
      <div className="relative overflow-hidden min-h-screen">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header - Back Button */}
          <header className="flex items-center justify-between" style={{ paddingTop: '6.1vw', paddingBottom: '4.1vw', paddingLeft: '5.1vw', paddingRight: '5.1vw' }}>
            <Link
              href="/"
              className="flex items-center text-white active:scale-125 duration-150 transition-all"
              style={{ gap: '1.5vw', transform: 'translateY(2.5vw) scale(1.1)' }}
            >
              <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '7.1vw', height: '7.1vw' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span
                className="font-[family-name:var(--font-bebas-neue)]"
                style={{ fontSize: '6.1vw', letterSpacing: '0.05em', marginLeft: '2vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
              >Back</span>
            </Link>
            <div style={{ width: '16.3vw' }} />
          </header>

          {/* Page Title + Coming Soon */}
          <div className="text-center" style={{ marginTop: '5vw' }}>
            <h1
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '10.7vw',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              }}
            >
              Merch
            </h1>
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
              style={{
                fontSize: '8vw',
                letterSpacing: '0.1em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                marginTop: '3vw',
                display: 'block',
              }}
            >
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
