"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import MiniMusicNotes from "./components/MiniMusicNotes";
import DesktopFooterXL from "./components/DesktopFooterXL";
import DesktopNav from "./components/DesktopNav";

export default function PageXL() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

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

  const handleThumbMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = scrollRef.current?.scrollLeft ?? 0;
    e.preventDefault();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !scrollRef.current || !trackRef.current) return;
      const trackWidth = trackRef.current.clientWidth;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const dx = e.clientX - dragStartX.current;
      const scrollDx = (dx / trackWidth) * maxScroll;
      scrollRef.current.scrollLeft = dragStartScroll.current + scrollDx;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <>
      <DesktopNav hideOnTop size="xl" />
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

      {/* === BACKGROUND LAYER (stays vw) === */}
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

      {/* === CONTENT LAYER (px values based on 1400px viewport) === */}
      <div className="relative z-10">
      <div className="relative" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Logo */}
        <img
          src="/images/Expresso groove.svg"
          alt="Espresso Groove"
          className="logo-glow"
          style={{ width: '770px', marginLeft: '-56px', marginTop: '-84px' }}
        />
        <h2
          className="text-white font-[family-name:var(--font-libre-baskerville)] leading-tight uppercase tracking-tight"
          style={{
            fontSize: '70px',
            textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
            marginTop: '-112px',
            paddingLeft: '70px',
            fontWeight: 900,
          }}
        >
          Where Coffee<br />Meets Culture
        </h2>
        <p
          className="text-white font-[family-name:var(--font-libre-baskerville)] italic"
          style={{
            fontSize: '72.8px',
            textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            marginTop: '28px',
            paddingLeft: '63px',
            fontWeight: 900,
          }}
        >
          Drip • Drop • Vibe
        </p>

        {/* Buttons */}
        <div
          className="flex items-center justify-center"
          style={{
            paddingLeft: '0px',
            paddingTop: '49px',
            gap: '21px',
          }}
        >
          <Link
            href="/menu"
            className="bg-[#f06830] noisy flex items-center justify-center active:scale-105 duration-150 transition-all"
            style={{ width: '252px', height: '105px', gap: '7px', border: '2px solid #8a3010', borderRadius: '28px' }}
          >
            <img
              src="/images/menu_cup.svg?v=3"
              style={{
                width: '36.4px',
                height: '36.4px',
                filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                marginRight: '7px',
              }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
              style={{
                textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                letterSpacing: '0.1em',
                fontSize: '28px',
              }}
            >
              Menu
            </span>
          </Link>

          <Link
            href="/vinyl"
            className="overflow-hidden active:scale-105 duration-150 transition-all"
            style={{ width: '252px', borderRadius: '28px', border: '2px solid #1a4f4f' }}
          >
            {/* Top: Vinyl button */}
            <div
              className="bg-[#2a7d7d] noisy flex items-center justify-center"
              style={{ height: '70px', gap: '12.6px' }}
            >
              <img
                src="/images/vinyl-svgrepo-com.svg"
                style={{
                  width: '29.4px',
                  height: '29.4px',
                  filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.2em',
                  fontSize: '25.2px',
                }}
              >
                Vinyl
              </span>
            </div>
            {/* Bottom: We Buy Vinyl */}
            <div
              className="bg-[#d9bc52] noisy flex items-center justify-center"
              style={{
                height: '35px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 12px rgba(217,188,82,0.6), 0 0 24px rgba(217,188,82,0.3)',
              }}
            >
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
                  fontSize: '15.4px',
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
            style={{ width: '252px', height: '105px', gap: '11.2px', border: '2px solid #3d2a52', borderRadius: '28px' }}
          >
            <img
              src="/images/shirt-outline-svgrepo-com.svg"
              style={{
                width: '33.6px',
                height: '33.6px',
                filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
              }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
              style={{
                textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                letterSpacing: '0.12em',
                fontSize: '26.6px',
              }}
            >
              Merch
            </span>
          </Link>

          <Link
            href="/events"
            className="bg-[#24ADFF] noisy flex items-center justify-center active:scale-105 duration-150 transition-all"
            style={{ width: '252px', height: '105px', gap: '7px', border: '2px solid #3a8abf', borderRadius: '28px' }}
          >
            <svg style={{ width: '35px', height: '35px', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
              style={{
                textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                letterSpacing: '0.12em',
                fontSize: '25.2px',
              }}
            >
              Events
            </span>
          </Link>

          {/* Now Spinning Button */}
          <Link href="/now-spinning" className="flex items-center justify-center">
            <div
              className="bg-[#6F4E37] noisy flex items-center justify-center cursor-pointer active:scale-105 duration-150 transition-all"
              style={{ width: '252px', height: '105px', border: '2px solid #1a0f0a', borderRadius: '28px' }}
            >
              <span className="text-white" style={{ fontSize: '30.8px' }}>★</span>
              <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: '25.2px', fontWeight: 900, marginInline: '7px' }}>
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
            width: '392px',
            right: '98px',
            top: '294px',
            filter: 'drop-shadow(0px 0px 15px rgba(255,150,50,0.5))',
          }}
        />

      </div>
      {/* === Gradient Divider + Now Playing + Gradient Divider 2 === */}
      {/* Music Notes Divider 1 (full width) */}
      <div style={{ paddingTop: '70px', marginTop: '-42px' }}>
        <MiniMusicNotes isPlaying={true} size="xlFixed" />
      </div>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
            style={{ gap: '70px', paddingBlock: '28px' }}
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
                    width: '28px',
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
                  fontSize: '64.4px',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                  fontWeight: 900,
                }}
              >
                Now Playing
              </span>
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white italic whitespace-nowrap"
                style={{ fontSize: '64.4px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
              >
                Espresso Groove Radio
              </span>
            </div>

            {/* Right Equalizer */}
            <div className="flex items-end self-stretch">
              {[
                { h: 0.55, c: '#ffffff' }, { h: 0.35, c: '#ffffff' }, { h: 0.6, c: '#ffffff' },
                { h: 0.4, c: '#ffffff' }, { h: 0.5, c: '#ffffff' }, { h: 0.3, c: '#ffffff' }
              ].map((b, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: '28px',
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

      </div>
      {/* Music Notes Divider 2 (full width) */}
      <MiniMusicNotes isPlaying={true} size="xlFixed" />
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Now Spinning */}
        <div
          className="flex items-center justify-center"
          style={{ gap: '56px', marginTop: '57.4px' }}
        >
          <div
            className="bg-white"
            style={{
              width: '200.2px',
              height: '9.8px',
              boxShadow: '0 0 6px rgba(0,0,0,0.9)',
            }}
          />
          <span
            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
            style={{
              fontSize: '64.4px',
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              fontWeight: 900,
            }}
          >
            Now Spinning
          </span>
          <div
            className="bg-white"
            style={{
              width: '200.2px',
              height: '9.8px',
              boxShadow: '0 0 6px rgba(0,0,0,.9)',
            }}
          />
        </div>

        {/* Jazz */}
        <div
          className="flex items-center justify-center"
          style={{ gap: '57.4px', marginTop: '43.4px' }}
        >
          <div
            className="bg-white"
            style={{ width: '198.8px', height: '11.2px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
          />
          <span
            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
            style={{
              fontSize: '123.2px',
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              fontWeight: 900,
            }}
          >
            Jazz
          </span>
          <div
            className="bg-white"
            style={{ width: '198.8px', height: '11.2px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
          />
        </div>

        {/* Brown Box */}
        <div
          className="rounded-xl"
          style={{ marginInline: '56px', marginTop: '56px', padding: '11.2px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
        >
          <div className="rounded-lg overflow-hidden bg-[#2d1f1a]" style={{ padding: '42px' }}>
            <p
              className="font-[family-name:var(--font-libre-baskerville)] text-white"
              style={{
                fontSize: '29.4px',
                lineHeight: '1.6',
                textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
              }}
            >
              We spin a genre and let the music shape the menu — a signature coffee, tea, and energy drink built around the sound. Dig into the history, taste the lineup, and browse the vinyl. Hit the Now Spinning page for the full story.
            </p>
          </div>
        </div>

        {/* === Three Column Row === */}
        <div className="flex" style={{ gap: '28px', marginTop: '56px', paddingInline: '56px' }}>

          {/* LEFT: Jazz History */}
          <div className="flex-1 rounded-xl" style={{ padding: '11.2px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', height: '623px' }}>
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full flex flex-col">
              {/* Title */}
              <div className="text-center" style={{ paddingBlock: '28px' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '28px', letterSpacing: '0.15em' }}
                >
                  Jazz History
                </span>
              </div>
              <div style={{ height: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Image + Text (float wrap) */}
              <div style={{ padding: '21px' }}>
                <div
                  className="bg-[#d4d4d4] rounded-lg flex items-center justify-center"
                  style={{ width: '140px', height: '140px', float: 'left', marginRight: '21px', marginTop: '7px' }}
                >
                  <span
                    className="text-[#555555] font-[family-name:var(--font-inter)] text-center"
                    style={{ fontSize: '14px' }}
                  >
                    IMAGE
                  </span>
                </div>
                <p
                  className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                  style={{ fontSize: '16.8px' }}
                >
                  In the early 1900s, the streets of New Orleans were alive with a new sound. African rhythms met blues and ragtime to create something entirely new. It wasn&apos;t just music — it was freedom, expression, and revolution all at once. From the brass bands of Congo Square to the smoky clubs of Storyville, jazz was born not on a stage, but in the soul of a city. By the 1920s, it had migrated north — Chicago, Kansas City, Harlem...
                </p>
              </div>

              {/* Learn More */}
              <div className="mt-auto">
                <div style={{ height: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <a
                  href="/now-spinning"
                  className="flex items-center justify-center"
                  style={{ paddingBlock: '0px', gap: '14px' }}
                >
                  <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: '25.2px' }}>
                    Now Spinning
                  </span>
                  <span className="text-white" style={{ fontSize: '42px' }}>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* MIDDLE: Featured Sips */}
          <div className="flex-1 rounded-xl" style={{ padding: '11.2px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', height: '623px' }}>
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full flex flex-col">
              {/* Title */}
              <div className="text-center" style={{ paddingBlock: '28px' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '28px', letterSpacing: '0.15em' }}
                >
                  Featured Sips
                </span>
              </div>
              <div style={{ height: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Coffee */}
              <div className="bg-[#f06830] noisy flex items-center justify-center" style={{ height: '49px' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '16.8px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}
                >
                  Coffee
                </span>
              </div>
              <div className="flex items-center" style={{ paddingBlock: '16.8px', paddingLeft: '28px', paddingRight: '16.8px', gap: '42px' }}>
                <div className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0" style={{ width: '77px', height: '77px' }}>
                  <span className="text-[#555555]" style={{ fontSize: '11.2px' }}>IMG</span>
                </div>
                <span className="text-white font-[family-name:var(--font-bebas-neue)] tracking-wide" style={{ fontSize: '30.8px' }}>
                  Blue Note Brew
                </span>
              </div>

              {/* Tea */}
              <div className="bg-[#2a7d7d] noisy flex items-center justify-center" style={{ height: '49px' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '16.8px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}
                >
                  Tea
                </span>
              </div>
              <div className="flex items-center" style={{ paddingBlock: '16.8px', paddingLeft: '28px', paddingRight: '16.8px', gap: '42px' }}>
                <div className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0" style={{ width: '77px', height: '77px' }}>
                  <span className="text-[#555555]" style={{ fontSize: '11.2px' }}>IMG</span>
                </div>
                <span className="text-white font-[family-name:var(--font-bebas-neue)] tracking-wide" style={{ fontSize: '30.8px' }}>
                  Coltrane Chai
                </span>
              </div>

              {/* Energy Drinks */}
              <div className="bg-[#6b4c8c] noisy flex items-center justify-center" style={{ height: '49px' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '16.8px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}
                >
                  Energy Drinks
                </span>
              </div>
              <div className="flex items-center" style={{ paddingBlock: '16.8px', paddingLeft: '28px', paddingRight: '16.8px', gap: '42px' }}>
                <div className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0" style={{ width: '77px', height: '77px' }}>
                  <span className="text-[#555555]" style={{ fontSize: '11.2px' }}>IMG</span>
                </div>
                <span className="text-white font-[family-name:var(--font-bebas-neue)] tracking-wide" style={{ fontSize: '30.8px' }}>
                  Bebop Blast
                </span>
              </div>

              {/* View Menu */}
              <div className="mt-auto">
                <div style={{ height: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <a
                  href="/menu"
                  className="flex items-center justify-center"
                  style={{ paddingBlock: '0px', gap: '14px' }}
                >
                  <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: '25.2px' }}>
                    View Menu
                  </span>
                  <span className="text-white" style={{ fontSize: '42px' }}>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Now Spinning Jazz Vinyl */}
          <div className="flex-1 rounded-xl" style={{ padding: '11.2px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', height: '623px', minWidth: 0 }}>
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a] h-full flex flex-col">
              {/* Title */}
              <div className="text-center" style={{ paddingBlock: '28px' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '28px', letterSpacing: '0.15em' }}
                >
                  Vinyl
                </span>
              </div>
              <div style={{ height: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Now Spinning */}
              <div className="text-center" style={{ paddingTop: '14px' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: '23.8px', letterSpacing: '0.15em' }}
                >
                  Now Spinning
                </span>
                <div className="flex items-center justify-center" style={{ gap: '21px', marginTop: '11.2px' }}>
                  <div style={{ width: '42px', height: '4.2px', backgroundColor: 'white' }} />
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '28px', letterSpacing: '0.15em' }}
                  >
                    Jazz
                  </span>
                  <div style={{ width: '42px', height: '4.2px', backgroundColor: 'white' }} />
                </div>
              </div>

              {/* Horizontal Scrolling Cards */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto overflow-y-hidden hide-scrollbar"
                style={{ gap: '21px', paddingLeft: '21px', paddingRight: '21px', paddingTop: '14px', paddingBottom: '28px' }}
              >
                {[
                  { name: "KIND OF BLUE", artist: "Miles Davis", img: "/images/artwork/kind-of-blue.jpg" },
                  { name: "A LOVE SUPREME", artist: "John Coltrane", img: "/images/artwork/a-love-supreme.jpg" },
                  { name: "HEAD HUNTERS", artist: "Herbie Hancock", img: "/images/artwork/head-hunters.jpg" },
                  { name: "MINGUS AH UM", artist: "Charles Mingus", img: "/images/artwork/mingus-ah-um.jpg" },
                  { name: "TIME OUT", artist: "Dave Brubeck", img: "/images/artwork/time-out.jpg" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 rounded-xl"
                    style={{
                      width: '168px',
                      height: '273px',
                      paddingTop: '5.6px',
                      paddingLeft: '5.6px',
                      paddingRight: '5.6px',
                      paddingBottom: '5.6px',
                      background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                    }}
                  >
                    <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                      <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', height: '154px' }}>
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div style={{ paddingInline: '7px', paddingBlock: '7px' }}>
                        <h4
                          className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                          style={{ fontSize: '25.2px' }}
                        >
                          {item.name}
                        </h4>
                        <p className="text-white/60 font-[family-name:var(--font-inter)]" style={{ fontSize: '19.6px', marginTop: '2.8px' }}>
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
                style={{ marginInline: '21px', marginBottom: '14px', height: '4.2px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '999px', position: 'relative', cursor: 'pointer' }}
                onClick={(e) => {
                  if (!scrollRef.current || !trackRef.current) return;
                  const rect = trackRef.current.getBoundingClientRect();
                  const clickRatio = (e.clientX - rect.left) / rect.width;
                  const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                  scrollRef.current.scrollTo({ left: clickRatio * maxScroll, behavior: 'smooth' });
                }}
              >
                <div
                  onMouseDown={handleThumbMouseDown}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: `${scrollRatio * (100 - thumbWidth)}%`,
                    width: `${thumbWidth}%`,
                    height: '100%',
                    backgroundColor: '#ffffff',
                    borderRadius: '999px',
                    cursor: 'grab',
                  }}
                />
              </div>

              {/* Vinyl Footer */}
              <div className="mt-auto">
                <div style={{ height: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                <a
                  href="/vinyl"
                  className="flex items-center justify-center"
                  style={{ paddingBlock: '0px', gap: '14px' }}
                >
                  <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: '25.2px' }}>
                    Vinyl
                  </span>
                  <span className="text-white" style={{ fontSize: '42px' }}>→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Drip • Drop • Vibe */}
        <p
          className="text-white font-[family-name:var(--font-libre-baskerville)] italic text-center"
          style={{ fontSize: '84px', fontWeight: 900, marginTop: '70px', textShadow: '2px 2px 8px rgba(0,0,0,0.)' }}
        >
          Drip • Drop • Vibe
        </p>

        {/* === About Us + The Vibe === */}
        <div className="flex" style={{ gap: '28px', marginTop: '56px', paddingInline: '56px' }}>

          {/* LEFT: About Us */}
          <div className="flex-1">
            {/* About Us Header */}
            <div
              className="flex items-center justify-center"
              style={{ gap: '28px', marginBottom: '28px' }}
            >
              <div
                className="bg-white"
                style={{ width: '70px', height: '7px', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
                style={{ fontSize: '39.2px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
              >
                About Us
              </span>
              <div
                className="bg-white"
                style={{ width: '70px', height: '7px', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
              />
            </div>

            <div className="rounded-xl w-full" style={{ padding: '11.2px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}>
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                {/* Our Store Title */}
                <div
                  className="text-center border-b border-white"
                  style={{ paddingBlock: '28px' }}
                >
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '32.2px', letterSpacing: '0.15em' }}
                  >
                    Our Store
                  </span>
                </div>

                {/* Store Photo Placeholder */}
                <div
                  className="w-full bg-[#d4d4d4] flex items-center justify-center"
                  style={{ height: '280px' }}
                >
                  <span
                    className="text-[#555555] font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '25.2px' }}
                  >
                    Store Photo Coming Soon
                  </span>
                </div>

                {/* Store Info */}
                <div style={{ padding: '28px' }}>
                  {/* Address */}
                  <a
                    href="https://maps.google.com/?q=Espresso+Groove"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start"
                    style={{ gap: '21px' }}
                  >
                    <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '49px', height: '49px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p
                        className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                        style={{ fontSize: '28px' }}
                      >
                        3540 Belle Terre Blvd • Unit C
                      </p>
                      <p
                        className="text-white/70 font-[family-name:var(--font-inter)]"
                        style={{ fontSize: '25.2px' }}
                      >
                        Myrtle Beach, SC 29579
                      </p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div
                    className="flex items-start"
                    style={{ gap: '21px', marginTop: '21px' }}
                  >
                    <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '49px', height: '49px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p
                        className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                        style={{ fontSize: '28px' }}
                      >
                        Mon–Fri: 7am–9pm
                      </p>
                      <p
                        className="text-white/70 font-[family-name:var(--font-inter)]"
                        style={{ fontSize: '25.2px' }}
                      >
                        Sat–Sun: 8am–10pm
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+10000000000"
                    className="flex items-center"
                    style={{ gap: '21px', marginTop: '21px' }}
                  >
                    <svg className="text-white flex-shrink-0" style={{ width: '49px', height: '49px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p
                      className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                      style={{ fontSize: '28px' }}
                    >
                      (000) 000-0000
                    </p>
                  </a>

                  {/* Get Directions */}
                  <div style={{ height: '5.6px', marginTop: '28px', marginLeft: '-28px', marginRight: '-28px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                  <div
                    className="flex items-center justify-center"
                    style={{ paddingTop: '21px', gap: '14px' }}
                  >
                    <span
                      className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                      style={{ fontSize: '30.8px' }}
                    >
                      Get Directions →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: The Vibe */}
          <div className="flex-1">
            {/* The Vibe Header */}
            <div
              className="flex items-center justify-center"
              style={{ gap: '28px', marginBottom: '28px' }}
            >
              <div
                className="bg-white"
                style={{ width: '70px', height: '7px', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
                style={{ fontSize: '39.2px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
              >
                The Vibe
              </span>
              <div
                className="bg-white"
                style={{ width: '70px', height: '7px', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
              />
            </div>

            {/* The Vibe Text */}
            <div style={{ paddingInline: '28px', paddingTop: '28px', textShadow: '2px 2px 8px rgba(0,0,0,0)' }}>
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                style={{ fontSize: '35px', fontWeight: 900 }}
              >
                <span className="font-[900]">Espresso Groove</span> was born from a simple idea:
              </p>
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                style={{ fontSize: '35px', fontWeight: 900, marginTop: '21px' }}
              >
                A space where the ritual of coffee meets the soul of music. Great espresso and great vinyl share something in common — they&apos;re both meant to be <span className="font-[800]">savored</span>, not rushed.
              </p>
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                style={{ fontSize: '35px', fontWeight: 900, marginTop: '21px' }}
              >
                Pull up a chair. Flip through the crates. Espresso <span className="font-[900]">drips</span>, the needle <span className="font-[800]">drops</span>, and the <span className="font-[800]">vibe</span> takes over.
              </p>
            </div>
          </div>

        </div>

      </div>
      <DesktopFooterXL />
      </div>

    </div>
    </>
  );
}
