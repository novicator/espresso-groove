"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileNav({ onShow, hideOnTop }: { onShow?: () => void; hideOnTop?: boolean } = {}) {
  const [visible, setVisible] = useState(!hideOnTop);

  useEffect(() => {
    if (hideOnTop) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      onShow?.();
    }
  }, [hideOnTop, onShow]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex transition-transform duration-300"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <Link
        href="/"
        onClick={(e) => {
          if (typeof window !== 'undefined' && window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="flex-[0.6] bg-white noisy flex items-center justify-center"
        style={{ height: '10vw' }}
      >
        <svg style={{ width: '5vw', height: '5vw' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="home-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f06830" />
              <stop offset="50%" stopColor="#2a7d7d" />
              <stop offset="100%" stopColor="#6b4c8c" />
            </linearGradient>
          </defs>
          <path
            d="M3 11L12 3L21 11V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V11Z"
            fill="url(#home-gradient-mobile)"
            stroke="url(#home-gradient-mobile)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <Link
        href="/menu"
        className="flex-1 bg-[#f06830] noisy flex items-center justify-center"
        style={{ height: '10vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '2.6vw',
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
        style={{ height: '10vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '2.6vw',
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
        style={{ height: '10vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '2.6vw',
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
        style={{ height: '10vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '2.6vw',
            letterSpacing: '0.12em',
            textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
          }}
        >
          Events
        </span>
      </Link>

      <Link
        href="/now-spinning"
        className="flex-[1.4] bg-[#6F4E37] noisy flex flex-col items-center justify-center"
        style={{ height: '10vw' }}
      >
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '2.5vw',
            letterSpacing: '0.1em',
            lineHeight: 1,
            textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
          }}
        >
          Now
        </span>
        <span
          className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
          style={{
            fontSize: '2.5vw',
            letterSpacing: '0.1em',
            lineHeight: 1.2,
            textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
          }}
        >
          Spinning
        </span>
      </Link>
    </div>
  );
}
