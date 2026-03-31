"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

// All vw values converted from px based on 393px width
// Formula: px ÷ 393 × 100 = vw

const vinylSections = [
  {
    id: "Now Spinning",
    subtitle: "Jazz",
    items: [
      { name: "KIND OF BLUE", artist: "Miles Davis", price: "$29.99", img: "/images/artwork/kind-of-blue.jpg" },
      { name: "A LOVE SUPREME", artist: "John Coltrane", price: "$34.99", img: "/images/artwork/a-love-supreme.jpg" },
      { name: "HEAD HUNTERS", artist: "Herbie Hancock", price: "$27.99", img: "/images/artwork/head-hunters.jpg" },
      { name: "MINGUS AH UM", artist: "Charles Mingus", price: "$31.99", img: "/images/artwork/mingus-ah-um.jpg" },
      { name: "TIME OUT", artist: "Dave Brubeck", price: "$28.99", img: "/images/artwork/time-out.jpg" },
    ],
  },
  {
    id: "New Releases",
    items: [
      { name: "COWBOY CARTER", artist: "Beyoncé", price: "$36.99", img: "/images/artwork/cowboy-carter.jpg" },
      { name: "HIT ME HARD AND SOFT", artist: "Billie Eilish", price: "$34.99", img: "/images/artwork/hit-me-hard-and-soft.jpg" },
      { name: "THE TORTURED POETS DEPARTMENT", artist: "Taylor Swift", price: "$38.99", img: "/images/artwork/tortured-poets.jpg" },
      { name: "BRAT", artist: "Charli XCX", price: "$29.99", img: "/images/artwork/brat.jpg" },
      { name: "GNX", artist: "Kendrick Lamar", price: "$33.99", img: "/images/artwork/gnx.jpg" },
    ],
  },
  {
    id: "Best Sellers",
    items: [
      { name: "RUMOURS", artist: "Fleetwood Mac", price: "$32.99", img: "/images/artwork/rumours.jpg" },
      { name: "ABBEY ROAD", artist: "The Beatles", price: "$34.99", img: "/images/artwork/abbey-road.jpg" },
      { name: "BACK TO BLACK", artist: "Amy Winehouse", price: "$31.99", img: "/images/artwork/back-to-black.jpg" },
      { name: "THRILLER", artist: "Michael Jackson", price: "$27.99", img: "/images/artwork/thriller.jpg" },
      { name: "LEGEND", artist: "Bob Marley", price: "$26.99", img: "/images/artwork/legend.jpg" },
    ],
  },
  {
    id: "Rock",
    items: [
      { name: "DARK SIDE OF THE MOON", artist: "Pink Floyd", price: "$29.99", img: "/images/artwork/dark-side-of-the-moon.jpg" },
      { name: "LED ZEPPELIN IV", artist: "Led Zeppelin", price: "$31.99", img: "/images/artwork/led-zeppelin-iv.jpg" },
      { name: "NEVERMIND", artist: "Nirvana", price: "$28.99", img: "/images/artwork/nevermind.jpg" },
      { name: "THE JOSHUA TREE", artist: "U2", price: "$27.99", img: "/images/artwork/joshua-tree.jpg" },
      { name: "APPETITE FOR DESTRUCTION", artist: "Guns N' Roses", price: "$30.99", img: "/images/artwork/appetite-for-destruction.jpg" },
    ],
  },
  {
    id: "Electronic",
    items: [
      { name: "RANDOM ACCESS MEMORIES", artist: "Daft Punk", price: "$39.99", img: "/images/artwork/random-access-memories.jpg" },
      { name: "DISCOVERY", artist: "Daft Punk", price: "$34.99", img: "/images/artwork/discovery.jpg" },
      { name: "HOMEWORK", artist: "Daft Punk", price: "$29.99", img: "/images/artwork/homework.jpg" },
      { name: "CROSS", artist: "Justice", price: "$31.99", img: "/images/artwork/cross-justice.jpg" },
      { name: "MUSIC HAS THE RIGHT TO CHILDREN", artist: "Boards of Canada", price: "$36.99", img: "/images/artwork/music-has-the-right.jpg" },
    ],
  },
  {
    id: "Hip-Hop",
    items: [
      { name: "ILLMATIC", artist: "Nas", price: "$29.99", img: "/images/artwork/illmatic.jpg" },
      { name: "TO PIMP A BUTTERFLY", artist: "Kendrick Lamar", price: "$34.99", img: "/images/artwork/to-pimp-a-butterfly.jpg" },
      { name: "THE MISEDUCATION OF LAURYN HILL", artist: "Lauryn Hill", price: "$32.99", img: "/images/artwork/miseducation.jpg" },
      { name: "READY TO DIE", artist: "Notorious B.I.G.", price: "$31.99", img: "/images/artwork/ready-to-die.jpg" },
      { name: "MADVILLAINY", artist: "Madvillain", price: "$36.99", img: "/images/artwork/madvillainy.jpg" },
    ],
  },
  {
    id: "Indie",
    items: [
      { name: "IN THE AEROPLANE OVER THE SEA", artist: "Neutral Milk Hotel", price: "$28.99", img: "/images/artwork/aeroplane-over-the-sea.jpg" },
      { name: "IS THIS IT", artist: "The Strokes", price: "$27.99", img: "/images/artwork/is-this-it.jpg" },
      { name: "FUNERAL", artist: "Arcade Fire", price: "$31.99", img: "/images/artwork/funeral.jpg" },
      { name: "OK COMPUTER", artist: "Radiohead", price: "$33.99", img: "/images/artwork/ok-computer.jpg" },
      { name: "LOVELESS", artist: "My Bloody Valentine", price: "$39.99", img: "/images/artwork/loveless.jpg" },
    ],
  },
  {
    id: "Jazz",
    items: [
      { name: "BLUE TRAIN", artist: "John Coltrane", price: "$29.99", img: "/images/artwork/blue-train.jpg" },
      { name: "MAIDEN VOYAGE", artist: "Herbie Hancock", price: "$28.99", img: "/images/artwork/maiden-voyage.jpg" },
      { name: "MOANIN'", artist: "Art Blakey", price: "$27.99", img: "/images/artwork/moanin.jpg" },
      { name: "SAXOPHONE COLOSSUS", artist: "Sonny Rollins", price: "$31.99", img: "/images/artwork/saxophone-colossus.jpg" },
      { name: "SOMETHIN' ELSE", artist: "Cannonball Adderley", price: "$30.99", img: "/images/artwork/somethin-else.jpg" },
    ],
  },
  {
    id: "Country",
    items: [
      { name: "JOLENE", artist: "Dolly Parton", price: "$26.99", img: "/images/artwork/jolene.jpg" },
      { name: "AT FOLSOM PRISON", artist: "Johnny Cash", price: "$29.99", img: "/images/artwork/at-folsom-prison.jpg" },
      { name: "TRAVELLER", artist: "Chris Stapleton", price: "$31.99", img: "/images/artwork/traveller.jpg" },
      { name: "GOLDEN HOUR", artist: "Kacey Musgraves", price: "$28.99", img: "/images/artwork/golden-hour.jpg" },
      { name: "RED HEADED STRANGER", artist: "Willie Nelson", price: "$27.99", img: "/images/artwork/red-headed-stranger.jpg" },
    ],
  },
  {
    id: "Pop",
    items: [
      { name: "FUTURE NOSTALGIA", artist: "Dua Lipa", price: "$29.99", img: "/images/artwork/future-nostalgia.jpg" },
      { name: "AFTER HOURS", artist: "The Weeknd", price: "$32.99", img: "/images/artwork/after-hours.jpg" },
      { name: "1989", artist: "Taylor Swift", price: "$28.99", img: "/images/artwork/1989.jpg" },
      { name: "LEMONADE", artist: "Beyoncé", price: "$34.99", img: "/images/artwork/lemonade.jpg" },
      { name: "CHANNEL ORANGE", artist: "Frank Ocean", price: "$39.99", img: "/images/artwork/channel-orange.jpg" },
    ],
  },
  {
    id: "Funk",
    items: [
      { name: "MOTHERSHIP CONNECTION", artist: "Parliament", price: "$31.99", img: "/images/artwork/mothership-connection.jpg" },
      { name: "SUPERFLY", artist: "Curtis Mayfield", price: "$28.99", img: "/images/artwork/superfly.jpg" },
      { name: "MAGGOT BRAIN", artist: "Funkadelic", price: "$33.99", img: "/images/artwork/maggot-brain.jpg" },
      { name: "OFF THE WALL", artist: "Michael Jackson", price: "$27.99", img: "/images/artwork/off-the-wall.jpg" },
      { name: "INNERVISIONS", artist: "Stevie Wonder", price: "$30.99", img: "/images/artwork/innervisions.jpg" },
    ],
  },
];

