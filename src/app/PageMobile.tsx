"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import MusicNotes from "./components/MusicNotes";
import MiniMusicNotes from "./components/MiniMusicNotes";
import MobileNav from "./components/MobileNav";

export default function PageMobile() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) { setScrollRatio(0); setThumbWidth(100); return; }
    setScrollRatio(el.scrollLeft / maxScroll);
    setThumbWidth((el.clientWidth / el.scrollWidth) * 100);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener("scroll", updateScroll);
    return () => el.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  return (
    <>
      <MobileNav />
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

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden' }}>

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
            style={{ backgroundImage: `url('/images/new_background_v2.png')` }}
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
            style={{ width: '85vw', marginLeft: '-6vw', marginTop: '2vw',}}
          />
          <h2
            className="text-white text-[8vw] font-[family-name:var(--font-libre-baskerville)]"
            style={{
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              marginTop: '-12vw',
              paddingLeft: '5vw',
              fontWeight: 900,
            }}
          >
            Coffee & Records
          </h2>
          <p
            className="text-white text-[7.2vw] font-[family-name:var(--font-libre-baskerville)] italic"
            style={{
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              marginTop: '2vw',
              paddingLeft: '5vw',
              fontWeight: 900,
            }}
          >
            Craft drinks.<br />Curated sound.
          </p>

          <div style={{ height: '90vw' }}></div>

          {/* Buttons */}
          <div
            className="flex flex-col hidden"
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
              right: '45vw',
              top: '93vw',
              filter: 'drop-shadow(0px 0px 15px rgba(255,150,50,0.5))',
            }}
          />

          {/* Brown Button */}
          <Link href="/now-spinning" className="hidden flex items-center" style={{ marginTop: '4vw', paddingLeft: '4vw', }}>
            <div
              className="rounded-full bg-[#6F4E37] noisy flex items-center justify-center cursor-pointer active:scale-125 duration-150 transition-all"
              style={{ width: '54vw', height: '13vw', border: '2px solid #1a0f0a' }}
            >
              <span className="text-white" style={{ fontSize: '6vw' }}>★</span>
              <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: '4.6vw', fontWeight: 900, marginInline: '2vw' }}>
                Now Spinning
              </span>
            </div>
          </Link>

          {/* === Music Notes Divider === */}
          <div style={{ marginTop: '-13vw' }}>
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

          {/* Brown Box */}
          <div
            className="rounded-xl"
            style={{ marginInline: '4vw', marginTop: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a]" style={{ padding: '4vw' }}>
              <p
                className="font-[family-name:var(--font-libre-baskerville)] text-white text-center"
                style={{
                  fontSize: '4vw',
                  lineHeight: '1.6',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                }}
              >
                We spin a genre and let the music shape change to inspire the menu.
              </p>
            </div>
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
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{
                fontSize: '5.3vw',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                fontWeight: 900,
              }}
            >
              60s Revolution
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
                Behind the Groove
              </span>
            </div>
            <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

            {/* Image + Text (float wrap) */}
            <div style={{ padding: '4vw' }}>
              <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontWeight: '900', marginTop: '-1vw', marginBottom: '1vw', fontSize: '4vw'}}>
                When the Needle Changed the World
              </p>
              <img
                src="/images/artwork/60s-revolution.png"
                alt="60s Revolution turntable"
                className="rounded-lg object-cover"
                style={{ width: '30vw', height: '30vw', float: 'left', marginRight: '3vw', marginBottom: '2vw', marginTop: '2vw', }}
              />
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                style={{ fontSize: '3.7vw' }}
              >
                The 60s weren&apos;t just a decade; they were an electric shift. It was the era where the single gave way to the album. Artists began creating <span style={{ fontWeight: 700 }}>albums</span>, a complete journey meant to be hard from Side A to Side B...
              </p>
            </div>

            {/* Learn More */}
            <div style={{ height: '0.4vw', marginTop: '0vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
            <a
              href="/now-spinning"
              className="flex items-center justify-center"
              style={{ paddingInline: '4vw', paddingBlock: '3vw', gap: '2vw' }}
            >
              <span
                className="text-white font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: '4.5vw' }}
              >
                Now Spinning
              </span>
              <span className="text-white" style={{ fontSize: '3.5vw' }}>→</span>
            </a>
          </div>
          </div>

          {/* === The Pour Section === */}
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
                Limited Press
              </span>
            </div>
            <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

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
                  Espresso<br />+ Coffee
                </span>
              </div>
              <div
                className="flex-1 bg-[#2a7d7d] noisy text-center flex items-center justify-center"
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
                  Tea<br />+ Matcha
                </span>
              </div>
              <div
                className="flex-1 bg-[#6b4c8c] noisy text-center flex items-center justify-center"
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
                  Energy<br />+ Boba
                </span>
              </div>
            </div>

            {/* Product Cards Row */}
            <div className="flex" style={{ padding: '3vw', gap: '2vw' }}>
              {/* Coffee Card */}
              <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: '5vw' }}
                >
                  Blue Note Brew
                </span>
              </div>

              {/* Tea Card */}
              <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: '5vw' }}
                >
                  Coltrane Chai
                </span>
              </div>

              {/* Energy Card */}
              <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: '5vw' }}
                >
                  Bebop Blast
                </span>
              </div>
            </div>

            {/* View Featured Menu */}
            <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
            <Link
              href="/menu"
              className="flex items-center justify-center"
              style={{ paddingBlock: '3vw', gap: '2vw' }}
            >
              <span
                className="text-white whitespace-nowrap font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: '4.5vw' }}
              >
                View Menu →
              </span>
            </Link>

          </div>
          </div>

          {/* === Vinyl Section === */}
          <div
            className="rounded-xl"
            style={{ marginTop: '4vw', marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a] flex flex-col" style={{ height: '115vw' }}>
              {/* Title */}
              <div
                className="text-center"
                style={{ paddingBlock: '3vw' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
                >
                  Vinyl
                </span>
              </div>
              <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Featured Genre */}
              <div className="text-center" style={{ paddingTop: '3vw' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '4.8vw', letterSpacing: '0.15em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Featured Genre
                </span>
              </div>

              {/* Jazz with dashes */}
              <div
                className="flex items-center justify-center"
                style={{ gap: '3vw', marginTop: '2vw' }}
              >
                <div
                  className="bg-white"
                  style={{ width: '10vw', height: '0.6vw', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
                />
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
                  style={{
                    fontSize: '5vw',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                    fontWeight: 900,
                  }}
                >
                  60s Revolution
                </span>
                <div
                  className="bg-white"
                  style={{ width: '10vw', height: '0.6vw', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
                />
              </div>

              {/* Horizontal Scrolling Cards */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto overflow-y-hidden hide-scrollbar"
                style={{ gap: '3vw', marginTop: '3vw', paddingLeft: '4vw', paddingRight: '4vw', paddingBottom: '3vw' }}
              >
                {[
                  { name: "SGT. PEPPER'S", artist: "The Beatles", img: "/images/artwork/sgt-peppers.jpg" },
                  { name: "ARE YOU EXPERIENCED", artist: "Jimi Hendrix Experience", img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/00/67/45/006745f5-95d5-5a06-35ed-d515e9cfd7d8/dj.tbwlxwoh.jpg/600x600bb.jpg" },
                  { name: "PET SOUNDS", artist: "The Beach Boys", img: "/images/artwork/pet-sounds.jpg" },
                  { name: "HIGHWAY 61 REVISITED", artist: "Bob Dylan", img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg" },
                  { name: "ABBEY ROAD", artist: "The Beatles", img: "/images/artwork/abbey-road.jpg" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 rounded-xl"
                    style={{
                      width: '35vw',
                      padding: '.8vw',
                      paddingBottom: '3vw',
                      background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                    }}
                  >
                    <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                      <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div style={{ padding: '1.5vw' }}>
                        <h4
                          className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                          style={{ fontSize: '5vw' }}
                        >
                          {item.name}
                        </h4>
                        <p className="text-white/60 font-[family-name:var(--font-inter)] overflow-hidden whitespace-nowrap text-ellipsis" style={{ fontSize: '3.8vw', marginTop: '0.5vw' }}>
                          {item.artist}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <div
                ref={trackRef}
                style={{
                  marginLeft: '4vw',
                  marginRight: '4vw',
                  marginTop: '1vw',
                  height: '1vw',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '999px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: `${scrollRatio * (100 - thumbWidth)}%`,
                    width: `${thumbWidth}%`,
                    height: '100%',
                    backgroundColor: '#ffffff',
                    borderRadius: '999px',
                  }}
                />
              </div>

              <div className="flex-1"></div>

              {/* View Vinyl */}
              <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
              <Link
                href="/vinyl"
                className="flex items-center justify-center"
                style={{ paddingBlock: '3vw', gap: '2vw' }}
              >
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-libre-baskerville)]"
                  style={{ fontSize: '4.5vw' }}
                >
                  View All Vinyl →
                </span>
              </Link>
            </div>
          </div>
          
          {/* === Music Notes Divider === */}
          <div style={{ marginTop: '6vw' }}>
            <MiniMusicNotes isPlaying={true} />
          </div>

          {/* === The Vibe Header === */}
          <div
            className="flex items-center justify-center"
            style={{ gap: '4vw', marginTop: '4vw' }}
          >
            <div
              className="bg-white"
              style={{ width: '8vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)'}}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{ fontSize: '6vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900, }}
            >
              Drip • Drop • Vibe
            </span>
            <div
              className="bg-white"
              style={{ width: '8vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
          </div>

          {/* The Vibe Text */}
          <div style={{ paddingInline: '6vw', marginTop: '4vw', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: '4.4vw', fontWeight: 900 }}
            >
              Espresso Groove spun out of a simple idea:
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: '4.4vw', fontWeight: 900, marginTop: '3vw' }}
            >
              The ritual of a crafted drink and the soul of a good record belong in the same room.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: '4.4vw', fontWeight: 600, marginTop: '3vw' }}
            >
              We believe great espresso and great vinyl share a common thread, they&apos;re both meant to be savored, not rushed. Every three weeks, we launch a new <span style={{ fontWeight: 900 }}>Rotation</span>: a curated pairing of sound and taste designed to let you settle in.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic"
              style={{ fontSize: '5vw', fontWeight: 900, marginTop: '4vw', paddingLeft: '4vw' }}
            >
              Espresso <span className="uppercase">drips</span>.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic"
              style={{ fontSize: '5vw', fontWeight: 900, marginTop: '2vw', paddingLeft: '8vw' }}
            >
              The needle <span className="uppercase">drops</span>.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic"
              style={{ fontSize: '5vw', fontWeight: 900, marginTop: '2vw', paddingLeft: '12vw' }}
            >
              The <span className="uppercase">vibe</span> takes over.
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
              Find Us
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
                href="https://www.google.com/maps/search/?api=1&query=3500+Belle+Terre+Blvd,+Suite+C,+Myrtle+Beach,+SC+29526"
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
                    3500 Belle Terre Blvd • Suite C
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '3.6vw' }}
                  >
                    Myrtle Beach, SC 29526
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
                    Tue–Fri: 7am–9pm
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '3.6vw' }}
                  >
                    Sat: 8am–7pm
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '3.6vw' }}
                  >
                    Sun: 8am–5pm
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '3.6vw' }}
                  >
                    Monday: Unplugged <br></br>(Flipping the records & prepping the beans. See you Tuesday at 7 AM.)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+10000000000"
                className="hidden flex items-center"
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
              <a
                href="https://www.google.com/maps/search/?api=1&query=3500+Belle+Terre+Blvd,+Suite+C,+Myrtle+Beach,+SC+29526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                style={{ paddingTop: '3vw', gap: '2vw' }}
              >
                <span
                  className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                  style={{ fontSize: '4.6vw' }}
                >
                  Find Us →
                </span>
              </a>
            </div>
          </div>
          </div>

          {/* Bottom spacer */}
          <div style={{ height: '15vw' }} />

        </div>

      </div>
    </>
  );
}
