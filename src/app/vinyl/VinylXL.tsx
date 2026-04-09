"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopFooterXL from "../components/DesktopFooterXL";
import DesktopNav from "../components/DesktopNav";

const vinylSections = [
  {
    id: "Now Spinning",
    subtitle: "Jazz",
    items: [
      { name: "KIND OF BLUE", artist: "Miles Davis", stock: 3, img: "/images/artwork/kind-of-blue.jpg" },
      { name: "A LOVE SUPREME", artist: "John Coltrane", stock: 1, img: "/images/artwork/a-love-supreme.jpg" },
      { name: "HEAD HUNTERS", artist: "Herbie Hancock", stock: 5, img: "/images/artwork/head-hunters.jpg" },
      { name: "MINGUS AH UM", artist: "Charles Mingus", stock: 2, img: "/images/artwork/mingus-ah-um.jpg" },
      { name: "TIME OUT", artist: "Dave Brubeck", stock: 4, img: "/images/artwork/time-out.jpg" },
    ],
  },
  {
    id: "New Releases",
    items: [
      { name: "COWBOY CARTER", artist: "Beyoncé", stock: 2, img: "/images/artwork/cowboy-carter.jpg" },
      { name: "HIT ME HARD AND SOFT", artist: "Billie Eilish", stock: 4, img: "/images/artwork/hit-me-hard-and-soft.jpg" },
      { name: "THE TORTURED POETS DEPARTMENT", artist: "Taylor Swift", stock: 1, img: "/images/artwork/tortured-poets.jpg" },
      { name: "BRAT", artist: "Charli XCX", stock: 3, img: "/images/artwork/brat.jpg" },
      { name: "GNX", artist: "Kendrick Lamar", stock: 2, img: "/images/artwork/gnx.jpg" },
    ],
  },
  {
    id: "Best Sellers",
    items: [
      { name: "RUMOURS", artist: "Fleetwood Mac", stock: 6, img: "/images/artwork/rumours.jpg" },
      { name: "ABBEY ROAD", artist: "The Beatles", stock: 3, img: "/images/artwork/abbey-road.jpg" },
      { name: "BACK TO BLACK", artist: "Amy Winehouse", stock: 2, img: "/images/artwork/back-to-black.jpg" },
      { name: "THRILLER", artist: "Michael Jackson", stock: 4, img: "/images/artwork/thriller.jpg" },
      { name: "LEGEND", artist: "Bob Marley", stock: 5, img: "/images/artwork/legend.jpg" },
    ],
  },
  {
    id: "Rock",
    items: [
      { name: "DARK SIDE OF THE MOON", artist: "Pink Floyd", stock: 2, img: "/images/artwork/dark-side-of-the-moon.jpg" },
      { name: "LED ZEPPELIN IV", artist: "Led Zeppelin", stock: 3, img: "/images/artwork/led-zeppelin-iv.jpg" },
      { name: "NEVERMIND", artist: "Nirvana", stock: 1, img: "/images/artwork/nevermind.jpg" },
      { name: "THE JOSHUA TREE", artist: "U2", stock: 4, img: "/images/artwork/joshua-tree.jpg" },
      { name: "APPETITE FOR DESTRUCTION", artist: "Guns N' Roses", stock: 2, img: "/images/artwork/appetite-for-destruction.jpg" },
    ],
  },
  {
    id: "Electronic",
    items: [
      { name: "RANDOM ACCESS MEMORIES", artist: "Daft Punk", stock: 3, img: "/images/artwork/random-access-memories.jpg" },
      { name: "DISCOVERY", artist: "Daft Punk", stock: 2, img: "/images/artwork/discovery.jpg" },
      { name: "HOMEWORK", artist: "Daft Punk", stock: 4, img: "/images/artwork/homework.jpg" },
      { name: "CROSS", artist: "Justice", stock: 1, img: "/images/artwork/cross-justice.jpg" },
      { name: "MUSIC HAS THE RIGHT TO CHILDREN", artist: "Boards of Canada", stock: 2, img: "/images/artwork/music-has-the-right.jpg" },
    ],
  },
  {
    id: "Hip-Hop",
    items: [
      { name: "ILLMATIC", artist: "Nas", stock: 2, img: "/images/artwork/illmatic.jpg" },
      { name: "TO PIMP A BUTTERFLY", artist: "Kendrick Lamar", stock: 3, img: "/images/artwork/to-pimp-a-butterfly.jpg" },
      { name: "THE MISEDUCATION OF LAURYN HILL", artist: "Lauryn Hill", stock: 1, img: "/images/artwork/miseducation.jpg" },
      { name: "READY TO DIE", artist: "Notorious B.I.G.", stock: 4, img: "/images/artwork/ready-to-die.jpg" },
      { name: "MADVILLAINY", artist: "Madvillain", stock: 2, img: "/images/artwork/madvillainy.jpg" },
    ],
  },
  {
    id: "Indie",
    items: [
      { name: "IN THE AEROPLANE OVER THE SEA", artist: "Neutral Milk Hotel", stock: 3, img: "/images/artwork/aeroplane-over-the-sea.jpg" },
      { name: "IS THIS IT", artist: "The Strokes", stock: 5, img: "/images/artwork/is-this-it.jpg" },
      { name: "FUNERAL", artist: "Arcade Fire", stock: 2, img: "/images/artwork/funeral.jpg" },
      { name: "OK COMPUTER", artist: "Radiohead", stock: 1, img: "/images/artwork/ok-computer.jpg" },
      { name: "LOVELESS", artist: "My Bloody Valentine", stock: 2, img: "/images/artwork/loveless.jpg" },
    ],
  },
  {
    id: "Jazz",
    items: [
      { name: "BLUE TRAIN", artist: "John Coltrane", stock: 4, img: "/images/artwork/blue-train.jpg" },
      { name: "MAIDEN VOYAGE", artist: "Herbie Hancock", stock: 3, img: "/images/artwork/maiden-voyage.jpg" },
      { name: "MOANIN'", artist: "Art Blakey", stock: 2, img: "/images/artwork/moanin.jpg" },
      { name: "SAXOPHONE COLOSSUS", artist: "Sonny Rollins", stock: 1, img: "/images/artwork/saxophone-colossus.jpg" },
      { name: "SOMETHIN' ELSE", artist: "Cannonball Adderley", stock: 3, img: "/images/artwork/somethin-else.jpg" },
    ],
  },
  {
    id: "Country",
    items: [
      { name: "JOLENE", artist: "Dolly Parton", stock: 5, img: "/images/artwork/jolene.jpg" },
      { name: "AT FOLSOM PRISON", artist: "Johnny Cash", stock: 2, img: "/images/artwork/at-folsom-prison.jpg" },
      { name: "TRAVELLER", artist: "Chris Stapleton", stock: 3, img: "/images/artwork/traveller.jpg" },
      { name: "GOLDEN HOUR", artist: "Kacey Musgraves", stock: 4, img: "/images/artwork/golden-hour.jpg" },
      { name: "RED HEADED STRANGER", artist: "Willie Nelson", stock: 1, img: "/images/artwork/red-headed-stranger.jpg" },
    ],
  },
  {
    id: "Pop",
    items: [
      { name: "FUTURE NOSTALGIA", artist: "Dua Lipa", stock: 3, img: "/images/artwork/future-nostalgia.jpg" },
      { name: "AFTER HOURS", artist: "The Weeknd", stock: 2, img: "/images/artwork/after-hours.jpg" },
      { name: "1989", artist: "Taylor Swift", stock: 6, img: "/images/artwork/1989.jpg" },
      { name: "LEMONADE", artist: "Beyoncé", stock: 1, img: "/images/artwork/lemonade.jpg" },
      { name: "CHANNEL ORANGE", artist: "Frank Ocean", stock: 2, img: "/images/artwork/channel-orange.jpg" },
    ],
  },
  {
    id: "Funk",
    items: [
      { name: "MOTHERSHIP CONNECTION", artist: "Parliament", stock: 2, img: "/images/artwork/mothership-connection.jpg" },
      { name: "SUPERFLY", artist: "Curtis Mayfield", stock: 3, img: "/images/artwork/superfly.jpg" },
      { name: "MAGGOT BRAIN", artist: "Funkadelic", stock: 1, img: "/images/artwork/maggot-brain.jpg" },
      { name: "OFF THE WALL", artist: "Michael Jackson", stock: 4, img: "/images/artwork/off-the-wall.jpg" },
      { name: "INNERVISIONS", artist: "Stevie Wonder", stock: 3, img: "/images/artwork/innervisions.jpg" },
    ],
  },
];
const totalItems = vinylSections.reduce((sum, s) => sum + s.items.length, 0);

