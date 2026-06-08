"use client";

import Link from "next/link";
import TabletNav from "../components/TabletNav";

export default function MerchTablet() {
  return (
    <>
      <TabletNav />
      <div className="relative overflow-hidden min-h-screen">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div
            className="h-screen bg-[length:100%_100%]"
            style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 min-h-screen flex flex-col" style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Page Title + Coming Soon */}
          <div className="text-center" style={{ marginTop: '105.8px' }}>
            <h1
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '49.458px',
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
                fontSize: '40.52px',
                letterSpacing: '0.1em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                marginTop: '8.82px',
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
