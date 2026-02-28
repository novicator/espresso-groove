"use client";

import { useRouter } from "next/navigation";

export default function JazzPage() {
  const router = useRouter();
  
  return (
    <>
      {/* Desktop/Tablet Coming Soon Screen */}
      <div className="hidden md:flex min-h-screen bg-[#2d1f1a] items-center justify-center">
        <div className="text-center px-8">
          <h1 className="text-6xl font-[family-name:var(--font-righteous)] text-[#e8dcc8] mb-4">
            Coming Soon
          </h1>
          <p className="text-xl text-[#e8dcc8]/70 font-[family-name:var(--font-inter)] max-w-md mx-auto">
            Our desktop experience is brewing. For now, visit us on mobile.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#c4470a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#2a7d7d]"></div>
            <div className="w-3 h-3 rounded-full bg-[#e8dcc8]"></div>
          </div>
        </div>
      </div>

      {/* Mobile Site */}
      <div className="md:hidden min-h-screen bg-[#e8dcc8] font-[family-name:var(--font-inter)]">
      {/* Header */}
      <header className="bg-[#2d1f1a] pt-6 pb-10 px-4">
        <div className="flex items-center justify-between">
          <button onClick={() => router.back()} className="text-[#e8dcc8] flex items-center gap-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide">Back</span>
          </button>
          <h1 className="text-2xl translate-y-[30px] font-[family-name:var(--font-righteous)] text-[#e8dcc8]">
            Genre Spotlight
          </h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#2d1f1a] pb-10 px-6 text-center">
        <h2 className="text-4xl font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8dcc8]">
          The Roots of Jazz
        </h2>
        <p className="mt-4 text-[#e8dcc8]/70 font-[family-name:var(--font-inter)] max-w-md mx-auto">
          Born in New Orleans, jazz revolutionized music and gave voice to a generation.
        </p>
      </section>

      {/* Content */}
      <section className="py-10 px-6">
        {/* Origins */}
        <div className="mb-10">
          <h3 className="text-2xl font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-wide mb-4">
            WHERE IT ALL BEGAN
          </h3>
          <p className="text-[#2d1f1a]/80 font-[family-name:var(--font-inter)] leading-relaxed mb-4">
            In the early 1900s, the streets of New Orleans were alive with a new sound. African rhythms collided with blues, ragtime, and brass band marches to create something the world had never heard before: jazz.
          </p>
          <p className="text-[#2d1f1a]/80 font-[family-name:var(--font-inter)] leading-relaxed">
            It wasn't just music. It was freedom. Improvisation was the heart of jazz, a radical idea that let musicians express themselves in the moment, breaking free from rigid classical structures.
          </p>
        </div>

        {/* Legends */}
        <div className="mb-10">
          <h3 className="text-2xl font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-wide mb-4">
            THE LEGENDS
          </h3>
          <div className="space-y-4">
            {[
              { name: "Miles Davis", desc: "The prince of darkness who never stopped evolving. From bebop to cool jazz to fusion, Miles was always ahead." },
              { name: "John Coltrane", desc: "A spiritual seeker whose saxophone became a vessel for transcendence. 'A Love Supreme' remains a masterpiece." },
              { name: "Ella Fitzgerald", desc: "The First Lady of Song. Her voice could swing, scat, and soar with unmatched grace." },
              { name: "Louis Armstrong", desc: "The founding father. His trumpet and gravelly voice defined what jazz could be." },
              { name: "Thelonious Monk", desc: "The eccentric genius. His angular melodies and unexpected silences changed piano forever." },
            ].map((legend, i) => (
              <div key={i} className="bg-[#2d1f1a] rounded-xl p-4">
                <h4 className="text-xl font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] tracking-wide">
                  {legend.name}
                </h4>
                <p className="text-[#e8dcc8]/70 font-[family-name:var(--font-inter)] text-sm mt-1">
                  {legend.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-10">
          <h3 className="text-2xl font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-wide mb-4">
            WHY IT MATTERS TODAY
          </h3>
          <p className="text-[#2d1f1a]/80 font-[family-name:var(--font-inter)] leading-relaxed mb-4">
            Jazz didn't just influence music. It shaped culture. Hip-hop samples jazz. Neo-soul lives in its harmonies. Lo-fi beats borrow its warmth. The improvisation that defined jazz lives on in freestyle rap and jam bands.
          </p>
          <p className="text-[#2d1f1a]/80 font-[family-name:var(--font-inter)] leading-relaxed">
            At Espresso Groove, we celebrate this legacy. Our jazz collection features classics and modern interpretations. The perfect soundtrack to your morning cup.
          </p>
        </div>

        {/* Featured Vinyl */}
        <div className="mb-6">
          <h3 className="text-2xl font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-wide mb-4">
            FEATURED JAZZ VINYL
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[
              { title: "KIND OF BLUE", artist: "Miles Davis", price: "$29.99" },
              { title: "A LOVE SUPREME", artist: "John Coltrane", price: "$31.99" },
              { title: "BLUE TRAIN", artist: "John Coltrane", price: "$28.99" },
              { title: "MINGUS AH UM", artist: "Charles Mingus", price: "$27.99" },
            ].map((vinyl, i) => (
              <div key={i} className="flex-shrink-0 w-[150px] bg-[#2d1f1a] rounded-xl overflow-hidden">
                <div className="w-full h-[150px] bg-[#1a1310] flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 56 56" className="text-[#e8dcc8] opacity-40">
                    <circle cx="28" cy="28" r="26" fill="currentColor" />
                    <circle cx="28" cy="28" r="8" fill="#c4470a" />
                    <circle cx="28" cy="28" r="2" fill="#1a1310" />
                  </svg>
                </div>
                <div className="p-3">
                  <h4 className="text-[16px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] leading-tight">
                    {vinyl.title}
                  </h4>
                  <p className="text-[13px] text-[#e8dcc8]/60 font-[family-name:var(--font-inter)] mt-1">
                    {vinyl.artist}
                  </p>
                  <p className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#c4470a] mt-2">
                    {vinyl.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a 
            href="/menu?tab=vinyl" 
            className="inline-block bg-[#2a7d7d] text-[#e8dcc8] px-8 py-3 rounded-full font-[family-name:var(--font-libre-baskerville)] text-lg font-bold hover:opacity-90 transition-all"
          >
            Browse All Jazz Vinyl
          </a>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-8"></div>
      </div>
    </>
  );
}
