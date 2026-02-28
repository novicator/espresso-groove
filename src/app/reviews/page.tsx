"use client";

import { useRouter } from "next/navigation";

const reviews = [
  {
    quote: "Finally, a place in Myrtle Beach that gets it. Can't wait for opening day.",
    author: "Local Music Lover",
    rating: 5,
    date: "Feb 2026"
  },
  {
    quote: "The vibes here are unmatched. Coffee and vinyl? Say less.",
    author: "Coffee Enthusiast",
    rating: 5,
    date: "Feb 2026"
  },
  {
    quote: "Found my new favorite spot. The jazz selection is incredible.",
    author: "Vinyl Collector",
    rating: 5,
    date: "Feb 2026"
  },
  {
    quote: "Best espresso in town, hands down. And the atmosphere is perfect.",
    author: "Regular Customer",
    rating: 5,
    date: "Jan 2026"
  },
  {
    quote: "The Vinyl Latte is a game changer. Smooth with just the right sweetness.",
    author: "Latte Lover",
    rating: 5,
    date: "Jan 2026"
  },
  {
    quote: "Love flipping through records while sipping cold brew. This is the spot.",
    author: "Weekend Regular",
    rating: 5,
    date: "Jan 2026"
  },
  {
    quote: "Staff really knows their music. Got some great recommendations.",
    author: "New Customer",
    rating: 5,
    date: "Jan 2026"
  },
  {
    quote: "Cozy atmosphere, great coffee, incredible vinyl selection. 10/10.",
    author: "First Timer",
    rating: 5,
    date: "Jan 2026"
  },
];

export default function ReviewsPage() {
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
      <header className="bg-[#2a7d7d] py-6 px-4">
        <div className="flex items-center justify-between">
          <button onClick={() => router.back()} className="text-[#e8dcc8] flex items-center gap-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide">Back</span>
          </button>
          <h1 className="text-3xl font-[family-name:var(--font-righteous)] text-[#e8dcc8]">
            Reviews
          </h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-[#2a7d7d] pb-6 px-4">
        <div className="flex items-center justify-center gap-4">
          {/* Stars */}
          <div className="flex gap-1 text-amber-400 text-2xl">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <span className="text-[#e8dcc8] text-3xl font-[family-name:var(--font-bebas-neue)]">5.0</span>
          <span className="text-[#e8dcc8]/70 text-lg font-[family-name:var(--font-inter)]">({reviews.length} reviews)</span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="py-6 px-4 space-y-4">
        {reviews.map((review, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 bg-[#2a7d7d] rounded-full flex items-center justify-center text-[#e8dcc8] font-[family-name:var(--font-bebas-neue)] text-lg">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-inter)] font-semibold text-[#2d1f1a]">
                    {review.author}
                  </p>
                  <p className="text-sm text-[#2d1f1a]/50">
                    {review.date}
                  </p>
                </div>
              </div>
              {/* Stars */}
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <p className="text-[#2d1f1a] font-[family-name:var(--font-libre-baskerville)] italic leading-relaxed">
              "{review.quote}"
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="py-8 px-4 text-center">
        <p className="text-[#2d1f1a]/60 font-[family-name:var(--font-inter)] mb-4">
          Been to Espresso Groove?
        </p>
        <button className="bg-[#2a7d7d] text-[#e8dcc8] px-6 py-3 rounded-full font-[family-name:var(--font-libre-baskerville)] font-bold hover:opacity-90 transition-all">
          Leave a Review
        </button>
      </div>

      {/* Bottom Spacing */}
      <div className="h-8"></div>
      </div>
    </>
  );
}
