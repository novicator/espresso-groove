"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

type FilterType = "All" | "The Drip" | "Espresso/Coffee" | "Tea/Matcha" | "Energy/Boba" | "Bakery";

// All vw values converted from px based on 393px width
// Formula: px ÷ 393 × 100 = vw

const coffeeItems = [
  { name: "HOUSE BLEND", desc: "Rich, smooth, everyday classic" },
  { name: "ESPRESSO", desc: "Bold and concentrated" },
  { name: "CAPPUCCINO", desc: "Espresso with steamed milk foam" },
  { name: "AMERICANO", desc: "Espresso with hot water, smooth finish" },
  { name: "FLAT WHITE", desc: "Velvety microfoam over double espresso" },
];

const teaItems = [
  { name: "CHAI LATTE", desc: "Spiced chai with steamed milk" },
  { name: "GREEN TEA", desc: "Classic organic green tea" },
  { name: "EARL GREY", desc: "Bergamot-infused black tea" },
  { name: "MATCHA LATTE", desc: "Ceremonial grade matcha with oat milk" },
  { name: "JASMINE PEARL", desc: "Delicate hand-rolled jasmine green tea" },
];

const energyItems = [
  { name: "BASS DROP", desc: "Citrus blast with a caffeine kick" },
  { name: "VINYL RUSH", desc: "Berry mix with B12 & taurine" },
  { name: "GROOVE FUEL", desc: "Tropical mango with green tea extract" },
  { name: "NEON PULSE", desc: "Watermelon lime with ginseng boost" },
  { name: "STATIC SHOCK", desc: "Passion fruit with guarana & electrolytes" },
];

const bakeryItems = [
  { name: "CROISSANT", desc: "Buttery, flaky, classic French pastry" },
  { name: "BLUEBERRY MUFFIN", desc: "Fresh blueberries in a soft crumb" },
  { name: "BANANA BREAD", desc: "Moist, warm, homestyle slice" },
  { name: "CINNAMON ROLL", desc: "Glazed swirl of cinnamon and sugar" },
  { name: "SCONE", desc: "Crumbly, buttery, pairs with any drink" },
];

