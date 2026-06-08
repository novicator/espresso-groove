"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import TabletFooter from "../components/TabletFooter";
import TabletNav from "../components/TabletNav";

export default function NowSpinningTablet() {
    const [activeTab, setActiveTab] = useState<string>("Behind the Groove");
    const scrollRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [scrollRatio, setScrollRatio] = useState(0);
    const [thumbWidth, setThumbWidth] = useState(0);

    const updateScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll <= 0) { setScrollRatio(0); setThumbWidth(100); return; }
        setScrollRatio(el.scrollLeft / maxScroll);
        setThumbWidth((el.clientWidth / el.scrollWidth) * 100);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        updateScroll();
        el.addEventListener("scroll", updateScroll);
        return () => el.removeEventListener("scroll", updateScroll);
    }, [updateScroll, activeTab]);

    return (
        <>
            <TabletNav />
            <style jsx global>{`
                @keyframes logoGlowPulseMobile {
                    0% { filter: drop-shadow(0px 0px 0px rgba(255, 150, 50, 0)); }
                    100% { filter: drop-shadow(0px 0px 10px rgb(195, 100, 0)); }
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
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <div className="relative overflow-hidden min-h-screen">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    {activeTab === "Behind the Groove" ? (
                        <>
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/new_background_v2.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }} />
                        </>
                    ) : activeTab === "Limited Press" ? (
                        <>
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/menu_background_full.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }} />
                        </>
                    ) : (
                        <>
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/menu_background_full.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }} />
                        </>
                    )}
                </div>

                {/* Content Layer */}
                <div className="relative z-20" style={{ ['--w' as string]: 'min(100vw, 700px)', maxWidth: 'var(--w)', margin: '0 auto'  } as React.CSSProperties}>
                    {/* Page Title */}
                    <div className="text-center" style={{ marginTop: '82.92px', marginBottom: '17.934px' }}>
                        <div className="flex items-center justify-center" style={{ gap: '9.114px' }}>
                            <h1
                                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                                style={{
                                    fontSize: '40.99px',
                                    fontWeight: 900,
                                    letterSpacing: '-0.02em',
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                    marginTop: '18.82px',
                                }}
                            >
                                Now Spinning
                            </h1>
                        </div>
                        <p
                            className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
                            style={{
                                fontSize: '28.228px',
                                fontWeight: 900,
                                letterSpacing: '0.2em',
                                marginTop: '-5px',
                                textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
                            }}
                        >
                            Drip • Drop • Vibe
                        </p>
                    </div>

                    {/* Brown Box */}
                    <div
                        className="rounded-xl"
                        style={{ marginInline: 'calc(35.76 * var(--w) / 600)', marginTop: 'calc(-11.76 * var(--w) / 600)',  padding: '3.352px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
                    >
                        <div className="rounded-lg overflow-hidden bg-[#2d1f1a]" style={{ padding: 'calc(14.7 * var(--w) / 600)' }}>
                            <p
                                className="font-[family-name:var(--font-libre-baskerville)] text-white text-center font-bold uppercase"
                                style={{
                                    fontSize: 'calc(22.64 * var(--w) / 600)',
                                    letterSpacing: '0.1em',
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                }}
                            >
                                The Drop
                            </p>
                            <p
                                className="font-[family-name:var(--font-libre-baskerville)] text-white"
                                style={{
                                    fontSize: 'calc(17.172 * var(--w) / 600)',
                                    lineHeight: '1.7',
                                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                                    marginTop: 'calc(8.82 * var(--w) / 600)',
                                }}
                            >
                                Every rotation tells a story. We pick a genre, dive deep into the sound, and craft coffee, tea, and energy/boba drinks inspired by the mood behind the music.
                            </p>
                            <p
                                className="font-[family-name:var(--font-libre-baskerville)] text-white text-center italic whitespace-nowrap"
                                style={{
                                    fontSize: 'calc(17.996 * var(--w) / 600)',
                                    transform: 'translateX(-5.88px)',
                                    lineHeight: '1.7',
                                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                                    marginTop: 'calc(8.82 * var(--w) / 600)',
                                    fontWeight: 700,
                                }}
                            >
                                Sip the drinks. Spin the vinyl. Stay for the vibe.
                            </p>
                        </div>

                        {/* Gradient Divider */}
                        <div style={{ height: '3.176px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                        {/* Featured Genre Title */}
                        <div className="bg-[#2d1f1a] rounded-b-lg" style={{ padding: 'calc(14.7 * var(--w) / 600)' }}>
                            <h2
                                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center"
                                style={{
                                    fontSize: 'calc(20.7 * var(--w) / 600)',
                                    fontWeight: 900,
                                    letterSpacing: '0.15em',
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                }}
                            >
                                Featured Genre
                            </h2>

                            {/* Jazz with dashes */}
                            <div
                                className="flex items-center justify-center"
                                style={{ gap: 'calc(9.114 * var(--w) / 600)', marginTop: 'calc(9.114 * var(--w) / 600)' }}
                            >
                                <div
                                    className="bg-white"
                                    style={{ width: 'calc(25.748 * var(--w) / 600)', height: '2.352px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
                                />
                                <span
                                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
                                    style={{
                                        fontSize: 'calc(23.522 * var(--w) / 600)',
                                        textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                        fontWeight: 900,
                                        marginTop: 'calc(-5 * var(--w) / 600)',
                                    }}
                                >
                                    60<span className="lowercase">s</span> Revolution
                                </span>
                                <div
                                    className="bg-white"
                                    style={{ width: 'calc(25.748 * var(--w) / 600)', height: '2.352px', boxShadow: '0 0 6px rgba(0,0,0,.9)' }}
                                />
                            </div>

                            {/* Category Boxes */}
                            <div className="flex" style={{ marginTop: 'calc(11.76 * var(--w) / 600)', marginInline: 'calc(-14.7 * var(--w) / 600)' }}>
                                <div className="flex-1 flex justify-center">
                                    <button
                                        onClick={() => setActiveTab("Behind the Groove")}
                                        className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#f06830]"
                                        style={{
                                            height: 'calc(44.46 * var(--w) / 600)',
                                            width: 'calc(163.79 * var(--w) / 600)',
                                            borderRadius: 'calc(999 * var(--w) / 600)',
                                            border: '2px solid rgba(255,255,255,0.2)',
                                        }}
                                    >
                                        <span
                                            className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                                            style={{
                                                fontSize: 'calc(13.35 * var(--w) / 600)',
                                                letterSpacing: '0.02em',
                                                textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                                            }}
                                        >
                                            Behind the Groove
                                        </span>
                                    </button>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <button
                                        onClick={() => setActiveTab("Limited Press")}
                                        className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#2a7d7d]"
                                        style={{
                                            height: 'calc(44.46 * var(--w) / 600)',
                                            width: 'calc(170.26 * var(--w) / 600)',
                                            borderRadius: 'calc(999 * var(--w) / 600)',
                                            border: '2px solid rgba(255,255,255,0.2)',
                                        }}
                                    >
                                        <span
                                            className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                                            style={{
                                                fontSize: 'calc(15 * var(--w) / 600)',
                                                letterSpacing: '0.02em',
                                                textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                                            }}
                                        >
                                            Limited Press
                                        </span>
                                    </button>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <button
                                        onClick={() => setActiveTab("Vinyl")}
                                        className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#6b4c8c]"
                                        style={{
                                            height: 'calc(44.46 * var(--w) / 600)',
                                            width: 'calc(150.79 * var(--w) / 600)',
                                            borderRadius: 'calc(999 * var(--w) / 600)',
                                            border: '2px solid rgba(255,255,255,0.2)',
                                        }}
                                    >
                                        <span
                                            className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                                            style={{
                                                fontSize: 'calc(15 * var(--w) / 600)',
                                                letterSpacing: '0.07em',
                                                textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                                            }}
                                        >
                                            Vinyl
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Active Tab Title */}
                            <h2
                                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center"
                                style={{
                                    fontSize: 'calc(22.7 * var(--w) / 600)',
                                    fontWeight: 900,
                                    letterSpacing: '0.15em',
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                    marginTop: 'calc(14.7 * var(--w) / 600)',
                                }}
                            >
                                {activeTab}
                            </h2>

                            {/* Gradient Divider */}
                            <div style={{ height: '3.352px', marginTop: 'calc(8.82 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                            {/* Tab Content */}
                            {activeTab === "Behind the Groove" && (
                                <div>
                                    {/* Section 1: Origins */}
                                    <div style={{ marginTop: 'calc(11.76 * var(--w) / 600)' }}>
                                        <img
                                            src="/images/artwork/60s-revolution.png"
                                            alt="60s Revolution turntable"
                                            className="rounded-lg object-cover"
                                            style={{ width: 'calc(122.9 * var(--w) / 600)', height: 'calc(122.9 * var(--w) / 600)', float: 'left', marginRight: 'calc(8.82 * var(--w) / 600)', marginBottom: 'calc(5.88 * var(--w) / 600)', marginTop: 'calc(8 * var(--w) / 600)', }}
                                        />
                                        <p
                                            className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                            style={{ fontSize: 'calc(15.29 * var(--w) / 600)' }}
                                        >
                                            The 60s weren&apos;t just a decade; they were an electric shift. It was the era where the single gave way to the album. Artists began creating <span style={{ fontWeight: 700 }}>albums</span>, a complete journey meant to be heard from Side A to Side B with deep, complex stories that changed how people thought about politics, love, and art. From the sun-drenched melodies of the British Invasion to the psychedelic explorations of the Sunset Strip, the 60s proved that music could be a movement. In basement clubs and massive festivals, artists began to use the studio as an instrument, blending blues, folk, and rock into a sound that felt like the future. When the needle hit those specific records, the world actually felt different.
                                        </p>
                                        <p
                                            className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                            style={{ fontSize: 'calc(15.29 * var(--w) / 600)', marginTop: 'calc(11.76 * var(--w) / 600)' }}
                                        >
                                            At <span style={{ fontWeight: 700 }}>Espresso Groove</span>, we&apos;re starting where the modern ritual began: with the pioneers who taught us how to listen.
                                        </p>
                                    </div>

                                    {/* Gradient Divider */}
                                    <div style={{ height: 'calc(4.352 * var(--w) / 600)', marginTop: 'calc(12.7 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                                    {/* Section 2: The Legends */}
                                    <h3
                                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold"
                                        style={{ fontSize: 'calc(22.7 * var(--w) / 600)', letterSpacing: '0.15em', marginTop: 'calc(14.7 * var(--w) / 600)', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                                    >
                                        The Legends
                                    </h3>

                                    <div style={{ marginTop: 'calc(11.76 * var(--w) / 600)' }}>
                                        <img
                                            src="/images/artwork/60s-revolution-2.png"
                                            alt="60s Revolution guitarist"
                                            className="rounded-lg object-cover"
                                            style={{ width: 'calc(133.5 * var(--w) / 600)', height: 'calc(133.5 * var(--w) / 600)', float: 'right', marginLeft: 'calc(8.82 * var(--w) / 600)', marginBottom: '0px', marginTop: '.88px', marginRight: '2.29px', }}
                                        />
                                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic" style={{ fontSize: 'calc(15.29 * var(--w) / 600)', fontWeight: 700 }}>
                                            The 60<span className="lowercase">s</span> didn&apos;t just change music, <br></br>they changed culture.
                                        </p>

                                        <div style={{ marginTop: 'calc(8.82 * var(--w) / 600)' }}>
                                            <p className="text-white whitespace-nowrap font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(15.29 * var(--w) / 600)', fontWeight: 700 }}>
                                                Bob Dylan - Highway 61 Revisited
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: 'calc(15.29 * var(--w) / 600)' }}>
                                                Turned lyrics into protest, poetry, and the voice of a generation.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: 'calc(7.35 * var(--w) / 600)' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(15.29 * var(--w) / 600)', fontWeight: 700 }}>
                                                Nina Simone - I Put a Spell on You
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: 'calc(15.29 * var(--w) / 600)' }}>
                                                One of the most powerful artistic voices of the civil rights era. Elegant, intense, timeless.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: 'calc(7.35 * var(--w) / 600)' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(15.29 * var(--w) / 600)', fontWeight: 700 }}>
                                                The Beatles - Abbey Road
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: 'calc(15.29 * var(--w) / 600)' }}>
                                                Redefined what an album could be, turning each release into a full sonic experience.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: 'calc(7.35 * var(--w) / 600)' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(15.29 * var(--w) / 600)', fontWeight: 700 }}>
                                                The Beach Boys - Pet Sounds
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: 'calc(15.29 * var(--w) / 600)' }}>
                                                Blended sunshine harmonies with groundbreaking studio experimentation that reshaped pop music forever.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: 'calc(7.35 * var(--w) / 600)' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(15.29 * var(--w) / 600)', fontWeight: 700 }}>
                                                Jimi Hendrix - Electric Ladyland
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: 'calc(15.29 * var(--w) / 600)' }}>
                                                Reinvented the electric guitar with feedback, fire, and fearless experimentation.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: 'calc(7.35 * var(--w) / 600)' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(15.29 * var(--w) / 600)', fontWeight: 700 }}>
                                                The Velvet Underground & Nico
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: 'calc(15.29 * var(--w) / 600)' }}>
                                                Turned art rock into something raw, experimental, and decades ahead of its time.
                                            </p>
                                        </div>

                                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic" style={{ fontSize: 'calc(14.7 * var(--w) / 600)', fontWeight: 700, marginTop: 'calc(11.76 * var(--w) / 600)' }}>
                                            They didn&apos;t play it safe, and decades later, the records still feel alive.
                                        </p>
                                    </div>

                                    {/* Gradient Divider */}
                                    <div style={{ height: '3.352px', marginTop: 'calc(14.7 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                                    {/* Section 3: The Albums */}
                                    <h3
                                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold"
                                        style={{ fontSize: 'calc(18.7 * var(--w) / 600)', letterSpacing: '0.15em', marginTop: 'calc(14.7 * var(--w) / 600)', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                                    >
                                        Records of the Revolution
                                    </h3>

                                    <div className="grid grid-cols-2" style={{ gap: 'calc(8.82 * var(--w) / 600)', marginTop: 'calc(11.76 * var(--w) / 600)', paddingInline: 'calc(20 * var(--w) / 600)' }}>
                                        {[
                                            { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg', title: 'Highway 61 Revisited', artist: 'Bob Dylan' },
                                            { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/18/db/05/18db0507-f276-d93d-a4a7-e856a3f1590a/13UAAIM08283.rgb.jpg/600x600bb.jpg', title: 'I Put a Spell on You', artist: 'Nina Simone' },
                                            { src: '/images/artwork/abbey-road.jpg', title: 'Abbey Road', artist: 'The Beatles' },
                                            { src: '/images/artwork/pet-sounds.jpg', title: 'Pet Sounds', artist: 'The Beach Boys' },
                                            { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/b8/45/a6b84589-6ff7-a462-9ff9-170b724980d5/dj.wjkdwlks.jpg/600x600bb.jpg', title: 'Electric Ladyland', artist: 'Jimi Hendrix' },
                                            { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/92/93/39/9293397f-a707-237e-ec7e-0ca613a67e3c/06UMGIM04143.rgb.jpg/600x600bb.jpg', title: 'The Velvet\nUnderground & Nico', artist: 'The Velvet Underground' },
                                        ].map((album) => (
                                            <div key={album.title} className="text-center">
                                                <img
                                                    src={album.src}
                                                    alt={`${album.title} by ${album.artist}`}
                                                    className="rounded-lg object-cover w-full"
                                                    style={{ aspectRatio: '1' }}
                                                />
                                                <p
                                                    className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold uppercase whitespace-pre-line"
                                                    style={{ fontSize: 'calc(14.76 * var(--w) / 600)', marginTop: 'calc(4.41 * var(--w) / 600)', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
                                                >
                                                    {album.title}
                                                </p>
                                                <p
                                                    className="text-white/60 font-[family-name:var(--font-inter)]"
                                                    style={{ fontSize: 'calc(16.172 * var(--w) / 600)' }}
                                                >
                                                    {album.artist}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Gradient Divider */}
                                    <div style={{ height: '3.352px', marginTop: 'calc(14.7 * var(--w) / 600)', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                                    {/* Section 4: Jazz Lives On */}
                                    <h3
                                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold"
                                        style={{ fontSize: 'calc(22.7 * var(--w) / 600)', letterSpacing: '0.15em', marginTop: 'calc(14.7 * var(--w) / 600)', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                                    >
                                        The Sound Lives On
                                    </h3>

                                    <p
                                        className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                        style={{ fontSize: 'calc(15.29 * var(--w) / 600)', marginTop: 'calc(11.76 * var(--w) / 600)' }}
                                    >
                                        The sound of the 60s never disappeared. It just changed shape. You still hear it in indie guitars, layered harmonies, vintage tones, and artists chasing the same fearless energy that redefined modern music. From Jack White to Tame Impala to The Black Keys, today&apos;s sound still echoes the revolution that changed everything.
                                    </p>

                                    <p
                                        className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                        style={{ fontSize: 'calc(15.29 * var(--w) / 600)', marginTop: 'calc(11.76 * var(--w) / 600)' }}
                                    >
                                        That&apos;s why the 60s are now spinning at Espresso Groove. It was the decade that taught music to break rules, say something real, and make people stop and listen. At Espresso Groove, we believe that great coffee and great records were never meant to be rushed. Sip slowly. Spin something timeless. Stay in the moment.
                                    </p>

                                    <div style={{ paddingTop: 'calc(14.7 * var(--w) / 600)' }} />
                                </div>
                            )}

                            {activeTab === "Vinyl" && (
                                <div style={{ marginTop: 'calc(11.76 * var(--w) / 600)' }}>
                                    {/* Horizontal Scrolling Cards */}
                                    <div
                                        ref={scrollRef}
                                        className="flex overflow-x-auto hide-scrollbar"
                                        style={{ gap: 'calc(11.76 * var(--w) / 600)', marginInline: 'calc(-14.7 * var(--w) / 600)', paddingLeft: 'calc(14.7 * var(--w) / 600)', paddingRight: 'calc(14.7 * var(--w) / 600)', paddingBottom: 'calc(11.76 * var(--w) / 600)' }}
                                    >
                                        {[
                                            { name: "SGT. PEPPER'S", artist: "The Beatles", img: "/images/artwork/sgt-peppers.jpg", stock: 3 },
                                            { name: "ARE YOU EXPERIENCED", artist: "Jimi Hendrix Experience", img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/00/67/45/006745f5-95d5-5a06-35ed-d515e9cfd7d8/dj.tbwlxwoh.jpg/600x600bb.jpg", stock: 1 },
                                            { name: "PET SOUNDS", artist: "The Beach Boys", img: "/images/artwork/pet-sounds.jpg", stock: 5 },
                                            { name: "HIGHWAY 61 REVISITED", artist: "Bob Dylan", img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg", stock: 2 },
                                            { name: "ABBEY ROAD", artist: "The Beatles", img: "/images/artwork/abbey-road.jpg", stock: 4 },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 rounded-xl"
                                                style={{
                                                    width: 'calc(139.658 * var(--w) / 600)',
                                                    paddingTop: '3.528px',
                                                    paddingLeft: '3.528px',
                                                    paddingRight: '3.528px',
                                                    paddingBottom: 'calc(19.11 * var(--w) / 600)',
                                                    background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                                                }}
                                            >
                                                <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                                                    {/* Album Art */}
                                                    <div
                                                        className="bg-[#1a1310] overflow-hidden"
                                                        style={{ width: '100%', height: 'calc(139.658 * var(--w) / 600)' }}
                                                    >
                                                        <img
                                                            src={item.img}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    {/* Info */}
                                                    <div style={{ padding: 'calc(8.82 * var(--w) / 600)' }}>
                                                        <h4
                                                            className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                                                            style={{ fontSize: 'calc(22.17 * var(--w) / 600)' }}
                                                        >
                                                            {item.name}
                                                        </h4>
                                                        <p
                                                            className="text-white/60 font-[family-name:var(--font-inter)] overflow-hidden whitespace-nowrap text-ellipsis"
                                                            style={{ fontSize: 'calc(16.76 * var(--w) / 600)', marginTop: '2.94px' }}
                                                        >
                                                            {item.artist}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Scroll Indicator */}
                                    <div
                                        ref={trackRef}
                                        style={{
                                            marginRight: 'calc(14.7 * var(--w) / 600)',
                                            marginBottom: 'calc(5.88 * var(--w) / 600)',
                                            height: '2.94px',
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            borderRadius: 'calc(999 * var(--w) / 600)',
                                            position: 'relative',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: `${scrollRatio * (100 - thumbWidth)}%`,
                                                width: `${thumbWidth}%`,
                                                height: '100%',
                                                backgroundColor: '#ffffff',
                                                borderRadius: 'calc(999 * var(--w) / 600)',
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === "Limited Press" && (
                                <div style={{ marginTop: 'calc(11.76 * var(--w) / 600)' }}>
                                    {/* Category Label */}
                                    <div style={{ marginInline: 'calc(-14.7 * var(--w) / 600)' }}>
                                        <div
                                            className="bg-[#24ADFF] noisy text-center flex items-center justify-center"
                                            style={{ height: 'calc(50.28 * var(--w) / 600)' }}
                                        >
                                            <span
                                                className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                                                style={{
                                                    fontSize: 'calc(18.7 * var(--w) / 600)',
                                                    letterSpacing: '0.1em',
                                                    textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                                                }}
                                            >
                                                Iced Drinks
                                            </span>
                                        </div>
                                    </div>

                                    {/* Iced Drinks Cards */}
                                    <div style={{ marginInline: 'calc(-14.7 * var(--w) / 600)' }}>
                                        {[
                                            { name: "PURPLE HAZE", desc: "Lemon lavender vanilla latte with butterfly pea cold foam and purple shimmer." },
                                            { name: "SUNDAY MORNING", desc: "Banana vanilla cold brew with sweet cream foam and vanilla wafer crumbles." },
                                            { name: "STRAWBERRY FIELDS", desc: "Strawberry passionfruit refresher with popping pearls." },
                                        ].map((item, index) => (
                                            <div key={`ice-${index}`}>
                                                {index > 0 && <div style={{ height: '0.882px', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                                                <div className="flex" style={{ padding: '8.82px 11.76px', gap: 'calc(8.82 * var(--w) / 600)' }}>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between" style={{ gap: 'calc(5.88 * var(--w) / 600)' }}>
                                                            <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                                                                style={{ fontSize: 'calc(23.758 * var(--w) / 600)', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                                                        </div>
                                                        <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: 'calc(15.878 * var(--w) / 600)', marginTop: '1.47px' }}>{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Spacer */}
                    <div style={{ paddingBottom: 'calc(23.52 * var(--w) / 600)' }} />

                </div>

                <TabletFooter style={{ marginTop: '0px' }} />
            </div>
        </>
    );
}