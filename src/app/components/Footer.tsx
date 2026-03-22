"use client";

import Link from "next/link";
import MusicNotes from "./MusicNotes";

export default function Footer({ style, className }: { style?: React.CSSProperties; className?: string }) {
  return (
    <div style={style} className={className}>
      {/* === Music Notes === */}
      <MusicNotes isPlaying={true} />

      {/* Footer Logo */}
      <img
        src="/images/Expresso groove.svg"
        alt="Espresso Groove"
        className="logo-glow"
        style={{ width: '75vw', marginLeft: '-6vw', marginTop: '0vw'}}
      />

      <div style={{ marginTop: '-7vw'}}>
        {/* Tagline */}
        <p
          className="text-white font-[family-name:var(--font-libre-baskerville)] italic"
          style={{ fontSize: '6.6vw', fontWeight: 900, paddingLeft: '4vw', textShadow: '1px 1px 4px rgba(0,0,0,0.9)',}}
        >
          Drip • Drop • Vibe
        </p>

        {/* Description */}
        <p
          className="text-white font-[family-name:var(--font-libre-baskerville)]"
          style={{ fontSize: '4.2vw', fontWeight: 900, paddingLeft: '4vw', marginTop: '3vw', maxWidth: '65vw', textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}
        >
          A vinyl-fueled coffee shop where coffee meets culture.
        </p>

        {/* === Visit Us === */}
        <h3
          className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
          style={{ fontSize: '5.6vw', letterSpacing: '0.15em', paddingLeft: '4vw', marginTop: '6vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.3)', fontWeight: 700, }}
        >
          Visit Us
        </h3>

        {/* Visit Us Info */}
        <div style={{ paddingLeft: '4vw', marginTop: '3vw' }}>
          {/* Address */}
          <a
            href="https://maps.google.com/?q=Espresso+Groove"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start"
            style={{ gap: '3vw' }}
          >
            <svg className="text-white mt-[1vw] flex-shrink-0" style={{ width: '9vw', height: '9vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p
                className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium"
                style={{ fontSize: '4.5vw' , fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
              >
                3540 Belle Terre Blvd • Unit C
              </p>
              <p
                className="text-white font-[family-name:var(--font-inter)]"
                style={{ fontSize: '4.2vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 700 }}
              >
                Myrtle Beach, SC 29579
              </p>
            </div>
          </a>

          {/* Hours */}
          <div
            className="flex items-start"
            style={{ gap: '3vw', marginTop: '4vw' }}
          >
            <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: '9vw', height: '9vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p
                className="text-white font-[family-name:var(--font-libre-baskerville)]"
                style={{ fontSize: '4.6vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900  }}
              >
                Mon–Fri: 7am–9pm
              </p>
              <p
                className="text-white font-[family-name:var(--font-inter)]"
                style={{ fontSize: '4.2vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 700  }}
              >
                Sat–Sun: 8am–10pm
              </p>
            </div>
          </div>
        </div>

        {/* === Contact Us === */}
        <h3
          className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
          style={{ fontSize: '5.6vw', letterSpacing: '0.15em', paddingLeft: '4vw', marginTop: '6vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.3)', fontWeight: 700,}}
        >
          Contact Us
        </h3>

        {/* Contact Info */}
        <div style={{ paddingLeft: '4vw', marginTop: '3vw' }}>
          {/* Phone */}
          <a
            href="tel:+10000000000"
            className="flex items-center"
            style={{ gap: '3vw' }}
          >
            <svg className="text-white flex-shrink-0" style={{ width: '9vw', height: '9vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p
              className="text-white font-[family-name:var(--font-libre-baskerville)] "
              style={{ fontSize: '4.5vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
            >
              (000) 000-0000
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:espressogroove@gmail.com"
            className="flex items-center"
            style={{ gap: '3vw', marginTop: '4vw' }}
          >
            <svg className="text-white flex-shrink-0" style={{ width: '9vw', height: '9vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p
              className="text-white font-[family-name:var(--font-libre-baskerville)]"
              style={{ fontSize: '4.5vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}
            >
              espressogroove@gmail.com
            </p>
          </a>
        </div>

        {/* === Follow Us === */}
        <h3
          className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
          style={{ fontSize: '5.6vw', letterSpacing: '0.15em', paddingLeft: '4vw', marginTop: '6vw' , textShadow: '2px 2px 8px rgba(0,0,0,0.3)', fontWeight: 700,}}
        >
          Follow Us
        </h3>

        {/* Social Icons */}
        <div className="flex" style={{ gap: '4vw', paddingLeft: '4vw', marginTop: '3vw' }}>
          {/* Instagram */}
          <a href="#" className="border-4 border-white rounded-full flex items-center justify-center text-white" style={{ width: '14vw', height: '14vw' }}>
            <svg style={{ width: '7vw', height: '7vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" className="border-4 border-white rounded-full flex items-center justify-center text-white" style={{ width: '14vw', height: '14vw' }}>
            <svg style={{ width: '7vw', height: '7vw', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className="border-4 border-white rounded-full flex items-center justify-center text-white" style={{ width: '14vw', height: '14vw' }}>
            <svg style={{ width: '7vw', height: '7vw' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col w-full" style={{ marginTop: '8vw' }}>
          <Link href="/menu" className="relative w-full bg-[#f06830] noisy flex items-center justify-center" style={{ height: '16vw', gap: '3vw' }}>
            <img src="/images/menu_cup.svg?v=3" style={{ width: '8vw', height: '8vw', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
              style={{
                fontSize: '5.6vw',
                textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                letterSpacing: '0.1em',
              }}
            >Menu</span>
          </Link>

          <Link href="/vinyl" className="relative w-full bg-[#2a7d7d] noisy flex items-center justify-center" style={{ height: '16vw', gap: '3vw' }}>
            <img src="/images/vinyl-svgrepo-com.svg" style={{ width: '8vw', height: '8vw', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
              style={{
                fontSize: '5.6vw',
                textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                letterSpacing: '0.2em',
              }}
            >Vinyl</span>
          </Link>

          <Link href="/merch" className="relative w-full bg-[#6b4c8c] noisy flex items-center justify-center" style={{ height: '16vw', gap: '3vw' }}>
            <img src="/images/shirt-outline-svgrepo-com.svg" style={{ width: '8vw', height: '8vw', filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))' }} />
            <span
              className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-white"
              style={{
                fontSize: '5.6vw',
                textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                letterSpacing: '0.12em',
              }}
            >Merch</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
