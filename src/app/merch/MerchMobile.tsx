"use client";

import Link from "next/link";
import MobileNav from "../components/MobileNav";

export default function MerchMobile() {
  return (
    <>
      <MobileNav />
      <div className="relative overflow-hidden min-h-screen">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Page Title + Coming Soon */}
          <div className="text-center" style={{ marginTop: '5vw' }}>
            <h1
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '10.7vw',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              }}
            >
              Merch
            </h1>
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
              style={{
                fontSize: '8vw',
                letterSpacing: '0.1em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                marginTop: '3vw',
                display: 'block',
              }}
            >
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
