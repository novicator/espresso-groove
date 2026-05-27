"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopFooterXL from "../components/DesktopFooterXL";
import DesktopNav from "../components/DesktopNav";

export default function NowSpinningXL() {
  const [activeTab, setActiveTab] = useState<string>("Behind the Groove");

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
          <div style={{ maxWidth: '1400px', margin: '0 auto', zoom: 0.857 }}>
            {/* Page Title */}
            <div className="text-center" style={{ marginTop: '98px', marginBottom: '42px' }}>
              <div className="flex items-center justify-center" style={{ gap: '14px' }}>
                <h1
                  className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                  style={{ fontSize: '80px', fontWeight: 900, letterSpacing: '-0.02em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Now Spinning
                </h1>
              </div>
              <p
                className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
                style={{
                  fontSize: '62.5px',
                  fontWeight: 900,
                  letterSpacing: '0.2em',
                  marginTop: '0px',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
                }}
              >
                Drip • Drop • Vibe
              </p>
            </div>

            {/* BOX 1 - Description Text */}
            <div
              style={{ marginInline: '42px', marginBottom: '18.2px', padding: '5.6px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', borderRadius: '14px' }}
            >
              <div className="bg-[#2d1f1a]" style={{ borderRadius: '9.8px', padding: '35px' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white text-center font-bold uppercase"
                  style={{ fontSize: '42px', letterSpacing: '0.1em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  The Drop
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white"
                  style={{ fontSize: '26.6px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.6)', marginTop: '21px' }}
                >
                  Every rotation tells a story. We pick a genre, dive deep into the sound, and craft coffee, tea, and energy/boba drinks inspired by the mood behind the music.
                </p>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] text-white text-center italic"
                  style={{ fontSize: '26.6px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.6)', marginTop: '21px', fontWeight: 700 }}
                >
                  Sip the drinks. Spin the vinyl. Stay for the vibe.
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
                <div className="flex items-center justify-center" style={{ gap: '30px', marginTop: '2.8px' }}>
                  <div className="bg-white" style={{ width: '74px', height: '5.6px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }} />
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                    style={{ fontSize: '58px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
                  >
                    60<span className="lowercase">s</span> Revolution
                  </span>
                  <div className="bg-white" style={{ width: '74px', height: '5.6px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }} />
                </div>

                {/* Three Buttons */}
                <div className="flex" style={{ marginTop: '35px' }}>
                  <div className="flex-1 flex justify-center">
                    <button
                      onClick={() => setActiveTab("Behind the Groove")}
                      className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#f06830]"
                      style={{ height: '70px', width: '410px', borderRadius: '999px', border: activeTab === "Behind the Groove" ? '2px solid rgba(255,255,255,0.6)' : '2px solid rgba(255,255,255,0.2)' }}
                    >
                      <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '25.2px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                        Behind the Groove
                      </span>
                    </button>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <button
                      onClick={() => setActiveTab("Limited Press")}
                      className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#2a7d7d]"
                      style={{ height: '70px', width: '336px', borderRadius: '999px', border: activeTab === "Limited Press" ? '2px solid rgba(255,255,255,0.6)' : '2px solid rgba(255,255,255,0.2)' }}
                    >
                      <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '25.2px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                        Limited Press
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
                {activeTab === "Behind the Groove" && (
                  <div>
                    <div style={{ marginTop: '35px' }}>
                      <img src="/images/artwork/60s-revolution.png" alt="60s Revolution turntable" className="rounded-lg object-cover" style={{ width: '252px', height: '252px', float: 'left', marginRight: '28px', marginBottom: '14px' }} />
                      <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '21.8px' }}>
                        The 60s weren&apos;t just a decade; they were an electric shift. It was the era where the single gave way to the album. Artists began creating <span style={{ fontWeight: 700 }}>albums</span>, a complete journey meant to be heard from Side A to Side B with deep, complex stories that changed how people thought about politics, love, and art. From the sun-drenched melodies of the British Invasion to the psychedelic explorations of the Sunset Strip, the 60s proved that music could be a movement. In basement clubs and massive festivals, artists began to use the studio as an instrument, blending blues, folk, and rock into a sound that felt like the future. When the needle hit those specific records, the world actually felt different.
                      </p>
                      <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '21.8px', marginTop: '28px' }}>
                        At <span style={{ fontWeight: 700 }}>Espresso Groove</span>, we&apos;re starting where the modern ritual began: with the pioneers who taught us how to listen.
                      </p>
                    </div>

                    <div style={{ height: '5.6px', marginTop: '42px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                    <h3 className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold" style={{ fontSize: '49px', letterSpacing: '0.15em', marginTop: '42px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                      The Legends
                    </h3>

                    <div style={{ marginTop: '14px' }}>
                      <img src="/images/artwork/60s-revolution-2.png" alt="60s Revolution guitarist" className="rounded-lg object-cover" style={{ width: '280px', height: '280px', float: 'right', marginLeft: '28px', marginBottom: '14px' }} />
                      <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic" style={{ fontSize: '23.8px', fontWeight: 700 }}>
                        The 60<span className="lowercase">s</span> didn&apos;t just change music, they changed culture.
                      </p>

                      <div style={{ marginTop: '21px' }}>
                        <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '22.4px', fontWeight: 700 }}>
                          Bob Dylan - Highway 61 Revisited
                        </p>
                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '19.6px' }}>
                          Turned lyrics into protest, poetry, and the voice of a generation.
                        </p>
                      </div>

                      <div style={{ marginTop: '16.8px' }}>
                        <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '22.4px', fontWeight: 700 }}>
                          Nina Simone - I Put a Spell on You
                        </p>
                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '19.6px' }}>
                          One of the most powerful artistic voices of the civil rights era. Elegant, intense, timeless.
                        </p>
                      </div>

                      <div style={{ marginTop: '16.8px' }}>
                        <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '22.4px', fontWeight: 700 }}>
                          The Beatles - Abbey Road
                        </p>
                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '19.6px' }}>
                          Redefined what an album could be, turning each release into a full sonic experience.
                        </p>
                      </div>

                      <div style={{ marginTop: '16.8px' }}>
                        <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '22.4px', fontWeight: 700 }}>
                          The Beach Boys - Pet Sounds
                        </p>
                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '19.6px' }}>
                          Blended sunshine harmonies with groundbreaking studio experimentation that reshaped pop music forever.
                        </p>
                      </div>

                      <div style={{ marginTop: '16.8px' }}>
                        <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '22.4px', fontWeight: 700 }}>
                          Jimi Hendrix - Electric Ladyland
                        </p>
                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '19.6px' }}>
                          Reinvented the electric guitar with feedback, fire, and fearless experimentation.
                        </p>
                      </div>

                      <div style={{ marginTop: '16.8px' }}>
                        <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '22.4px', fontWeight: 700 }}>
                          The Velvet Underground & Nico
                        </p>
                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '19.6px' }}>
                          Turned art rock into something raw, experimental, and decades ahead of its time.
                        </p>
                      </div>

                      <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic" style={{ fontSize: '23.8px', fontWeight: 700, marginTop: '28px' }}>
                        They didn&apos;t play it safe, and decades later, the records still feel alive.
                      </p>
                    </div>

                    <div style={{ height: '5.6px', marginTop: '42px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                    <h3 className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold" style={{ fontSize: '49px', letterSpacing: '0.15em', marginTop: '42px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                      Records of the Revolution
                    </h3>

                    <div className="grid grid-cols-3" style={{ gap: '28px', marginTop: '35px', paddingInline: '96px' }}>
                      {[
                        { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg', title: 'Highway 61 Revisited', artist: 'Bob Dylan' },
                        { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/18/db/05/18db0507-f276-d93d-a4a7-e856a3f1590a/13UAAIM08283.rgb.jpg/600x600bb.jpg', title: 'I Put a Spell on You', artist: 'Nina Simone' },
                        { src: '/images/artwork/abbey-road.jpg', title: 'Abbey Road', artist: 'The Beatles' },
                        { src: '/images/artwork/pet-sounds.jpg', title: 'Pet Sounds', artist: 'The Beach Boys' },
                        { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/b8/45/a6b84589-6ff7-a462-9ff9-170b724980d5/dj.wjkdwlks.jpg/600x600bb.jpg', title: 'Electric Ladyland', artist: 'Jimi Hendrix' },
                        { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/92/93/39/9293397f-a707-237e-ec7e-0ca613a67e3c/06UMGIM04143.rgb.jpg/600x600bb.jpg', title: 'The Velvet Underground & Nico', artist: 'The Velvet Underground' },
                      ].map((album) => (
                        <div key={album.title} className="text-center">
                          <img src={album.src} alt={`${album.title} by ${album.artist}`} className="rounded-lg object-cover w-full" style={{ aspectRatio: '1' }} />
                          <p className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold uppercase" style={{ fontSize: '21px', marginTop: '8.4px', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
                            {album.title}
                          </p>
                          <p className="text-white/60 font-[family-name:var(--font-inter)]" style={{ fontSize: '21px' }}>
                            {album.artist}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div style={{ height: '5.6px', marginTop: '42px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                    <h3 className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold" style={{ fontSize: '42px', letterSpacing: '0.15em', marginTop: '42px', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                      The Sound Lives On
                    </h3>

                    <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '21.8px', marginTop: '35px' }}>
                      The sound of the 60s never disappeared. It just changed shape. You still hear it in indie guitars, layered harmonies, vintage tones, and artists chasing the same fearless energy that redefined modern music. From Jack White to Tame Impala to The Black Keys, today&apos;s sound still echoes the revolution that changed everything.
                    </p>

                    <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '21.8px', marginTop: '28px', paddingBottom: '28px' }}>
                      That&apos;s why the 60s are now spinning at Espresso Groove. It was the decade that taught music to break rules, say something real, and make people stop and listen. At Espresso Groove, we believe that great coffee and great records were never meant to be rushed. Sip slowly. Spin something timeless. Stay in the moment.
                    </p>
                  </div>
                )}

                {activeTab === "Vinyl" && (
                  <div style={{ marginTop: '35px' }}>
                    <div className="flex" style={{ gap: '21px', paddingBottom: '28px' }}>
                      {[
                        { name: "SGT. PEPPER'S", artist: "The Beatles", img: "/images/artwork/sgt-peppers.jpg", stock: 3 },
                        { name: "ARE YOU EXPERIENCED", artist: "Jimi Hendrix Experience", img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/00/67/45/006745f5-95d5-5a06-35ed-d515e9cfd7d8/dj.tbwlxwoh.jpg/600x600bb.jpg", stock: 1 },
                        { name: "PET SOUNDS", artist: "The Beach Boys", img: "/images/artwork/pet-sounds.jpg", stock: 5 },
                        { name: "HIGHWAY 61 REVISITED", artist: "Bob Dylan", img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg", stock: 2 },
                        { name: "ABBEY ROAD", artist: "The Beatles", img: "/images/artwork/abbey-road.jpg", stock: 4 },
                      ].map((item, index) => (
                        <div key={index} className="flex-1 rounded-xl" style={{ padding: '7px', paddingBottom: '35px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', minWidth: 0 }}>
                          <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                            <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
                              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div style={{ padding: '16.8px' }}>
                              <h4 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis" style={{ fontSize: '30.8px' }}>
                                {item.name}
                              </h4>
                              <p className="text-white/60 font-[family-name:var(--font-inter)] overflow-hidden whitespace-nowrap text-ellipsis" style={{ fontSize: '25.6px', marginTop: '5.6px' }}>
                                {item.artist}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Limited Press" && (
                  <div style={{ marginTop: '35px' }}>
                    <div className="flex" style={{ marginInline: '-42px' }}>
                      <div className="flex-1 bg-[#f06830] noisy text-center flex items-center justify-center" style={{ height: '63px' }}>
                        <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '28px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                          Coffee + Espresso
                        </span>
                      </div>
                      <div className="flex-1 bg-[#2a7d7d] noisy text-center flex items-center justify-center" style={{ height: '63px' }}>
                        <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '28px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                          Tea + Matcha
                        </span>
                      </div>
                      <div className="flex-1 bg-[#6b4c8c] noisy text-center flex items-center justify-center" style={{ height: '63px' }}>
                        <span className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase" style={{ fontSize: '28px', letterSpacing: '0.07em', textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                          Energy + Boba
                        </span>
                      </div>
                    </div>

                    <div className="flex" style={{ padding: '35px 0', gap: '21px' }}>
                      <div className="flex-1 flex flex-col items-center" style={{ gap: '14px' }}>
                        <span className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide" style={{ fontSize: '56px' }}>
                          Blue Note Brew
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col items-center" style={{ gap: '14px' }}>
                        <span className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide" style={{ fontSize: '56px' }}>
                          Coltrane Chai
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col items-center" style={{ gap: '14px' }}>
                        <span className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide" style={{ fontSize: '56px' }}>
                          Bebop Blast
                        </span>
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
