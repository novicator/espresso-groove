"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

export default function NowSpinningMobile() {
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
                    {activeTab === "Behind the Groove" ? (
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
                    ) : activeTab === "Limited Press" ? (
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
                    <div className="text-center" style={{ marginTop: '14vw', marginBottom: '6.1vw' }}>
                        <div className="flex items-center justify-center" style={{ gap: '3.1vw' }}>
                            <h1
                                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
                                style={{
                                    fontSize: '10vw',
                                    fontWeight: 900,
                                    letterSpacing: '-0.02em',
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                    marginTop: '3vw',
                                }}
                            >
                                Now Spinning
                            </h1>
                        </div>
                        <p
                            className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
                            style={{
                                fontSize: '6.2vw',
                                fontWeight: 900,
                                letterSpacing: '0.2em',
                                marginTop: '0vw',
                                textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
                            }}
                        >
                            Drip • Drop • Vibe
                        </p>
                    </div>

                    {/* Brown Box */}
                    <div
                        className="rounded-xl"
                        style={{ marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
                    >
                        <div className="rounded-lg overflow-hidden bg-[#2d1f1a]" style={{ padding: '5vw' }}>
                            <p
                                className="font-[family-name:var(--font-libre-baskerville)] text-white text-center font-bold uppercase"
                                style={{
                                    fontSize: '6vw',
                                    letterSpacing: '0.1em',
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                }}
                            >
                                The Drop
                            </p>
                            <p
                                className="font-[family-name:var(--font-libre-baskerville)] text-white"
                                style={{
                                    fontSize: '3.8vw',
                                    lineHeight: '1.7',
                                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                                    marginTop: '3vw',
                                }}
                            >
                                Every rotation tells a story. We pick a genre, dive deep into the sound, and craft coffee, tea, and energy/boba drinks inspired by the mood behind the music.
                            </p>
                            <p
                                className="font-[family-name:var(--font-libre-baskerville)] text-white text-center italic"
                                style={{
                                    fontSize: '3.8vw',
                                    lineHeight: '1.7',
                                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                                    marginTop: '3vw',
                                    fontWeight: 700,
                                }}
                            >
                                Sip the drinks. Spin the Vinyl. Stay for the vibe.
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
                                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase whitespace-nowrap"
                                    style={{
                                        fontSize: '6.3vw',
                                        textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                                        fontWeight: 900,
                                    }}
                                >
                                    60<span className="lowercase">s</span> Revolution
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
                                        onClick={() => setActiveTab("Behind the Groove")}
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
                                            Behind the Groove
                                        </span>
                                    </button>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <button
                                        onClick={() => setActiveTab("Limited Press")}
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
                                            Limited Press
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
                            {activeTab === "Behind the Groove" && (
                                <div>
                                    {/* Section 1: Origins */}
                                    <div style={{ marginTop: '4vw' }}>
                                        <img
                                            src="/images/artwork/60s-revolution.png"
                                            alt="60s Revolution turntable"
                                            className="rounded-lg object-cover"
                                            style={{ width: '35vw', height: '35vw', float: 'left', marginRight: '3vw', marginBottom: '2vw' }}
                                        />
                                        <p
                                            className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                            style={{ fontSize: '3.5vw' }}
                                        >
                                            The 60s weren&apos;t just a decade; they were an electric shift. It was the era where the single gave way to the album. Artists began creating <span style={{ fontWeight: 700 }}>albums</span>, a complete journey meant to be heard from Side A to Side B with deep, complex stories that changed how people thought about politics, love, and art. From the sun-drenched melodies of the British Invasion to the psychedelic explorations of the Sunset Strip, the 60s proved that music could be a movement. In basement clubs and massive festivals, artists began to use the studio as an instrument, blending blues, folk, and rock into a sound that felt like the future. When the needle hit those specific records, the world actually felt different.
                                        </p>
                                        <p
                                            className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                            style={{ fontSize: '3.5vw', marginTop: '4vw' }}
                                        >
                                            At <span style={{ fontWeight: 700 }}>Espresso Groove</span>, we&apos;re starting where the modern ritual began: with the pioneers who taught us how to listen.
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
                                            src="/images/artwork/60s-revolution-2.png"
                                            alt="60s Revolution guitarist"
                                            className="rounded-lg object-cover"
                                            style={{ width: '25vw', height: '25vw', float: 'right', marginLeft: '3vw', marginBottom: '0vw', marginTop: '-2vw', marginRight: '-3.5vw', }}
                                        />
                                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic" style={{ fontSize: '3.5vw', fontWeight: 700 }}>
                                            The 60<span className="lowercase">s</span> didn&apos;t just change music, they changed culture.
                                        </p>

                                        <div style={{ marginTop: '3vw' }}>
                                            <p className="text-white whitespace-nowrap font-[family-name:var(--font-inter)]" style={{ fontSize: '3.5vw', fontWeight: 700 }}>
                                                Bob Dylan - Highway 61 Revisited
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '3.5vw' }}>
                                                Turned lyrics into protest, poetry, and the voice of a generation.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: '2.5vw' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '3.5vw', fontWeight: 700 }}>
                                                Nina Simone - I Put a Spell on You
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '3.5vw' }}>
                                                One of the most powerful artistic voices of the civil rights era. Elegant, intense, timeless.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: '2.5vw' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '3.5vw', fontWeight: 700 }}>
                                                The Beatles - Abbey Road
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '3.5vw' }}>
                                                Redefined what an album could be, turning each release into a full sonic experience.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: '2.5vw' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '3.5vw', fontWeight: 700 }}>
                                                The Beach Boys - Pet Sounds
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '3.5vw' }}>
                                                Blended sunshine harmonies with groundbreaking studio experimentation that reshaped pop music forever.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: '2.5vw' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '3.5vw', fontWeight: 700 }}>
                                                Jimi Hendrix - Electric Ladyland
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '3.5vw' }}>
                                                Reinvented the electric guitar with feedback, fire, and fearless experimentation.
                                            </p>
                                        </div>

                                        <div style={{ marginTop: '2.5vw' }}>
                                            <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: '3.5vw', fontWeight: 700 }}>
                                                The Velvet Underground & Nico
                                            </p>
                                            <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed" style={{ fontSize: '3.5vw' }}>
                                                Turned art rock into something raw, experimental, and decades ahead of its time.
                                            </p>
                                        </div>

                                        <p className="text-white font-[family-name:var(--font-inter)] leading-relaxed italic" style={{ fontSize: '3.5vw', fontWeight: 700, marginTop: '4vw' }}>
                                            They didn&apos;t play it safe, and decades later, the records still feel alive.
                                        </p>
                                    </div>

                                    {/* Gradient Divider */}
                                    <div style={{ height: '0.8vw', marginTop: '5vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />

                                    {/* Section 3: The Albums */}
                                    <h3
                                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase text-center font-bold"
                                        style={{ fontSize: '5vw', letterSpacing: '0.15em', marginTop: '5vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                                    >
                                        Records of the Revolution
                                    </h3>

                                    <div className="grid grid-cols-2" style={{ gap: '3vw', marginTop: '4vw' }}>
                                        {[
                                            { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg', title: 'Highway 61 Revisited', artist: 'Bob Dylan' },
                                            { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/18/db/05/18db0507-f276-d93d-a4a7-e856a3f1590a/13UAAIM08283.rgb.jpg/600x600bb.jpg', title: 'I Put a Spell on You', artist: 'Nina Simone' },
                                            { src: '/images/artwork/abbey-road.jpg', title: 'Abbey Road', artist: 'The Beatles' },
                                            { src: '/images/artwork/pet-sounds.jpg', title: 'Pet Sounds', artist: 'The Beach Boys' },
                                            { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/b8/45/a6b84589-6ff7-a462-9ff9-170b724980d5/dj.wjkdwlks.jpg/600x600bb.jpg', title: 'Electric Ladyland', artist: 'Jimi Hendrix' },
                                            { src: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/92/93/39/9293397f-a707-237e-ec7e-0ca613a67e3c/06UMGIM04143.rgb.jpg/600x600bb.jpg', title: 'The Velvet Underground & Nico', artist: 'The Velvet Underground' },
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
                                        The Sound Lives On
                                    </h3>

                                    <p
                                        className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                        style={{ fontSize: '4vw', marginTop: '4vw' }}
                                    >
                                        The sound of the 60s never went away, it just learned new instruments. You hear it in the indie bands chasing Lennon&apos;s vocal harmonies, in the producers sampling Page&apos;s riffs, in the festival lineups still built on the blueprint Woodstock drew up. From Jack White to Tame Impala to Arctic Monkeys, an entire generation of artists is still mining the records cut between 1964 and 1971.
                                    </p>

                                    <p
                                        className="text-white font-[family-name:var(--font-inter)] leading-relaxed"
                                        style={{ fontSize: '4vw', marginTop: '4vw' }}
                                    >
                                        That&apos;s why we chose the 60s as our first rotation. It&apos;s the decade that taught music how to take chances, to mean something, to make the room stop and listen. At Espresso Groove, we believe great coffee and great records share the same philosophy: slow down, pay attention, and let the moment move you.
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

                            {activeTab === "Limited Press" && (
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
                                        </div>

                                        {/* Tea Card */}
                                        <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
                                            <span
                                                className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                                                style={{ fontSize: '4.5vw' }}
                                            >
                                                Coltrane Chai
                                            </span>
                                        </div>

                                        {/* Energy Card */}
                                        <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw', marginRight: '-3.5vw', }}>
                                            <span
                                                className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                                                style={{ fontSize: '4.5vw' }}
                                            >
                                                Bebop Blast
                                            </span>
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