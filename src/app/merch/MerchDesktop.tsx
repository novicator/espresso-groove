"use client";

import Link from "next/link";
import DesktopNav from "../components/DesktopNav";

export default function MerchDesktop() {
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
        {/* Header - Back Button */}
        <header className="flex items-center" style={{ paddingTop: '6.5vw', paddingBottom: '1.5vw', paddingLeft: '3vw' }}>
          <Link
            href="/"
            className="flex items-center text-white active:scale-105 duration-150 transition-all"
            style={{ gap: '0.5vw' }}
          >
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '5vw', height: '5vw' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span
              className="font-[family-name:var(--font-bebas-neue)]"
              style={{ fontSize: '4.3vw', letterSpacing: '0.05em', marginLeft: '0.5vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
            >Back</span>
          </Link>
        </header>

        <div className="flex items-center justify-center" style={{ height: '60vh' }}>
          <span
            className="text-white font-[family-name:var(--font-libre-baskerville)] uppercase"
            style={{ fontSize: '4vw', fontWeight: 900, letterSpacing: '0.2em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
          >
            Coming Soon
          </span>
        </div>

      </div>

    </div>
    </>
  );
}
