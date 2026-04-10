"use client";

import Link from "next/link";
import DesktopFooterXL from "../components/DesktopFooterXL";
import DesktopNav from "../components/DesktopNav";

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

export default function MenuXL() {
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

      {/* === CONTENT LAYER (px values based on 1400px) === */}
      <div className="relative z-10">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Page Title */}
          <div className="text-center" style={{ marginTop: '98px', marginBottom: '51.9px' }}>
            <div className="flex items-center justify-center" style={{ gap: '26px' }}>
              <img
                src="/images/mug.svg"
                alt=""
                className="pointer-events-none"
                style={{
                  width: '159.2px',
                  transform: 'translateY(32.9px) translateX(11.3px) scale(1.2)',
                  filter: 'drop-shadow(0px 0px 10px rgba(255,150,50,0.5))',
                }}
              />
              <h1
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                style={{
                  fontSize: '92.5px',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                  paddingLeft: '10.4px',
                }}
              >
                The Menu
              </h1>
            </div>
            <p
              className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
              style={{
                fontSize: '58px',
                fontWeight: 900,
                letterSpacing: '0.2em',
                marginTop: '-26.7px',
                paddingLeft: '43.4px',
                marginLeft: '176.5px',
                textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* Two Column Layout: Featured Sips + Menu */}
          <div className="flex" style={{ paddingInline: '56px', paddingBottom: '56px', marginTop: '28px', gap: '28px' }}>

            {/* LEFT: Featured Sips */}
            <div className="flex-[3] rounded-xl" style={{ padding: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}>
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                {/* Title */}
                <div className="text-center" style={{ paddingBlock: '21px' }}>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '25.2px', letterSpacing: '0.15em' }}
                  >
                    Featured Sips
                  </span>
                </div>
                <div style={{ height: '4.2px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                {/* Now Spinning - Jazz */}
                <div className="text-center" style={{ paddingTop: '21px' }}>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '25.2px', letterSpacing: '0.15em' }}
                  >
                    Now Spinning
                  </span>
                  <div className="flex items-center justify-center" style={{ gap: '14px', marginTop: '7px' }}>
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

                {/* Description */}
                <div style={{ padding: '21px 28px' }}>
                  <p
                    className="font-[family-name:var(--font-libre-baskerville)] text-white/80 text-left"
                    style={{ fontSize: '18.9px', lineHeight: '1.7' }}
                  >
                    Each featured genre inspires three signature drinks — one coffee, one tea, one energy —
                    crafted to match the mood of the music on the turntable.
                  </p>
                </div>

                {/* Coffee Featured */}
                <div className="bg-[#f06830] noisy text-center" style={{ padding: '14px 28px' }}>
                  <p
                    className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                    style={{ fontSize: '28px', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                  >
                    Coffee
                  </p>
                </div>
                <div className="flex items-center" style={{ padding: '21px', gap: '21px' }}>
                  <div className="bg-[#d4d4d4] rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: '84px', height: '84px' }}>
                    <span className="text-[#555555]" style={{ fontSize: '14px' }}>IMG</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                      style={{ fontSize: '42px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>Blue Note Brew</h3>
                    <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '21px', marginTop: '4.2px' }}>Rich espresso with hints of dark chocolate and smooth jazz</p>
                  </div>
                </div>

                {/* Tea Featured */}
                <div className="bg-[#2a7d7d] noisy text-center" style={{ padding: '14px 28px' }}>
                  <p
                    className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                    style={{ fontSize: '28px', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                  >
                    Tea
                  </p>
                </div>
                <div className="flex items-center" style={{ padding: '21px', gap: '21px' }}>
                  <div className="bg-[#d4d4d4] rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: '84px', height: '84px' }}>
                    <span className="text-[#555555]" style={{ fontSize: '14px' }}>IMG</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                      style={{ fontSize: '42px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>Coltrane Chai</h3>
                    <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '21px', marginTop: '4.2px' }}>Spiced chai with warm cinnamon and cardamom notes</p>
                  </div>
                </div>

                {/* Energy Featured */}
                <div className="bg-[#6b4c8c] noisy text-center" style={{ padding: '14px 28px' }}>
                  <p
                    className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                    style={{ fontSize: '28px', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                  >
                    Energy Drink
                  </p>
                </div>
                <div className="flex items-center" style={{ padding: '21px', gap: '21px' }}>
                  <div className="bg-[#d4d4d4] rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: '84px', height: '84px' }}>
                    <span className="text-[#555555]" style={{ fontSize: '14px' }}>IMG</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                      style={{ fontSize: '42px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>Bebop Blast</h3>
                    <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '21px', marginTop: '4.2px' }}>Citrus energy with a smooth improvisational kick</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Full Menu */}
            <div className="flex-[6.5] rounded-xl" style={{ padding: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', alignSelf: 'flex-start' }}>
              <div className="flex rounded-lg overflow-hidden bg-[#2d1f1a]">

                {/* Coffee Column */}
                <div className="flex-1">
                  <div className="bg-[#f06830] noisy text-center flex items-center justify-center" style={{ height: '93.8px' }}>
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                      style={{ fontSize: '25.2px', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Coffee
                    </p>
                  </div>
                  {coffeeItems.map((item, index) => (
                    <div key={`coffee-${index}`}>
                      {index > 0 && <div style={{ height: '2.8px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                      <div className="flex items-center" style={{ height: '175px', paddingInline: '14px', gap: '21px' }}>
                        <div className="bg-[#f06830]/20 noisy rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: '70px', height: '70px' }}>
                          <img src="/images/menu_cup.svg?v=3" style={{ width: '21px', height: '21px', opacity: 0.7, filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                            style={{ fontSize: '30.8px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                          <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '18.9px', marginTop: '2.8px' }}>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Vertical Divider */}
                <div style={{ width: '2.8px', background: 'linear-gradient(180deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                {/* Tea Column */}
                <div className="flex-1">
                  <div className="bg-[#2a7d7d] noisy text-center flex items-center justify-center" style={{ height: '93.8px' }}>
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                      style={{ fontSize: '25.2px', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Tea
                    </p>
                  </div>
                  {teaItems.map((item, index) => (
                    <div key={`tea-${index}`}>
                      {index > 0 && <div style={{ height: '2.8px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                      <div className="flex items-center" style={{ height: '175px', paddingInline: '14px', gap: '21px' }}>
                        <div className="bg-[#2a7d7d]/20 noisy rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: '70px', height: '70px' }}>
                          <img src="/images/menu_cup.svg?v=3" style={{ width: '21px', height: '21px', opacity: 0.7, filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                            style={{ fontSize: '30.8px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                          <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '18.9px', marginTop: '2.8px' }}>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Vertical Divider */}
                <div style={{ width: '2.8px', background: 'linear-gradient(180deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                {/* Energy Drinks Column */}
                <div className="flex-1">
                  <div className="bg-[#6b4c8c] noisy text-center flex items-center justify-center" style={{ height: '93.8px' }}>
                    <p
                      className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                      style={{ fontSize: '25.2px', letterSpacing: '0.02em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                    >
                      Energy Drinks
                    </p>
                  </div>
                  {energyItems.map((item, index) => (
                    <div key={`energy-${index}`}>
                      {index > 0 && <div style={{ height: '2.8px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                      <div className="flex items-center" style={{ height: '175px', paddingInline: '14px', gap: '21px' }}>
                        <div className="bg-[#6b4c8c]/30 noisy rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: '70px', height: '70px' }}>
                          <span style={{ fontSize: '21px' }}>⚡</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                            style={{ fontSize: '30.8px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                          <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '18.9px', marginTop: '2.8px' }}>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

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