export default function MenuMobile() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Count visible items to determine layout
  const visibleCount =
    (activeFilter === "All" || activeFilter === "Espresso/Coffee" ? coffeeItems.length : 0) +
    (activeFilter === "All" || activeFilter === "Tea/Matcha" ? teaItems.length : 0) +
    (activeFilter === "All" || activeFilter === "Energy/Boba" ? energyItems.length : 0);

  const fewItems = visibleCount < 4;

  return (
    <>
      <MobileNav />
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

    <div className={`relative overflow-hidden ${fewItems ? 'min-h-screen' : ''}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {activeFilter === "All" ? (
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
              style={{ backgroundImage: "url('/images/new_background_v2.png')", transform: "scaleY(1)", }}
            />
            {/* Panel 4 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 5 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }}
            />
            {/* Panel 6 */}
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
              style={{
                backgroundImage: "url('/images/menu_background_full.png')",
                marginTop: '-0vw',
                transform: 'scaleY(1)'
              }}
            />
            {/* Panel 2 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/vibe_background.png')",
                transform: 'scaleY(-1)',

              }}
            />
            {/* Panel 3 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/vibe_background.png')",
                transform: 'scaleY(1)',

              }}
            />
            
          </>
        )}
      </div>

      {/* Content Layer */}
      <div className="relative z-10" style={{  }}>
        {/* Page Title */}
        {/* mt-2=8px=2vw, mb-6=24px=6.1vw */}
        <div className="text-center" style={{ marginTop: '14vw', marginBottom: '6.1vw', }}>
          {/* gap-3=12px=3.1vw */}
          <div className="flex items-center justify-center" style={{ gap: '3.1vw' }}>
            {/* w-18=72px=18.3vw, translateY(15px)=3.8vw, translateX(5px)=1.3vw, scale(1.2) kept */}
            <img
              src="/images/mug.svg"
              alt=""
              className="pointer-events-none"
              style={{
                width: '18.3vw',
                transform: 'translateY(3.8vw) translateX(-13vw) scale(1.2)',
                filter: 'drop-shadow(0px 0px 10px rgba(255,150,50,0.5))',
              }}
            />
            {/* text-[44px]=11.2vw, translateX(5px)=1.3vw */}
            <h1
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '10.7vw',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                paddingLeft: '1.2vw',
              }}
            >
              Menu
            </h1>
          </div>
          {/* text-[28px]=7.1vw, -mt-3=12px=3.1vw, translateY(-3px)=0.8vw, ml-20=80px=20.4vw, translateX(5px)=1.3vw */}
          <p
            className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
            style={{
              fontSize: '6.2vw',
              fontWeight: 900,
              letterSpacing: '0.2em',
              marginTop: '-3.1vw',
              paddingLeft: '5vw',
              marginLeft: '20.4vw',
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            }}
          >
            Drip • Drop • Vibe
          </p>
        </div>

        {/* Dropdown */}
        <div className="relative flex justify-start" style={{ marginBottom: '6.1vw', paddingLeft: '10vw' }}>
          <div
            className="rounded-full relative"
            style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between rounded-full bg-[#2d1f1a] cursor-pointer"
              style={{ width: '78vw', paddingLeft: '6vw', paddingRight: '5vw', paddingTop: '2.5vw', paddingBottom: '2.5vw', gap: '3vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                style={{ fontSize: '4vw' }}
              >
                {activeFilter}
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
                <div className="rounded-lg overflow-y-auto bg-[#2d1f1a]" style={{ maxHeight: '80vw' }}>
                  {/* All */}
                  <button
                    onClick={() => { setActiveFilter("All"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: '3.8vw', padding: '3vw 5vw' }}
                  >
                    All
                  </button>

                  {/* Limited Press Gold Banner + The Drip */}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div
                      onClick={() => { setActiveFilter("The Drip"); setDropdownOpen(false); }}
                      className="bg-[#d9bc52] noisy flex flex-col items-center justify-center cursor-pointer"
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        paddingBlock: '0.5vw',
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
                        style={{ fontSize: '3vw', letterSpacing: '0.1em', position: 'relative', zIndex: 2 }}
                      >
                        Limited Press
                      </span>
                      <span
                        className="font-[family-name:var(--font-inter)] text-black/70"
                        style={{ fontSize: '2.8vw', position: 'relative', zIndex: 2 }}
                      >
                        In rotation for a limited time
                      </span>
                    </div>
                    <button
                      onClick={() => { setActiveFilter("The Drip"); setDropdownOpen(false); }}
                      className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                      style={{ fontSize: '3.8vw', padding: '3vw 5vw' }}
                    >
                      The Drip
                    </button>
                  </div>

                  {/* Espresso/Coffee */}
                  <button
                    onClick={() => { setActiveFilter("Espresso/Coffee"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: '3.8vw', padding: '3vw 5vw', borderTop: '1px solid #d9bc52' }}
                  >
                    Espresso/Coffee
                  </button>

                  {/* Tea/Matcha */}
                  <button
                    onClick={() => { setActiveFilter("Tea/Matcha"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: '3.8vw', padding: '3vw 5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    Tea/Matcha
                  </button>

                  {/* Energy/Boba */}
                  <button
                    onClick={() => { setActiveFilter("Energy/Boba"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: '3.8vw', padding: '3vw 5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    Energy/Boba
                  </button>

                  {/* Bakery */}
                  <button
                    onClick={() => { setActiveFilter("Bakery"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: '3.8vw', padding: '3vw 5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    Bakery
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* The Drip Section - on "All" or "The Drip" */}
        {(activeFilter === "All" || activeFilter === "The Drip") && (
        <div
          className="rounded-xl"
          style={{ marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
        >
        <div
          className="rounded-lg overflow-hidden bg-[#2d1f1a]"
        >
          {/* Limited Press Banner */}
          <div
            className="bg-[#d9bc52] noisy flex flex-col items-center justify-center"
            style={{
              position: 'relative',
              overflow: 'hidden',
              paddingBlock: '1.5vw',
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
              style={{ fontSize: '4.5vw', letterSpacing: '0.1em', position: 'relative', zIndex: 2 }}
            >
              Limited Press
            </span>
            <span
              className="font-[family-name:var(--font-inter)] text-black/70"
              style={{ fontSize: '3.8vw', position: 'relative', zIndex: 2 }}
            >
              In rotation for a limited time
            </span>
          </div>

          {/* Title */}
          <div
            className="text-center"
            style={{ paddingBlock: '3vw' }}
          >
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
              style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
            >
              The Drip
            </span>
            <div>
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white italic"
                style={{ fontSize: '5vw' }}
              >
                What&apos;s in your cup?
              </span>
            </div>
            <div className="mx-auto" style={{ height: '0.4vw', width: '60%', marginTop: '2vw', marginBottom: '2vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
            <div>
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-center text-white uppercase font-bold"
                style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
              >
                Now Spinning
              </span>
            </div>
            <div className="flex items-center justify-center" style={{ gap: '3vw', marginTop: '1.5vw' }}>
              <div style={{ width: '4vw', height: '0.6vw', backgroundColor: 'white' }} />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
              >
                60<span className="lowercase">s</span> Revolution
              </span>
              <div style={{ width: '4vw', height: '0.6vw', backgroundColor: 'white' }} />
            </div>
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

        </div>
        </div>
        )}

        {/* Menu Sections - All attached in one card */}
        <div style={{ paddingInline: '4vw', paddingBottom: '8vw', marginTop: '4vw' }}>
          <div
            className="rounded-xl"
            style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">

            {/* Espresso/Coffee Section */}
            {(activeFilter === "All" || activeFilter === "Espresso/Coffee") && (
            <>
              <div className="bg-[#f06830] noisy" style={{ padding: '2.5vw 4vw' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '4.6vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Espresso/Coffee
                </p>
              </div>
              {coffeeItems.map((item, index) => (
                <div key={`coffee-${index}`}>
                  {index > 0 && <div style={{ height: '0.3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                  <div className="flex" style={{ padding: '3vw 4vw', gap: '3vw' }}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between" style={{ gap: '2vw' }}>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                          style={{ fontSize: '5.7vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                      </div>
                      <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '3.7vw', marginTop: '0.5vw' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
            )}



            {/* Tea/Matcha Section */}
            {(activeFilter === "All" || activeFilter === "Tea/Matcha") && (
            <>
              <div className="bg-[#2a7d7d] noisy" style={{ padding: '2.5vw 4vw' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '4.6vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Tea/Matcha
                </p>
              </div>
              {teaItems.map((item, index) => (
                <div key={`tea-${index}`}>
                  {index > 0 && <div style={{ height: '0.3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                  <div className="flex" style={{ padding: '3vw 4vw', gap: '3vw' }}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between" style={{ gap: '2vw' }}>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                          style={{ fontSize: '5.7vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                      </div>
                      <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '3.7vw', marginTop: '0.5vw' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
            )}



            {/* Energy/Boba Section */}
            {(activeFilter === "All" || activeFilter === "Energy/Boba") && (
            <>
              <div className="bg-[#6b4c8c] noisy" style={{ padding: '2.5vw 4vw' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '4.6vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Energy/Boba
                </p>
              </div>
              {energyItems.map((item, index) => (
                <div key={`energy-${index}`}>
                  {index > 0 && <div style={{ height: '0.3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                  <div className="flex" style={{ padding: '3vw 4vw', gap: '3vw' }}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between" style={{ gap: '2vw' }}>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                          style={{ fontSize: '5.7vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                      </div>
                      <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '3.7vw', marginTop: '0.5vw' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
            )}

            {/* Bakery Section */}
            {(activeFilter === "All" || activeFilter === "Bakery") && (
            <>
              <div className="bg-[#6F4E37] noisy" style={{ padding: '2.5vw 4vw' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '4.6vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Bakery
                </p>
              </div>
              {bakeryItems.map((item, index) => (
                <div key={`bakery-${index}`}>
                  {index > 0 && <div style={{ height: '0.3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                  <div className="flex" style={{ padding: '3vw 4vw', gap: '3vw' }}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between" style={{ gap: '2vw' }}>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                          style={{ fontSize: '5.7vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                      </div>
                      <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '3.7vw', marginTop: '0.5vw' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
            )}

          </div>
          </div>
        </div>

        <Footer style={{ marginTop: '-10vw' }} />

      </div>
    </div>
    </>
  );
}
