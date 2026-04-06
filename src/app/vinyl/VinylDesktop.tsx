"use client";

import Footer from "../components/Footer";

export default function VinylDesktop() {
  return (
    <div className="relative" style={{ backgroundColor: '#2d1f1a', overflow: 'hidden' }}>

      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/background_v2.png')" }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/new_background_v2.png')" }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/vibe_background.png')" }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
        />
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/vibe_background.png')" }}
        />
      </div>

      {/* === CONTENT LAYER === */}
      <div className="relative z-10">
        <div className="h-screen flex items-center justify-center">
          <span className="text-white text-4xl font-[family-name:var(--font-libre-baskerville)]">
            Vinyl desktop layout coming soon
          </span>
        </div>

        <Footer />
      </div>

    </div>
  );
}
