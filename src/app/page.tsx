"use client";

import Link from "next/link";
import MusicNotes from "./components/MusicNotes";
import MiniMusicNotes from "./components/MiniMusicNotes";
import Footer from "./components/Footer";

export default function Home() {
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

      {/* Mobile Site */}
      <div className="md:hidden relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden' }}>

        {/* === BACKGROUND LAYER === */}
        <div className="absolute inset-0 z-0">
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('/images/background_v2.png')`,
              transform: 'scaleY(-1)',
             }}
          />
          <div
            className="h-screen bg-cover bg-center bg-second"
            style={{
              backgroundImage: `url('/images/background_v2.png')`,
              
            }}
          />
          <div
            className="h-screen bg-cover bg-center bg-third"
            style={{ backgroundImage: `url('/images/vibe_background_3.png')` }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/vibe_background.png')`,
              transform: 'scaleY(-1)',
            }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{ 
              backgroundImage: `url('/images/vibe_background.png')` }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/vibe_background.png')`,
              transform: 'scaleY(-1)',
            }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{ 
              backgroundImage: `url('/images/vibe_background.png')` }}
          />
        </div>

        {/* === CONTENT LAYER (on top of background) === */}
        <div className="relative z-10">
          {/* Logo */}
          <img
            src="/images/Expresso groove.svg"
            alt="Espresso Groove"
            className="logo-glow"
            style={{ width: '85vw', marginLeft: '-6vw',}}
          />
          <h2
            className="text-white text-[8vw] font-[family-name:var(--font-libre-baskerville)] leading-tight uppercase tracking-tight"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              marginTop: '-12vw',
              paddingLeft: '5vw',
              fontWeight: 900,
            }}
          >
            Where Coffee<br />Meets Culture
          </h2>
          <p
            className="text-white text-[7.2vw] font-[family-name:var(--font-libre-baskerville)] italic"
            style={{
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              marginTop: '5vw',
              paddingLeft: '5vw',
              fontWeight: 900,
            }}
          >
            Drip • Drop • Vibe
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col"
            style={{
              paddingLeft: '4vw',
              paddingTop: '6vw',
              gap: '3vw',
            }}
          >
            <Link
              href="/menu"
              className="rounded-full bg-[#f06830] noisy flex items-center justify-center active:scale-125 duration-150 transition-all"
              style={{ width: '43vw', height: '13vw', gap: '0vw', border: '2px solid #8a3010' }}
            >
              <img
                src="/images/menu_cup.svg?v=3"
                style={{
                  width: '6vw',
                  height: '6vw',
                  filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                  marginRight: '2vw',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.1em',
                  fontSize: '4.6vw',
                  marginRight: '2vw'
                }}
              >
                Menu
              </span>
            </Link>

            <Link
              href="/vinyl"
              className="overflow-hidden active:scale-125 duration-150 transition-all"
              style={{ width: '43vw', borderRadius: '7vw', border: '2px solid #1a4f4f' }}
            >
              {/* Top: Vinyl button */}
              <div
                className="bg-[#2a7d7d] noisy flex items-center justify-center"
                style={{ height: '13vw', gap: '2vw' }}
              >
                <img
                  src="/images/vinyl-svgrepo-com.svg"
                  style={{
                    width: '6vw',
                    height: '6vw',
                    filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                  }}
                />
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                  style={{
                    textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                    letterSpacing: '0.2em',
                    fontSize: '4.6vw',
                  }}
                >
                  Vinyl
                </span>
              </div>
              {/* Bottom: We Buy Vinyl */}
              <div
                className="bg-[#d9bc52] noisy flex items-center justify-center"
                style={{
                  height: '8vw',
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
                    fontSize: '3vw',
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
              className="rounded-full bg-[#6b4c8c] noisy flex items-center justify-center"
              style={{ width: '43vw', height: '13vw', gap: '2vw', border: '2px solid #3d2a52' }}
            >
              <img
                src="/images/shirt-outline-svgrepo-com.svg"
                style={{
                  width: '6vw',
                  height: '6vw',
                  filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.12em',
                  fontSize: '4.6vw',
                }}
              >
                Merch
              </span>
            </Link>

            <Link
              href="/events"
              className="rounded-full bg-[#24ADFF] noisy flex items-center justify-center active:scale-125 duration-150 transition-all"
              style={{ width: '43vw', height: '13vw', gap: '2vw', border: '2px solid #3a8abf' }}
            >
              <svg style={{ width: '6vw', height: '6vw', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.12em',
                  fontSize: '4.6vw',
                }}
              >
                Events
              </span>
            </Link>
          </div>

          {/* Mug */}
          <img
            src="/images/mug.svg"
            alt="Coffee mug with vinyl steam"
            className="pointer-events-none absolute"
            style={{
              width: '51vw',
              right: '0vw',
              top: '93vw',
              filter: 'drop-shadow(0px 0px 15px rgba(255,150,50,0.5))',
            }}
          />

          {/* === Gradient Divider + Now Playing + Gradient Divider 2 === */}
          <div style={{ marginTop: 'vw' }}>

            {/* Music Notes Divider 1 */}
            <div style={{ paddingTop: '6vw', marginTop: '3vw' }}>
              <MiniMusicNotes isPlaying={true} />
            </div>

            {/* Now Playing Section */}
            <style>{`
              @keyframes eq-bounce {
                0%, 100% { transform: scaleY(1); background-color: #ffffff; box-shadow: 0 0 4px #ffffff99; }
                33% { transform: scaleY(0.4); background-color: #ffffff; box-shadow: 0 0 4px #ffffff99; }
                66% { transform: scaleY(0.7); background-color: #ffffff; box-shadow: 0 0 4px #ffffff99; }
              }
            `}</style>
            <div
              className="w-full flex items-center justify-center"
              style={{ gap: '3.5vw', paddingBlock: '5vw' }}
            >
              {/* Left Equalizer */}
              <div className="flex items-end self-stretch">
                {[
                  { h: 0.3, c: '#ffffff' }, { h: 0.5, c: '#ffffff' }, { h: 0.4, c: '#ffffff' },
                  { h: 0.6, c: '#ffffff' }, { h: 0.35, c: '#ffffff' }, { h: 0.55, c: '#ffffff' }
                ].map((b, i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: '2vw',
                      height: (b.h * 100) + '%',
                      backgroundColor: b.c,
                      boxShadow: '0 0 4px ' + b.c + '99',
                      animation: 'eq-bounce ' + (1.1 + i * 0.15) + 's ease-in-out infinite',
                      transformOrigin: 'bottom',
                    }}
                  />
                ))}
              </div>

              {/* Center Text */}
              <div className="flex flex-col items-center shrink-0">
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
                  style={{
                    fontSize: '6.6vw',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                    fontWeight: 900,
                  }}
                >
                  Now Playing
                </span>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white italic whitespace-nowrap"
                  style={{ fontSize: '5.1vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900,}}
                >
                  Espresso Groove Radio
                </span>
              </div>

              {/* Right Equalizer */}
              <div className="flex items-end self-stretch" style={{ gap: 'vw' }}>
                {[
                  { h: 0.55, c: '#ffffff' }, { h: 0.35, c: '#ffffff' }, { h: 0.6, c: '#ffffff' },
                  { h: 0.4, c: '#ffffff' }, { h: 0.5, c: '#ffffff' }, { h: 0.3, c: '#ffffff' }
                ].map((b, i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: '2vw',
                      height: (b.h * 100) + '%',
                      backgroundColor: b.c,
                      boxShadow: '0 0 4px ' + b.c + '99',
                      animation: 'eq-bounce ' + (1.1 + i * 0.15) + 's ease-in-out infinite',
                      transformOrigin: 'bottom',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Music Notes Divider 2 */}
            <MiniMusicNotes isPlaying={true} />

          </div>

          {/* Now Spinning */}
          <div
            className="flex items-center justify-center"
            style={{ gap: '3.1vw', marginTop: '6.1vw' }}
          >
            <div
              className="bg-white"
              style={{
                width: '14.3vw',
                height: '0.7vw',
                boxShadow: '0 0 6px rgba(0,0,0,0.9)',
              }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{
                fontSize: '6.6vw',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                fontWeight: 900,
              }}
            >
              Now Spinning
            </span>
            <div
              className="bg-white"
              style={{
                width: '14.3vw',
                height: '0.7vw',
                boxShadow: '0 0 6px rgba(0,0,0,.9)',
              }}
            />
          </div>

          {/* Jazz */}
          <div
            className="flex items-center justify-center"
            style={{ gap: '3.1vw', marginTop: '3.1vw' }}
          >
            <div
              className="bg-white"
              style={{ width: '14.2vw', height: '0.8vw', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '16.3vw',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                fontWeight: 900,
              }}
            >
              Jazz
            </span>
            <div
              className="bg-white"
              style={{ width: '14.2vw', height: '0.8vw', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
            />
          </div>

          {/* === Jazz History Section === */}
          <div
            className="rounded-xl"
            style={{ marginTop: '6.1vw', marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div
            className="rounded-lg overflow-hidden bg-[#2d1f1a]"
          >
            {/* Title */}
            <div
              className="text-center"
              style={{ paddingBlock: '3vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
              >
                Jazz History
              </span>
            </div>
            <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

            {/* Image + Text side by side */}
            <div className="flex" style={{ paddingInline: '3vw', gap: '3vw' }}>
              <div
                className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                style={{ width: '30vw', height: '30vw', marginTop: '6vw'}}
              >
                <span
                  className="text-[#555555] font-[family-name:var(--font-inter)] text-center"
                  style={{ fontSize: '2.5vw' }}
                >
                  IMAGE
                </span>
              </div>
              <div className="flex-1">
                <p
                  className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                  style={{ fontSize: '3vw', marginTop: '4vw' }}
                >
                  In the early 1900s, the streets of New Orleans were alive with a new sound. African rhythms met blues and ragtime to create something entirely new. It wasn&apos;t just music - it was freedom, expression, and revolution all at once. From New Orleans...
                </p>
              </div>
            </div>

            {/* Learn More */}
            <div style={{ height: '0.4vw', marginTop: '4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
            <a
              href="/jazz/history"
              className="flex items-center justify-center"
              style={{ paddingInline: '4vw', paddingBlock: '3vw', gap: '2vw' }}
            >
              <span
                className="text-white font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: '4.5vw' }}
              >
                Learn More
              </span>
              <span className="text-white" style={{ fontSize: '3.5vw' }}>→</span>
            </a>
          </div>
          </div>

          {/* === Featured Sips Section === */}
          <div
            className="rounded-xl"
            style={{ marginTop: '4vw', marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div
            className="rounded-lg overflow-hidden bg-[#2d1f1a]"
          >
            {/* Title */}
            <div
              className="text-center"
              style={{ paddingBlock: '3vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
              >
                Featured Sips
              </span>
            </div>

            {/* Category Labels */}
            <div className="flex">
              <div
                className="flex-1 bg-[#f06830] noisy text-center flex items-center justify-center"
                style={{ height: '12vw' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{
                    fontSize: '3.6vw',
                    letterSpacing: '0.07em',
                    textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  }}
                >
                  <img
                    src="/images/menu_cup.svg?v=3"
                    className="inline-block mr-1"
                    style={{
                      width: '4vw',
                      height: '4vw',
                      marginTop: '-1vw',
                      filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))',
                    }}
                  /> Coffee
                </span>
              </div>
              <div
                className="flex-1 bg-[#2a7d7d] noisy text-center flex items-center justify-center"
                style={{ height: 'vw' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{
                    fontSize: '3.vw',
                    letterSpacing: '0.07em',
                    textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  }}
                >
                  Tea
                </span>
              </div>
              <div
                className="flex-1 bg-[#6b4c8c] noisy text-center flex items-center justify-center"
                style={{ height: 'vw' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{
                    fontSize: '3.1vw',
                    letterSpacing: '0.07em',
                    textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  }}
                >
                  Energy Drinks
                </span>
              </div>
            </div>

            {/* Product Cards Row */}
            <div className="flex" style={{ padding: '3vw', gap: '2vw' }}>
              {/* Coffee Card */}
              <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: '4.5vw' }}
                >
                  Blue Note Brew
                </span>
                <div
                  className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                  style={{ width: '18vw', height: '18vw' }}
                >
                  <span className="text-[#555555]" style={{ fontSize: '2.5vw' }}>IMG</span>
                </div>
                <span
                  className="font-[family-name:var(--font-bebas-neue)] text-white"
                  style={{ fontSize: '6.5vw', letterSpacing: '0.07em', textShadow: '0 0 8px rgba(224,86,32,0.4)' }}
                >
                  $5.75
                </span>
              </div>

              {/* Tea Card */}
              <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: '4.5vw' }}
                >
                  Coltrane Chai
                </span>
                <div
                  className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                  style={{ width: '18vw', height: '18vw' }}
                >
                  <span className="text-[#555555]" style={{ fontSize: '2.5vw' }}>IMG</span>
                </div>
                <span
                  className="font-[family-name:var(--font-bebas-neue)] text-white"
                  style={{ fontSize: '6.5vw', letterSpacing: '0.07em', textShadow: '0 0 8px rgba(224,86,32,0.4)' }}
                >
                  $4.50
                </span>
              </div>

              {/* Energy Card */}
              <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: '4.5vw' }}
                >
                  Bebop Blast
                </span>
                <div
                  className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                  style={{ width: '18vw', height: '18vw' }}
                >
                  <span className="text-[#555555]" style={{ fontSize: '2.5vw' }}>IMG</span>
                </div>
                <span
                  className="font-[family-name:var(--font-bebas-neue)] text-white"
                  style={{ fontSize: '6.5vw', letterSpacing: '0.07em', textShadow: '0 0 8px rgba(224,86,32,0.4)' }}
                >
                  $4.75
                </span>
              </div>
            </div>

            {/* View Featured Menu */}
            <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
            <div
              className="flex items-center justify-center"
              style={{ paddingBlock: '3vw', gap: '2vw' }}
            >
              <span
                className="text-white whitespace-nowrap font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: '4.5vw' }}
              >
                View Featured Menu →
              </span>
            </div>

          </div>
          </div>

          {/* === The Vibe Header === */}
          <div
            className="flex items-center justify-center"
            style={{ gap: '3vw', marginTop: '8vw' }}
          >
            <div
              className="bg-white"
              style={{ width: '15vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)'}}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{ fontSize: '6.6vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900, }}
            >
              The Vibe
            </span>
            <div
              className="bg-white"
              style={{ width: '15vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
          </div>

          {/* The Vibe Text */}
          <div style={{ paddingInline: '6vw', marginTop: '4vw', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: '4.4vw', fontWeight: 900 }}
            >
              <span className="font-[900]">Espresso Groove</span> was born from a simple idea:
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: '4.4vw', fontWeight: 900, marginTop: '3vw' }}
            >
              A space where the ritual of coffee meets the soul of music. Great espresso and great vinyl share something in common — they&apos;re both meant to be <span className="font-[800]">savored</span>, not rushed.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: '4.4vw', fontWeight: 900, marginTop: '3vw' }}
            >
              Pull up a chair. Flip through the crates. Espresso <span className="font-[900]">drips</span>, the needle <span className="font-[800]">drops</span>, and the <span className="font-[800]">vibe</span> takes over.
            </p>
            <p
              className="text-white font-[family-name:var(--font-libre-baskerville)] italic text-center"
              style={{ fontSize: '6vw', fontWeight: 900, marginTop: '5vw', textShadow: '2px 2px 8px rgba(0,0,0,0.)' }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* === About Us Header === */}
          <div
            className="flex items-center justify-center"
            style={{ gap: '3vw', marginTop: '6vw' }}
          >
            <div
              className="bg-white"
              style={{ width: '15vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{ fontSize: '6.6vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900, }}
            >
              About Us
            </span>
            <div
              className="bg-white"
              style={{ width: '15vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
          </div>

          {/* === Store Card === */}
          <div
            className="rounded-xl"
            style={{ marginTop: '4vw', marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div
            className="rounded-lg overflow-hidden bg-[#2d1f1a]"
          >
            {/* Our Store Title */}
            <div
              className="text-center border-b border-white"
              style={{ paddingBlock: '3vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: '4.6vw', letterSpacing: '0.15em' }}
              >
                Our Store
              </span>
            </div>

            {/* Store Photo Placeholder */}
            <div
              className="w-full bg-[#d4d4d4] flex items-center justify-center"
              style={{ height: '50vw' }}
            >
              <span
                className="text-[#555555] font-[family-name:var(--font-inter)]"
                style={{ fontSize: '3.5vw' }}
              >
                Store Photo Coming Soon
              </span>
            </div>

            {/* Store Info */}
            <div style={{ padding: '4vw' }}>
              {/* Address */}
              <a
                href="https://maps.google.com/?q=Espresso+Groove"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start"
                style={{ gap: '3vw' }}
              >
                <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '5vw', height: '5vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p
                    className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                    style={{ fontSize: '3.8vw' }}
                  >
                    123 Groove St.
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '3.6vw' }}
                  >
                    City, State 00000
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div
                className="flex items-start"
                style={{ gap: '3vw', marginTop: '3vw' }}
              >
                <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '5vw', height: '5vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p
                    className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                    style={{ fontSize: '3.8vw' }}
                  >
                    Mon–Fri: 7am–9pm
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '3.6vw' }}
                  >
                    Sat–Sun: 8am–10pm
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+10000000000"
                className="flex items-center"
                style={{ gap: '3vw', marginTop: '3vw' }}
              >
                <svg className="text-white flex-shrink-0" style={{ width: '5vw', height: '5vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p
                  className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                  style={{ fontSize: '3.8vw' }}
                >
                  (000) 000-0000
                </p>
              </a>

              {/* Get Directions */}
              <div style={{ height: '0.4vw', marginTop: '4vw', marginLeft: '-4vw', marginRight: '-4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
              <div
                className="flex items-center justify-center"
                style={{ paddingTop: '3vw', gap: '2vw' }}
              >
                <span
                  className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                  style={{ fontSize: '4.6vw' }}
                >
                  Get Directions →
                </span>
              </div>
            </div>
          </div>
          </div>

          <Footer />

        </div>

      </div>
    </>
  );
}
