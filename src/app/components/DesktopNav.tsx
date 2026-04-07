"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DesktopNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past 400px (roughly past the buttons)
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex transition-transform duration-300"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <Link
        href="/menu"
        className="flex-1 bg-[#f06830] noisy flex items-center justify-center"
        style={{ height: '4vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '1.4vw',
            letterSpacing: '0.1em',
            textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
          }}
        >
          Menu
        </span>
      </Link>

      <Link
        href="/vinyl"
        className="flex-1 bg-[#2a7d7d] noisy flex items-center justify-center"
        style={{ height: '4vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '1.4vw',
            letterSpacing: '0.2em',
            textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
          }}
        >
          Vinyl
        </span>
      </Link>

      <Link
        href="/merch"
        className="flex-1 bg-[#6b4c8c] noisy flex items-center justify-center"
        style={{ height: '4vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '1.4vw',
            letterSpacing: '0.12em',
            textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
          }}
        >
          Merch
        </span>
      </Link>

      <Link
        href="/events"
        className="flex-1 bg-[#24ADFF] noisy flex items-center justify-center"
        style={{ height: '4vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '1.4vw',
            letterSpacing: '0.12em',
            textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
          }}
        >
          Events
        </span>
      </Link>

      <Link
        href="/now-spinning"
        className="flex-1 bg-[#6F4E37] noisy flex items-center justify-center"
        style={{ height: '4vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '1.4vw',
            letterSpacing: '0.1em',
            textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
          }}
        >
          Now Spinning
        </span>
      </Link>
    </div>
  );
}
