"use client";

import { useState } from "react";
import Link from "next/link";
import TabletFooter from "../components/TabletFooter";
import TabletNav from "../components/TabletNav";

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

export default function MenuTablet() {
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
      <TabletNav />
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
              className="h-screen bg-[length:100%_100%]"
              style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 2 */}
            <div
              className="h-screen bg-[length:100%_100%]"
              style={{ backgroundImage: "url('/images/background_v2.png')" }}
            />
            {/* Panel 3 */}
            <div
              className="h-screen bg-[length:100%_100%]"
              style={{ backgroundImage: "url('/images/new_background_v2.png')", transform: "scaleY(1)", }}
            />
            {/* Panel 4 */}
            <div
              className="h-screen bg-[length:100%_100%]"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 5 */}
            <div
              className="h-screen bg-[length:100%_100%]"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }}
            />
            {/* Panel 6 */}
            <div
              className="h-screen bg-[length:100%_100%]"
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
      <div className="relative z-20" style={{ ['--w' as string]: 'min(100vw, 700px)', maxWidth: 'var(--w)', margin: '0 auto'  } as React.CSSProperties}>
        {/* Mug — anchored to content layer's center so it tracks the title */}
        <img
          src="/images/mug.svg"
          alt=""
          className="pointer-events-none"
          style={{
            position: 'absolute',
            zIndex: 10,
            width: '90.802px',
            left: 'calc(50% - 215px)',
            top: '0px',
            filter: 'drop-shadow(0px 0px 10px rgba(255,150,50,0.5))',
          }}
        />
        {/* Page Title */}
        {/* mt-2=8px=5.88px, mb-6=24px=17.934px */}
        <div className="text-center" style={{ marginTop: '105.86px', marginBottom: '17.934px', }}>
          {/* gap-3=12px=9.114px */}
          <div className="relative flex items-center justify-center" style={{ gap: '9.114px' }}>

            {/* text-[44px]=32.928px, translateX(5px)=3.822px */}
            <h1
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '49.458px',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                paddingLeft: '80.528px',
              }}
            >
              Menu
            </h1>
          </div>
          {/* text-[28px]=20.874px, -mt-3=12px=9.114px, translateY(-3px)=2.352px, ml-20=80px=59.976px, translateX(5px)=3.822px */}
          <p
            className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
            style={{
              fontSize: '28.228px',
              fontWeight: 900,
              letterSpacing: '0.2em',
              marginTop: '-9.114px',
              paddingLeft: '14.7px',
              marginLeft: '59.976px',
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            }}
          >
            Drip • Drop • Vibe
          </p>
        </div>

        {/* Dropdown */}
        <div className="relative flex justify-start" style={{ marginBottom: 'calc(17.934 * var(--w) / 600)', paddingLeft: 'calc(99.4 * var(--w) / 600)' }}>
          <div
            className="rounded-full relative"
            style={{ padding: '3.352px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between rounded-full bg-[#2d1f1a] cursor-pointer"
              style={{ width: 'calc(429.32 * var(--w) / 600)', paddingLeft: 'calc(20.64 * var(--w) / 600)', paddingRight: 'calc(14.7 * var(--w) / 600)', paddingTop: 'calc(9.35 * var(--w) / 600)', paddingBottom: 'calc(9.35 * var(--w) / 600)', gap: 'calc(8.82 * var(--w) / 600)' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                style={{ fontSize: 'calc(15.76 * var(--w) / 600)' }}
              >
                {activeFilter}
              </span>
              <svg
                className={`text-white transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                style={{ width: 'calc(20.29 * var(--w) / 600)', height: 'calc(20.29 * var(--w) / 600)', marginRight: 'calc(10 * var(--w) / 600)',}}
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
                  marginTop: 'calc(4.41 * var(--w) / 600)',
                  minWidth: '100%',
                  padding: '3.352px',
                  background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                }}
              >
                <div className="rounded-lg overflow-y-auto bg-[#2d1f1a]" style={{ maxHeight: 'calc(335.2 * var(--w) / 600)' }}>
                  {/* All */}
                  <button
                    onClick={() => { setActiveFilter("All"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: 'calc(14 * var(--w) / 600)', padding: '8.82px 14.7px' }}
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
                        paddingBlock: '1.47px',
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
                        style={{ fontSize: 'calc(14 * var(--w) / 600)', letterSpacing: '0.1em', position: 'relative', zIndex: 2 }}
                      >
                        Limited Press
                      </span>
                      <span
                        className="font-[family-name:var(--font-inter)] text-black/70"
                        style={{ fontSize: 'calc(14 * var(--w) / 600)', position: 'relative', zIndex: 2 }}
                      >
                        In rotation for a limited time
                      </span>
                    </div>
                    <button
                      onClick={() => { setActiveFilter("The Drip"); setDropdownOpen(false); }}
                      className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                      style={{ fontSize: 'calc(14 * var(--w) / 600)', padding: '8.82px 14.7px' }}
                    >
                      The Drip
                    </button>
                  </div>

                  {/* Espresso/Coffee */}
                  <button
                    onClick={() => { setActiveFilter("Espresso/Coffee"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: 'calc(14 * var(--w) / 600)', padding: '8.82px 14.7px', borderTop: '1px solid #d9bc52' }}
                  >
                    Espresso/Coffee
                  </button>

                  {/* Tea/Matcha */}
                  <button
                    onClick={() => { setActiveFilter("Tea/Matcha"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: 'calc(14 * var(--w) / 600)', padding: '8.82px 14.7px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    Tea/Matcha
                  </button>

                  {/* Energy/Boba */}
                  <button
                    onClick={() => { setActiveFilter("Energy/Boba"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: 'calc(14 * var(--w) / 600)', padding: '8.82px 14.7px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    Energy/Boba
                  </button>

                  {/* Bakery */}
                  <button
                    onClick={() => { setActiveFilter("Bakery"); setDropdownOpen(false); }}
                    className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                    style={{ fontSize: 'calc(14 * var(--w) / 600)', padding: '8.82px 14.7px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
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
          style={{ marginInline: 'calc(40.76 * var(--w) / 600)', padding: 'calc(4.352 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
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
              paddingBlock: 'calc(5.41 * var(--w) / 600)',
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
              style={{ fontSize: 'calc(18.23 * var(--w) / 600)', letterSpacing: '0.1em', position: 'relative', zIndex: 2 }}
            >
              Limited Press
            </span>
            <span
              className="font-[family-name:var(--font-inter)] text-black/70"
              style={{ fontSize: 'calc(16.172 * var(--w) / 600)', position: 'relative', zIndex: 2 }}
            >
              In rotation for a limited time
            </span>
          </div>

          {/* Title */}
          <div
            className="text-center"
            style={{ paddingBlock: 'calc(6.82 * var(--w) / 600)' }}
          >
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
              style={{ fontSize: 'calc(18.7 * var(--w) / 600)', letterSpacing: '0.15em' }}
            >
              The Drip
            </span>
            <div>
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white italic"
                style={{ fontSize: 'calc(18.7 * var(--w) / 600)' }}
              >
                What&apos;s in your cup?
              </span>
            </div>
            <div className="mx-auto" style={{ height: '2.176px', width: '50%', marginTop: 'calc(5.88 * var(--w) / 600)', marginBottom: 'calc(5.88 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
            <div>
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-center text-white uppercase font-bold"
                style={{ fontSize: 'calc(18.7 * var(--w) / 600)', letterSpacing: '0.15em' }}
              >
                Now Spinning
              </span>
            </div>
            <div className="flex items-center justify-center" style={{ gap: 'calc(8.82 * var(--w) / 600)', marginTop: 'calc(4.41 * var(--w) / 600)' }}>
              <div style={{ width: 'calc(11.76 * var(--w) / 600)', height: '1.764px', backgroundColor: 'white' }} />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: 'calc(20.7 * var(--w) / 600)', letterSpacing: '0.15em' }}
              >
                60<span className="lowercase">s</span> Revolution
              </span>
              <div style={{ width: 'calc(11.76 * var(--w) / 600)', height: '1.764px', backgroundColor: 'white' }} />
            </div>
          </div>

          {/* Category Label */}
          <div
            className="bg-[#24ADFF] noisy text-center flex items-center justify-center"
            style={{ height: 'calc(50.28 * var(--w) / 600)' }}
          >
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
              style={{
                fontSize: 'calc(18.524 * var(--w) / 600)',
                letterSpacing: '0.1em',
                textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
              }}
            >
              Iced Drinks
            </span>
          </div>

          {/* Iced Drinks Cards */}
          {[
            { name: "PURPLE HAZE", desc: "Lemon lavender vanilla latte with butterfly pea cold foam and purple shimmer." },
            { name: "SUNDAY MORNING", desc: "Banana vanilla cold brew with sweet cream foam and vanilla wafer crumbles." },
            { name: "STRAWBERRY FIELDS", desc: "Strawberry passionfruit refresher with\npopping pearls." },
          ].map((item, index) => (
            <div key={`ice-${index}`}>
              {index > 0 && <div style={{ height: '0.882px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
              <div className="flex" style={{ padding: '8.82px 11.76px', gap: 'calc(8.82 * var(--w) / 600)' }}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between" style={{ gap: 'calc(5.88 * var(--w) / 600)' }}>
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                      style={{ fontSize: 'calc(23.758 * var(--w) / 600)', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                  </div>
                  <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: 'calc(15.878 * var(--w) / 600)', marginTop: '1.47px', whiteSpace: 'pre-line' }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
        </div>
        )}

        {/* Menu Sections - All attached in one card */}
        <div style={{ paddingInline: 'calc(40.76 * var(--w) / 600)', paddingBottom: 'calc(23.52 * var(--w) / 600)', marginTop: 'calc(11.76 * var(--w) / 600)' }}>
          <div
            className="rounded-xl"
            style={{ padding: 'calc(4.352 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">

            {/* Espresso/Coffee Section */}
            {(activeFilter === "All" || activeFilter === "Espresso/Coffee") && (
            <>
              <div className="bg-[#f06830] noisy" style={{ padding: '7.35px 11.76px' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: 'calc(18.524 * var(--w) / 600)', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Espresso/Coffee
                </p>
              </div>
              <div className="flex items-center justify-center" style={{ padding: '29.4px 11.76px' }}>
                <p
                  className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                  style={{ fontSize: 'calc(24.64 * var(--w) / 600)', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Coming Soon
                </p>
              </div>
            </>
            )}



            {/* Tea/Matcha Section */}
            {(activeFilter === "All" || activeFilter === "Tea/Matcha") && (
            <>
              <div className="bg-[#2a7d7d] noisy" style={{ padding: '7.35px 11.76px' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: 'calc(18.524 * var(--w) / 600)', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Tea/Matcha
                </p>
              </div>
              <div className="flex items-center justify-center" style={{ padding: '29.4px 11.76px' }}>
                <p
                  className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                  style={{ fontSize: 'calc(24.64 * var(--w) / 600)', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Coming Soon
                </p>
              </div>
            </>
            )}



            {/* Energy/Boba Section */}
            {(activeFilter === "All" || activeFilter === "Energy/Boba") && (
            <>
              <div className="bg-[#6b4c8c] noisy" style={{ padding: '7.35px 11.76px' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: 'calc(18.524 * var(--w) / 600)', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Energy/Boba
                </p>
              </div>
              <div className="flex items-center justify-center" style={{ padding: '29.4px 11.76px' }}>
                <p
                  className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                  style={{ fontSize: 'calc(24.64 * var(--w) / 600)', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Coming Soon
                </p>
              </div>
            </>
            )}

            {/* Bakery Section */}
            {(activeFilter === "All" || activeFilter === "Bakery") && (
            <>
              <div className="bg-[#6F4E37] noisy" style={{ padding: '7.35px 11.76px' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: 'calc(18.524 * var(--w) / 600)', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Bakery
                </p>
              </div>
              <div className="flex items-center justify-center" style={{ padding: '29.4px 11.76px' }}>
                <p
                  className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                  style={{ fontSize: 'calc(24.64 * var(--w) / 600)', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Coming Soon
                </p>
              </div>
            </>
            )}

          </div>
          </div>
        </div>

      </div>

      <TabletFooter style={{ marginTop: 'calc(-29.4 * var(--w) / 600)' }} />
    </div>
    </>
  );
}
