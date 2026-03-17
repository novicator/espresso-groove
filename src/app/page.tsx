"use client";

import Link from "next/link";
import MusicNotes from "./components/MusicNotes";
import MiniMusicNotes from "./components/MiniMusicNotes";

export default function Home() {
  return (
    <>
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


       
      `}</style>

      {/* Mobile Site */}
      <div className="md:hidden relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden' }}>

        {/* === BACKGROUND LAYER === */}
        <div className="absolute inset-0 z-0">
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('/images/background_v2.png')` }}
          />
          <div
            className="h-screen bg-cover bg-center bg-second"
            style={{
              backgroundImage: `url('/images/background_v2.png')`,
              transform: 'scaleY(-1)',
            }}
          />
          <div
            className="h-screen bg-cover bg-center bg-third"
            style={{ backgroundImage: `url('/images/vibe_background_3.png')` }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/vibe_background.png')`,
              transform: 'scaleY(-1)',
            }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{ 
              backgroundImage: `url('/images/vibe_background.png')` }}
          />
          <div
            className="h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/vibe_background.png')`,
              transform: 'scaleY(-1)',
            }}
          />
        </div>

        {/* === CONTENT LAYER (on top of background) === */}
        <div className="relative z-10">
          {/* Logo */}
          <img
            src="/images/Expresso groove.svg"
            alt="Espresso Groove"
            className="logo-glow"
            style={{ width: '85vw', marginLeft: '-6vw',}}
          />
          <h2
            className="text-white text-[8vw] font-[family-name:var(--font-libre-baskerville)] leading-tight uppercase tracking-tight"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              marginTop: '-12vw',
              paddingLeft: '5vw',
              fontWeight: 900,
            }}
          >
            Where Coffee<br />Meets Culture
          </h2>
          <p
            className="text-white text-[7.2vw] font-[family-name:var(--font-libre-baskerville)] italic"
            style={{
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              marginTop: '5vw',
              paddingLeft: '5vw',
              fontWeight: 900,
            }}
          >
            Drip • Drop • Vibe
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col"
            style={{
              paddingLeft: '4vw',
              marginTop: '14vw',
              gap: '5vw',
            }}
          >
            <Link
              href="/menu"
              className="rounded-full bg-[#f06830] noisy flex items-center justify-center"
              style={{ width: '43vw', height: '13vw', gap: '0vw', border: '2px solid #8a3010' }}
            >
              <img
                src="/images/menu_cup.svg?v=3"
                style={{
                  width: '6vw',
                  height: '6vw',
                  filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                  marginRight: '2vw',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.1em',
                  fontSize: '4.6vw',
                  marginRight: '2vw'
                }}
              >
                Menu
              </span>
            </Link>

            <Link
              href="/vinyl"
              className="rounded-full bg-[#2a7d7d] noisy flex items-center justify-center"
              style={{ width: '43vw', height: '13vw', gap: '2vw', border: '2px solid #1a4f4f' }}
            >
              <img
                src="/images/vinyl-svgrepo-com.svg"
                style={{
                  width: '6vw',
                  height: '6vw',
                  filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.2em',
                  fontSize: '4.6vw',
                }}
              >
                Vinyl
              </span>
            </Link>

            <Link
              href="/merch"
              className="rounded-full bg-[#6b4c8c] noisy flex items-center justify-center"
              style={{ width: '43vw', height: '13vw', gap: '2vw', border: '2px solid #3d2a52' }}
            >
              <img
                src="/images/shirt-outline-svgrepo-com.svg"
                style={{
                  width: '6vw',
                  height: '6vw',
                  filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))',
                }}
              />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.12em',
                  fontSize: '4.6vw',
                }}
              >
                Merch
              </span>
            </Link>
          </div>

          {/* Mug */}
          <img
            src="/images/mug.svg"
            alt="Coffee mug with vinyl steam"
            className="pointer-events-none absolute"
            style={{
              width: '51vw',
              right: '0vw',
              top: '88vw',
              filter: 'drop-shadow(0px 0px 15px rgba(255,150,50,0.5))',
            }}
          />

          {/* === Gradient Divider + Now Playing + Gradient Divider 2 === */}
          <div style={{ marginTop: 'vw' }}>

            {/* Music Notes Divider 1 */}
            <div style={{ paddingTop: '6vw', marginTop: '3vw' }}>
              <MiniMusicNotes isPlaying={true} />
            </div>

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
              style={{ gap: '3.5vw', paddingBlock: '5vw' }}
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
                      width: '2vw',
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
                    fontSize: '6.6vw',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                    fontWeight: 900,
                  }}
                >
                  Now Playing
                </span>
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white italic whitespace-nowrap"
                  style={{ fontSize: '5.1vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900,}}
                >
                  Espresso Groove Radio
                </span>
              </div>

              {/* Right Equalizer */}
              <div className="flex items-end self-stretch" style={{ gap: 'vw' }}>
                {[
                  { h: 0.55, c: '#ffffff' }, { h: 0.35, c: '#ffffff' }, { h: 0.6, c: '#ffffff' },
                  { h: 0.4, c: '#ffffff' }, { h: 0.5, c: '#ffffff' }, { h: 0.3, c: '#ffffff' }
                ].map((b, i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: '2vw',
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

            {/* Music Notes Divider 2 */}
            <MiniMusicNotes isPlaying={true} />

          </div>

          {/* Now Spinning */}
          <div
            className="flex items-center justify-center"
            style={{ gap: '3.1vw', marginTop: '6.1vw' }}
          >
            <div
              className="bg-white"
              style={{
                width: '14.3vw',
                height: '0.7vw',
                boxShadow: '0 0 6px rgba(0,0,0,0.9)',
              }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{
                fontSize: '6.6vw',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                fontWeight: 900,
              }}
            >
              Now Spinning
            </span>
            <div
              className="bg-white"
              style={{
                width: '14.3vw',
                height: '0.7vw',
                boxShadow: '0 0 6px rgba(0,0,0,.9)',
              }}
            />
          </div>

          {/* Jazz */}
          <div
            className="flex items-center justify-center"
            style={{ gap: '3.1vw', marginTop: '3.1vw' }}
          >
            <div
              className="bg-white"
              style={{ width: '14.2vw', height: '0.8vw', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '16.3vw',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                fontWeight: 900,
              }}
            >
              Jazz
            </span>
            <div
              className="bg-white"
              style={{ width: '14.2vw', height: '0.8vw', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
            />
          </div>

          {/* === Jazz History Section === */}
          <div
            className="rounded-xl"
            style={{ marginTop: '6.1vw', marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div
            className="rounded-lg overflow-hidden bg-[#2d1f1a]"
          >
            {/* Title */}
            <div
              className="text-center border-b"
              style={{ paddingBlock: '3vw', borderBottomWidth: '0.8vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
              >
                Jazz History
              </span>
            </div>

            {/* Image + Text side by side */}
            <div className="flex" style={{ paddingInline: '3vw', gap: '3vw' }}>
              <div
                className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                style={{ width: '30vw', height: '30vw', marginTop: '6vw'}}
              >
                <span
                  className="text-[#555555] font-[family-name:var(--font-inter)] text-center"
                  style={{ fontSize: '2.5vw' }}
                >
                  IMAGE
                </span>
              </div>
              <div className="flex-1">
                <p
                  className="text-white/70 font-[family-name:var(--font-inter)] leading-relaxed"
                  style={{ fontSize: '3vw', marginTop: '4vw' }}
                >
                  In the early 1900s, the streets of New Orleans were alive with a new sound. African rhythms met blues and ragtime to create something entirely new. It wasn&apos;t just music - it was freedom, expression, and revolution all at once. From New Orleans...
                </p>
              </div>
            </div>

            {/* Learn More */}
            <a
              href="/jazz/history"
              className="flex items-center justify-center border-t border-white"
              style={{ paddingInline: '4vw', paddingBlock: '3vw', gap: '2vw', borderTopWidth: '0.4vw', marginTop: '4vw' }}
            >
              <span
                className="text-white font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: '3.5vw' }}
              >
                Learn More
              </span>
              <span className="text-white" style={{ fontSize: '3.5vw' }}>→</span>
            </a>
          </div>
          </div>

          {/* === Featured Sips Section === */}
          <div
            className="rounded-xl"
            style={{ marginTop: '4vw', marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div
            className="rounded-lg overflow-hidden bg-[#2d1f1a]"
          >
            {/* Title */}
            <div
              className="text-center"
              style={{ paddingBlock: '3vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
              >
                Featured Sips
              </span>
            </div>

            {/* Category Labels */}
            <div className="flex">
              <div
                className="flex-1 bg-[#e05620] noisy text-center flex items-center justify-center"
                style={{ height: '12vw' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{
                    fontSize: '3.1vw',
                    letterSpacing: '0.07em',
                    textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  }}
                >
                  <img
                    src="/images/menu_cup.svg?v=3"
                    className="inline-block mr-1"
                    style={{
                      width: '4vw',
                      height: '4vw',
                      marginTop: '-1vw',
                      filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))',
                    }}
                  /> Coffee
                </span>
              </div>
              <div
                className="flex-1 bg-[#2a7d7d] noisy text-center flex items-center justify-center"
                style={{ height: 'vw' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{
                    fontSize: '3.1vw',
                    letterSpacing: '0.07em',
                    textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  }}
                >
                  Tea
                </span>
              </div>
              <div
                className="flex-1 bg-[#6b4c8c] noisy text-center flex items-center justify-center"
                style={{ height: 'vw' }}
              >
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{
                    fontSize: '3.1vw',
                    letterSpacing: '0.07em',
                    textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  }}
                >
                  Energy Drinks
                </span>
              </div>
            </div>

            {/* Product Cards Row */}
            <div className="flex" style={{ padding: '3vw', gap: '2vw' }}>
              {/* Coffee Card */}
              <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: '4.5vw' }}
                >
                  Blue Note Brew
                </span>
                <div
                  className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                  style={{ width: '18vw', height: '18vw' }}
                >
                  <span className="text-[#555555]" style={{ fontSize: '2.5vw' }}>IMG</span>
                </div>
                <span
                  className="font-[family-name:var(--font-bebas-neue)] text-[#e05620]"
                  style={{ fontSize: '5.5vw', textShadow: '0 0 8px rgba(224,86,32,0.4)' }}
                >
                  $5.75
                </span>
              </div>

              {/* Tea Card */}
              <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: '4.5vw' }}
                >
                  Coltrane Chai
                </span>
                <div
                  className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                  style={{ width: '18vw', height: '18vw' }}
                >
                  <span className="text-[#555555]" style={{ fontSize: '2.5vw' }}>IMG</span>
                </div>
                <span
                  className="font-[family-name:var(--font-bebas-neue)] text-[#e05620]"
                  style={{ fontSize: '5.5vw', textShadow: '0 0 8px rgba(224,86,32,0.4)' }}
                >
                  $4.50
                </span>
              </div>

              {/* Energy Card */}
              <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                <span
                  className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                  style={{ fontSize: '4.5vw' }}
                >
                  Bebop Blast
                </span>
                <div
                  className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                  style={{ width: '18vw', height: '18vw' }}
                >
                  <span className="text-[#555555]" style={{ fontSize: '2.5vw' }}>IMG</span>
                </div>
                <span
                  className="font-[family-name:var(--font-bebas-neue)] text-[#e05620]"
                  style={{ fontSize: '5.5vw', textShadow: '0 0 8px rgba(224,86,32,0.4)' }}
                >
                  $4.75
                </span>
              </div>
            </div>

            {/* View Featured Menu */}
            <div
              className="border-t border-white flex items-center justify-center"
              style={{ paddingBlock: '3vw', gap: '2vw', borderTopWidth: '0.4vw' }}
            >
              <span
                className="text-white whitespace-nowrap font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: '3.5vw' }}
              >
                View Featured Menu →
              </span>
            </div>

          </div>
          </div>

          {/* === The Vibe Header === */}
          <div
            className="flex items-center justify-center"
            style={{ gap: '3vw', marginTop: '8vw' }}
          >
            <div
              className="bg-white"
              style={{ width: '15vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)'}}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{ fontSize: '6.6vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900, }}
            >
              The Vibe
            </span>
            <div
              className="bg-white"
              style={{ width: '15vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
          </div>

          {/* The Vibe Text */}
          <div style={{ paddingInline: '6vw', marginTop: '4vw', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: '4.4vw', fontWeight: 900 }}
            >
              <span className="font-[900]">Espresso Groove</span> was born from a simple idea:
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: '4.4vw', fontWeight: 900, marginTop: '3vw' }}
            >
              A space where the ritual of coffee meets the soul of music. Great espresso and great vinyl share something in common — they&apos;re both meant to be <span className="font-[800]">savored</span>, not rushed.
            </p>
            <p
              className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
              style={{ fontSize: '4.4vw', fontWeight: 900, marginTop: '3vw' }}
            >
              Pull up a chair. Flip through the crates. Espresso <span className="font-[900]">drips</span>, the needle <span className="font-[800]">drops</span>, and the <span className="font-[800]">vibe</span> takes over.
            </p>
            <p
              className="text-white font-[family-name:var(--font-libre-baskerville)] italic text-center"
              style={{ fontSize: '6vw', fontWeight: 900, marginTop: '5vw', textShadow: '2px 2px 8px rgba(0,0,0,0.)' }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* === About Us Header === */}
          <div
            className="flex items-center justify-center"
            style={{ gap: '3vw', marginTop: '6vw' }}
          >
            <div
              className="bg-white"
              style={{ width: '15vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
              style={{ fontSize: '6.6vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900, }}
            >
              About Us
            </span>
            <div
              className="bg-white"
              style={{ width: '15vw', height: '0.7vw', boxShadow: '0 0 6px rgba(0,0,0,0.9)' }}
            />
          </div>

          {/* === Store Card === */}
          <div
            className="rounded-xl"
            style={{ marginTop: '4vw', marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div
            className="rounded-lg overflow-hidden bg-[#2d1f1a]"
          >
            {/* Our Store Title */}
            <div
              className="text-center border-b border-white"
              style={{ paddingBlock: '3vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: '4.6vw', letterSpacing: '0.15em' }}
              >
                Our Store
              </span>
            </div>

            {/* Store Photo Placeholder */}
            <div
              className="w-full bg-[#d4d4d4] flex items-center justify-center"
              style={{ height: '50vw' }}
            >
              <span
                className="text-[#555555] font-[family-name:var(--font-inter)]"
                style={{ fontSize: '3.5vw' }}
              >
                Store Photo Coming Soon
              </span>
            </div>

            {/* Store Info */}
            <div style={{ padding: '4vw' }}>
              {/* Address */}
              <a
                href="https://maps.google.com/?q=Espresso+Groove"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start"
                style={{ gap: '3vw' }}
              >
                <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '5vw', height: '5vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p
                    className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                    style={{ fontSize: '3.3vw' }}
                  >
                    123 Groove St.
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '3.1vw' }}
                  >
                    City, State 00000
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div
                className="flex items-start"
                style={{ gap: '3vw', marginTop: '3vw' }}
              >
                <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '5vw', height: '5vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p
                    className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                    style={{ fontSize: '3.3vw' }}
                  >
                    Mon–Fri: 7am–9pm
                  </p>
                  <p
                    className="text-white/70 font-[family-name:var(--font-inter)]"
                    style={{ fontSize: '3.1vw' }}
                  >
                    Sat–Sun: 8am–10pm
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+10000000000"
                className="flex items-center"
                style={{ gap: '3vw', marginTop: '3vw' }}
              >
                <svg className="text-white flex-shrink-0" style={{ width: '5vw', height: '5vw' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p
                  className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                  style={{ fontSize: '3.3vw' }}
                >
                  (000) 000-0000
                </p>
              </a>

              {/* Get Directions */}
              <div
                className="flex items-center justify-center border-t border-white"
                style={{ marginTop: '4vw', paddingTop: '3vw', gap: '2vw' }}
              >
                <span
                  className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                  style={{ fontSize: '3.6vw' }}
                >
                  Get Directions →
                </span>
              </div>
            </div>
          </div>
          </div>

          {/* === Music Notes === */}
          <MusicNotes isPlaying={true} />

          {/* Footer Logo */}
          <img
            src="/images/Expresso groove.svg"
            alt="Espresso Groove"
            className="logo-glow"
            style={{ width: '75vw', marginLeft: '-6vw'}}
          />

          <div style={{ marginTop: '-7vw'}}>
          {/* Tagline */}
          <p
            className="text-white font-[family-name:var(--font-libre-baskerville)] italic"
            style={{ fontSize: '6.6vw', fontWeight: 900, paddingLeft: '4vw', textShadow: '1px 1px 4px rgba(0,0,0,0.9)',}}
          >
            Drip • Drop • Vibe
          </p>

          {/* Description */}
          <p
            className="text-white font-[family-name:var(--font-libre-baskerville)]"
            style={{ fontSize: '4.2vw', fontWeight: 900, paddingLeft: '4vw', marginTop: '3vw', maxWidth: '65vw', textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}
          >
            A vinyl-fueled coffee shop where coffee meets culture.
          </p>

          <p
            className="text-white font-[family-name:var(--font-libre-baskerville)] italic"
            style={{ fontSize: '5vw', fontWeight: 900, paddingLeft: '4vw', marginTop: '3vw', textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}
          >
            Sip Slow. Dig Deep. Stay Groovy.
          </p>

          {/* === Visit Us === */}
          <h3
            className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
            style={{ fontSize: '5.6vw', letterSpacing: '0.15em', paddingLeft: '4vw', marginTop: '6vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.3)', fontWeight: 700, }}
          >
            Visit Us
          </h3>

          {/* Visit Us Info */}
          <div style={{ paddingLeft: '4vw', marginTop: '3vw' }}>
            {/* Address */}
            <a
              href="https://maps.google.com/?q=Espresso+Groove"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start"
              style={{ gap: '3vw' }}
            >
              <svg className="text-white mt-[1vw] flex-shrink-0" style={{ width: '9vw', height: '9vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p
                  className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                  style={{ fontSize: '4.5vw' , fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  3540 Belle Terre Blvd • Unit C
                </p>
                <p
                  className="text-white font-[family-name:var(--font-inter)]"
                  style={{ fontSize: '4.2vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 700 }}
                >
                  Myrtle Beach, SC 29579
                </p>
              </div>
            </a>

            {/* Hours */}
            <div
              className="flex items-start"
              style={{ gap: '3vw', marginTop: '4vw' }}
            >
              <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '9vw', height: '9vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p
                  className="text-white font-[family-name:var(--font-libre-baskerville)]"
                  style={{ fontSize: '4.6vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900  }}
                >
                  Mon–Fri: 7am–9pm
                </p>
                <p
                  className="text-white font-[family-name:var(--font-inter)]"
                  style={{ fontSize: '4.2vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 700  }}
                >
                  Sat–Sun: 8am–10pm
                </p>
              </div>
            </div>
          </div>

          {/* === Contact Us === */}
          <h3
            className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
            style={{ fontSize: '5.6vw', letterSpacing: '0.15em', paddingLeft: '4vw', marginTop: '6vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.3)', fontWeight: 700,}}
          >
            Contact Us
          </h3>

          {/* Contact Info */}
          <div style={{ paddingLeft: '4vw', marginTop: '3vw' }}>
            {/* Phone */}
            <a
              href="tel:+10000000000"
              className="flex items-center"
              style={{ gap: '3vw' }}
            >
              <svg className="text-white flex-shrink-0" style={{ width: '9vw', height: '9vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p
                className="text-white font-[family-name:var(--font-libre-baskerville)] "
                style={{ fontSize: '4.5vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
              >
                (000) 000-0000
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:espressogroove@gmail.com"
              className="flex items-center"
              style={{ gap: '3vw', marginTop: '4vw' }}
            >
              <svg className="text-white flex-shrink-0" style={{ width: '9vw', height: '9vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p
                className="text-white font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: '4.5vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
              >
                espressogroove@gmail.com
              </p>
            </a>
          </div>

          {/* === Follow Us === */}
          <h3
            className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
            style={{ fontSize: '5.6vw', letterSpacing: '0.15em', paddingLeft: '4vw', marginTop: '6vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.3)', fontWeight: 700,}}
          >
            Follow Us
          </h3>

          {/* Social Icons */}
          <div className="flex" style={{ gap: '4vw', paddingLeft: '4vw', marginTop: '3vw' }}>
            {/* Instagram */}
            <a href="#" className="border-4 border-white rounded-full flex items-center justify-center text-white" style={{ width: '14vw', height: '14vw' }}>
              <svg style={{ width: '7vw', height: '7vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="border-4 border-white rounded-full flex items-center justify-center text-white" style={{ width: '14vw', height: '14vw' }}>
              <svg style={{ width: '7vw', height: '7vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="border-4 border-white rounded-full flex items-center justify-center text-white" style={{ width: '14vw', height: '14vw' }}>
              <svg style={{ width: '7vw', height: '7vw' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col w-full" style={{ marginTop: '8vw' }}>
            <Link href="/menu" className="relative w-full bg-[#f06830] noisy flex items-center justify-center" style={{ height: '16vw', gap: '3vw' }}>
              <img src="/images/menu_cup.svg?v=3" style={{ width: '8vw', height: '8vw', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  fontSize: '5.6vw',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.1em',
                }}
              >Menu</span>
            </Link>

            <Link href="/vinyl" className="relative w-full bg-[#2a7d7d] noisy flex items-center justify-center" style={{ height: '16vw', gap: '3vw' }}>
              <img src="/images/vinyl-svgrepo-com.svg" style={{ width: '8vw', height: '8vw', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  fontSize: '5.6vw',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.2em',
                }}
              >Vinyl</span>
            </Link>

            <Link href="/merch" className="relative w-full bg-[#6b4c8c] noisy flex items-center justify-center" style={{ height: '16vw', gap: '3vw' }}>
              <img src="/images/shirt-outline-svgrepo-com.svg" style={{ width: '8vw', height: '8vw', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
                style={{
                  fontSize: '5.6vw',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                  letterSpacing: '0.12em',
                }}
              >Merch</span>
            </Link>
          </div>

          </div>

        </div>

      </div>
    </>
  );
}
