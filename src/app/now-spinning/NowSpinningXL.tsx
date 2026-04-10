"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopFooterXL from "../components/DesktopFooterXL";
import DesktopNav from "../components/DesktopNav";

export default function NowSpinningXL() {
  const [activeTab, setActiveTab] = useState<string>("Jazz History");

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

    <div className="relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden', minHeight: '100vh' }}>

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
      </div>

      {/* === CONTENT LAYER (px values based on 1400px) === */}
      <div className="relative z-10">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Page Title */}
          <div className="text-center" style={{ marginTop: '98px', marginBottom: '42px' }}>
            <div className="flex items-center justify-center" style={{ gap: '14px' }}>
              <span className="text-white" style={{ fontSize: '63px', textShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>★</span>
              <h1
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                style={{ fontSize: '63px', fontWeight: 900, letterSpacing: '-0.02em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
              >
                Now Spinning
              </h1>
            </div>
          </div>

          {/* BOX 1 - Description Text */}
          <div
            style={{ marginInline: '42px', marginBottom: '18.2px', padding: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', borderRadius: '14px' }}
          >
            <div className="bg-[#2d1f1a]" style={{ borderRadius: '9.8px', padding: '35px' }}>
              <p
                className="font-[family-name:var(--font-libre-baskerville)] text-white"
                style={{ fontSize: '26.6px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
              >
                Every rotation tells a story. We pick a genre, dive deep into the sound, and craft
                a coffee, tea, and energy drink inspired by the mood behind the music. Explore the
                genre, sip the lineup, and take home the vinyl that started it all.
              </p>
            </div>
          </div>

          {/* BOX 2 - Featured Genre + Buttons */}
          <div
            style={{ marginInline: '42px', marginBottom: '56px', padding: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', borderRadius: '14px' }}
          >
            <div className="bg-[#2d1f1a]" style={{ borderRadius: '9.8px', padding: '42px' }}>
              {/* Featured Genre */}
              <h2
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center"
                style={{ fontSize: '63px', fontWeight: 900, letterSpacing: '0.15em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
              >
                Featured Genre
              </h2>

              {/* Jazz with dashes */}
              <div className="flex items-center justify-center" style={{ gap: '49px', marginTop: '2.8px' }}>
                <div className="bg-white" style={{ width: '84px', height: '5.6px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }} />
                <span
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                  style={{ fontSize: '98px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
                >
                  Jazz
                </span>
                <div className="bg-white" style={{ width: '84px', height: '5.6px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }} />
              </div>

              {/* Three Buttons */}
              <div className="flex" style={{ marginTop: '35px' }}>
                <div className="flex-1 flex justify-center">
                  <button
                    onClick={() => setActiveTab("Jazz History")}
                    className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#f06830]"
                    style={{ height: '70px', width: '336px', borderRadius: '999px', border: activeTab === "Jazz History" ? '2px solid rgba(255,255,255,0.6)' : '2px solid rgba(255,255,255,0.2)' }}
                  >
                    <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '25.2px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                      Jazz History
                    </span>
                  </button>
                </div>
                <div className="flex-1 flex justify-center">
                  <button
                    onClick={() => setActiveTab("Featured Sips")}
                    className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#2a7d7d]"
                    style={{ height: '70px', width: '336px', borderRadius: '999px', border: activeTab === "Featured Sips" ? '2px solid rgba(255,255,255,0.6)' : '2px solid rgba(255,255,255,0.2)' }}
                  >
                    <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '25.2px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                      Featured Sips
                    </span>
                  </button>
                </div>
                <div className="flex-1 flex justify-center">
                  <button
                    onClick={() => setActiveTab("Vinyl")}
                    className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#6b4c8c]"
                    style={{ height: '70px', width: '336px', borderRadius: '999px', border: activeTab === "Vinyl" ? '2px solid rgba(255,255,255,0.6)' : '2px solid rgba(255,255,255,0.2)' }}
                  >
                    <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '25.2px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                      Vinyl
                    </span>
                  </button>
                </div>
              </div>

              {/* Active Tab Title */}
              <h2
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center"
                style={{ fontSize: '49px', fontWeight: 900, letterSpacing: '0.15em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', marginTop: '42px' }}
              >
                {activeTab}
              </h2>

              {/* Gradient Divider */}
              <div style={{ height: '5.6px', marginTop: '21px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

              {/* Tab Content */}
              {activeTab === "Jazz History" && (
                <div>
                  <div style={{ marginTop: '35px' }}>
                    <img src="/images/artwork/performance.png" alt="Jazz performance" className="rounded-lg object-cover" style={{ width: '252px', height: '252px', float: 'left', marginRight: '28px', marginBottom: '14px' }} />
                    <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '25.2px' }}>
                      In the early 1900s, the streets of New Orleans were alive with a new sound. African rhythms met blues and ragtime to create something entirely new. It wasn&apos;t just music — it was freedom, expression, and revolution all at once. From the brass bands of Congo Square to the smoky clubs of Storyville, jazz was born not on a stage, but in the soul of a city.
                    </p>
                    <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '25.2px', marginTop: '28px' }}>
                      By the 1920s, jazz had migrated north — Chicago, Kansas City, Harlem. It became the soundtrack of speakeasies and the anthem of a generation refusing to sit still. Swing took over the dance halls. Big bands filled ballrooms from coast to coast. The world was moving faster, and jazz was the pulse keeping time.
                    </p>
                  </div>

                  <div style={{ height: '5.6px', marginTop: '42px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                  <h3 className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold" style={{ fontSize: '42px', letterSpacing: '0.15em', marginTop: '42px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                    The Legends
                  </h3>

                  <div style={{ marginTop: '14px' }}>
                    <img src="/images/artwork/hands_on_piano.png" alt="Hands on piano" className="rounded-lg object-cover" style={{ width: '280px', height: '280px', float: 'right', marginLeft: '28px', marginBottom: '14px' }} />
                    <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '25.2px' }}>
                      Louis Armstrong didn&apos;t just play the trumpet — he reinvented what it meant to be a soloist. His gravelly voice and fearless improvisation turned jazz from an ensemble art into a platform for individual genius. Then came Duke Ellington, who composed not just songs but entire worlds. His orchestra wasn&apos;t a band — it was a living, breathing instrument.
                    </p>
                    <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '25.2px', marginTop: '28px' }}>
                      Charlie Parker and Dizzy Gillespie shattered every rule in the book with bebop — fast, complex, unapologetic. Thelonious Monk played notes that weren&apos;t supposed to work, and somehow they were the only ones that made sense. Miles Davis refused to stay in one lane, reinventing himself and the genre with every decade — from cool jazz to modal to fusion. And John Coltrane? He turned the saxophone into a prayer, chasing something spiritual that most of us can only feel, never name.
                    </p>
                  </div>

                  <div style={{ height: '5.6px', marginTop: '42px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                  <h3 className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold" style={{ fontSize: '42px', letterSpacing: '0.15em', marginTop: '42px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                    The Records That Defined Jazz
                  </h3>

                  <div className="grid grid-cols-3" style={{ gap: '28px', marginTop: '35px' }}>
                    {[
                      { src: '/images/artwork/kind-of-blue.jpg', title: 'Kind of Blue', artist: 'Miles Davis' },
                      { src: '/images/artwork/blue-train.jpg', title: 'Blue Train', artist: 'John Coltrane' },
                      { src: '/images/artwork/a-love-supreme.jpg', title: 'A Love Supreme', artist: 'John Coltrane' },
                      { src: '/images/artwork/time-out.jpg', title: 'Time Out', artist: 'Dave Brubeck' },
                      { src: '/images/artwork/maiden-voyage.jpg', title: 'Maiden Voyage', artist: 'Herbie Hancock' },
                      { src: '/images/artwork/moanin.jpg', title: "Moanin'", artist: 'Art Blakey' },
                    ].map((album) => (
                      <div key={album.title} className="text-center">
                        <img src={album.src} alt={`${album.title} by ${album.artist}`} className="rounded-lg object-cover w-full" style={{ aspectRatio: '1' }} />
                        <p className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold uppercase" style={{ fontSize: '28px', marginTop: '11.2px', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
                          {album.title}
                        </p>
                        <p className="text-white/60 font-[family-name:var(--font-inter)]" style={{ fontSize: '28px' }}>
                          {album.artist}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div style={{ height: '5.6px', marginTop: '42px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                  <h3 className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold" style={{ fontSize: '42px', letterSpacing: '0.15em', marginTop: '42px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                    Jazz Lives On
                  </h3>

                  <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '25.2px', marginTop: '35px' }}>
                    Jazz never died — it just learned new languages. You hear it in the hip-hop samples that loop Coltrane&apos;s phrases, in the neo-soul that borrows its harmonic warmth, in the lo-fi beats that carry its late-night intimacy. Artists like Robert Glasper, Kamasi Washington, and Nubya Garcia are proving that jazz isn&apos;t a museum piece — it&apos;s a living conversation that keeps finding new voices.
                  </p>

                  <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '25.2px', marginTop: '28px', paddingBottom: '28px' }}>
                    That&apos;s why we chose jazz as our first rotation. It&apos;s the genre that taught music how to be free — how to listen, respond, and create in the moment. At Espresso Groove, we believe great coffee and great records share the same philosophy: slow down, pay attention, and let the moment move you.
                  </p>
                </div>
              )}

              {activeTab === "Vinyl" && (
                <div style={{ marginTop: '35px' }}>
                  <div className="flex" style={{ gap: '21px', paddingBottom: '28px' }}>
                    {[
                      { name: "KIND OF BLUE", artist: "Miles Davis", img: "/images/artwork/kind-of-blue.jpg", stock: 3 },
                      { name: "A LOVE SUPREME", artist: "John Coltrane", img: "/images/artwork/a-love-supreme.jpg", stock: 1 },
                      { name: "HEAD HUNTERS", artist: "Herbie Hancock", img: "/images/artwork/head-hunters.jpg", stock: 5 },
                      { name: "MINGUS AH UM", artist: "Charles Mingus", img: "/images/artwork/mingus-ah-um.jpg", stock: 2 },
                      { name: "TIME OUT", artist: "Dave Brubeck", img: "/images/artwork/time-out.jpg", stock: 4 },
                    ].map((item, index) => (
                      <div key={index} className="flex-1 rounded-xl" style={{ padding: '7px', paddingBottom: '35px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}>
                        <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                          <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div style={{ padding: '16.8px' }}>
                            <h4 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis" style={{ fontSize: '30.8px' }}>
                              {item.name}
                            </h4>
                            <p className="text-white/60 font-[family-name:var(--font-inter)]" style={{ fontSize: '19.6px', marginTop: '5.6px' }}>
                              {item.artist}
                            </p>
                            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: '25.2px', marginTop: '8.4px', color: item.stock <= 1 ? '#f06830' : 'rgba(255,255,255,0.5)' }}>
                              {item.stock} in stock
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Featured Sips" && (
                <div style={{ marginTop: '35px' }}>
                  <div className="flex" style={{ marginInline: '-42px' }}>
                    <div className="flex-1 bg-[#f06830] noisy text-center flex items-center justify-center" style={{ height: '63px' }}>
                      <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '28px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                        Coffee
                      </span>
                    </div>
                    <div className="flex-1 bg-[#2a7d7d] noisy text-center flex items-center justify-center" style={{ height: '63px' }}>
                      <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '28px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                        Tea
                      </span>
                    </div>
                    <div className="flex-1 bg-[#6b4c8c] noisy text-center flex items-center justify-center" style={{ height: '63px' }}>
                      <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '28px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                        Energy Drinks
                      </span>
                    </div>
                  </div>

                  <div className="flex" style={{ padding: '35px 0', gap: '21px' }}>
                    <div className="flex-1 flex flex-col items-center" style={{ gap: '14px' }}>
                      <span className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide" style={{ fontSize: '56px' }}>
                        Blue Note Brew
                      </span>
                      <div className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0" style={{ width: '112px', height: '112px' }}>
                        <span className="text-[#555555]" style={{ fontSize: '16.8px' }}>IMG</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center" style={{ gap: '14px' }}>
                      <span className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide" style={{ fontSize: '56px' }}>
                        Coltrane Chai
                      </span>
                      <div className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0" style={{ width: '112px', height: '112px' }}>
                        <span className="text-[#555555]" style={{ fontSize: '16.8px' }}>IMG</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center" style={{ gap: '14px' }}>
                      <span className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide" style={{ fontSize: '56px' }}>
                        Bebop Blast
                      </span>
                      <div className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0" style={{ width: '112px', height: '112px' }}>
                        <span className="text-[#555555]" style={{ fontSize: '16.8px' }}>IMG</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <DesktopFooterXL />
      </div>

    </div>
    </>
  );
}
