"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import MusicNotes from "./components/MusicNotes";
import MiniMusicNotes from "./components/MiniMusicNotes";
import TabletNav from "./components/TabletNav";
import { sendContactForm, type ContactStatus } from "./lib/contact";
import ContactDropdown from "./components/ContactDropdown";

export default function PageTablet() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<ContactStatus>("idle");
  const [vinylAutoScroll, setVinylAutoScroll] = useState(true);
  const vinylPausedRef = useRef(false);
  const vinylResumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const vinylScrollPosRef = useRef(0);

  const VINYL_ITEMS = [
    { name: "SGT. PEPPER'S", artist: "The Beatles", img: "/images/artwork/sgt-peppers.jpg" },
    { name: "ARE YOU EXPERIENCED", artist: "Jimi Hendrix Experience", img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/00/67/45/006745f5-95d5-5a06-35ed-d515e9cfd7d8/dj.tbwlxwoh.jpg/600x600bb.jpg" },
    { name: "PET SOUNDS", artist: "The Beach Boys", img: "/images/artwork/pet-sounds.jpg" },
    { name: "HIGHWAY 61 REVISITED", artist: "Bob Dylan", img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg" },
    { name: "ABBEY ROAD", artist: "The Beatles", img: "/images/artwork/abbey-road.jpg" },
  ];

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
  }, [vinylAutoScroll, VINYL_ITEMS.length]);

  const handleVinylPauseStart = () => {
    vinylPausedRef.current = true;
    if (vinylResumeTimerRef.current) clearTimeout(vinylResumeTimerRef.current);
  };
  const handleVinylPauseEnd = () => {
    if (vinylResumeTimerRef.current) clearTimeout(vinylResumeTimerRef.current);
    vinylResumeTimerRef.current = setTimeout(() => { vinylPausedRef.current = false; }, 2000);
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setContactStatus("sending");
    const ok = await sendContactForm(form);
    if (ok) {
      form.reset();
      setContactStatus("success");
    } else {
      setContactStatus("error");
    }
  };

  const openContact = () => {
    setContactStatus("idle");
    setContactOpen(true);
  };

  return (
    <>
      <TabletNav />
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

        .contact-input::placeholder {
          color: rgba(255, 255, 255, 0.55);
        }
        .contact-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.6);
        }
      `}</style>

      <div className="relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden' }}>

        {/* === BACKGROUND LAYER === */}
        <div className="absolute inset-0 z-0">
          <div
            className="h-screen bg-[position:0%_0%] bg-[length:100%_100%]"
            style={{ backgroundImage: `url('/images/background_v2.png')`,
              transform: 'scaleY(-1)',
             }}
          />
          <div
            className="h-screen bg-second bg-[length:100%_100%]"
            style={{
              backgroundImage: `url('/images/background_v2.png')`,

            }}
          />
          <div
            className="h-screen bg-third bg-[length:100%_100%]"
            style={{ backgroundImage: `url('/images/new_background_v2.png')` }}
          />
          <div
            className="h-screen bg-[length:100%_100%]"
            style={{
              backgroundImage: `url('/images/vibe_background.png')`,
              transform: 'scaleY(-1)',
            }}
          />
          <div
            className="h-screen bg-[length:100%_100%]"
            style={{
              backgroundImage: `url('/images/vibe_background.png')` }}
          />
          <div
            className="h-screen bg-[length:100%_100%]"
            style={{
              backgroundImage: `url('/images/vibe_background.png')`,
              transform: 'scaleY(-1)',
            }}
          />
          <div
            className="h-screen bg-[length:100%_100%]"
            style={{
              backgroundImage: `url('/images/vibe_background.png')` }}
          />
        </div>

        {/* === CONTENT LAYER (on top of background) === */}
        <div className="relative z-10" style={{ ['--w' as string]: 'min(100vw, 700px)', maxWidth: 'var(--w)', margin: '0 auto' } as React.CSSProperties}>
          {/* Logo */}
          <img
            src="/images/Expresso groove.svg"
            alt="Espresso Groove"
            className="logo-glow"
            style={{ width: 'calc(365.4 * var(--w) / 600)', marginLeft: 'calc(-18 * var(--w) / 600)', marginTop: 'calc(50.52 * var(--w) / 600)',}}
          />
          <h2
            className="text-white font-[family-name:var(--font-libre-baskerville)]"
            style={{
              fontSize: 'calc(28.52 * var(--w) / 600)',
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              marginTop: 'calc(-40.28 * var(--w) / 600)',
              paddingLeft: 'calc(48 * var(--w) / 600)',
              fontWeight: 900,
            }}
          >
            Coffee & Records
          </h2>
          <p
            className="text-white font-[family-name:var(--font-libre-baskerville)] italic"
            style={{
              fontSize: 'calc(24.228 * var(--w) / 600)',
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              marginTop: 'calc(5.88 * var(--w) / 600)',
              paddingLeft: 'calc(48 * var(--w) / 600)',
              fontWeight: 900,
            }}
          >
            Crafted drinks<br />Curated sound
          </p>

          <div style={{ height: 'calc(34.6 * var(--w) / 600)' }}></div>

          {/* Buttons */}
          <div
            className="flex flex-col hidden"
            style={{
              paddingLeft: 'calc(11.76 * var(--w) / 600)',
              paddingTop: 'calc(17.64 * var(--w) / 600)',
              gap: 'calc(8.82 * var(--w) / 600)',
            }}
          >
            <Link
              href="/menu"
              className="rounded-full bg-[#f06830] noisy flex items-center justify-center active:scale-125 duration-150 transition-all"
              style={{ width: 'calc(126.42 * var(--w) / 600)', height: 'calc(38.22 * var(--w) / 600)', gap: '0px', border: '2px solid #8a3010' }}
            >
              <img
                src="/images/menu_cup.svg?v=3"
                style={{
                  width: 'calc(17.64 * var(--w) / 600)',
                  height: 'calc(17.64 * var(--w) / 600)',
                  filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                  marginRight: 'calc(5.88 * var(--w) / 600)',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.1em',
                  fontSize: 'calc(13.524 * var(--w) / 600)',
                  marginRight: 'calc(5.88 * var(--w) / 600)'
                }}
              >
                Menu
              </span>
            </Link>

            <Link
              href="/vinyl"
              className="overflow-hidden active:scale-125 duration-150 transition-all"
              style={{ width: 'calc(126.42 * var(--w) / 600)', borderRadius: 'calc(20.58 * var(--w) / 600)', border: '2px solid #1a4f4f' }}
            >
              {/* Top: Vinyl button */}
              <div
                className="bg-[#2a7d7d] noisy flex items-center justify-center"
                style={{ height: 'calc(38.22 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)' }}
              >
                <img
                  src="/images/vinyl-svgrepo-com.svg"
                  style={{
                    width: 'calc(17.64 * var(--w) / 600)',
                    height: 'calc(17.64 * var(--w) / 600)',
                    filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                  }}
                />
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                  style={{
                    textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                    letterSpacing: '0.2em',
                    fontSize: 'calc(13.524 * var(--w) / 600)',
                  }}
                >
                  Vinyl
                </span>
              </div>
              {/* Bottom: We Buy Vinyl */}
              <div
                className="bg-[#d9bc52] noisy flex items-center justify-center"
                style={{
                  height: '23.52px',
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
                    fontSize: '8.82px',
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
              style={{ width: 'calc(126.42 * var(--w) / 600)', height: 'calc(38.22 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)', border: '2px solid #3d2a52' }}
            >
              <img
                src="/images/shirt-outline-svgrepo-com.svg"
                style={{
                  width: 'calc(17.64 * var(--w) / 600)',
                  height: 'calc(17.64 * var(--w) / 600)',
                  filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.12em',
                  fontSize: 'calc(13.524 * var(--w) / 600)',
                }}
              >
                Merch
              </span>
            </Link>

            <Link
              href="/events"
              className="rounded-full bg-[#24ADFF] noisy flex items-center justify-center active:scale-125 duration-150 transition-all"
              style={{ width: 'calc(126.42 * var(--w) / 600)', height: 'calc(38.22 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)', border: '2px solid #3a8abf' }}
            >
              <svg style={{ width: 'calc(17.64 * var(--w) / 600)', height: 'calc(17.64 * var(--w) / 600)', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.12em',
                  fontSize: 'calc(13.524 * var(--w) / 600)',
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
              width: 'calc(169.94 * var(--w) / 600)',
              right: 'calc(60.3 * var(--w) / 600)',
              top: 'calc(139.42 * var(--w) / 600)',
              filter: 'drop-shadow(0px 0px 15px rgba(255,150,50,0.5))',
            }}
          />

          {/* Brown Button */}
          <Link href="/now-spinning" className="hidden flex items-center" style={{ marginTop: 'calc(11.76 * var(--w) / 600)', paddingLeft: 'calc(11.76 * var(--w) / 600)', }}>
            <div
              className="rounded-full bg-[#6F4E37] noisy flex items-center justify-center cursor-pointer active:scale-125 duration-150 transition-all"
              style={{ width: 'calc(158.76 * var(--w) / 600)', height: 'calc(38.22 * var(--w) / 600)', border: '2px solid #1a0f0a' }}
            >
              <span className="text-white" style={{ fontSize: 'calc(17.64 * var(--w) / 600)' }}>★</span>
              <span className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: 'calc(13.524 * var(--w) / 600)', fontWeight: 900, marginInline: 'calc(5.88 * var(--w) / 600)' }}>
                Now Spinning
              </span>
            </div>
          </Link>

          {/* === Music Notes Divider === */}
          <div style={{ marginTop: '.22px' }}>
            <MiniMusicNotes isPlaying={true} size="tablet" />
          </div>

          {/* Now Spinning */}
          <div
            className="flex items-center justify-center"
            style={{ gap: 'calc(19.114 * var(--w) / 600)', marginTop: 'calc(17.934 * var(--w) / 600)' }}
          >
            <div
              className="bg-white"
              style={{
                width: 'calc(42.042 * var(--w) / 600)',
                height: 'calc(4.058 * var(--w) / 600)',
                boxShadow: '0 0 6px rgba(0,0,0,0.9)',
              }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{
                fontSize: 'calc(30.404 * var(--w) / 600)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                fontWeight: 900,
              }}
            >
              Now Spinning
            </span>
            <div
              className="bg-white"
              style={{
                width: 'calc(42.042 * var(--w) / 600)',
                height: 'calc(4.058 * var(--w) / 600)',
                boxShadow: '0 0 6px rgba(0,0,0,.9)',
              }}
            />
          </div>

          {/* Brown Box */}
          <div
            className="rounded-xl"
            style={{ marginInline: 'calc(40.76 * var(--w) / 600)', marginTop: 'calc(11.76 * var(--w) / 600)', padding: 'calc(4.352 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a]" style={{ padding: 'calc(11.76 * var(--w) / 600)' }}>
              <p
                className="font-[family-name:var(--font-libre-baskerville)] text-white text-center"
                style={{
                  fontSize: 'calc(16.76 * var(--w) / 600)',
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
            style={{ gap: 'calc(9.114 * var(--w) / 600)', marginTop: 'calc(9.114 * var(--w) / 600)' }}
          >
            <div
              className="bg-white"
              style={{ width: 'calc(41.748 * var(--w) / 600)', height: 'calc(4.352 * var(--w) / 600)', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{
                fontSize: 'calc(35.582 * var(--w) / 600)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                fontWeight: 900,
              }}
            >
              60<span className="lowercase">s</span> Revolution
            </span>
            <div
              className="bg-white"
              style={{ width: 'calc(41.748 * var(--w) / 600)', height: 'calc(4.352 * var(--w) / 600)', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
            />
          </div>

          <div className="flex flex-col">

          {/* === Jazz History Section === */}
          <div
            className="flex flex-col items-center"
            style={{ order: 3, marginTop: 'calc(11.76 * var(--w) / 600)', marginInline: 'calc(35.76 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)' }}
          >
            <span className="text-white font-[family-name:var(--font-libre-baskerville)] italic" style={{ fontSize: 'calc(35.58 * var(--w) / 600)', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
              Vibe
            </span>
            <Link href="/now-spinning" className="w-full rounded-xl block" style={{ padding: 'calc(4.352 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}>
          <div
            className="rounded-lg overflow-hidden bg-[#2d1f1a]"
          >
            {/* Title */}
            <div
              className="text-center"
              style={{ paddingBlock: 'calc(12.82 * var(--w) / 600)' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: 'calc(18.7 * var(--w) / 600)', letterSpacing: '0.15em' }}
              >
                Behind the Groove
              </span>
            </div>
            <div style={{ height: '3.176px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

            {/* Image + Text (float wrap) */}
            <div style={{ padding: 'calc(11.76 * var(--w) / 600)' }}>
              <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontWeight: '900', marginTop: '-2.94px', marginBottom: '2.94px', fontSize: 'calc(17.76 * var(--w) / 600)'}}>
                When the Needle Changed the World
              </p>
              <img
                src="/images/artwork/60s-revolution.png"
                alt="60s Revolution turntable"
                className="rounded-lg object-cover"
                style={{ width: 'calc(128.2 * var(--w) / 600)', height: 'calc(128.2 * var(--w) / 600)', float: 'left', marginRight: 'calc(8.82 * var(--w) / 600)', marginBottom: 'calc(5.88 * var(--w) / 600)', marginTop: 'calc(5.88 * var(--w) / 600)', }}
              />
              <p
                className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                style={{ fontSize: 'calc(16.878 * var(--w) / 600)' }}
              >
                The 60s weren&apos;t just a decade; they were an electric shift. It was the era where the single gave way to the album. Artists began creating <span style={{ fontWeight: 700 }}>albums</span>, a complete journey meant to be hard from Side A to Side B...
              </p>
            </div>

            {/* Learn More */}
            <div style={{ height: '3.176px', marginTop: '0px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
            <div
              className="flex items-center justify-center"
              style={{ paddingInline: 'calc(11.76 * var(--w) / 600)', paddingBlock: 'calc(8.82 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)' }}
            >
              <span
                className="text-white font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: 'calc(19.23 * var(--w) / 600)' }}
              >
                Now Spinning
              </span>
              <span className="text-white" style={{ fontSize: 'calc(10.29 * var(--w) / 600)' }}>→</span>
            </div>
          </div>
          </Link>

          </div>

          {/* === The Pour Section === */}
          <div
            className="flex flex-col items-center"
            style={{ order: 1, marginTop: 'calc(6.174 * var(--w) / 600)', marginInline: 'calc(35.76 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)' }}
          >
            <span className="text-white font-[family-name:var(--font-libre-baskerville)] italic" style={{ marginBottom: 'calc(5 * var(--w) / 600)', fontSize: 'calc(35.58 * var(--w) / 600)', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
              Drip
            </span>
            <Link href="/menu" className="w-full rounded-xl block" style={{ padding: 'calc(4.352 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}>
          <div
            className="rounded-lg overflow-hidden bg-[#2d1f1a]"
          >
            {/* Title */}
            <div
              className="text-center"
              style={{ paddingBlock: 'calc(8.82 * var(--w) / 600)',}}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: 'calc(18.7 * var(--w) / 600)', letterSpacing: '0.15em' }}
              >
                Limited Press
              </span>
            </div>
            <div style={{ height: '3.176px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

            {/* Category Label */}
            <div
              className="bg-[#24ADFF] noisy text-center flex items-center justify-center"
              style={{ height: 'calc(50.28 * var(--w) / 600)' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                style={{
                  fontSize: 'calc(19.23 * var(--w) / 600)',
                  letterSpacing: '0.1em',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                }}
              >
                Iced Drinks
              </span>
            </div>

            {/* Product Cards Stack */}
            <div className="flex flex-col">
              <div className="text-center" style={{ paddingBlock: 'calc(8.82 * var(--w) / 600)' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: 'calc(22.7 * var(--w) / 600)' }}
                >
                  Purple Haze
                </span>
              </div>
              <div style={{ height: '3px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
              <div className="text-center" style={{ paddingBlock: 'calc(8.82 * var(--w) / 600)' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: 'calc(22.7 * var(--w) / 600)' }}
                >
                  Sunday Morning
                </span>
              </div>
              <div style={{ height: '3px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
              <div className="text-center" style={{ paddingBlock: 'calc(8.82 * var(--w) / 600)' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: 'calc(22.7 * var(--w) / 600)' }}
                >
                  Strawberry Fields
                </span>
              </div>
            </div>

            {/* View Featured Menu */}
            <div style={{ height: '3px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
            <div
              className="flex items-center justify-center"
              style={{ paddingBlock: 'calc(8.82 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)' }}
            >
              <span
                className="text-white whitespace-nowrap font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: 'calc(18.23 * var(--w) / 600)' }}
              >
                Menu →
              </span>
            </div>

          </div>
          </Link>

          </div>

          {/* === Vinyl Section === */}
          <div
            className="flex flex-col items-center"
            style={{ order: 2, marginTop: 'calc(11.76 * var(--w) / 600)', marginInline: 'calc(40.76 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)', }}
          >
            <span className="text-white font-[family-name:var(--font-libre-baskerville)] italic" style={{ fontSize: 'calc(35.58 * var(--w) / 600)', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
              Drop
            </span>
            <Link href="/vinyl" className="w-full rounded-xl block" style={{ padding: 'calc(4.352 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}>
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a] flex flex-col" style={{ height: 'calc(400.1 * var(--w) / 600)' }}>
              {/* Title */}
              <div
                className="text-center"
                style={{ paddingBlock: 'calc(8.82 * var(--w) / 600)' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: 'calc(19.7 * var(--w) / 600)', letterSpacing: '0.15em' }}
                >
                  Vinyl
                </span>
              </div>
              <div style={{ height: '3.176px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Featured Genre */}
              <div className="text-center" style={{ paddingTop: 'calc(8.82 * var(--w) / 600)' }}>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                  style={{ fontSize: 'calc(18.112 * var(--w) / 600)', letterSpacing: '0.15em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Featured Genre
                </span>
              </div>

              {/* Jazz with dashes */}
              <div
                className="flex items-center justify-center"
                style={{ gap: 'calc(10.82 * var(--w) / 600)', marginTop: 'calc(5.88 * var(--w) / 600)' }}
              >
                <div
                  className="bg-white"
                  style={{ width: 'calc(20.58 * var(--w) / 600)', height: '3px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
                />
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
                  style={{
                    fontSize: 'calc(20.7 * var(--w) / 600)',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                    fontWeight: 900,
                  }}
                >
                  60<span className="lowercase">s</span> Revolution
                </span>
                <div
                  className="bg-white"
                  style={{ width: 'calc(20.58 * var(--w) / 600)', height: '3px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
                />
              </div>

              {/* Horizontal Scrolling Cards */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto overflow-y-hidden hide-scrollbar"
                style={{ gap: 'calc(8.82 * var(--w) / 600)', marginTop: '1.82px', paddingLeft: 'calc(11.76 * var(--w) / 600)', paddingRight: 'calc(11.76 * var(--w) / 600)', paddingBottom: 'calc(8.82 * var(--w) / 600)' }}
                onPointerDown={handleVinylPauseStart}
                onPointerUp={handleVinylPauseEnd}
                onPointerCancel={handleVinylPauseEnd}
                onWheel={() => { handleVinylPauseStart(); handleVinylPauseEnd(); }}
              >
                {[...VINYL_ITEMS, ...VINYL_ITEMS].map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 rounded-xl"
                    style={{
                      width: 'calc(130.9 * var(--w) / 600)',
                      padding: '3px 3px 15.82px 3px',
                      marginTop: 'calc(8.82 * var(--w) / 600)',
                      background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                    }}
                  >
                    <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                      <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div style={{ padding: 'calc(4.41 * var(--w) / 600)' }}>
                        <h4
                          className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                          style={{ fontSize: 'calc(19.7 * var(--w) / 600)' }}
                        >
                          {item.name}
                        </h4>
                        <p className="text-white/60 font-[family-name:var(--font-inter)] overflow-hidden whitespace-nowrap text-ellipsis" style={{ fontSize: 'calc(17.172 * var(--w) / 600)', marginTop: '1.47px' }}>
                          {item.artist}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1"></div>

              {/* View Vinyl */}
              <div style={{ height: '3.176px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
              <div
                className="flex items-center justify-center"
                style={{ paddingBlock: 'calc(8.82 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)' }}
              >
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-libre-baskerville)]"
                  style={{ fontSize: 'calc(18.23 * var(--w) / 600)' }}
                >
                  View All Vinyl →
                </span>
              </div>
            </div>
          </Link>
          </div>

          </div>

          {/* === Music Notes Divider === */}
          <div style={{ marginTop: 'calc(30.64 * var(--w) / 600)' }}>
            <MiniMusicNotes isPlaying={true} size="tablet" />
          </div>

          {/* === The Vibe Header === */}
          <div
            className="flex items-center justify-center"
            style={{ gap: 'calc(11.76 * var(--w) / 600)', marginTop: 'calc(11.76 * var(--w) / 600)' }}
          >
            <div
              className="bg-white"
              style={{ width: 'calc(28.52 * var(--w) / 600)', height: 'calc(4.058 * var(--w) / 600)', boxShadow: '0 0 6px rgba(0,0,0,0.9)'}}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{ fontSize: 'calc(35.64 * var(--w) / 600)', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900, }}
            >
              Drip • Drop • Vibe
            </span>
            <div
              className="bg-white"
              style={{ width: 'calc(28.52 * var(--w) / 600)', height: 'calc(4.058 * var(--w) / 600)', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
          </div>

          {/* The Vibe Text */}
          <div style={{ paddingInline: 'calc(40.64 * var(--w) / 600)', marginTop: 'calc(11.76 * var(--w) / 600)', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: 'calc(18.936 * var(--w) / 600)', fontWeight: 900 }}
            >
              Espresso Groove spun out of a simple idea:
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: 'calc(18.936 * var(--w) / 600)', fontWeight: 900, marginTop: 'calc(8.82 * var(--w) / 600)' }}
            >
              The ritual of a crafted drink and the soul of a good record belong in the same room.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: 'calc(18.936 * var(--w) / 600)', fontWeight: 600, marginTop: 'calc(8.82 * var(--w) / 600)' }}
            >
              We believe great espresso and great vinyl share a common thread, they&apos;re both meant to be savored, not rushed. Every three weeks, we launch a new <span style={{ fontWeight: 900 }}>Rotation</span>: a curated pairing of sound and taste designed to let you settle in.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic"
              style={{ fontSize: 'calc(24.7 * var(--w) / 600)', fontWeight: 900, marginTop: 'calc(11.76 * var(--w) / 600)', paddingLeft: 'calc(11.76 * var(--w) / 600)' }}
            >
              Espresso <span className="uppercase">drips</span>.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic"
              style={{ fontSize: 'calc(24.7 * var(--w) / 600)', fontWeight: 900, marginTop: 'calc(5.88 * var(--w) / 600)', paddingLeft: 'calc(23.52 * var(--w) / 600)' }}
            >
              The needle <span className="uppercase">drops</span>.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic"
              style={{ fontSize: 'calc(24.7 * var(--w) / 600)', fontWeight: 900, marginTop: 'calc(5.88 * var(--w) / 600)', paddingLeft: 'calc(35.28 * var(--w) / 600)' }}
            >
              The <span className="uppercase">vibe</span> takes over.
            </p>
          </div>

          {/* === About Us Header === */}
          <div
            className="flex items-center justify-center"
            style={{ gap: 'calc(14.82 * var(--w) / 600)', marginTop: 'calc(17.64 * var(--w) / 600)' }}
          >
            <div
              className="bg-white"
              style={{ width: 'calc(54.1 * var(--w) / 600)', height: '3.058px', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{ fontSize: 'calc(35.404 * var(--w) / 600)', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900, }}
            >
              Find Us
            </span>
            <div
              className="bg-white"
              style={{ width: 'calc(54.1 * var(--w) / 600)', height: '3.058px', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
          </div>

          {/* === Store Card === */}
          <div
            className="rounded-xl"
            style={{ marginTop: 'calc(11.76 * var(--w) / 600)', marginInline: 'calc(40.76 * var(--w) / 600)', padding: 'calc(6.352 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div
            className="rounded-lg overflow-hidden bg-[#2d1f1a]"
          >


            {/* Store Photo Placeholder */}
            <div
              className="w-full bg-[#d4d4d4] flex items-center justify-center"
              style={{ height: 'calc(147 * var(--w) / 600)' }}
            >
              <span
                className="text-[#555555] font-[family-name:var(--font-inter)]"
                style={{ fontSize: 'calc(20.29 * var(--w) / 600)' }}
              >
                Store Photos Coming Soon
              </span>
            </div>

            {/* Store Info */}
            <div style={{ padding: 'calc(11.76 * var(--w) / 600)' }}>
              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=3540+Belle+Terre+Blvd,+Suite+C,+Myrtle+Beach,+SC+29526"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden flex items-start"
                style={{ gap: 'calc(8.82 * var(--w) / 600)' }}
              >
                <div style={{ paddingTop: '2px',}}>
                <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: 'calc(24.7 * var(--w) / 600)', height: 'calc(24.7 * var(--w) / 600)', }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </div>
                <div>
                  <p
                    className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                    style={{ fontSize: 'calc(19.172 * var(--w) / 600)' }}
                  >
                    3540 Belle Terre Blvd • Suite C
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: 'calc(17.584 * var(--w) / 600)' }}
                  >
                    Myrtle Beach, SC 29526
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div
                className="hidden flex items-start"
                style={{ gap: 'calc(8.82 * var(--w) / 600)', marginTop: 'calc(8.82 * var(--w) / 600)' }}
              >
                <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: 'calc(24.7 * var(--w) / 600)', height: 'calc(24.7 * var(--w) / 600)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p
                    className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                    style={{ fontSize: 'calc(19.172 * var(--w) / 600)' }}
                  >
                    Tue–Fri: 7am–9pm
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: 'calc(17.584 * var(--w) / 600)' }}
                  >
                    Sat: 8am–7pm
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: 'calc(17.584 * var(--w) / 600)' }}
                  >
                    Sun: 8am–5pm
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: 'calc(17.584 * var(--w) / 600)' }}
                  >
                    Monday: Unplugged <br></br>(Flipping the records & prepping the beans. <br></br>See you Tuesday at 7 AM.)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+10000000000"
                className="hidden flex items-center"
                style={{ gap: 'calc(8.82 * var(--w) / 600)', marginTop: 'calc(8.82 * var(--w) / 600)' }}
              >
                <svg className="text-white flex-shrink-0" style={{ width: 'calc(14.7 * var(--w) / 600)', height: 'calc(14.7 * var(--w) / 600)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p
                  className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                  style={{ fontSize: 'calc(11.172 * var(--w) / 600)' }}
                >
                  (000) 000-0000
                </p>
              </a>

              {/* Get Directions */}
              <div style={{ height: '3.176px', marginTop: 'calc(11.76 * var(--w) / 600)', marginLeft: 'calc(-11.76 * var(--w) / 600)', marginRight: 'calc(-11.76 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
              <a
                href="https://www.google.com/maps/search/?api=1&query=3540+Belle+Terre+Blvd,+Suite+C,+Myrtle+Beach,+SC+29526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                style={{ paddingTop: 'calc(8.82 * var(--w) / 600)', gap: 'calc(5.88 * var(--w) / 600)' }}
              >
                <span
                  className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                  style={{ fontSize: 'calc(18.524 * var(--w) / 600)' }}
                >
                  Find Us →
                </span>
              </a>
            </div>
          </div>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center" style={{ marginTop: 'calc(23.52 * var(--w) / 600)' }}>
            <button
              type="button"
              onClick={openContact}
              className="rounded-full"
              style={{ padding: 'calc(4.352 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            >
              <div
                className="rounded-full bg-[#2d1f1a] flex items-center justify-center"
                style={{ paddingBlock: 'calc(9.408 * var(--w) / 600)', paddingInline: 'calc(41.16 * var(--w) / 600)' }}
              >
                <span
                  className="text-white font-[family-name:var(--font-libre-baskerville)] uppercase"
                  style={{ fontSize: 'calc(24.524 * var(--w) / 600)', fontWeight: 900, letterSpacing: '0.12em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Contact Us
                </span>
              </div>
            </button>
          </div>

          {/* === Follow Us === */}
          <h3
            className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
            style={{ fontSize: 'calc(35.464 * var(--w) / 600)', letterSpacing: '0.15em', paddingLeft: 'calc(40.76 * var(--w) / 600)', marginTop: 'calc(17.64 * var(--w) / 600)', textShadow: '2px 2px 8px rgba(0,0,0,0.3)', fontWeight: 700 }}
          >
            Follow Us
          </h3>

          {/* Social Icons */}
          <div className="flex" style={{ gap: 'calc(11.76 * var(--w) / 600)', paddingLeft: 'calc(40.76 * var(--w) / 600)', marginTop: 'calc(8.82 * var(--w) / 600)', paddingBottom: 'calc(23.52 * var(--w) / 600)' }}>
            {/* Instagram */}
            <a href="https://www.instagram.com/espressogroove/" target="_blank" rel="noopener noreferrer" className="border-4 border-white rounded-full flex items-center justify-center text-white" style={{ width: 'calc(81.16 * var(--w) / 600)', height: 'calc(81.16 * var(--w) / 600)' }}>
              <svg style={{ width: 'calc(40.58 * var(--w) / 600)', height: 'calc(40.58 * var(--w) / 600)', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1CVuQUjhZL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="border-4 border-white rounded-full flex items-center justify-center text-white" style={{ width: 'calc(81.16 * var(--w) / 600)', height: 'calc(81.16 * var(--w) / 600)' }}>
              <svg style={{ width: 'calc(40.58 * var(--w) / 600)', height: 'calc(40.58 * var(--w) / 600)' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          

        </div>

      </div>

      {/* === Contact Form Modal === */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.65)', padding: '6vw' }}
          onClick={() => setContactOpen(false)}
        >
          <div
            className="rounded-2xl w-full"
            style={{ maxWidth: '92vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl bg-[#2d1f1a] relative"
              style={{ padding: '6vw', maxHeight: '85vh', overflowY: 'auto' }}
            >
              {/* Close (X) */}
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact form"
                className="absolute text-white leading-none cursor-pointer"
                style={{ top: '3.5vw', right: '4.5vw', fontSize: '7vw', fontWeight: 700 }}
              >
                &times;
              </button>

              <h4
                className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
                style={{ fontSize: '6.5vw', letterSpacing: '0.12em', textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}
              >
                Contact Us
              </h4>

              {contactStatus === "success" ? (
                <p
                  className="text-white font-[family-name:var(--font-libre-baskerville)] text-center"
                  style={{ fontSize: '4.6vw', fontWeight: 900, marginTop: '8vw', marginBottom: '6vw', lineHeight: 1.5 }}
                >
                  Thanks! We&apos;ll be in touch soon.
                </p>
              ) : (
                <form
                  className="flex flex-col"
                  style={{ gap: '3vw', marginTop: '5vw' }}
                  onSubmit={handleContactSubmit}
                >
                  <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
                  <ContactDropdown size="mobile" />
                  <div className="flex" style={{ gap: '3vw' }}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      autoComplete="given-name"
                      className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)]"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '3vw', fontSize: '4vw' }}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      autoComplete="family-name"
                      className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)]"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '3vw', fontSize: '4vw' }}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '3vw', fontSize: '4vw' }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '3vw', fontSize: '4vw' }}
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    required
                    className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)] resize-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '3vw', fontSize: '4vw' }}
                  />
                  {contactStatus === "error" && (
                    <p className="text-center" style={{ color: '#ff9b6b', fontSize: '3.6vw' }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={contactStatus === "sending"}
                    className="rounded-full"
                    style={{ marginTop: '2vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', opacity: contactStatus === "sending" ? 0.6 : 1 }}
                  >
                    <div
                      className="rounded-full bg-[#2d1f1a] flex items-center justify-center"
                      style={{ paddingBlock: '3vw' }}
                    >
                      <span
                        className="text-white font-[family-name:var(--font-libre-baskerville)] uppercase"
                        style={{ fontSize: '4.4vw', fontWeight: 900, letterSpacing: '0.12em' }}
                      >
                        {contactStatus === "sending" ? "Sending..." : "Send"}
                      </span>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
