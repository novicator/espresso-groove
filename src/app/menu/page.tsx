"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const coffeeMenu = [
  { name: "HOUSE BLEND", desc: "Rich, smooth, everyday classic", price: "$3.50", category: "Drip" },
  { name: "ESPRESSO", desc: "Bold and concentrated", price: "$2.75", category: "Espresso" },
  { name: "CAPPUCCINO", desc: "Espresso with steamed milk foam", price: "$4.50", category: "Espresso" },
  { name: "VINYL LATTE", desc: "Our signature — hints of vanilla & caramel", price: "$5.75", category: "Lattes" },
  { name: "COLD BREW", desc: "Slow-steeped for 24 hours", price: "$4.25", category: "Cold Brew" },
  { name: "MOCHA GROOVE", desc: "Espresso meets rich chocolate", price: "$5.50", category: "Lattes" },
  { name: "AMERICANO", desc: "Espresso with hot water", price: "$3.25", category: "Espresso" },
  { name: "MATCHA LATTE", desc: "Ceremonial grade matcha, oat milk", price: "$5.50", category: "Matcha" },
  { name: "CHAI LATTE", desc: "Spiced chai with steamed milk", price: "$5.00", category: "Tea" },
  { name: "HOT CHOCOLATE", desc: "Rich Belgian chocolate", price: "$4.00", category: "Seasonal" },
  { name: "POUR OVER", desc: "Single origin, made to order", price: "$5.00", category: "Drip" },
  { name: "NITRO COLD BREW", desc: "Creamy, cascading cold brew on tap", price: "$5.25", category: "Cold Brew" },
];

const vinylMenu = [
  { name: "RUMOURS", artist: "Fleetwood Mac", price: "$32.99", genre: "Rock" },
  { name: "ABBEY ROAD", artist: "The Beatles", price: "$34.99", genre: "Rock" },
  { name: "DARK SIDE OF THE MOON", artist: "Pink Floyd", price: "$29.99", genre: "Rock" },
  { name: "THRILLER", artist: "Michael Jackson", price: "$27.99", genre: "Pop" },
  { name: "BACK TO BLACK", artist: "Amy Winehouse", price: "$31.99", genre: "Jazz" },
  { name: "RANDOM ACCESS MEMORIES", artist: "Daft Punk", price: "$39.99", genre: "Electronic" },
  { name: "KIND OF BLUE", artist: "Miles Davis", price: "$29.99", genre: "Jazz" },
  { name: "BLUE TRAIN", artist: "John Coltrane", price: "$28.99", genre: "Jazz" },
  { name: "NEVERMIND", artist: "Nirvana", price: "$26.99", genre: "Rock" },
  { name: "THE MISEDUCATION OF LAURYN HILL", artist: "Lauryn Hill", price: "$34.99", genre: "Hip-Hop" },
  { name: "LOVELESS", artist: "My Bloody Valentine", price: "$44.99", genre: "Shoegaze" },
  { name: "HOMEWORK", artist: "Daft Punk", price: "$36.99", genre: "Electronic" },
];

function MenuContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'coffee' | 'vinyl'>(
    tabParam === 'vinyl' ? 'vinyl' : 'coffee'
  );

  // Update tab when URL changes
  useEffect(() => {
    if (tabParam === 'vinyl') setActiveTab('vinyl');
    else if (tabParam === 'coffee') setActiveTab('coffee');
  }, [tabParam]);

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
          <h1 className="translate-y-[25px] text-3xl font-[family-name:var(--font-righteous)] text-[#e8dcc8]">
            Our Menu
          </h1>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Tab Buttons */}
      <div className="bg-[#2d1f1a] pb-6 px-4">
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setActiveTab('coffee')}
            className={`px-6 py-3 rounded-full font-[family-name:var(--font-luckiest-guy)] text-lg tracking-wide transition-all ${
              activeTab === 'coffee'
                ? 'bg-[#c4470a] text-[#e8dcc8]'
                : 'bg-[#e8dcc8]/10 text-[#e8dcc8]/70 hover:bg-[#e8dcc8]/20'
            }`}
          >
            <span className="translate-y-[2px] inline-block">COFFEE</span>
          </button>
          <button
            onClick={() => setActiveTab('vinyl')}
            className={`px-6 py-3 rounded-full font-[family-name:var(--font-luckiest-guy)] text-lg tracking-wide transition-all ${
              activeTab === 'vinyl'
                ? 'bg-[#c4470a] text-[#e8dcc8]'
                : 'bg-[#e8dcc8]/10 text-[#e8dcc8]/70 hover:bg-[#e8dcc8]/20'
            }`}
          >
            <span className="translate-y-[2px] inline-block">VINYL</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="py-6 px-4">
        {activeTab === 'coffee' ? (
          <div className="space-y-4">
            {coffeeMenu.map((item, index) => (
              <div 
                key={index}
                className="bg-[#2d1f1a] rounded-xl p-4 flex gap-4"
              >
                {/* Image Placeholder */}
                <div className="w-20 h-20 bg-[#1a1310] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="40" height="32" viewBox="0 0 56 40" className="text-[#e8dcc8] opacity-40">
                    <path d="M8 15 L12 38 L38 38 L42 15 Z" fill="currentColor"/>
                    <path d="M42 18 Q52 18 52 26 Q52 34 42 34" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M20 10 Q22 5 20 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
                    <path d="M30 12 Q32 6 30 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
                  </svg>
                </div>
                
                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-[12px] px-2 py-1 bg-[#e8dcc8]/10 rounded-full text-[#e8dcc8]/60 font-[family-name:var(--font-inter)] whitespace-nowrap">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#e8dcc8]/60 font-[family-name:var(--font-inter)] mt-1">
                      {item.desc}
                    </p>
                  </div>
                  <p className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#c4470a] mt-2">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {vinylMenu.map((item, index) => (
              <div 
                key={index}
                className="bg-[#2d1f1a] rounded-xl p-4 flex gap-4"
              >
                {/* Image Placeholder */}
                <div className="w-20 h-20 bg-[#1a1310] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="40" height="40" viewBox="0 0 56 56" className="text-[#e8dcc8] opacity-40">
                    <circle cx="28" cy="28" r="26" fill="currentColor" />
                    <circle cx="28" cy="28" r="20" fill="none" stroke="#1a1310" strokeWidth="1" opacity="0.3" />
                    <circle cx="28" cy="28" r="16" fill="none" stroke="#1a1310" strokeWidth="1" opacity="0.3" />
                    <circle cx="28" cy="28" r="12" fill="none" stroke="#1a1310" strokeWidth="1" opacity="0.3" />
                    <circle cx="28" cy="28" r="8" fill="#c4470a" />
                    <circle cx="28" cy="28" r="2" fill="#1a1310" />
                  </svg>
                </div>
                
                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-[12px] px-2 py-1 bg-[#e8dcc8]/10 rounded-full text-[#e8dcc8]/60 font-[family-name:var(--font-inter)] whitespace-nowrap">
                        {item.genre}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#e8dcc8]/60 font-[family-name:var(--font-inter)] mt-1">
                      {item.artist}
                    </p>
                  </div>
                  <p className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#c4470a] mt-2">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Spacing */}
      <div className="h-8"></div>
      </div>
    </>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#e8dcc8]"></div>}>
      <MenuContent />
    </Suspense>
  );
}
