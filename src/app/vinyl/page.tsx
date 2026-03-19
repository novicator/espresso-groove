"use client";

import Link from "next/link";

// All vw values converted from px based on 393px width
// Formula: px ÷ 393 × 100 = vw

export default function VinylPage() {
  return (
    <>
      <style jsx global>{`
        @keyframes vinyl-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .vinyl-spin {
          animation: vinyl-spin 8s linear infinite;
          transform-origin: 51.6% 39.8%;
        }
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

    <div className="relative">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Panel 1 - Flipped */}
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background_v2.png')",
            transform: "scaleY(-1)",
          }}
        />
        {/* Panel 2 - Normal */}
        <div
          className="hidden h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/background_v2.png')" }}
        />
        {/* Panel 3 - Flipped */}
        <div
          className="hidden h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background_v2.png')",
            transform: "scaleY(-1)",
          }}
        />
        {/* Panel 4 - Normal */}
        <div
          className="hidden h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/background_v2.png')" }}
        />
      </div>

      {/* Vinyl peeping from right */}
      <div className="absolute z-[5]" style={{ right: '-58vw', top: '-11vw', width: '120vw', height: '120vw' }}>
        <img
          src="/images/vinyl.svg"
          alt=""
          className="w-full h-full pointer-events-none vinyl-spin"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Header - Back Button */}
        {/* pt-6=24px=6.1vw, pb-4=16px=4.1vw, px-5=20px=5.1vw */}
        <header className="flex items-center justify-between" style={{ paddingTop: '6.1vw', paddingBottom: '4.1vw', paddingLeft: '5.1vw', paddingRight: '5.1vw' }}>
          <Link
            href="/"
            className="flex items-center text-white active:scale-125 duration-150 transition-all"
            style={{ gap: '1.5vw', transform: 'translateY(2.5vw) scale(1.1)' }}
          >
            {/* w-7=28px=7.1vw, h-7=28px=7.1vw */}
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '7.1vw', height: '7.1vw' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {/* text-2xl=24px=6.1vw, ml-2=8px=2vw */}
            <span
              className="font-[family-name:var(--font-bebas-neue)]"
              style={{ fontSize: '6.1vw', letterSpacing: '0.05em', marginLeft: '2vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
            >Back</span>
          </Link>
          {/* w-16=64px=16.3vw */}
          <div style={{ width: '16.3vw' }} />
        </header>

        {/* Page Title */}
        <div className="flex flex-col" style={{ marginTop: '2vw', marginBottom: '6.1vw',}}>
          <h1
            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
            style={{
              fontSize: '10.7vw',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              paddingLeft: '14.1vw',
              paddingTop: '3vw',
            }}
          >
            Vinyl
          </h1>
          <p
            className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
            style={{
              fontSize: '6.2vw',
              fontWeight: 900,
              letterSpacing: '0.2em',
              marginTop: '0vw',
              paddingLeft: '4.5vw',
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            }}
          >
            Drip • Drop • Vibe
          </p>
        </div>

      </div>
    </div>
    </>
  );
}
