"use client";

import Link from "next/link";
import Footer from "./components/Footer";

export default function PageDesktop() {
  return (
    <>
      <style jsx global>{`
        @keyframes logoGlowPulseMobile {
          0% {
            filter: drop-shadow(0px 0px 0px rgba(255, 150, 50, 0));
          }
          100% {
            filter: drop-shadow(0px 0px 10px rgb(195, 100, 0));
          }
        }

        .logo-glow {
          animation: logoGlowPulseMobile 3s cubic-bezier(0.5, 0, 0.2, 1) forwards;
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

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

    <div className="relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden' }}>

      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]"
          style={{ backgroundImage: `url('/images/background_v2.png')`, transform: 'scaleY(-1)' }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]"
          style={{ backgroundImage: `url('/images/background_v2.png')`, transform: 'scaleY(1)' }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/images/new_background_v2.png')` }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/images/vibe_background.png')`, transform: 'scaleY(-1)' }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/images/vibe_background.png')` }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/images/vibe_background.png')`, transform: 'scaleY(-1)' }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/images/vibe_background.png')` }}
        />
      </div>

      {/* === CONTENT LAYER === */}
      <div className="relative z-10">
        {/* Logo */}
        <img
          src="/images/Expresso groove.svg"
          alt="Espresso Groove"
          className="logo-glow"
          style={{ width: '60vw', marginLeft: '-4vw', marginTop: '-6vw' }}
        />
        <h2
          className="text-white text-[5vw] font-[family-name:var(--font-libre-baskerville)] leading-tight uppercase tracking-tight"
          style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
            marginTop: '-8vw',
            paddingLeft: '5vw',
            fontWeight: 900,
          }}
        >
          Where Coffee<br />Meets Culture
        </h2>
        <p
          className="text-white text-[5.5vw] font-[family-name:var(--font-libre-baskerville)] italic"
          style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            marginTop: '2vw',
            paddingLeft: '4.5vw',
            fontWeight: 900,
          }}
        >
          Drip • Drop • Vibe
        </p>

        {/* Buttons */}
        <div
          className="flex items-center justify-center"
          style={{
            paddingLeft: '0vw',
            paddingTop: '4vw',
            gap: '3vw',
          }}
        >
          <Link
            href="/menu"
            className="bg-[#f06830] noisy flex items-center justify-center active:scale-105 duration-150 transition-all"
            style={{ width: '16vw', height: '6.5vw', gap: '0.3vw', border: '2px solid #8a3010', borderRadius: '2vw' }}
          >
            <img
              src="/images/menu_cup.svg?v=3"
              style={{
                width: '2.6vw',
                height: '2.6vw',
                filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                marginRight: '0.5vw',
              }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
              style={{
                textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                letterSpacing: '0.1em',
                fontSize: '2vw',
              }}
            >
              Menu
            </span>
          </Link>

          <Link
            href="/vinyl"
            className="overflow-hidden active:scale-105 duration-150 transition-all"
            style={{ width: '16vw', borderRadius: '2vw', border: '2px solid #1a4f4f' }}
          >
            {/* Top: Vinyl button */}
            <div
              className="bg-[#2a7d7d] noisy flex items-center justify-center"
              style={{ height: '4vw', gap: '0.9vw' }}
            >
              <img
                src="/images/vinyl-svgrepo-com.svg"
                style={{
                  width: '2.1vw',
                  height: '2.1vw',
                  filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.2em',
                  fontSize: '1.8vw',
                }}
              >
                Vinyl
              </span>
            </div>
            {/* Bottom: We Buy Vinyl */}
            <div
              className="bg-[#d9bc52] noisy flex items-center justify-center"
              style={{
                height: '2.2vw',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 12px rgba(217,188,82,0.6), 0 0 24px rgba(217,188,82,0.3)',
              }}
            >
              {/* Shimmer effect */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                  animation: 'shimmer 2.5s ease-in-out infinite',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-black"
                style={{
                  fontSize: '1.1vw',
                  letterSpacing: '0.1em',
                  textShadow: 'none',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                We Buy Vinyl!
              </span>
            </div>
          </Link>

          <Link
            href="/merch"
            className="bg-[#6b4c8c] noisy flex items-center justify-center"
            style={{ width: '16vw', height: '6.5vw', gap: '0.8vw', border: '2px solid #3d2a52', borderRadius: '2vw' }}
          >
            <img
              src="/images/shirt-outline-svgrepo-com.svg"
              style={{
                width: '2.4vw',
                height: '2.4vw',
                filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
              }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
              style={{
                textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                letterSpacing: '0.12em',
                fontSize: '1.9vw',
              }}
            >
              Merch
            </span>
          </Link>

          <Link
            href="/events"
            className="bg-[#24ADFF] noisy flex items-center justify-center active:scale-105 duration-150 transition-all"
            style={{ width: '16vw', height: '6.5vw', gap: '0.5vw', border: '2px solid #3a8abf', borderRadius: '2vw' }}
          >
            <svg style={{ width: '2.5vw', height: '2.5vw', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
              style={{
                textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                letterSpacing: '0.12em',
                fontSize: '1.8vw',
              }}
            >
              Events
            </span>
          </Link>

          {/* Now Spinning Button */}
          <Link href="/now-spinning" className="flex items-center justify-center">
            <div
              className="bg-[#6F4E37] noisy flex items-center justify-center cursor-pointer active:scale-105 duration-150 transition-all"
              style={{ width: '18.5vw', height: '6.5vw', border: '2px solid #1a0f0a', borderRadius: '2vw' }}
            >
              <span className="text-white" style={{ fontSize: '2.2vw' }}>★</span>
              <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: '1.8vw', fontWeight: 900, marginInline: '0.5vw' }}>
                Now Spinning
              </span>
            </div>
          </Link>
        </div>

        {/* Mug */}
        <img
          src="/images/mug.svg"
          alt="Coffee mug with vinyl steam"
          className="pointer-events-none absolute"
          style={{
            width: '28vw',
            right: '7vw',
            top: '24vw',
            filter: 'drop-shadow(0px 0px 15px rgba(255,150,50,0.5))',
          }}
        />

        <div className="h-[200vh]" />
        <div className="hidden">
        <Footer />
        </div>
      </div>

    </div>
    </>
  );
}