export default function VinylXL() {
  const [navVisible, setNavVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allVinylItems = vinylSections.flatMap((s) =>
    s.items.map((item) => ({ ...item, section: s.id }))
  );
  const searchResults = searchQuery.length > 0
    ? allVinylItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.section.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 15)
    : [];

  const visibleSections = selectedFilter === "All"
    ? vinylSections.filter((s) => s.id !== "Now Spinning")
    : vinylSections.filter((s) => s.id === selectedFilter && s.id !== "Now Spinning");

  const scrollToItem = (sectionId: string) => {
    setSelectedFilter("All");
    setSearchQuery("");
    setTimeout(() => {
      const sectionEl = document.getElementById(`section-${sectionId}`);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <>
      <DesktopNav onShow={() => setNavVisible(true)} size="xl" />
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
          width: 6px;
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

      {/* === BACKGROUND LAYER (stays vw) === */}
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
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
        <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
      </div>

      {/* Vinyl clip wrapper */}
      <div className="absolute inset-0 z-[5] pointer-events-none" style={{ clipPath: 'inset(0)' }}>
        <div className="absolute" style={{ left: '-420px', top: '210px', width: '840px', height: '980px' }}>
          <img src="/images/vinyl.svg" alt="" className="w-full h-full pointer-events-none vinyl-spin-cw" />
        </div>
        <div className="absolute" style={{ right: '-378px', top: '-140px', width: '840px', height: '980px' }}>
          <img src="/images/vinyl.svg" alt="" className="w-full h-full pointer-events-none vinyl-spin-ccw" />
        </div>
      </div>

      {/* === CONTENT LAYER (px values based on 1400px) === */}
      <div className="relative z-10 transition-all duration-300" style={{ paddingTop: navVisible ? '56px' : '0' }}>
        {/* We Buy Vinyl Banner (full width) */}
        <div
          className="bg-[#d9bc52] noisy flex items-center justify-center"
          style={{
            height: '63px',
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
              fontSize: '28px',
              letterSpacing: '0.1em',
              position: 'relative',
              zIndex: 2,
            }}
          >
            We Buy Vinyl!
          </span>
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Header - Back Button */}
          <header className="flex items-center" style={{ paddingTop: '28px', paddingBottom: '21px', paddingLeft: '42px' }}>
            <Link
              href="/"
              className="flex items-center text-white active:scale-105 duration-150 transition-all"
              style={{ gap: '7px' }}
            >
              <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '70px', height: '70px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span
                className="font-[family-name:var(--font-bebas-neue)]"
                style={{ fontSize: '60.2px', letterSpacing: '0.05em', marginLeft: '7px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
              >Back</span>
            </Link>
          </header>

          {/* Page Title */}
          <div className="flex flex-col items-center" style={{ marginTop: '-56px', marginBottom: '85.4px', paddingLeft: '336px', width: 'fit-content' }}>
            <h1
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '107.8px',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                paddingTop: '42px',
              }}
            >
              Vinyl
            </h1>
            <p
              className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
              style={{
                fontSize: '62.3px',
                fontWeight: 900,
                letterSpacing: '0.2em',
                marginTop: '0px',
                textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* Dropdown Bar */}
          <div className="relative flex justify-start" style={{ marginTop: '-56px', paddingLeft: '420px' }}>
            <div
              className="rounded-full relative"
              style={{ padding: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between rounded-full bg-[#2d1f1a] cursor-pointer"
                style={{ width: '378px', height: '63px', paddingLeft: '42px', paddingRight: '35px', gap: '21px' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                  style={{ fontSize: '25.2px' }}
                >
                  {selectedFilter}
                </span>
                <svg
                  className={`text-white transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  style={{ width: '21px', height: '21px' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="fixed inset-0 z-[55]"
                  onClick={() => setDropdownOpen(false)}
                />
              )}

              {dropdownOpen && (
                <div
                  className="absolute left-0 z-[60] rounded-xl overflow-hidden"
                  style={{
                    top: '100%',
                    marginTop: '11.2px',
                    minWidth: '100%',
                    padding: '5.6px',
                    background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                  }}
                >
                  <div className="rounded-lg overflow-y-auto white-scrollbar bg-[#2d1f1a]" style={{ maxHeight: '420px' }}>
                    {[
                      "All", "Now Spinning", "New Releases", "Best Sellers",
                      "Rock", "Electronic", "Hip-Hop", "Indie", "Jazz", "Country", "Pop", "Funk",
                    ].map((option, i) => {
                      const count = option === "All"
                        ? totalItems
                        : vinylSections.find((s) => s.id === option)?.items.length ?? 0;
                      return (
                        <button
                          key={option}
                          onClick={() => { setSelectedFilter(option); setDropdownOpen(false); }}
                          className="flex items-center justify-between w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                          style={{
                            fontSize: '22.4px',
                            padding: '16.8px 35px',
                            borderTop: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                          }}
                        >
                          <span>{option}</span>
                          <span className="text-white/70 font-[family-name:var(--font-inter)]" style={{ fontSize: '19.6px' }}>({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative z-50" style={{ paddingLeft: '420px', paddingRight: '140px', marginTop: '28px' }}>
            <div className="relative" style={{ width: '700px' }}>
              <div
                className="rounded-full"
                style={{ padding: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
              >
                <div className="flex items-center rounded-full bg-[#2d1f1a]" style={{ paddingLeft: '28px', paddingRight: '28px', height: '63px', gap: '14px' }}>
                  <svg
                    className="text-white/50"
                    style={{ width: '30.8px', height: '30.8px', flexShrink: 0 }}
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
                    style={{ fontSize: '28px' }}
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
                    marginTop: '11.2px',
                    padding: '5.6px',
                    background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                  }}
                >
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute flex items-center justify-center bg-red-600 rounded-full cursor-pointer active:scale-90 transition-transform"
                    style={{ width: '42px', height: '42px', top: '-14px', right: '-14px', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                  >
                    <svg className="text-white" style={{ width: '22.4px', height: '22.4px' }} fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                    <div className="overflow-y-scroll white-scrollbar-lg" style={{ maxHeight: '420px' }}>
                      {searchResults.map((item, i) => (
                        <div
                          key={`${item.name}-${i}`}
                          className="flex items-center font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors"
                          style={{ padding: '16.8px 28px', gap: '21px', borderTop: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
                          onClick={() => scrollToItem(item.section)}
                        >
                          <img src={item.img} alt={item.name} className="rounded object-cover" style={{ width: '90px', height: '90px', flexShrink: 0 }} />
                          <div style={{ minWidth: 0 }}>
                            <p className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis" style={{ fontSize: '38px' }}>
                              {item.name}
                            </p>
                            <p className="text-white/50 font-[family-name:var(--font-inter)]" style={{ fontSize: '31px' }}>
                              {item.artist}
                            </p>
                          </div>
                          <span
                            className="font-[family-name:var(--font-inter)] ml-auto"
                            style={{ fontSize: '29.6px', flexShrink: 0, color: item.stock <= 1 ? '#f06830' : 'rgba(255,255,255,0.5)' }}
                          >
                            {item.stock} in stock
                          </span>
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
              marginTop: '42px',
              marginLeft: '280px',
              padding: '28px 42px',
              borderRadius: '12px',
              background: 'rgba(20,14,10,0.92)',
              border: '1px solid rgba(217,188,82,0.4)',
              width: '980px',
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
                fontSize: '25.2px',
                lineHeight: '1.8',
                zIndex: 1,
              }}
            >
              <span
                className="font-bold"
                style={{
                  fontSize: '42px',
                  background: 'linear-gradient(to right, #f0c040, #ffe08a, #f0c040)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 10px rgba(251,191,36,0.7))',
                }}
              >
                Starting at $18
              </span>
              <br />
              <span className="text-white/80">
                Rare pressings, signed vinyl, and colored variants available.
              </span>
            </p>
          </div>

          {/* Now Spinning - Jazz */}
          {(selectedFilter === "All" || selectedFilter === "Now Spinning") && <div style={{ paddingLeft: '56px', paddingRight: '56px', marginTop: '56px' }}>
            <div
              className="rounded-xl"
              style={{ padding: '11.2px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            >
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                <div className="text-center" style={{ paddingTop: '33.6px', paddingBottom: '21px' }}>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '42px', letterSpacing: '0.15em' }}
                  >
                    Now Spinning
                  </span>
                  <div className="flex items-center justify-center" style={{ gap: '28px', marginTop: '14px' }}>
                    <div style={{ width: '70px', height: '7px', backgroundColor: 'white' }} />
                    <span
                      className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                      style={{ fontSize: '49px', letterSpacing: '0.15em', marginTop: '-7px' }}
                    >
                      Jazz
                    </span>
                    <div style={{ width: '70px', height: '7px', backgroundColor: 'white' }} />
                  </div>
                </div>

                <div
                  className="flex justify-center"
                  style={{ gap: '28px', paddingLeft: '28px', paddingRight: '28px', paddingBottom: '42px' }}
                >
                  {[
                    { name: "KIND OF BLUE", artist: "Miles Davis", stock: 3, img: "/images/artwork/kind-of-blue.jpg" },
                    { name: "A LOVE SUPREME", artist: "John Coltrane", stock: 1, img: "/images/artwork/a-love-supreme.jpg" },
                    { name: "HEAD HUNTERS", artist: "Herbie Hancock", stock: 5, img: "/images/artwork/head-hunters.jpg" },
                    { name: "MINGUS AH UM", artist: "Charles Mingus", stock: 2, img: "/images/artwork/mingus-ah-um.jpg" },
                    { name: "TIME OUT", artist: "Dave Brubeck", stock: 4, img: "/images/artwork/time-out.jpg" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-xl"
                      style={{
                        paddingTop: '7px',
                        paddingLeft: '7px',
                        paddingRight: '7px',
                        paddingBottom: '28px',
                        background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                      }}
                    >
                      <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                        <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div style={{ padding: '14px' }}>
                          <h4
                            className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                            style={{ fontSize: '33.6px' }}
                          >
                            {item.name}
                          </h4>
                          <p className="text-white/60 font-[family-name:var(--font-inter)]" style={{ fontSize: '21px', marginTop: '4.2px' }}>
                            {item.artist}
                          </p>
                          <p
                            className="font-[family-name:var(--font-inter)]"
                            style={{
                              fontSize: '28px',
                              marginTop: '7px',
                              color: item.stock <= 1 ? '#f06830' : 'rgba(255,255,255,0.5)',
                            }}
                          >
                            {item.stock} in stock
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>}

          {/* Vinyl Sections */}
          {visibleSections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} style={{ paddingLeft: '56px', paddingRight: '56px', marginTop: '56px' }}>
              <div
                className="rounded-xl"
                style={{ padding: '11.2px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
              >
                <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                  <div className="text-center" style={{ paddingTop: '33.6px', paddingBottom: '21px' }}>
                    <span
                      className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                      style={{ fontSize: '42px', letterSpacing: '0.15em' }}
                    >
                      {section.id}
                    </span>
                  </div>

                  <div
                    className="flex justify-center"
                    style={{ gap: '28px', paddingLeft: '28px', paddingRight: '28px', paddingBottom: '42px' }}
                  >
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-xl"
                        style={{
                          width: '218.4px',
                          flexShrink: 0,
                          paddingTop: '7px',
                          paddingLeft: '7px',
                          paddingRight: '7px',
                          paddingBottom: '28px',
                          background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                        }}
                      >
                        <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                          <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div style={{ padding: '14px' }}>
                            <h4
                              className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                              style={{ fontSize: '33.6px' }}
                            >
                              {item.name}
                            </h4>
                            <p className="text-white/60 font-[family-name:var(--font-inter)]" style={{ fontSize: '21px', marginTop: '4.2px' }}>
                              {item.artist}
                            </p>
                            <p
                              className="font-[family-name:var(--font-inter)]"
                              style={{
                                fontSize: '28px',
                                marginTop: '7px',
                                color: item.stock <= 1 ? '#f06830' : 'rgba(255,255,255,0.5)',
                              }}
                            >
                              {item.stock} in stock
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom spacing */}
          <div style={{ height: '56px' }} />
        </div>

        <DesktopFooterXL />
      </div>

    </div>
    </>
  );
}
