"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopFooterXL from "../components/DesktopFooterXL";
import DesktopNav from "../components/DesktopNav";

type FilterType = "All" | "The Drip" | "Espresso/Coffee" | "Tea/Matcha" | "Energy/Boba" | "Bakery";

export default function MenuXL() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <DesktopNav size="xl" />
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

      <div className="relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden' }}>

        {/* === BACKGROUND LAYER (stays vw) === */}
        <div className="absolute inset-0 z-0">
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]" style={{ backgroundImage: "url('/images/desktop_background_v2.png')", transform: "scaleY(-1)" }} />
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_140%]" style={{ backgroundImage: "url('/images/desktop_background_v2.png')" }} />
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(1)" }} />
          <div className="h-screen bg-[position:0%_20%] bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/desktop_black_bg.png')", transform: "scaleY(-1)" }} />
        </div>

        {/* === CONTENT LAYER (px values based on 1199px viewport) === */}
        <div className="relative z-10">
          <div style={{ maxWidth: '1200px', margin: '0 auto', zoom: 0.88 }}>
            {/* Page Title */}
            <div className="text-center" style={{ marginTop: '102px', marginBottom: '44.5px' }}>
              <div className="flex items-center justify-center" style={{ gap: '22.3px' }}>
                <h1
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                  style={{
                    fontSize: '90.8px',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                  }}
                >
                  Menu
                </h1>
              </div>
              <p
                className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
                style={{
                  fontSize: '62.3px',
                  fontWeight: 900,
                  letterSpacing: '0.2em',
                  marginTop: '-10px',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
                }}
              >
                Drip • Drop • Vibe
              </p>
            </div>

            {/* Dropdown */}
            <div className="relative" style={{ paddingInline: '48px', marginTop: '-20px' }}>
              <div
                className="rounded-full mx-auto relative"
                style={{ padding: '4.8px', width: '720px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between rounded-full bg-[#2d1f1a] cursor-pointer w-full"
                  style={{ paddingLeft: '36px', paddingRight: '30px', paddingTop: '14.4px', paddingBottom: '14.4px' }}
                >
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                    style={{ fontSize: '21.6px' }}
                  >
                    {activeFilter}
                  </span>
                  <svg
                    className={`text-white transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    style={{ width: '18px', height: '18px' }}
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
                      marginTop: '9.6px',
                      width: '100%',
                      padding: '4.8px',
                      background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                    }}
                  >
                    <div className="rounded-lg overflow-y-auto bg-[#2d1f1a]" style={{ maxHeight: '480px' }}>
                      <button
                        onClick={() => { setActiveFilter("All"); setDropdownOpen(false); }}
                        className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                        style={{ fontSize: '19.2px', padding: '14.4px 30px' }}
                      >
                        All
                      </button>

                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <div
                          onClick={() => { setActiveFilter("The Drip"); setDropdownOpen(false); }}
                          className="bg-[#d9bc52] noisy flex flex-col items-center justify-center cursor-pointer"
                          style={{
                            position: 'relative',
                            overflow: 'hidden',
                            paddingBlock: '4.8px',
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
                            style={{ fontSize: '15.6px', letterSpacing: '0.1em', position: 'relative', zIndex: 2 }}
                          >
                            Limited Press -<span style={{ fontWeight: 400, fontSize: '15.6px', letterSpacing: '0.05em' }}> In rotation for a limited time</span>
                          </span>
                        </div>
                        <button
                          onClick={() => { setActiveFilter("The Drip"); setDropdownOpen(false); }}
                          className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                          style={{ fontSize: '19.2px', padding: '14.4px 30px' }}
                        >
                          The Drip
                        </button>
                      </div>

                      <button
                        onClick={() => { setActiveFilter("Espresso/Coffee"); setDropdownOpen(false); }}
                        className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                        style={{ fontSize: '19.2px', padding: '14.4px 30px', borderTop: '1px solid #d9bc52' }}
                      >
                        Espresso/Coffee
                      </button>

                      <button
                        onClick={() => { setActiveFilter("Tea/Matcha"); setDropdownOpen(false); }}
                        className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                        style={{ fontSize: '19.2px', padding: '14.4px 30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        Tea/Matcha
                      </button>

                      <button
                        onClick={() => { setActiveFilter("Energy/Boba"); setDropdownOpen(false); }}
                        className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                        style={{ fontSize: '19.2px', padding: '14.4px 30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        Energy/Boba
                      </button>

                      <button
                        onClick={() => { setActiveFilter("Bakery"); setDropdownOpen(false); }}
                        className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                        style={{ fontSize: '19.2px', padding: '14.4px 30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        Bakery
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Menu Content Box */}
            <div style={{ paddingInline: '48px', paddingBottom: '48px', marginTop: '24px' }}>
              <div className="rounded-xl" style={{ padding: '4.8px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}>
                <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">

                  {(activeFilter === "All" || activeFilter === "The Drip") && (<>
                    {/* 1 - The Drip Title (now at the top) */}
                    <div className="text-center" style={{ paddingBlock: '12px' }}>
                      <span
                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                        style={{ fontSize: '25.2px', letterSpacing: '0.15em' }}
                      >
                        The Drip
                      </span>
                      <div>
                        <span
                          className="font-[family-name:var(--font-libre-baskerville)] text-white italic"
                          style={{ fontSize: '21.6px' }}
                        >
                          What&apos;s in your cup?
                        </span>
                      </div>
                    </div>

                    {/* 2 + 3 + 4 Row */}
                    <div style={{ height: '3.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                    <div className="flex">

                      {/* 2 - Now Spinning Description */}
                      <div className="flex-[2]" style={{ padding: '15px 24px' }}>
                        <div className="text-center" style={{ marginTop: '5px' }}>
                          <span
                            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                            style={{ fontSize: '26.4px', letterSpacing: '0.15em',}}
                          >
                            Now Spinning
                          </span>
                          <div className="flex items-center justify-center" style={{ gap: '12px', marginTop: '6px' }}>
                            <div style={{ width: '30.6px', height: '4.8px', backgroundColor: 'white' }} />
                            <span
                              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold whitespace-nowrap"
                              style={{ fontSize: '19.8px', letterSpacing: '0.15em' }}
                            >
                              60<span className="lowercase">s</span> Revolution
                            </span>
                            <div style={{ width: '30.6px', height: '4.8px', backgroundColor: 'white' }} />
                          </div>
                        </div>
                        <p
                          className="font-[family-name:var(--font-libre-baskerville)] text-white/80 text-left"
                          style={{ fontSize: '18.6px', lineHeight: '1.7', marginTop: '12px' }}
                        >
                          Each featured genre inspires <span className="font-black">limited press</span> drinks crafted to match the mood of the music on the turntable.
                        </p>
                      </div>

                      {/* Vertical Divider */}
                      <div style={{ width: '3.6px', background: 'linear-gradient(180deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                      {/* Right side: Limited Press banner + Category Labels + Featured Drinks */}
                      <div className="flex flex-col flex-[5]">
                        {/* 3 - Limited Press Gold Banner (now scoped to the right column) */}
                        <div
                          className="bg-[#d9bc52] noisy flex flex-col items-center justify-center"
                          style={{
                            position: 'relative',
                            overflow: 'hidden',
                            paddingBlock: '7.2px',
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
                            style={{ fontSize: '20.4px', letterSpacing: '0.15em', position: 'relative', zIndex: 2 }}
                          >
                            Limited Press - <span style={{ fontWeight: 400, fontSize: '20.4px', letterSpacing: '0.05em' }}> In rotation for a limited time</span>
                          </span>
                        </div>

                        {/* 4 - Iced Drinks Header + Drink Cards */}
                        <div className="flex flex-col flex-1">
                          {/* Iced Drinks header (single, full-width) */}
                          <div className="bg-[#24ADFF] noisy text-center flex items-center justify-center" style={{ height: '78px' }}>
                            <span
                              className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                              style={{ fontSize: '26.4px', letterSpacing: '0.1em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}
                            >
                              Iced Drinks
                            </span>
                          </div>

                          {/* Drink cards row */}
                          <div className="flex flex-1">
                            {[
                              { name: "PURPLE HAZE", desc: "Lemon lavender vanilla latte with butterfly pea cold foam and purple shimmer." },
                              { name: "SUNDAY MORNING", desc: "Banana vanilla cold brew with sweet cream foam and vanilla wafer crumbles." },
                            ].map((item, index) => (
                              <div key={`ice-${index}`} className="flex-1 flex flex-col items-center justify-center" style={{ padding: '18px 12px 36px 12px', gap: '5px', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                                <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide text-center"
                                  style={{ fontSize: '28.8px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                                <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug text-center" style={{ fontSize: '16.4px' }}>{item.desc}</p>
                              </div>
                            ))}

                            {/* Strawberry Fields - standalone for individual editing */}
                            <div className="flex-1 flex flex-col items-center justify-center" style={{ padding: '18px 12px 36px 12px', gap: '5px' }}>
                              <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide text-center"
                                style={{ fontSize: '28.8px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>STRAWBERRY FIELDS</h3>
                              <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug text-center" style={{ fontSize: '16.4px' }}>Strawberry passionfruit refresher with popping pearls.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </>)}

                  {(activeFilter === "All" || activeFilter === "Espresso/Coffee") && (<>
                    {/* Espresso/Coffee Section */}
                    <div className="bg-[#f06830] noisy" style={{ padding: '12px 24px' }}>
                      <p
                        className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                        style={{ fontSize: '24px', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                      >
                        Espresso/Coffee
                      </p>
                    </div>
                    <div className="flex items-center justify-center" style={{ padding: '60px 30px' }}>
                      <p
                        className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                        style={{ fontSize: '40px', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                      >
                        Coming Soon
                      </p>
                    </div>
                  </>)}

                  {(activeFilter === "All" || activeFilter === "Tea/Matcha") && (<>
                    {/* Tea/Matcha Section */}
                    <div className="bg-[#2a7d7d] noisy" style={{ padding: '12px 24px' }}>
                      <p
                        className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                        style={{ fontSize: '24px', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                      >
                        Tea/Matcha
                      </p>
                    </div>
                    <div className="flex items-center justify-center" style={{ padding: '60px 30px' }}>
                      <p
                        className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                        style={{ fontSize: '40px', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                      >
                        Coming Soon
                      </p>
                    </div>
                  </>)}

                  {(activeFilter === "All" || activeFilter === "Energy/Boba") && (<>
                    {/* Energy/Boba Section */}
                    <div className="bg-[#6b4c8c] noisy" style={{ padding: '12px 24px' }}>
                      <p
                        className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                        style={{ fontSize: '24px', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                      >
                        Energy/Boba
                      </p>
                    </div>
                    <div className="flex items-center justify-center" style={{ padding: '60px 30px' }}>
                      <p
                        className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                        style={{ fontSize: '40px', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                      >
                        Coming Soon
                      </p>
                    </div>
                  </>)}

                  {(activeFilter === "All" || activeFilter === "Bakery") && (<>
                    {/* Bakery Section */}
                    <div className="bg-[#6F4E37] noisy" style={{ padding: '12px 24px' }}>
                      <p
                        className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                        style={{ fontSize: '24px', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                      >
                        Bakery
                      </p>
                    </div>
                    <div className="flex items-center justify-center" style={{ padding: '60px 30px' }}>
                      <p
                        className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                        style={{ fontSize: '40px', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                      >
                        Coming Soon
                      </p>
                    </div>
                  </>)}

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