export default function VinylPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const touchStartY = React.useRef<number | null>(null);

  // Flatten all vinyl items for search
  const allVinylItems = vinylSections.flatMap((s) =>
    s.items.map((item) => ({ ...item, section: s.id }))
  );
  const searchResults = searchQuery.length > 0
    ? allVinylItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const visibleSections = selectedFilter === "All"
    ? vinylSections
    : vinylSections.filter((s) => s.id === selectedFilter);

  const scrollToItem = useCallback((sectionId: string, itemIndex: number) => {
    // Show all sections so the target is visible
    setSelectedFilter("All");
    setSearchQuery("");
    (document.activeElement as HTMLElement)?.blur();

    // Wait for re-render then scroll
    setTimeout(() => {
      const sectionEl = document.getElementById(`section-${sectionId}`);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth", block: "center" });

        // Scroll the horizontal list to the card
        setTimeout(() => {
          const cardEl = document.getElementById(`card-${sectionId}-${itemIndex}`);
          if (cardEl && cardEl.parentElement) {
            const container = cardEl.parentElement;
            const scrollLeft = cardEl.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (cardEl.clientWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: "smooth" });
          }
        }, 400);
      }
    }, 100);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
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

    <div className={`relative overflow-hidden ${visibleSections.length <= 1 ? 'min-h-screen' : ''}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {selectedFilter === "All" ? (
          <>
            {/* Panel 1 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 2 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background_v2.png')" }}
            />
            {/* Panel 3 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background_3.png')" }}
            />
            {/* Panel 4 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 5 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')" }}
            />
            {/* Panel 6 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 7 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }}
            />
            {/* Panel 8 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 7 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }}
            />
            {/* Panel 7 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
          </>
        ) : (
          <>
            {/* Panel 1 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 2 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background_2.png')", marginTop: "-15vw", }}
            />
            {/* Panel 3 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background_2.png')", transform: "scaleY(-1)",}}
            />
            {/* Panel 4 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background_2.png')", }}
            />
          </>
        )}
      </div>

      {/* Vinyl clip wrapper - prevents horizontal overflow without affecting vertical scroll */}
      <div className="absolute inset-0 z-[5] pointer-events-none" style={{ clipPath: 'inset(0)' }}>
      <div className="absolute" style={{ right: '-58vw', top: '-8vw', width: '120vw', height: '120vw' }}>
        <img
          src="/images/vinyl.svg"
          alt=""
          className="w-full h-full pointer-events-none vinyl-spin"
        />
      </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* We Buy Vinyl Banner */}
        <div
          className="bg-[#d9bc52] noisy flex items-center justify-center"
          style={{
            height: '10vw',
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
              fontSize: '4vw',
              letterSpacing: '0.1em',
              position: 'relative',
              zIndex: 2,
            }}
          >
            We Buy Vinyl!
          </span>
        </div>

        {/* Header - Back Button */}
        <header className="flex items-center justify-between" style={{ paddingTop: '6.1vw', paddingBottom: '4.1vw', paddingLeft: '5.1vw', paddingRight: '5.1vw' }}>
          <Link
            href="/"
            className="flex items-center text-white active:scale-125 duration-150 transition-all"
            style={{ gap: '1.5vw', transform: 'translateY(2.5vw) scale(1.1)' }}
          >
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '7.1vw', height: '7.1vw' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span
              className="font-[family-name:var(--font-bebas-neue)]"
              style={{ fontSize: '6.1vw', letterSpacing: '0.05em', marginLeft: '2vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
            >Back</span>
          </Link>
          <div style={{ width: '16.3vw' }} />
        </header>

        {/* Page Title */}
        <div className="flex flex-col" style={{ marginTop: '2vw', marginBottom: '6.1vw' }}>
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

        {/* Dropdown Bar */}
        <div className="relative flex justify-start" style={{ marginTop: '2vw', paddingLeft: '10vw' }}>
          <div
            className="rounded-full relative"
            style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between rounded-full bg-[#2d1f1a] cursor-pointer"
              style={{ width: '50vw', paddingLeft: '6vw', paddingRight: '5vw', paddingTop: '2.5vw', paddingBottom: '2.5vw', gap: '3vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                style={{ fontSize: '4vw' }}
              >
                {selectedFilter}
              </span>
              <svg
                className={`text-white transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                style={{ width: '3.5vw', height: '3.5vw' }}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute left-0 z-[60] rounded-xl overflow-hidden"
                style={{
                  top: '100%',
                  marginTop: '1.5vw',
                  minWidth: '100%',
                  padding: '0.8vw',
                  background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                }}
              >
                <div className="rounded-lg overflow-y-auto bg-[#2d1f1a]" style={{ maxHeight: '60vw' }}>
                  {[
                    "All",
                    "Now Spinning",
                    "New Releases",
                    "Best Sellers",
                    "Rock",
                    "Electronic",
                    "Hip-Hop",
                    "Indie",
                    "Jazz",
                    "Country",
                    "Pop",
                    "Funk",
                  ].map((option, i) => {
                    const count = option === "All"
                      ? allVinylItems.length
                      : vinylSections.find((s) => s.id === option)?.items.length ?? 0;
                    return (
                    <button
                      key={option}
                      onClick={() => { setSelectedFilter(option); setDropdownOpen(false); }}
                      className="flex items-center justify-between w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                      style={{
                        fontSize: '3.8vw',
                        padding: '3vw 5vw',
                        borderTop: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      }}
                    >
                      <span>{option}</span>
                      <span className="text-white/70 font-[family-name:var(--font-inter)]" style={{ fontSize: '3.6vw' }}>({count})</span>
                    </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative z-50" style={{ paddingLeft: '10vw', paddingRight: '10vw', marginTop: '4vw' }}>
          <div
            className="rounded-full relative z-50"
            style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <div className="flex items-center rounded-full bg-[#2d1f1a]" style={{ paddingLeft: '4vw', paddingRight: '4vw', paddingTop: '2.5vw', paddingBottom: '2.5vw', gap: '2vw' }}>
              <svg
                className="text-white/50"
                style={{ width: '4vw', height: '4vw', flexShrink: 0 }}
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
                onFocus={() => setSearchFocused(true)}
                className="bg-transparent text-white font-[family-name:var(--font-libre-baskerville)] outline-none w-full placeholder-white/40"
                style={{ fontSize: '16px' }}
              />
            </div>
          </div>

          {/* Click-outside overlay to dismiss search */}
          {searchQuery.length > 0 && searchResults.length > 0 && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => {
                (document.activeElement as HTMLElement)?.blur();
              }}
              onTouchStart={(e) => { touchStartY.current = e.touches[0].clientY; }}
              onTouchMove={(e) => {
                if (touchStartY.current !== null && e.touches[0].clientY - touchStartY.current > 30) {
                  (document.activeElement as HTMLElement)?.blur();
                  touchStartY.current = null;
                }
              }}
            />
          )}

          {/* Search Results Dropdown */}
          {searchQuery.length > 0 && searchResults.length > 0 && (
            <div
              className="absolute left-0 right-0 z-50 rounded-xl"
              style={{
                marginTop: '1.5vw',
                marginLeft: '10vw',
                marginRight: '10vw',
                padding: '0.8vw',
                background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
              }}
            >
              {/* Close button - floats on top-right corner */}
              <button
                onClick={() => setSearchQuery("")}
                className="absolute flex items-center justify-center bg-red-600 rounded-full cursor-pointer active:scale-90 transition-transform"
                style={{
                  width: '6vw',
                  height: '6vw',
                  top: '-2vw',
                  right: '-2vw',
                  zIndex: 10,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                <svg
                  className="text-white"
                  style={{ width: '3.2vw', height: '3.2vw' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
              <div className="overflow-y-auto" style={{ maxHeight: '60vw' }}>
                {searchResults.map((item, i) => {
                  // Find the index of this item within its section
                  const section = vinylSections.find((s) => s.id === item.section);
                  const itemIndex = section?.items.findIndex((si) => si.name === item.name && si.artist === item.artist) ?? 0;
                  return (
                  <div
                    key={`${item.name}-${i}`}
                    className="flex items-center font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors"
                    style={{
                      padding: '3vw 4vw',
                      gap: '3vw',
                      borderTop: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    }}
                    onClick={() => scrollToItem(item.section, itemIndex)}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded object-cover"
                      style={{ width: '12vw', height: '12vw', flexShrink: 0 }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <p
                        className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                        style={{ fontSize: '4.7vw' }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-white/50 font-[family-name:var(--font-inter)]"
                        style={{ fontSize: '4vw' }}
                      >
                        {item.artist}
                      </p>
                    </div>
                    <span
                      className="font-[family-name:var(--font-bebas-neue)] text-white/70 ml-auto"
                      style={{ fontSize: '5vw', flexShrink: 0 }}
                    >
                      {item.price}
                    </span>
                  </div>
                  );
                })}
              </div>
              </div>
            </div>
          )}
        </div>

        {/* Vinyl Sections */}
        {visibleSections.map((section) => (
          <div key={section.id} id={`section-${section.id}`} style={{ paddingLeft: '4vw', paddingRight: '4vw', marginTop: '6vw' }}>
            <div
              className="rounded-xl"
              style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            >
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                {/* Title */}
                <div className="text-center" style={{ paddingTop: '4vw', paddingBottom: '4vw' }}>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
                  >
                    {section.id}
                  </span>
                  {/* Jazz subtitle - only for Now Spinning */}
                  {section.subtitle && (
                    <div className="flex items-center justify-center" style={{ gap: '3vw', marginTop: '1.5vw' }}>
                      <div style={{ width: '8vw', height: '0.7vw', backgroundColor: 'white' }} />
                      <span
                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                        style={{ fontSize: '6vw', letterSpacing: '0.15em', marginTop: '1vw' }}
                      >
                        {section.subtitle}
                      </span>
                      <div style={{ width: '8vw', height: '0.7vw', backgroundColor: 'white' }} />
                    </div>
                  )}
                </div>

                {/* Horizontal Scrolling Cards */}
                <div
                  className="flex overflow-x-auto"
                  style={{ gap: '4vw', paddingLeft: '3vw', paddingRight: '3vw', paddingBottom: '4vw' }}
                >
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      id={`card-${section.id}-${index}`}
                      className="flex-shrink-0 rounded-xl"
                      style={{
                        width: '40.7vw',
                        paddingTop: '1.2vw',
                        paddingLeft: '1.2vw',
                        paddingRight: '1.2vw',
                        paddingBottom: '6.5vw',
                        background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                      }}
                    >
                      <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                        {/* Album Art */}
                        <div
                          className="bg-[#1a1310] overflow-hidden"
                          style={{ width: '100%', height: '40.7vw' }}
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Info */}
                        <div style={{ padding: '3vw' }}>
                          <h4
                            className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                            style={{ fontSize: '4.6vw' }}
                          >
                            {item.name}
                          </h4>
                          <p
                            className="text-white/60 font-[family-name:var(--font-inter)]"
                            style={{ fontSize: '3.6vw', marginTop: '1vw' }}
                          >
                            {item.artist}
                          </p>
                          <p
                            className="font-[family-name:var(--font-bebas-neue)] text-white"
                            style={{ fontSize: '5.1vw', marginTop: '2vw' }}
                          >
                            {item.price}
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

        {/* Bottom spacing - peek of background below last section */}
        <div style={{ height: '6vw' }} />

        <Footer />

      </div>
    </div>
    </>
  );
}
