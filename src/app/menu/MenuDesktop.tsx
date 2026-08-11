"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopFooter from "../components/DesktopFooter";

import DesktopNav from "../components/DesktopNav";

type FilterType = "All" | "The Drip" | "Espresso/Coffee" | "Tea/Matcha" | "Energy/Boba" | "Bakery";

export default function MenuDesktop() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <DesktopNav />
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

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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

        {/* === CONTENT LAYER === */}
        <div className="relative z-10">
          {/* Page Title */}
          <div className="text-center relative" style={{ marginTop: '8vw', marginBottom: '3.71vw' }}>
            <div className="flex items-center justify-center" style={{ gap: '1.86vw' }}>
              <h1
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                style={{
                  fontSize: '5.5vw',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                  marginTop: '1vw'
                }}
              >
                Menu
              </h1>
            </div>
            <p
              className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
              style={{
                fontSize: '3.8vw',
                fontWeight: 900,
                letterSpacing: '0.2em',
                marginTop: '-0.7vw',
                textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* Dropdown */}
          <div className="relative" style={{ paddingInline: '4vw', marginTop: '-3vw' }}>
            <div
              className="rounded-full mx-auto relative"
              style={{ padding: '0.4vw', width: '48vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between rounded-full bg-[#2d1f1a] cursor-pointer w-full"
                style={{ paddingLeft: '3vw', paddingRight: '2.5vw', paddingTop: '0.8vw', paddingBottom: '0.8vw' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                  style={{ fontSize: '1.5vw' }}
                >
                  {activeFilter}
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

              {dropdownOpen && (
                <div
                  className="absolute left-0 z-[60] rounded-xl overflow-hidden"
                  style={{
                    top: '100%',
                    marginTop: '0.8vw',
                    width: '100%',
                    padding: '0.4vw',
                    background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                  }}
                >
                  <div className="rounded-lg overflow-y-auto bg-[#2d1f1a]" style={{ maxHeight: '40vw' }}>
                    <button
                      onClick={() => { setActiveFilter("All"); setDropdownOpen(false); }}
                      className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                      style={{ fontSize: '1.6vw', padding: '1.2vw 2.5vw', }}
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
                          paddingBlock: '0.4vw',
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
                          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-black whitespace-nowrap"
                          style={{ fontSize: '1.3vw', letterSpacing: '0.1em', position: 'relative', zIndex: 2 }}
                        >
                          Limited Press -<span style={{ fontWeight: 400, fontSize: '1.3vw', letterSpacing: '0.05em' }}> In rotation for a limited time</span>
                        </span>
                      </div>
                      <button
                        onClick={() => { setActiveFilter("The Drip"); setDropdownOpen(false); }}
                        className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                        style={{ fontSize: '1.6vw', padding: '1.2vw 2.5vw' }}
                      >
                        The Drip
                      </button>
                    </div>

                    <button
                      onClick={() => { setActiveFilter("Espresso/Coffee"); setDropdownOpen(false); }}
                      className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                      style={{ fontSize: '1.6vw', padding: '1.2vw 2.5vw', borderTop: '1px solid #d9bc52' }}
                    >
                      Espresso/Coffee
                    </button>

                    <button
                      onClick={() => { setActiveFilter("Tea/Matcha"); setDropdownOpen(false); }}
                      className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                      style={{ fontSize: '1.6vw', padding: '1.2vw 2.5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      Tea/Matcha
                    </button>

                    <button
                      onClick={() => { setActiveFilter("Energy/Boba"); setDropdownOpen(false); }}
                      className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                      style={{ fontSize: '1.6vw', padding: '1.2vw 2.5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      Energy/Boba
                    </button>

                    <button
                      onClick={() => { setActiveFilter("Bakery"); setDropdownOpen(false); }}
                      className="flex items-center w-full text-left font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors font-bold"
                      style={{ fontSize: '1.6vw', padding: '1.2vw 2.5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      Bakery
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Menu Content Box */}
          <div style={{ paddingInline: '4vw', paddingBottom: '4vw', marginTop: '2vw' }}>
            <div className="rounded-xl" style={{ padding: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}>
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">

                {(activeFilter === "All" || activeFilter === "The Drip") && (<>
                  {/* 1 - The Drip Title (now at the top) */}
                  <div className="text-center" style={{ paddingBlock: '1vw' }}>
                    <span
                      className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                      style={{ fontSize: '2.1vw', letterSpacing: '0.15em' }}
                    >
                      The Drip
                    </span>
                    <div>
                      <span
                        className="font-[family-name:var(--font-libre-baskerville)] text-white italic"
                        style={{ fontSize: '1.8vw' }}
                      >
                        What&apos;s in your cup?
                      </span>
                    </div>
                  </div>

                  {/* 2 + 3 + 4 Row */}
                  <div style={{ height: '0.3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
                  <div className="flex">

                    {/* 2 - Now Spinning Description */}
                    <div className="flex-[2]" style={{ padding: '1.5vw 2vw' }}>
                      <div className="text-center" style={{ marginTop: '-0.1vw' }}>
                        <span
                          className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                          style={{ fontSize: '2vw', letterSpacing: '0.15em' }}
                        >
                          Now Spinning
                        </span>
                        <div className="flex items-center justify-center" style={{ gap: '1vw', marginTop: '0.5vw' }}>
                          <div style={{ width: '2.3vw', height: '0.3vw', backgroundColor: 'white' }} />
                          <span
                            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold whitespace-nowrap"
                            style={{ fontSize: '1.7vw', letterSpacing: '0.15em' }}
                          >
                            60<span className="lowercase">s</span> Revolution
                          </span>
                          <div style={{ width: '2.3vw', height: '0.3vw', backgroundColor: 'white' }} />
                        </div>
                      </div>
                      <p
                        className="font-[family-name:var(--font-libre-baskerville)] text-white/80 text-left"
                        style={{ fontSize: '1.55vw', lineHeight: '1.7', marginTop: '1vw' }}
                      >
                        Each featured genre inspires <span className="font-black">limited press</span> drinks crafted to match the mood of the music on the turntable.
                      </p>
                    </div>

                    {/* Vertical Divider */}
                    <div style={{ width: '0.3vw', background: 'linear-gradient(180deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                    {/* Right side: Limited Press banner + Category Labels + Featured Drinks */}
                    <div className="flex flex-col flex-[5]">
                      {/* 3 - Limited Press Gold Banner (now scoped to the right column) */}
                      <div
                        className="bg-[#d9bc52] noisy flex flex-col items-center justify-center"
                        style={{
                          position: 'relative',
                          overflow: 'hidden',
                          paddingBlock: '0.6vw',
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
                          style={{ fontSize: '1.7vw', letterSpacing: '0.15em', position: 'relative', zIndex: 2 }}
                        >
                          Limited Press - <span style={{ fontWeight: 400, fontSize: '1.7vw', letterSpacing: '0.05em' }}> In rotation for a limited time</span>
                        </span>
                      </div>

                      {/* 4 - Iced Drinks Header + Drink Cards */}
                      <div className="flex flex-col flex-1">
                        {/* Iced Drinks header (single, full-width) */}
                        <div className="bg-[#24ADFF] noisy text-center flex items-center justify-center" style={{ height: '6.5vw' }}>
                          <span
                            className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                            style={{ fontSize: '2.2vw', letterSpacing: '0.1em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}
                          >
                            Iced Drinks
                          </span>
                        </div>

                        {/* Drink cards row */}
                        <div className="flex items-center justify-center" style={{ padding: '4vw 2vw' }}>
                          <p
                            className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                            style={{ fontSize: '3vw', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                          >
                            Coming Soon
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </>)}

                {(activeFilter === "All" || activeFilter === "Espresso/Coffee") && (<>
                  {/* Espresso/Coffee Section */}
                  <div className="bg-[#f06830] noisy" style={{ padding: '1vw 2vw' }}>
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                      style={{ fontSize: '2vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Espresso/Coffee
                    </p>
                  </div>
                  <div className="flex items-center justify-center" style={{ padding: '4vw 2vw' }}>
                    <p
                      className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                      style={{ fontSize: '3vw', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Coming Soon
                    </p>
                  </div>
                </>)}

                {(activeFilter === "All" || activeFilter === "Tea/Matcha") && (<>
                  {/* Tea/Matcha Section */}
                  <div className="bg-[#2a7d7d] noisy" style={{ padding: '1vw 2vw' }}>
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                      style={{ fontSize: '2vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Tea/Matcha
                    </p>
                  </div>
                  <div className="flex items-center justify-center" style={{ padding: '4vw 2vw' }}>
                    <p
                      className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                      style={{ fontSize: '3vw', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Coming Soon
                    </p>
                  </div>
                </>)}

                {(activeFilter === "All" || activeFilter === "Energy/Boba") && (<>
                  {/* Energy/Boba Section */}
                  <div className="bg-[#6b4c8c] noisy" style={{ padding: '1vw 2vw' }}>
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                      style={{ fontSize: '2vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Energy/Boba
                    </p>
                  </div>
                  <div className="flex items-center justify-center" style={{ padding: '4vw 2vw' }}>
                    <p
                      className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                      style={{ fontSize: '3vw', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Coming Soon
                    </p>
                  </div>
                </>)}

                {(activeFilter === "All" || activeFilter === "Bakery") && (<>
                  {/* Bakery Section */}
                  <div className="bg-[#6F4E37] noisy" style={{ padding: '1vw 2vw' }}>
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                      style={{ fontSize: '2vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Bakery
                    </p>
                  </div>
                  <div className="flex items-center justify-center" style={{ padding: '4vw 2vw' }}>
                    <p
                      className="text-white italic font-[family-name:var(--font-libre-baskerville)]"
                      style={{ fontSize: '3vw', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Coming Soon
                    </p>
                  </div>
                </>)}

              </div>
            </div>
          </div>

          <DesktopFooter />
        </div>

      </div>
    </>
  );
}
