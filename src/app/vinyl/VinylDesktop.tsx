"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import DesktopFooter from "../components/DesktopFooter";
import DesktopNav from "../components/DesktopNav";
import Footer from "../components/Footer";

const vinylSections = [
  {
    id: "Now Spinning",
    subtitle: "60s Revolution",
    items: [
      { name: "SGT. PEPPER'S", artist: "The Beatles", stock: 3, img: "/images/artwork/sgt-peppers.jpg" },
      { name: "ARE YOU EXPERIENCED", artist: "Jimi Hendrix Experience", stock: 1, img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/00/67/45/006745f5-95d5-5a06-35ed-d515e9cfd7d8/dj.tbwlxwoh.jpg/600x600bb.jpg" },
      { name: "PET SOUNDS", artist: "The Beach Boys", stock: 5, img: "/images/artwork/pet-sounds.jpg" },
      { name: "HIGHWAY 61 REVISITED", artist: "Bob Dylan", stock: 2, img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg" },
      { name: "ABBEY ROAD", artist: "The Beatles", stock: 4, img: "/images/artwork/abbey-road.jpg" },
    ],
  },
  {
    id: "Fresh Drops",
    items: [
      { name: "COWBOY CARTER", artist: "Beyoncé", stock: 2, img: "/images/artwork/cowboy-carter.jpg" },
      { name: "HIT ME HARD AND SOFT", artist: "Billie Eilish", stock: 4, img: "/images/artwork/hit-me-hard-and-soft.jpg" },
      { name: "THE TORTURED POETS DEPARTMENT", artist: "Taylor Swift", stock: 1, img: "/images/artwork/tortured-poets.jpg" },
      { name: "BRAT", artist: "Charli XCX", stock: 3, img: "/images/artwork/brat.jpg" },
      { name: "GNX", artist: "Kendrick Lamar", stock: 2, img: "/images/artwork/gnx.jpg" },
      { name: "SHORT N' SWEET", artist: "Sabrina Carpenter", stock: 3, img: "/images/artwork/short-n-sweet.jpg" },
      { name: "CHROMAKOPIA", artist: "Tyler, The Creator", stock: 2, img: "/images/artwork/chromakopia.jpg" },
      { name: "CHARM", artist: "Clairo", stock: 4, img: "/images/artwork/charm-clairo.jpg" },
      { name: "MOON MUSIC", artist: "Coldplay", stock: 2, img: "/images/artwork/moon-music.jpg" },
      { name: "ROMANCE", artist: "Fontaines D.C.", stock: 3, img: "/images/artwork/romance-fontaines.jpg" },
    ],
  },
  {
    id: "The Groove Pick",
    items: [
      { name: "RUMOURS", artist: "Fleetwood Mac", stock: 6, img: "/images/artwork/rumours.jpg" },
      { name: "ABBEY ROAD", artist: "The Beatles", stock: 3, img: "/images/artwork/abbey-road.jpg" },
      { name: "BACK TO BLACK", artist: "Amy Winehouse", stock: 2, img: "/images/artwork/back-to-black.jpg" },
      { name: "THRILLER", artist: "Michael Jackson", stock: 4, img: "/images/artwork/thriller.jpg" },
      { name: "LEGEND", artist: "Bob Marley", stock: 5, img: "/images/artwork/legend.jpg" },
      { name: "PURPLE RAIN", artist: "Prince", stock: 2, img: "/images/artwork/purple-rain.jpg" },
      { name: "PET SOUNDS", artist: "The Beach Boys", stock: 3, img: "/images/artwork/pet-sounds.jpg" },
      { name: "SGT. PEPPER'S LONELY HEARTS CLUB BAND", artist: "The Beatles", stock: 1, img: "/images/artwork/sgt-peppers.jpg" },
      { name: "EXILE ON MAIN ST.", artist: "The Rolling Stones", stock: 2, img: "/images/artwork/exile-on-main-st.jpg" },
      { name: "DARK SIDE OF THE MOON", artist: "Pink Floyd", stock: 4, img: "/images/artwork/dark-side-of-the-moon.jpg" },
    ],
  },
];

const digTheStacksSections = [
  {
    title: "Turn it Up",
    genres: ["Rock", "Punk", "Alternative", "Garage"],
    desc: "Big riffs, loud records, and high-energy classics.",
    vinyls: [
      { name: "NEVERMIND", artist: "Nirvana", img: "/images/artwork/nevermind.jpg" },
      { name: "LONDON CALLING", artist: "The Clash", img: "/images/artwork/london-calling.jpg" },
      { name: "APPETITE FOR DESTRUCTION", artist: "Guns N' Roses", img: "/images/artwork/appetite-for-destruction.jpg" },
      { name: "BACK IN BLACK", artist: "AC/DC", img: "/images/artwork/back-in-black.jpg" },
      { name: "PARANOID", artist: "Black Sabbath", img: "/images/artwork/paranoid.jpg" },
      { name: "NEVER MIND THE BOLLOCKS", artist: "Sex Pistols", img: "/images/artwork/never-mind-the-bollocks.jpg" },
    ],
  },
  {
    title: "Smooth Operator",
    genres: ["Soul", "R&B", "Neo Soul", "Jazz"],
    desc: "Warm grooves and laid-back listening.",
    vinyls: [
      { name: "KIND OF BLUE", artist: "Miles Davis", img: "/images/artwork/kind-of-blue.jpg" },
      { name: "VOODOO", artist: "D'Angelo", img: "/images/artwork/voodoo.jpg" },
      { name: "WHAT'S GOING ON", artist: "Marvin Gaye", img: "/images/artwork/whats-going-on.jpg" },
      { name: "SONGS IN THE KEY OF LIFE", artist: "Stevie Wonder", img: "/images/artwork/songs-in-the-key-of-life.jpg" },
      { name: "CHANNEL ORANGE", artist: "Frank Ocean", img: "/images/artwork/channel-orange.jpg" },
      { name: "LADY SOUL", artist: "Aretha Franklin", img: "/images/artwork/lady-soul.jpg" },
    ],
  },
  {
    title: "Rhyme & Groove",
    genres: ["Hip-Hop", "Rap", "Classics", "Modern Sounds"],
    desc: "Sharp lyricism and heavy beats.",
    vinyls: [
      { name: "ILLMATIC", artist: "Nas", img: "/images/artwork/illmatic.jpg" },
      { name: "TO PIMP A BUTTERFLY", artist: "Kendrick Lamar", img: "/images/artwork/to-pimp-a-butterfly.jpg" },
      { name: "THE CHRONIC", artist: "Dr. Dre", img: "/images/artwork/the-chronic.jpg" },
      { name: "MADVILLAINY", artist: "Madvillain", img: "/images/artwork/madvillainy.jpg" },
      { name: "AQUEMINI", artist: "OutKast", img: "/images/artwork/aquemini.jpg" },
      { name: "THE MISEDUCATION OF LAURYN HILL", artist: "Lauryn Hill", img: "/images/artwork/miseducation.jpg" },
    ],
  },
  {
    title: "Low FI Theory",
    genres: ["Indie", "Lo-fi", "Experimental", "Deep Cuts"],
    desc: "Offbeat favorites and underground sounds.",
    vinyls: [
      { name: "LOVELESS", artist: "My Bloody Valentine", img: "/images/artwork/loveless.jpg" },
      { name: "IN THE AEROPLANE OVER THE SEA", artist: "Neutral Milk Hotel", img: "/images/artwork/aeroplane-over-the-sea.jpg" },
      { name: "PINK MOON", artist: "Nick Drake", img: "/images/artwork/pink-moon.jpg" },
      { name: "DUMMY", artist: "Portishead", img: "/images/artwork/dummy.jpg" },
      { name: "SELECTED AMBIENT WORKS 85-92", artist: "Aphex Twin", img: "/images/artwork/selected-ambient-works.jpg" },
      { name: "ENDTRODUCING", artist: "DJ Shadow", img: "/images/artwork/endtroducing.jpg" },
    ],
  },
  {
    title: "Neon Nights",
    genres: ["Electronic", "Synth", "Pop", "Dance"],
    desc: "Late-night energy and neon atmosphere.",
    vinyls: [
      { name: "RANDOM ACCESS MEMORIES", artist: "Daft Punk", img: "/images/artwork/random-access-memories.jpg" },
      { name: "DISCOVERY", artist: "Daft Punk", img: "/images/artwork/discovery.jpg" },
      { name: "HOMEWORK", artist: "Daft Punk", img: "/images/artwork/homework.jpg" },
      { name: "TRANS-EUROPE EXPRESS", artist: "Kraftwerk", img: "/images/artwork/trans-europe-express.jpg" },
      { name: "CROSS", artist: "Justice", img: "/images/artwork/cross-justice.jpg" },
      { name: "CONFESSIONS ON A DANCE FLOOR", artist: "Madonna", img: "/images/artwork/confessions-on-a-dance-floor.jpg" },
    ],
  },
  {
    title: "Roots & Dust",
    genres: ["Blues", "Folk", "Americana", "Classic/Modern Country"],
    desc: "Raw storytelling and timeless records.",
    vinyls: [
      { name: "JOLENE", artist: "Dolly Parton", img: "/images/artwork/jolene.jpg" },
      { name: "AT FOLSOM PRISON", artist: "Johnny Cash", img: "/images/artwork/at-folsom-prison.jpg" },
      { name: "BLOOD ON THE TRACKS", artist: "Bob Dylan", img: "/images/artwork/blood-on-the-tracks.jpg" },
      { name: "HARVEST", artist: "Neil Young", img: "/images/artwork/harvest.jpg" },
      { name: "BLUE", artist: "Joni Mitchell", img: "/images/artwork/blue-joni-mitchell.jpg" },
      { name: "RED HEADED STRANGER", artist: "Willie Nelson", img: "/images/artwork/red-headed-stranger.jpg" },
    ],
  },
  {
    title: "Global Grooves",
    genres: ["K-Pop", "City Pop", "International", "World Sounds"],
    desc: "Worldwide rhythms and rare finds.",
    vinyls: [
      { name: "MAP OF THE SOUL: 7", artist: "BTS", img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/bd/68/9b/bd689bf2-ef25-4973-7ecd-7eb4965019c5/195081034713_Cover.jpg/600x600bb.jpg" },
      { name: "THE ALBUM", artist: "BLACKPINK", img: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/64/46/c364465f-6271-8aae-93a8-b9979d2befe5/20UMGIM82075.rgb.jpg/600x600bb.jpg" },
      { name: "GET UP", artist: "NewJeans", img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/4b/7e/d34b7e1e-af3b-43b6-2949-7a8c652a1bc9/196922462726_Cover.jpg/600x600bb.jpg" },
      { name: "VARIETY", artist: "Mariya Takeuchi", img: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c9/8c/a6/c98ca691-2006-6116-81f6-52ec22f5e25c/825646183807.jpg/600x600bb.jpg" },
      { name: "ZOMBIE", artist: "Fela Kuti", img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6b/aa/9b/6baa9b5e-d508-63ac-7327-e29043205984/720841206194_Cover.jpg/600x600bb.jpg" },
      { name: "UN VERANO SIN TI", artist: "Bad Bunny", img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/74/4d/b6744dbd-77ed-413a-3777-5ac6a2e780eb/197188732554.jpg/600x600bb.jpg" },
    ],
  },
  {
    title: "Screen Sounds",
    genres: ["Film Scores", "Anime", "TV", "Video Games", "Musicals"],
    desc: "Cinematic sounds and nostalgia.",
    vinyls: [
      { name: "STRANGER THINGS, VOL. 1", artist: "Kyle Dixon & Michael Stein", img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e0/fe/29/e0fe29b5-d7fe-e0d7-04e5-dd0b989a8675/780163484526.jpg/600x600bb.jpg" },
      { name: "COWBOY BEBOP", artist: "Yoko Kanno", img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5a/bb/df/5abbdf28-bf0e-0530-e5f8-0f0ca3150e0a/195081633657.jpg/600x600bb.jpg" },
      { name: "HAMILTON", artist: "Original Broadway Cast", img: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/38/a0/07/38a007fe-dc73-56af-082c-5668aab3e466/075679909183.jpg/600x600bb.jpg" },
      { name: "THE LAST OF US", artist: "Gustavo Santaolalla", img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/95/7a/8b/957a8b8b-77a2-fa17-7d34-0d4ffef0151f/886443853973.jpg/600x600bb.jpg" },
      { name: "SPIRITED AWAY", artist: "Joe Hisaishi", img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/12/dc/cf/12dccf7e-32ce-12e8-03fe-37574d6c2197/TKCA-72165.jpg/600x600bb.jpg" },
      { name: "INCEPTION", artist: "Hans Zimmer", img: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9f/7e/60/9f7e6017-3bd3-570f-7890-eba0f3aa6c33/mzi.hxbvposl.jpg/600x600bb.jpg" },
    ],
  },
];

function StacksVinylRow({ vinyls, autoScroll = false, isActive = true, rowTitle, variant = "stacks" }: { vinyls: { name: string; artist: string; img: string }[]; autoScroll?: boolean; isActive?: boolean; rowTitle?: string; variant?: "stacks" | "regular" }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollPosRef = useRef(0);

  // Auto-scroll loop. We track position in a float ref because iOS Safari floors
  // writes to scrollLeft, which would prevent sub-pixel speeds from accumulating.
  useEffect(() => {
    const el = scrollRef.current;
    if (!autoScroll || !isActive) {
      isPausedRef.current = false;
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
      return;
    }
    if (!el) return;

    scrollPosRef.current = el.scrollLeft;
    const speed = 0.5;
    let rafId = 0;

    const tick = () => {
      if (!el) return;
      if (isPausedRef.current) {
        scrollPosRef.current = el.scrollLeft;
      } else {
        scrollPosRef.current += speed;
        el.scrollLeft = scrollPosRef.current;
      }
      if (el.children.length >= vinyls.length + 1) {
        const first = el.children[0] as HTMLElement;
        const secondCopyFirst = el.children[vinyls.length] as HTMLElement;
        const loopDistance = secondCopyFirst.offsetLeft - first.offsetLeft;
        if (loopDistance > 0 && scrollPosRef.current >= loopDistance) {
          scrollPosRef.current -= loopDistance;
          el.scrollLeft = scrollPosRef.current;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [autoScroll, isActive, vinyls.length]);

  const handleInteractionStart = () => {
    if (!autoScroll) return;
    isPausedRef.current = true;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const handleInteractionEnd = () => {
    if (!autoScroll) return;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
      resumeTimerRef.current = null;
    }, 2000);
  };

  const items = autoScroll ? [...vinyls, ...vinyls] : vinyls;
  const isStacks = variant === "stacks";
  const cardWidth = isStacks ? '11vw' : '15.6vw';
  const idPrefix = isStacks ? 'stacks-card' : 'card';

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto overflow-y-hidden hide-scrollbar"
      style={{ gap: '2vw', paddingLeft: '2vw', paddingRight: '2vw', paddingBottom: '3vw' }}
      onPointerDown={handleInteractionStart}
      onPointerUp={handleInteractionEnd}
      onPointerCancel={handleInteractionEnd}
      onWheel={() => { handleInteractionStart(); handleInteractionEnd(); }}
    >
      {items.map((vinyl, vi) => (
        <div
          key={vi}
          id={vi < vinyls.length && rowTitle ? `${idPrefix}-${rowTitle}-${vi}` : undefined}
          className="rounded-xl"
          style={{
            width: cardWidth,
            flexShrink: 0,
            paddingTop: '0.5vw',
            paddingLeft: '0.5vw',
            paddingRight: '0.5vw',
            paddingBottom: '2vw',
            background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
          }}
        >
          <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
            <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
              <img src={vinyl.img} alt={vinyl.name} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div style={{ padding: '1vw' }}>
              <h4
                className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                style={{ fontSize: isStacks ? '1.6vw' : '2.4vw' }}
              >
                {vinyl.name}
              </h4>
              <p
                className="text-white/60 font-[family-name:var(--font-inter)] overflow-hidden whitespace-nowrap text-ellipsis"
                style={{ fontSize: '1.7vw', marginTop: '0.3vw' }}
              >
                {vinyl.artist}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function VinylDesktop() {
  const [navVisible, setNavVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Dig the Stacks");
  const [stacksSubFilter, setStacksSubFilter] = useState("Turn it Up");
  const [searchQuery, setSearchQuery] = useState("");
  const [hasRestored, setHasRestored] = useState(false);

  // Restore last-used filter from localStorage on mount.
  useEffect(() => {
    const stored = localStorage.getItem("vinyl-filter");
    const valid = ["Now Spinning", "Fresh Drops", "The Groove Pick", "Dig the Stacks"];
    if (stored && valid.includes(stored)) setSelectedFilter(stored);
    setHasRestored(true);
  }, []);

  // Persist filter changes — but only after the restore has run, so the initial
  // mount's "Dig the Stacks" default doesn't clobber a previously saved filter.
  useEffect(() => {
    if (!hasRestored) return;
    localStorage.setItem("vinyl-filter", selectedFilter);
  }, [selectedFilter, hasRestored]);

  // Track which carousel row is most-visible — only that row's carousel auto-scrolls.
  const [activeStacksTitle, setActiveStacksTitle] = useState<string | null>(null);
  const stacksRowRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Search-arrival freeze: when the user clicks a search result, the destination
  // carousel sits still until they touch/move on the page.
  const [searchArrival, setSearchArrival] = useState(false);

  useEffect(() => {
    if (!searchArrival) return;
    const clear = () => setSearchArrival(false);
    document.addEventListener("pointerdown", clear, { once: true });
    return () => document.removeEventListener("pointerdown", clear);
  }, [searchArrival]);

  useEffect(() => {
    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = (entry.target as HTMLElement).dataset.rowKey;
          if (key) ratios.set(key, entry.intersectionRatio);
        }
        let bestKey: string | null = null;
        let bestRatio = 0;
        for (const [key, ratio] of ratios.entries()) {
          if (ratio > bestRatio) { bestKey = key; bestRatio = ratio; }
        }
        setActiveStacksTitle(bestKey);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );
    for (const el of stacksRowRefs.current.values()) observer.observe(el);
    return () => observer.disconnect();
  }, [selectedFilter]);

  type SearchEntry = {
    name: string;
    artist: string;
    img: string;
    kind: "regular" | "stacks";
    rowKey: string;
    section: string;
    itemIndex: number;
  };
  const allVinylItems: SearchEntry[] = [
    ...vinylSections.flatMap((s) =>
      s.items.map((item, i) => ({
        name: item.name,
        artist: item.artist,
        img: item.img,
        kind: "regular" as const,
        rowKey: s.id,
        section: s.id,
        itemIndex: i,
      }))
    ),
    ...digTheStacksSections.flatMap((g) =>
      g.vinyls.map((v, i) => ({
        name: v.name,
        artist: v.artist,
        img: v.img,
        kind: "stacks" as const,
        rowKey: g.title,
        section: g.title,
        itemIndex: i,
      }))
    ),
  ];
  const searchResults: SearchEntry[] = searchQuery.length > 0
    ? allVinylItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.section.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  const visibleSections = vinylSections.filter((s) => s.id === selectedFilter && s.id !== "Now Spinning");

  const scrollToItem = useCallback((entry: SearchEntry) => {
    setSearchQuery("");

    if (entry.kind === "stacks") {
      setSelectedFilter("Dig the Stacks");
      setSearchArrival(true);
      setTimeout(() => {
        const sectionEl = document.getElementById(`stacks-section-${entry.rowKey}`);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            const cardEl = document.getElementById(`stacks-card-${entry.rowKey}-${entry.itemIndex}`);
            if (cardEl && cardEl.parentElement) {
              const container = cardEl.parentElement;
              const scrollLeft = cardEl.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (cardEl.clientWidth / 2);
              container.scrollTo({ left: scrollLeft, behavior: "smooth" });
            }
          }, 400);
        }
      }, 100);
    } else {
      setSelectedFilter(entry.rowKey);
      setSearchArrival(true);
      setTimeout(() => {
        const sectionEl = document.getElementById(`section-${entry.rowKey}`);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            const cardEl = document.getElementById(`card-${entry.rowKey}-${entry.itemIndex}`);
            if (cardEl && cardEl.parentElement) {
              const container = cardEl.parentElement;
              const scrollLeft = cardEl.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (cardEl.clientWidth / 2);
              container.scrollTo({ left: scrollLeft, behavior: "smooth" });
            }
          }, 400);
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <DesktopNav onShow={() => setNavVisible(true)} />
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

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .white-scrollbar::-webkit-scrollbar {
          width: 0.4vw;
        }
        .white-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .white-scrollbar::-webkit-scrollbar-thumb {
          background: #ffffff;
          border-radius: 999px;
        }
        .white-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ffffff;
        }

        .white-scrollbar-lg::-webkit-scrollbar {
          width: 8px;
        }
        .white-scrollbar-lg::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 999px;
        }
        .white-scrollbar-lg::-webkit-scrollbar-thumb {
          background: #ffffff;
          border-radius: 999px;
        }
        .white-scrollbar-lg::-webkit-scrollbar-thumb:hover {
          background: #ffffff;
        }

        @keyframes vinyl-spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes vinyl-spin-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .vinyl-spin-cw {
          animation: vinyl-spin-cw 8s linear infinite;
          transform-origin: 51.6% 39.8%;
        }
        .vinyl-spin-ccw {
          animation: vinyl-spin-ccw 8s linear infinite;
          transform-origin: 51.6% 39.8%;
        }
      `}</style>

      <div className="relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden' }}>

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
            className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]"
            style={{ backgroundImage: "url('/images/desktop_background_v2.png')", transform: "scaleY(-1)" }}
          />
          <div
            className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]"
            style={{ backgroundImage: "url('/images/desktop_background_v2.png')" }}
          />
          {/* Panel 3 */}
          <div
            className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }}
          />
          {/* Panel 4 */}
          <div
            className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }}
          />
          {/* Panel 5 */}
          <div
            className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }}
          />
          {/* Panel 6 */}
          <div
            className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }}
          />
          {/* Panel 7 */}
          <div
            className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }}
          />
          {/* Panel 8 */}
          <div
            className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }}
          />
          {/* Panel 9 */}
          <div
            className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }}
          />
          {/* Panel 10 */}
          <div
            className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }}
          />
        </div>

        {/* Vinyl clip wrapper - prevents horizontal overflow */}
        <div className="absolute inset-0 z-[5] pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          {/* Left vinyl - mid left, spinning clockwise */}
          <div className="absolute" style={{ left: '-30vw', top: '15vw', width: '60vw', height: '70vw' }}>
            <img
              src="/images/vinyl.svg"
              alt=""
              className="w-full h-full pointer-events-none vinyl-spin-cw"
            />
          </div>
          {/* Right vinyl - top right, spinning counterclockwise */}
          <div className="absolute" style={{ right: '-27vw', top: '-8vw', width: '60vw', height: '70vw' }}>
            <img
              src="/images/vinyl.svg"
              alt=""
              className="w-full h-full pointer-events-none vinyl-spin-ccw"
            />
          </div>
        </div>

        {/* === CONTENT LAYER === */}
        <div className="relative z-10 transition-all duration-300" style={{ paddingTop: navVisible ? '7.6vw' : '0' }}>
          {/* We Buy Vinyl Banner */}
          <div
            className="bg-[#d9bc52] noisy flex items-center justify-center"
            style={{
              height: '3.5vw',
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
                animation: 'shimmer 4s ease-in-out infinite',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-black"
              style={{
                fontSize: '2vw',
                letterSpacing: '0.1em',
                position: 'relative',
                zIndex: 2,
              }}
            >
              We Buy Vinyl!
            </span>
          </div>

          {/* Page Title */}
          <div className="text-center" style={{ marginTop: '-2vw', marginBottom: '6.1vw' }}>
            <h1
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '6.61vw',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                paddingTop: '3vw',
              }}
            >
              Vinyl
            </h1>
            <p
              className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
              style={{
                fontSize: '4.45vw',
                fontWeight: 900,
                letterSpacing: '0.2em',
                marginTop: '0vw',
                textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* Dropdown Bar */}
          <div className="relative flex justify-start" style={{ marginTop: '-4vw', paddingLeft: '30vw' }}>
            <div
              className="rounded-full relative"
              style={{ padding: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between rounded-full bg-[#2d1f1a] cursor-pointer"
                style={{ width: '33vw', height: '4.5vw', paddingLeft: '3vw', paddingRight: '2.5vw', gap: '1.5vw' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                  style={{ fontSize: '1.9vw' }}
                >
                  {selectedFilter}
                </span>
                <svg
                  className={`text-white transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  style={{ width: '1.5vw', height: '1.5vw' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Click-outside overlay */}
              {dropdownOpen && (
                <div
                  className="fixed inset-0 z-[55]"
                  onClick={() => setDropdownOpen(false)}
                />
              )}

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div
                  className="absolute left-0 z-[60] rounded-xl overflow-hidden"
                  style={{
                    top: '100%',
                    marginTop: '0.8vw',
                    minWidth: '100%',
                    padding: '0.4vw',
                    background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                  }}
                >
                  <div className="rounded-lg bg-[#2d1f1a]">
                    {/* Now Spinning */}
                    <button
                      onClick={() => { setSelectedFilter("Now Spinning"); setDropdownOpen(false); }}
                      className="flex flex-col w-full text-left cursor-pointer hover:bg-white/10 transition-colors"
                      style={{ padding: '1.2vw 2.5vw' }}
                    >
                      <span className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold" style={{ fontSize: '1.9vw' }}>Now Spinning</span>
                      <span className="font-[family-name:var(--font-inter)] text-white/40" style={{ fontSize: '1.5vw', marginTop: '0.3vw' }}>What&apos;s playing in the house right now.</span>
                    </button>

                    {/* Fresh Drops */}
                    <button
                      onClick={() => { setSelectedFilter("Fresh Drops"); setDropdownOpen(false); }}
                      className="flex flex-col w-full text-left cursor-pointer hover:bg-white/10 transition-colors"
                      style={{ padding: '1.2vw 2.5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <span className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold" style={{ fontSize: '1.9vw' }}>Fresh Drops</span>
                      <span className="font-[family-name:var(--font-inter)] text-white/40" style={{ fontSize: '1.5vw', marginTop: '0.3vw' }}>New arrivals and recent releases worth pulling up for.</span>
                    </button>

                    {/* The Groove Pick */}
                    <button
                      onClick={() => { setSelectedFilter("The Groove Pick"); setDropdownOpen(false); }}
                      className="flex flex-col w-full text-left cursor-pointer hover:bg-white/10 transition-colors"
                      style={{ padding: '1.2vw 2.5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <span className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold" style={{ fontSize: '1.9vw' }}>The Groove Pick</span>
                      <span className="font-[family-name:var(--font-inter)] text-white/40" style={{ fontSize: '1.5vw', marginTop: '0.3vw' }}>Staff favorites, deep cuts, and personal recommendations.</span>
                    </button>

                    {/* Dig the Stacks with submenu */}
                    <div
                      onMouseEnter={() => setSubDropdownOpen(true)}
                      onMouseLeave={() => setSubDropdownOpen(false)}
                      style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <button
                        onClick={() => setSubDropdownOpen(!subDropdownOpen)}
                        className={`flex flex-col w-full text-left cursor-pointer transition-colors ${subDropdownOpen ? 'bg-white/20' : 'hover:bg-white/10'}`}
                        style={{ padding: '1.2vw 2.5vw' }}
                      >
                        <span className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold" style={{ fontSize: '1.9vw' }}>Dig the Stacks</span>
                        <span className="font-[family-name:var(--font-inter)] text-white/40" style={{ fontSize: '1.5vw', marginTop: '0.3vw' }}>Rock, indie, jazz, soul, hip-hop, soundtracks, deep cuts, and everything in between.</span>
                      </button>

                      {subDropdownOpen && (
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                          {["Turn it Up", "Smooth Operator", "Rhyme & Groove", "Low FI Theory", "Neon Nights", "Roots & Dust", "Global Grooves", "Screen Sounds"].map((genre) => (
                            <button
                              key={genre}
                              onClick={() => { setStacksSubFilter(genre); setSelectedFilter("Dig the Stacks"); setDropdownOpen(false); setSubDropdownOpen(false); }}
                              className="flex w-full text-left cursor-pointer hover:bg-white/15 transition-colors"
                              style={{ padding: '0.7vw 4vw', borderTop: '1px solid rgba(255,255,255,0.05)' }}
                            >
                              <span className="font-[family-name:var(--font-libre-baskerville)] text-white" style={{ fontSize: '1.5vw' }}>{genre}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative z-50" style={{ paddingLeft: '30vw', paddingRight: '10vw', marginTop: '2vw' }}>
            <div className="relative" style={{ width: '50vw' }}>
              <div
                className="rounded-full"
                style={{ padding: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
              >
                <div className="flex items-center rounded-full bg-[#2d1f1a]" style={{ paddingLeft: '2vw', paddingRight: '2vw', height: '4.5vw', gap: '1vw' }}>
                  <svg
                    className="text-white/50"
                    style={{ width: '2.2vw', height: '2.2vw', flexShrink: 0 }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search vinyl..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white font-[family-name:var(--font-libre-baskerville)] outline-none w-full placeholder-white/40"
                    style={{ fontSize: '2vw' }}
                  />
                </div>
              </div>

              {/* Click-outside overlay */}
              {searchQuery.length > 0 && searchResults.length > 0 && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setSearchQuery("")}
                />
              )}

              {/* Search Results Dropdown */}
              {searchQuery.length > 0 && searchResults.length > 0 && (
                <div
                  className="absolute left-0 right-0 z-50 rounded-xl"
                  style={{
                    marginTop: '0.8vw',
                    padding: '0.4vw',
                    background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                  }}
                >
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute flex items-center justify-center bg-red-600 rounded-full cursor-pointer active:scale-90 transition-transform"
                    style={{ width: '5vw', height: '5vw', top: '-1vw', right: '-1vw', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                  >
                    <svg className="text-white" style={{ width: '2.6vw', height: '2.6vw' }} fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                    <div className="overflow-y-scroll white-scrollbar-lg" style={{ maxHeight: '30vw' }}>
                      {searchResults.map((item, i) => (
                        <div
                          key={`${item.name}-${i}`}
                          className="flex items-center font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors"
                          style={{ padding: '1.2vw 2vw', gap: '1.5vw', borderTop: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
                          onClick={() => scrollToItem(item)}
                        >
                          <img src={item.img} alt={item.name} className="rounded object-cover" style={{ width: '7vw', height: '7vw', flexShrink: 0 }} />
                          <div style={{ minWidth: 0 }}>
                            <p className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis" style={{ fontSize: '3vw' }}>
                              {item.name}
                            </p>
                            <p className="text-white/50 font-[family-name:var(--font-inter)]" style={{ fontSize: '2.5vw' }}>
                              {item.artist}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Starting At Note */}
          <div
            className="noisy relative overflow-hidden"
            style={{
              marginInline: '4vw',
              marginTop: '3vw',
              marginLeft: '20vw',
              padding: '2vw 3vw',
              borderRadius: '12px',
              background: 'rgba(20,14,10,0.92)',
              border: '1px solid rgba(217,188,82,0.4)',
              width: '70vw',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(105deg, transparent 40%, rgba(217,188,82,0.2) 50%, transparent 60%)',
                animation: 'shimmer 3s ease-in-out infinite',
                pointerEvents: 'none',
              }}
            />
            <p
              className="font-[family-name:var(--font-libre-baskerville)] text-center relative"
              style={{
                fontSize: '1.8vw',
                lineHeight: '1.8',
                zIndex: 1,
              }}
            >
              <span
                className="font-bold"
                style={{
                  fontSize: '3vw',
                  background: 'linear-gradient(to right, #f0c040, #ffe08a, #f0c040)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 10px rgba(251,191,36,0.7))',
                }}
              >
                The Drop
              </span>
              <br />
              <span className="text-white/80">
                Rare pressings, signed vinyl, and colored variants available.
              </span>
            </p>
          </div>

          {/* Now Spinning - Jazz */}
          {hasRestored && selectedFilter === "Now Spinning" && <div style={{ paddingLeft: '4vw', paddingRight: '4vw', marginTop: '4vw' }}>
            <div
              className="rounded-xl"
              style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            >
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                {/* Title */}
                <div className="text-center" style={{ paddingTop: '2.4vw', paddingBottom: '1.5vw' }}>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '3vw', letterSpacing: '0.15em' }}
                  >
                    Now Spinning
                  </span>
                  <div className="flex items-center justify-center" style={{ gap: '2vw', marginTop: '1vw' }}>
                    <div style={{ width: '5vw', height: '0.5vw', backgroundColor: 'white' }} />
                    <span
                      className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                      style={{ fontSize: '3.5vw', letterSpacing: '0.15em', marginTop: '-0.5vw' }}
                    >
                      60<span className="lowercase">s</span> Revolution
                    </span>
                    <div style={{ width: '5vw', height: '0.5vw', backgroundColor: 'white' }} />
                  </div>
                </div>

                {/* Vinyl Cards */}
                <div
                  className="flex justify-center"
                  style={{ gap: '2vw', paddingLeft: '2vw', paddingRight: '2vw', paddingBottom: '3vw' }}
                >
                  {[
                    { name: "SGT. PEPPER'S", artist: "The Beatles", stock: 3, img: "/images/artwork/sgt-peppers.jpg" },
                    { name: "ARE YOU EXPERIENCED", artist: "Jimi Hendrix Experience", stock: 1, img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/00/67/45/006745f5-95d5-5a06-35ed-d515e9cfd7d8/dj.tbwlxwoh.jpg/600x600bb.jpg" },
                    { name: "PET SOUNDS", artist: "The Beach Boys", stock: 5, img: "/images/artwork/pet-sounds.jpg" },
                    { name: "HIGHWAY 61 REVISITED", artist: "Bob Dylan", stock: 2, img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg" },
                    { name: "ABBEY ROAD", artist: "The Beatles", stock: 4, img: "/images/artwork/abbey-road.jpg" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-xl"
                      style={{
                        paddingTop: '0.5vw',
                        paddingLeft: '0.5vw',
                        paddingRight: '0.5vw',
                        paddingBottom: '2vw',
                        background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                        minWidth: 0,
                      }}
                    >
                      <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                        {/* Album Art */}
                        <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        {/* Info */}
                        <div style={{ padding: '1vw' }}>
                          <h4
                            className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                            style={{ fontSize: '2.4vw' }}
                          >
                            {item.name}
                          </h4>
                          <p
                            className="text-white/60 font-[family-name:var(--font-inter)] overflow-hidden whitespace-nowrap text-ellipsis"
                            style={{ fontSize: '1.7vw', marginTop: '0.3vw' }}
                          >
                            {item.artist}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>}

          {/* Vinyl Sections (Fresh Drops, The Groove Pick) */}
          {hasRestored && visibleSections.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              ref={(el) => {
                if (el) stacksRowRefs.current.set(section.id, el);
                else stacksRowRefs.current.delete(section.id);
              }}
              data-row-key={section.id}
              style={{ paddingLeft: '4vw', paddingRight: '4vw', marginTop: '4vw' }}
            >
              <div
                className="rounded-xl"
                style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
              >
                <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                  {/* Title */}
                  <div className="text-center" style={{ paddingTop: '2.4vw', paddingBottom: '1.5vw' }}>
                    <span
                      className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                      style={{ fontSize: '3vw', letterSpacing: '0.15em' }}
                    >
                      {section.id}
                    </span>
                  </div>

                  <StacksVinylRow
                    variant="regular"
                    rowTitle={section.id}
                    vinyls={section.items}
                    autoScroll
                    isActive={section.id === activeStacksTitle && !searchArrival}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Dig the Stacks Sections */}
          {hasRestored && selectedFilter === "Dig the Stacks" && digTheStacksSections.filter((item) => item.title === stacksSubFilter).map((item) => (
            <div
              key={item.title}
              id={`stacks-section-${item.title}`}
              ref={(el) => {
                if (el) stacksRowRefs.current.set(item.title, el);
                else stacksRowRefs.current.delete(item.title);
              }}
              data-row-key={item.title}
              style={{ paddingLeft: '4vw', paddingRight: '4vw', marginTop: '4vw' }}
            >
              <div
                className="rounded-xl"
                style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
              >
                <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                  <div className="text-center" style={{ paddingTop: '2.4vw', paddingBottom: '1.5vw' }}>
                    <span
                      className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                      style={{ fontSize: '3vw', letterSpacing: '0.15em' }}
                    >
                      {item.title}
                    </span>
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] text-white"
                      style={{ fontSize: '1.7vw', marginTop: '0.5vw', letterSpacing: '0.05em' }}
                    >
                      {item.genres.join(' • ')}
                    </p>
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] text-white italic"
                      style={{ fontSize: '1.9vw', marginTop: '0.5vw' }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <StacksVinylRow
                    variant="regular"
                    rowTitle={item.title}
                    vinyls={item.vinyls}
                    autoScroll
                    isActive={item.title === activeStacksTitle && !searchArrival}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Bottom spacing */}
          <div style={{ height: '4vw' }} />


          <DesktopFooter />

        </div>

      </div>
    </>
  );
}
