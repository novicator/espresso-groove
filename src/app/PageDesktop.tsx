"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import MiniMusicNotes from "./components/MiniMusicNotes";
import DesktopFooter from "./components/DesktopFooter";
import DesktopNav from "./components/DesktopNav";

const VINYL_ITEMS = [
  { name: "SGT. PEPPER'S", artist: "The Beatles", img: "/images/artwork/sgt-peppers.jpg" },
  { name: "ARE YOU EXPERIENCED", artist: "Jimi Hendrix Experience", img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/00/67/45/006745f5-95d5-5a06-35ed-d515e9cfd7d8/dj.tbwlxwoh.jpg/600x600bb.jpg" },
  { name: "PET SOUNDS", artist: "The Beach Boys", img: "/images/artwork/pet-sounds.jpg" },
  { name: "HIGHWAY 61 REVISITED", artist: "Bob Dylan", img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg" },
  { name: "ABBEY ROAD", artist: "The Beatles", img: "/images/artwork/abbey-road.jpg" },
];

export default function PageDesktop() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [vinylAutoScroll, setVinylAutoScroll] = useState(true);
  const vinylPausedRef = useRef(false);
  const vinylResumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const vinylScrollPosRef = useRef(0);

  // Vinyl carousel is "active" when it's in the viewport (matches vinyl-page row behavior)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setVinylAutoScroll(entry.isIntersecting); },
      { rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll right-to-left with seamless loop (snap back invisibly when one full set has scrolled past)
  useEffect(() => {
    const el = scrollRef.current;
    if (!vinylAutoScroll || !el) return;
    vinylScrollPosRef.current = el.scrollLeft;
    const speed = 0.5;
    let rafId = 0;
    const tick = () => {
      if (!el) return;
      if (vinylPausedRef.current) {
        vinylScrollPosRef.current = el.scrollLeft;
      } else {
        vinylScrollPosRef.current += speed;
        el.scrollLeft = vinylScrollPosRef.current;
      }
      if (el.children.length >= VINYL_ITEMS.length + 1) {
        const first = el.children[0] as HTMLElement;
        const secondCopyFirst = el.children[VINYL_ITEMS.length] as HTMLElement;
        const loopDistance = secondCopyFirst.offsetLeft - first.offsetLeft;
        if (loopDistance > 0 && vinylScrollPosRef.current >= loopDistance) {
          vinylScrollPosRef.current -= loopDistance;
          el.scrollLeft = vinylScrollPosRef.current;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [vinylAutoScroll]);

  const handleVinylPauseStart = () => {
    vinylPausedRef.current = true;
    if (vinylResumeTimerRef.current) clearTimeout(vinylResumeTimerRef.current);
  };
  const handleVinylPauseEnd = () => {
    if (vinylResumeTimerRef.current) clearTimeout(vinylResumeTimerRef.current);
    vinylResumeTimerRef.current = setTimeout(() => { vinylPausedRef.current = false; }, 2000);
  };

  return (
    <>
      <DesktopNav />
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
          className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]"
          style={{ backgroundImage: `url('/images/desktop_background_v2.png')`, transform: 'scaleY(-1)' }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]"
          style={{ backgroundImage: `url('/images/desktop_background_v2.png')`, transform: 'scaleY(1)' }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
          style={{ backgroundImage: `url('/images/desktop_black_bg.png')` }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
          style={{ backgroundImage: `url('/images/desktop_black_bg.png')`, transform: 'scaleY(-1)' }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
          style={{ backgroundImage: `url('/images/desktop_black_bg.png')`, transform: 'scaleY(1)' }}
        />
        <div
          className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
          style={{ backgroundImage: `url('/images/desktop_black_bg.png')`, transform: 'scaleY(-1)' }}
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
          style={{ width: '58vw', marginLeft: '-5vw', marginTop: '1vw' }}
        />
        <h2
          className="text-white text-[4.3vw] font-[family-name:var(--font-libre-baskerville)]"
          style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            marginTop: '-8vw',
            paddingLeft: '5vw',
            fontWeight: 900,
          }}
        >
          Coffee & Records
        </h2>
        <p
          className="text-white text-[3.7vw] font-[family-name:var(--font-libre-baskerville)] italic"
          style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            marginTop: '1vw',
            paddingLeft: '4.5vw',
            fontWeight: 900,
          }}
        >
          Craft drinks<br />Curated sound
        </p>

        {/* Buttons */}
        <div
          className="hidden flex items-center justify-center"
          style={{
            paddingLeft: '0vw',
            paddingTop: '2.75vw',
            gap: '1.5vw',
          }}
        >
          <Link
            href="/menu"
            className="bg-[#f06830] noisy flex items-center justify-center active:scale-105 duration-150 transition-all"
            style={{ width: '18vw', height: '7.5vw', gap: '0.5vw', border: '2px solid #8a3010', borderRadius: '2vw' }}
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
            style={{ width: '18vw', borderRadius: '2vw', border: '2px solid #1a4f4f' }}
          >
            {/* Top: Vinyl button */}
            <div
              className="bg-[#2a7d7d] noisy flex items-center justify-center"
              style={{ height: '5vw', gap: '0.9vw' }}
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
                height: '2.5vw',
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
            style={{ width: '18vw', height: '7.5vw', gap: '0.8vw', border: '2px solid #3d2a52', borderRadius: '2vw' }}
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
            style={{ width: '18vw', height: '7.5vw', gap: '0.5vw', border: '2px solid #3a8abf', borderRadius: '2vw' }}
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
              style={{ width: '18vw', height: '7.5vw', border: '2px solid #1a0f0a', borderRadius: '2vw' }}
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
            top: '17vw',
            filter: 'drop-shadow(0px 0px 15px rgba(255,150,50,0.5))',
          }}
        />

        {/* === Music Notes Divider === */}
        <div style={{ marginTop: '5vw' }}>
          <MiniMusicNotes isPlaying={true} size="desktop" />
        </div>

        {/* Now Spinning */}
        <div
          className="flex items-center justify-center"
          style={{ gap: '4vw', marginTop: '2.1vw' }}
        >
          <div
            className="bg-white"
            style={{
              width: '10.3vw',
              height: '0.7vw',
              boxShadow: '0 0 6px rgba(0,0,0,0.9)',
            }}
          />
          <span
            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
            style={{
              fontSize: '4vw',
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              fontWeight: 900,
            }}
          >
            Now Spinning
          </span>
          <div
            className="bg-white"
            style={{
              width: '10.3vw',
              height: '0.7vw',
              boxShadow: '0 0 6px rgba(0,0,0,.9)',
            }}
          />
        </div>

        {/* Brown Box */}
        <div
          className="rounded-xl"
          style={{ marginInline: '4vw', marginTop: '2.5vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
        >
          <div className="rounded-lg overflow-hidden bg-[#2d1f1a]" style={{ padding: '2vw' }}>
            <p
              className="font-[family-name:var(--font-libre-baskerville)] text-white text-center"
              style={{
                fontSize: '2.4vw',
                lineHeight: '1.6',
                textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
              }}
            >
             We spin a genre and let the music inspire the menu.
            </p>
          </div>
        </div>

        {/* Jazz */}
        <div
          className="flex items-center justify-center"
          style={{ gap: '4.1vw', marginTop: '2.5vw' }}
        >
          <div
            className="bg-white"
            style={{ width: '12.2vw', height: '0.8vw', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
          />
          <span
            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
            style={{
              fontSize: '4vw',
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              fontWeight: 900,
            }}
          >
            The 60<span className="lowercase">s</span> Revolution
          </span>
          <div
            className="bg-white"
            style={{ width: '12.2vw', height: '0.8vw', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
          />
        </div>

        {/* === Three Column Row === */}
        <div className="flex" style={{ gap: '2vw', marginTop: '1vw', paddingInline: '4vw' }}>

          {/* LEFT: Jazz History */}
          <div className="flex-1 flex flex-col items-center" style={{ order: 3, gap: '1vw' }}>
            <span className="text-white font-[family-name:var(--font-libre-baskerville)] italic" style={{ fontSize: '3vw', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
              Vibe
            </span>
            <Link href="/now-spinning" className="w-full rounded-xl block" style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', height: '44.5vw' }}>
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full flex flex-col">
              {/* Title */}
              <div className="text-center" style={{ paddingBlock: '1.2vw' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '1.8vw', letterSpacing: '0.15em' }}
                >
                  Behind the Groove
                </span>
              </div>
              <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', marginTop: '-0.7vw', }} />

              {/* Image + Text (float wrap) */}
              <div style={{ padding: '1.5vw' }}>
                <img
                  src="/images/artwork/60s-revolution.png"
                  alt="60s Revolution turntable"
                  className="rounded-lg object-cover"
                  style={{ width: '10vw', height: '10vw', float: 'left', marginRight: '1.5vw', marginTop: '0.5vw' }}
                />
                <p
                  className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                  style={{ fontSize: '1.2vw' }}
                >
                  The 60s weren&apos;t just a decade; they were an electric shift. It was the era where the single gave way to the album. Artists began creating <span style={{ fontWeight: 700 }}>albums</span>, a complete journey meant to be hard from Side A to Side B with deep, complex stories that changed how people thought about politics, love, and art. From the sun-drenched melodies of the British Invasion to the psychedelic explorations of the Sunset Strip...
                </p>
              </div>

              {/* Learn More */}
              <div className="mt-auto">
                <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <div
                  className="flex items-center justify-center"
                  style={{ paddingBlock: '0vw', gap: '1vw' }}
                >
                  <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: '1.8vw' }}>
                    Now Spinning
                  </span>
                  <span className="text-white" style={{ fontSize: '3vw' }}>→</span>
                </div>
              </div>
            </div>
          </Link>

          </div>

          {/* MIDDLE: Featured Sips */}
          <div className="flex-1 flex flex-col items-center" style={{ order: 1, gap: '1vw' }}>
            <span className="text-white font-[family-name:var(--font-libre-baskerville)] italic" style={{ fontSize: '3vw', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
              Drip
            </span>
            <Link href="/menu" className="w-full rounded-xl block" style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', height: '44.5vw' }}>
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full flex flex-col">
              {/* Title */}
              <div className="text-center" style={{ paddingBlock: '2vw' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '2vw', letterSpacing: '0.15em' }}
                >
                  Limited Press
                </span>
              </div>
              <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Iced Drinks header (single, full-width) */}
              <div className="bg-[#24ADFF] noisy flex items-center justify-center" style={{ height: '4vw' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '1.5vw', letterSpacing: '0.1em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}
                >
                  Iced Drinks
                </span>
              </div>

              {/* Three equal drink cards with gradient dividers */}
              <div className="flex-1 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-white font-[family-name:var(--font-bebas-neue)] tracking-wide text-center" style={{ fontSize: '2.2vw' }}>
                    Purple Haze
                  </span>
                </div>
                <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-white font-[family-name:var(--font-bebas-neue)] tracking-wide text-center" style={{ fontSize: '2.2vw' }}>
                    Sunday Morning
                  </span>
                </div>
                <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-white font-[family-name:var(--font-bebas-neue)] tracking-wide text-center" style={{ fontSize: '2.2vw' }}>
                    Strawberry Fields
                  </span>
                </div>
              </div>

              {/* View Menu */}
              <div className="mt-auto">
                <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <div
                  className="flex items-center justify-center"
                  style={{ paddingBlock: '0vw', gap: '1vw' }}
                >
                  <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: '1.8vw' }}>
                    Menu
                  </span>
                  <span className="text-white" style={{ fontSize: '3vw' }}>→</span>
                </div>
              </div>
            </div>
          </Link>

          </div>

          {/* RIGHT: Now Spinning Jazz Vinyl */}
          <div className="flex-1 flex flex-col items-center" style={{ order: 2, gap: '1vw', minWidth: 0 }}>
            <span className="text-white font-[family-name:var(--font-libre-baskerville)] italic" style={{ fontSize: '3vw', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
              Drop
            </span>
            <Link href="/vinyl" className="w-full rounded-xl block" style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', height: '44.5vw' }}>
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full flex flex-col">
              {/* Title */}
              <div className="text-center" style={{ paddingBlock: '2vw' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '2vw', letterSpacing: '0.15em' }}
                >
                  Vinyl
                </span>
              </div>
              <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Now Spinning */}
              <div className="text-center" style={{ paddingTop: '1vw' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '1.7vw', letterSpacing: '0.15em' }}
                >
                  Now Spinning
                </span>
                <div className="flex items-center justify-center" style={{ gap: '1vw', marginTop: '0.8vw' }}>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold whitespace-nowrap"
                    style={{ fontSize: '1.7vw', letterSpacing: '0.15em' }}
                  >
                    60<span className="lowercase">s</span> Revolution
                  </span>
                  
                </div>
              </div>

              {/* Horizontal Scrolling Cards */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto overflow-y-hidden hide-scrollbar"
                style={{ gap: '1.5vw', paddingLeft: '1.5vw', paddingRight: '1.5vw', paddingTop: '1vw', paddingBottom: '2vw' }}
                onPointerDown={handleVinylPauseStart}
                onPointerUp={handleVinylPauseEnd}
                onPointerCancel={handleVinylPauseEnd}
                onWheel={() => { handleVinylPauseStart(); handleVinylPauseEnd(); }}
              >
                {[...VINYL_ITEMS, ...VINYL_ITEMS].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl"
                    style={{
                      width: '12vw',
                      flexShrink: 0,
                      paddingTop: '0.5vw',
                      paddingLeft: '0.5vw',
                      paddingRight: '0.5vw',
                      paddingBottom: '2vw',
                      marginTop: '0.6vw',
                      background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                    }}
                  >
                    <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                      <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div style={{ padding: '1vw' }}>
                        <h4
                          className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                          style={{ fontSize: '1.8vw' }}
                        >
                          {item.name}
                        </h4>
                        <p className="text-white/60 font-[family-name:var(--font-inter)] overflow-hidden whitespace-nowrap text-ellipsis" style={{ fontSize: '1.4vw', marginTop: '0.3vw' }}>
                          {item.artist}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>


              {/* Vinyl Footer */}
              <div className="mt-auto">
                <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <div
                  className="flex items-center justify-center"
                  style={{ paddingBlock: '0vw', gap: '1vw' }}
                >
                  <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: '1.8vw' }}>
                    Vinyl
                  </span>
                  <span className="text-white" style={{ fontSize: '3vw' }}>→</span>
                </div>
              </div>
            </div>
          </Link>
          </div>

        </div>

        {/* === Music Notes Divider === */}
        <div style={{ marginTop: '5vw' }}>
          <MiniMusicNotes isPlaying={true} size="desktop" />
        </div>

        {/* === About Us + The Vibe === */}
        <div className="flex" style={{ gap: '2vw', marginTop: '3vw', paddingInline: '4vw' }}>

          {/* LEFT: About Us */}
          <div className="flex-1">
            {/* About Us Header */}
            <div
              className="flex items-center justify-center"
              style={{ gap: '2vw', marginBottom: '2vw' }}
            >
              <div
                className="bg-white"
                style={{ width: '5vw', height: '0.5vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
                style={{ fontSize: '2.8vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
              >
                Find the Groove
              </span>
              <div
                className="bg-white"
                style={{ width: '5vw', height: '0.5vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
              />
            </div>

            <div className="rounded-xl w-full" style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}>
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">

                {/* Store Photo Placeholder */}
                <div
                  className="w-full bg-[#d4d4d4] flex items-center justify-center"
                  style={{ height: '20vw' }}
                >
                  <span
                    className="text-[#555555] font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '1.8vw' }}
                  >
                    Store Photo Coming Soon
                  </span>
                </div>

                {/* Store Info */}
                <div style={{ padding: '2vw' }}>
                  {/* Address */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3540+Belle+Terre+Blvd,+Suite+C,+Myrtle+Beach,+SC+29526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start"
                    style={{ gap: '1.5vw' }}
                  >
                    <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '3.5vw', height: '3.5vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p
                        className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                        style={{ fontSize: '2vw' }}
                      >
                        3540 Belle Terre Blvd • Suite C
                      </p>
                      <p
                        className="text-white/70 font-[family-name:var(--font-inter)]"
                        style={{ fontSize: '1.8vw' }}
                      >
                        Myrtle Beach, SC 29526
                      </p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div
                    className="flex items-start"
                    style={{ gap: '1.5vw', marginTop: '1.5vw' }}
                  >
                    <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '3.5vw', height: '3.5vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p
                        className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                        style={{ fontSize: '2vw' }}
                      >
                        Tue–Fri: 7am–6pm
                      </p>
                      <p
                        className="text-white/70 font-[family-name:var(--font-inter)]"
                        style={{ fontSize: '1.8vw' }}
                      >
                        Sat: 8am–7pm
                      </p>
                      <p
                        className="text-white/70 font-[family-name:var(--font-inter)]"
                        style={{ fontSize: '1.8vw' }}
                      >
                        Sun: 8am–5pm
                      </p>
                      <p
                        className="text-white/70 font-[family-name:var(--font-inter)]"
                        style={{ fontSize: '1.8vw' }}
                      >
                        Monday: Unplugged <br></br>(Flipping the records & prepping the beans. See you Tuesday at 7AM.)
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+10000000000"
                    className="hidden flex items-center"
                    style={{ gap: '1.5vw', marginTop: '1.5vw' }}
                  >
                    <svg className="text-white flex-shrink-0" style={{ width: '3.5vw', height: '3.5vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p
                      className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                      style={{ fontSize: '2vw' }}
                    >
                      (000) 000-0000
                    </p>
                  </a>

                  {/* Get Directions */}
                  <div style={{ height: '0.4vw', marginTop: '2vw', marginLeft: '-2vw', marginRight: '-2vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3540+Belle+Terre+Blvd,+Suite+C,+Myrtle+Beach,+SC+29526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    style={{ paddingTop: '1.5vw', gap: '1vw' }}
                  >
                    <span
                      className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                      style={{ fontSize: '2.2vw' }}
                    >
                      Find Us →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: The Vibe */}
          <div className="flex-1">
            {/* The Vibe Header */}
            <div
              className="flex items-center justify-center"
              style={{ gap: '2vw', marginBottom: '2vw' }}
            >
              <div
                className="bg-white"
                style={{ width: '5vw', height: '0.5vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
                style={{ fontSize: '2.8vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
              >
                Drip • Drop • Vibe
              </span>
              <div
                className="bg-white"
                style={{ width: '5vw', height: '0.5vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
              />
            </div>

            {/* The Vibe Text */}
            <div style={{ paddingInline: '2vw', paddingTop: '0vw', textShadow: '2px 2px 8px rgba(0,0,0,0)' }}>
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                style={{ fontSize: '2vw', fontWeight: 900 }}
              >
                Espresso Groove spun out of a simple idea:
              </p>
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                style={{ fontSize: '2vw', fontWeight: 900, marginTop: '1.5vw' }}
              >
                The ritual of a crafted drink and the soul of a good record belong in the same room.
              </p>
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                style={{ fontSize: '2vw', fontWeight: 600, marginTop: '1.5vw' }}
              >
                We believe great espresso and great vinyl share a common thread, they&apos;re both meant to be savored, not rushed. Every three weeks, we launch a new <span style={{ fontWeight: 900 }}>Rotation</span>: a curated pairing of sound and taste designed to let you settle in.
              </p>
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic"
                style={{ fontSize: '2.3vw', fontWeight: 900, marginTop: '1.5vw', paddingLeft: '2vw' }}
              >
                Espresso <span className="uppercase">drips</span>.
              </p>
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic"
                style={{ fontSize: '2.3vw', fontWeight: 900, marginTop: '0.8vw', paddingLeft: '4vw' }}
              >
                The needle <span className="uppercase">drops</span>.
              </p>
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic"
                style={{ fontSize: '2.3vw', fontWeight: 900, marginTop: '0.8vw', paddingLeft: '6vw' }}
              >
                The <span className="uppercase">vibe</span> takes over.
              </p>
            </div>
          </div>

        </div>

        <DesktopFooter />
      </div>

    </div>
    </>
  );
}
