"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

export default function NowSpinningMobile() {
    const [activeTab, setActiveTab] = useState<string>("Jazz History");
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
            <MobileNav />
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
                    {activeTab === "Jazz History" ? (
                        <>
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/new_background_v2.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }} />
                        </>
                    ) : activeTab === "Featured Sips" ? (
                        <>
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/menu_background_full.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }} />
                        </>
                    ) : (
                        <>
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/menu_background_full.png')", transform: "scaleY(1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }} />
                            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }} />
                        </>
                    )}
                </div>

                {/* Content Layer */}
                <div className="relative z-10">
                    {/* Page Title */}
                    <div className="text-center" style={{ marginTop: '14vw', marginBottom: '6.1vw', }}>
                        <div className="flex items-center justify-center" style={{ gap: '2.3vw', }}>
                            <span className="text-white" style={{ fontSize: '11vw', textShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>★</span>
                            <h1
                                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                                style={{
                                    fontSize: '8.6vw',
                                    fontWeight: 900,
                                    letterSpacing: '-0.02em',
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                    paddingLeft: '1.2vw',

                                }}
                            >
                                Now Spinning
                            </h1>
                        </div>
                    </div>

                    {/* Brown Box */}
                    <div
                        className="rounded-xl"
                        style={{ marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
                    >
                        <div className="rounded-lg overflow-hidden bg-[#2d1f1a]" style={{ padding: '5vw' }}>
                            <p
                                className="font-[family-name:var(--font-libre-baskerville)] text-white"
                                style={{
                                    fontSize: '3.8vw',
                                    lineHeight: '1.7',
                                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                                }}
                            >
                                Every rotation tells a story. We pick a genre, dive deep into the sound, and craft
                                a coffee, tea, and energy drink inspired by the mood behind the music. Explore the
                                genre, sip the lineup, and take home the vinyl that started it all.
                            </p>
                        </div>

                        {/* Gradient Divider */}
                        <div style={{ height: '0.4vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                        {/* Featured Genre Title */}
                        <div className="bg-[#2d1f1a] rounded-b-lg" style={{ padding: '5vw' }}>
                            <h2
                                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center"
                                style={{
                                    fontSize: '5vw',
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

                            {/* Category Boxes */}
                            <div className="flex" style={{ marginTop: '4vw', marginInline: '-5vw' }}>
                                <div className="flex-1 flex justify-center">
                                    <button
                                        onClick={() => setActiveTab("Jazz History")}
                                        className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#f06830]"
                                        style={{
                                            height: '9vw',
                                            width: '28.5vw',
                                            borderRadius: '999px',
                                            border: '2px solid rgba(255,255,255,0.2)',
                                        }}
                                    >
                                        <span
                                            className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                                            style={{
                                                fontSize: '2.7vw',
                                                letterSpacing: '0.02em',
                                                textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                                            }}
                                        >
                                            Jazz History
                                        </span>
                                    </button>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <button
                                        onClick={() => setActiveTab("Featured Sips")}
                                        className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#2a7d7d]"
                                        style={{
                                            height: '9vw',
                                            width: '29vw',
                                            borderRadius: '999px',
                                            border: '2px solid rgba(255,255,255,0.2)',
                                        }}
                                    >
                                        <span
                                            className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                                            style={{
                                                fontSize: '2.7vw',
                                                letterSpacing: '0.02em',
                                                textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                                            }}
                                        >
                                            Featured Sips
                                        </span>
                                    </button>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <button
                                        onClick={() => setActiveTab("Vinyl")}
                                        className="noisy text-center flex items-center justify-center active:scale-95 duration-150 transition-all bg-[#6b4c8c]"
                                        style={{
                                            height: '9vw',
                                            width: '28.5vw',
                                            borderRadius: '999px',
                                            border: '2px solid rgba(255,255,255,0.2)',
                                        }}
                                    >
                                        <span
                                            className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                                            style={{
                                                fontSize: '2.7vw',
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
                                    fontSize: '5vw',
                                    fontWeight: 900,
                                    letterSpacing: '0.15em',
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                    marginTop: '5vw',
                                }}
                            >
                                {activeTab}
                            </h2>

                            {/* Gradient Divider */}
                            <div style={{ height: '0.8vw', marginTop: '3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                            {/* Tab Content */}
                            {activeTab === "Jazz History" && (
                                <div>
                                    {/* Section 1: Origins */}
                                    <div style={{ marginTop: '4vw' }}>
                                        <img
                                            src="/images/artwork/performance.png"
                                            alt="Jazz performance"
                                            className="rounded-lg object-cover"
                                            style={{ width: '35vw', height: '35vw', float: 'left', marginRight: '3vw', marginBottom: '2vw' }}
                                        />
                                        <p
                                            className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                            style={{ fontSize: '4vw' }}
                                        >
                                            In the early 1900s, the streets of New Orleans were alive with a new sound. African rhythms met blues and ragtime to create something entirely new. It wasn&apos;t just music — it was freedom, expression, and revolution all at once. From the brass bands of Congo Square to the smoky clubs of Storyville, jazz was born not on a stage, but in the soul of a city.
                                        </p>
                                        <p
                                            className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                            style={{ fontSize: '4vw', marginTop: '4vw' }}
                                        >
                                            By the 1920s, jazz had migrated north — Chicago, Kansas City, Harlem. It became the soundtrack of speakeasies and the anthem of a generation refusing to sit still. Swing took over the dance halls. Big bands filled ballrooms from coast to coast. The world was moving faster, and jazz was the pulse keeping time.
                                        </p>
                                    </div>

                                    {/* Gradient Divider */}
                                    <div style={{ height: '0.8vw', marginTop: '5vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                                    {/* Section 2: The Legends */}
                                    <h3
                                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold"
                                        style={{ fontSize: '5vw', letterSpacing: '0.15em', marginTop: '5vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                                    >
                                        The Legends
                                    </h3>

                                    <div style={{ marginTop: '4vw' }}>
                                        <img
                                            src="/images/artwork/hands_on_piano.png"
                                            alt="Hands on piano"
                                            className="rounded-lg object-cover"
                                            style={{ width: '40vw', height: '40vw', float: 'right', marginLeft: '3vw', marginBottom: '2vw' }}
                                        />
                                        <p
                                            className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                            style={{ fontSize: '4vw' }}
                                        >
                                            Louis Armstrong didn&apos;t just play the trumpet — he reinvented what it meant to be a soloist. His gravelly voice and fearless improvisation turned jazz from an ensemble art into a platform for individual genius. Then came Duke Ellington, who composed not just songs but entire worlds. His orchestra wasn&apos;t a band — it was a living, breathing instrument.
                                        </p>
                                        <p
                                            className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                            style={{ fontSize: '4vw', marginTop: '4vw' }}
                                        >
                                            Charlie Parker and Dizzy Gillespie shattered every rule in the book with bebop — fast, complex, unapologetic. Thelonious Monk played notes that weren&apos;t supposed to work, and somehow they were the only ones that made sense. Miles Davis refused to stay in one lane, reinventing himself and the genre with every decade — from cool jazz to modal to fusion. And John Coltrane? He turned the saxophone into a prayer, chasing something spiritual that most of us can only feel, never name.
                                        </p>
                                    </div>

                                    {/* Gradient Divider */}
                                    <div style={{ height: '0.8vw', marginTop: '5vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                                    {/* Section 3: The Albums */}
                                    <h3
                                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold"
                                        style={{ fontSize: '5vw', letterSpacing: '0.15em', marginTop: '5vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                                    >
                                        The Records That Defined Jazz
                                    </h3>

                                    <div className="grid grid-cols-2" style={{ gap: '3vw', marginTop: '4vw' }}>
                                        {[
                                            { src: '/images/artwork/kind-of-blue.jpg', title: 'Kind of Blue', artist: 'Miles Davis' },
                                            { src: '/images/artwork/blue-train.jpg', title: 'Blue Train', artist: 'John Coltrane' },
                                            { src: '/images/artwork/a-love-supreme.jpg', title: 'A Love Supreme', artist: 'John Coltrane' },
                                            { src: '/images/artwork/time-out.jpg', title: 'Time Out', artist: 'Dave Brubeck' },
                                            { src: '/images/artwork/maiden-voyage.jpg', title: 'Maiden Voyage', artist: 'Herbie Hancock' },
                                            { src: '/images/artwork/moanin.jpg', title: "Moanin'", artist: 'Art Blakey' },
                                        ].map((album) => (
                                            <div key={album.title} className="text-center">
                                                <img
                                                    src={album.src}
                                                    alt={`${album.title} by ${album.artist}`}
                                                    className="rounded-lg object-cover w-full"
                                                    style={{ aspectRatio: '1' }}
                                                />
                                                <p
                                                    className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold uppercase"
                                                    style={{ fontSize: '4vw', marginTop: '1.5vw', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
                                                >
                                                    {album.title}
                                                </p>
                                                <p
                                                    className="text-white/60 font-[family-name:var(--font-inter)]"
                                                    style={{ fontSize: '3.8vw' }}
                                                >
                                                    {album.artist}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Gradient Divider */}
                                    <div style={{ height: '0.8vw', marginTop: '5vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                                    {/* Section 4: Jazz Lives On */}
                                    <h3
                                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold"
                                        style={{ fontSize: '5vw', letterSpacing: '0.15em', marginTop: '5vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                                    >
                                        Jazz Lives On
                                    </h3>

                                    <p
                                        className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                        style={{ fontSize: '4vw', marginTop: '4vw' }}
                                    >
                                        Jazz never died — it just learned new languages. You hear it in the hip-hop samples that loop Coltrane&apos;s phrases, in the neo-soul that borrows its harmonic warmth, in the lo-fi beats that carry its late-night intimacy. Artists like Robert Glasper, Kamasi Washington, and Nubya Garcia are proving that jazz isn&apos;t a museum piece — it&apos;s a living conversation that keeps finding new voices.
                                    </p>

                                    <p
                                        className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                        style={{ fontSize: '4vw', marginTop: '4vw' }}
                                    >
                                        That&apos;s why we chose jazz as our first rotation. It&apos;s the genre that taught music how to be free — how to listen, respond, and create in the moment. At Espresso Groove, we believe great coffee and great records share the same philosophy: slow down, pay attention, and let the moment move you.
                                    </p>

                                    <div style={{ paddingTop: '5vw' }} />
                                </div>
                            )}

                            {activeTab === "Vinyl" && (
                                <div style={{ marginTop: '4vw' }}>
                                    {/* Horizontal Scrolling Cards */}
                                    <div
                                        ref={scrollRef}
                                        className="flex overflow-x-auto hide-scrollbar"
                                        style={{ gap: '4vw', marginInline: '-5vw', paddingLeft: '5vw', paddingRight: '5vw', paddingBottom: '4vw' }}
                                    >
                                        {[
                                            { name: "KIND OF BLUE", artist: "Miles Davis", img: "/images/artwork/kind-of-blue.jpg", stock: 3 },
                                            { name: "A LOVE SUPREME", artist: "John Coltrane", img: "/images/artwork/a-love-supreme.jpg", stock: 1 },
                                            { name: "HEAD HUNTERS", artist: "Herbie Hancock", img: "/images/artwork/head-hunters.jpg", stock: 5 },
                                            { name: "MINGUS AH UM", artist: "Charles Mingus", img: "/images/artwork/mingus-ah-um.jpg", stock: 2 },
                                            { name: "TIME OUT", artist: "Dave Brubeck", img: "/images/artwork/time-out.jpg", stock: 4 },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
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
                                                            style={{ fontSize: '5.5vw' }}
                                                        >
                                                            {item.name}
                                                        </h4>
                                                        <p
                                                            className="text-white/60 font-[family-name:var(--font-inter)]"
                                                            style={{ fontSize: '4vw', marginTop: '1vw' }}
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
                                            marginRight: '5vw',
                                            marginBottom: '2vw',
                                            height: '1vw',
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            borderRadius: '999px',
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
                                                borderRadius: '999px',
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === "Featured Sips" && (
                                <div style={{ marginTop: '4vw' }}>
                                    {/* Category Labels */}
                                    <div className="flex" style={{ marginInline: '-5vw' }}>
                                        <div
                                            className="flex-1 bg-[#f06830] noisy text-center flex items-center justify-center"
                                            style={{ height: '16vw' }}
                                        >
                                            <span
                                                className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                                                style={{
                                                    fontSize: '3.6vw',
                                                    letterSpacing: '0.07em',
                                                    textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                                                }}
                                            >
                                                Coffee<br />+ Espresso
                                            </span>
                                        </div>
                                        <div
                                            className="flex-1 bg-[#2a7d7d] noisy text-center flex items-center justify-center"
                                            style={{ height: '16vw' }}
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
                                            style={{ height: '16vw' }}
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
                                    <div className="flex" style={{ padding: '5vw 0 0vw 0' }}>
                                        {/* Coffee Card */}
                                        <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw', marginLeft: '-3.5vw' }}>
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
                                        </div>

                                        {/* Energy Card */}
                                        <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw', marginRight: '-3.5vw', }}>
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
                                        </div>
                                    </div>

                                    <div style={{ paddingTop: '3vw' }} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Spacer */}
                    <div style={{ paddingBottom: '8vw' }} />

                    <Footer style={{ marginTop: '0vw' }} />
                </div>
            </div>
        </>
    );
}