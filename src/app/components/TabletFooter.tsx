"use client";

import { useState } from "react";
import Link from "next/link";
import MusicNotes from "./MusicNotes";
import { sendContactForm, type ContactStatus } from "../lib/contact";
import ContactDropdown from "./ContactDropdown";

export default function TabletFooter({ style, className }: { style?: React.CSSProperties; className?: string } = {}) {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<ContactStatus>("idle");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setContactStatus("sending");
    const ok = await sendContactForm(form);
    if (ok) {
      form.reset();
      setContactStatus("success");
    } else {
      setContactStatus("error");
    }
  };

  const openContact = () => {
    setContactStatus("idle");
    setContactOpen(true);
  };

  return (
    <div
      id="site-footer-tablet"
      style={{ ...style, ['--w' as string]: 'min(100vw, 900px)' } as React.CSSProperties}
      className={`relative z-10 ${className ?? ''}`}
    >
      {/* === Music Notes === */}
      <MusicNotes isPlaying={true} size="tablet" />

      {/* Footer Content */}
      <div className="flex" style={{ maxWidth: '950px', margin: '0 auto', paddingInline: 'calc(0.03 * var(--w))', marginTop: 'calc(-0.05 * var(--w))', paddingBottom: 'calc(0.02625 * var(--w))', gap: 0 }}>

        {/* Left: Logo + Tagline (wider) */}
        <div className="flex-[2]" style={{ marginLeft: 'calc(-0.015 * var(--w))'}}>
          <img
            src="/images/Expresso groove.svg"
            alt="Espresso Groove"
            className="logo-glow"
            style={{ width: 'calc(0.355 * var(--w))', marginLeft: 'calc(-0.02125 * var(--w))', marginTop: 'calc(-0.06625 * var(--w))', }}
          />
          <p
            className="text-white font-[family-name:var(--font-libre-baskerville)] italic"
            style={{ fontSize: 'calc(0.03 * var(--w))', fontWeight: 900, paddingLeft: 'calc(0.012 * var(--w))', marginTop: 'calc(-0.0375 * var(--w))', textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}
          >
            Drip • Drop • Vibe
          </p>
        </div>

        {/* Middle: Visit Us + Follow Us */}
        <div className="flex-1" style={{ marginLeft: 'calc(-0.03 * var(--w))' }}>
          <h3
            className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
            style={{ fontSize: 'calc(0.037 * var(--w))', letterSpacing: '0.15em', textShadow: '2px 2px 8px rgba(0,0,0,0.3)', fontWeight: 700, marginTop: 'calc(-0.0025 * var(--w))', marginLeft: 'calc(-0.09 * var(--w))',}}
          >
            Visit Us
          </h3>
          <div style={{ marginTop: 'calc(0.01125 * var(--w))' }}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=3540+Belle+Terre+Blvd,+Suite+C,+Myrtle+Beach,+SC+29526"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start"
              style={{ gap: 'calc(0.00925 * var(--w))' }}
            >
              <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: 'calc(0.04 * var(--w))', height: 'calc(0.04 * var(--w))', marginLeft: 'calc(-0.09 * var(--w))', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6)),' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-white font-[family-name:var(--font-libre-baskerville)] font-medium" style={{ fontSize: 'calc(0.02 * var(--w))', fontWeight: 900, textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                  3540 Belle Terre Blvd • <br></br>Suite C
                </p>
                <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(0.018 * var(--w))', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 700 }}>
                  Myrtle Beach, SC 29526
                </p>
              </div>
            </a>

            <div className="flex items-start" style={{ gap: 'calc(0.0075 * var(--w))', marginTop: 'calc(0.01125 * var(--w))' }}>
              <svg className="text-white mt-0.5 flex-shrink-0" style={{ width: 'calc(0.04 * var(--w))', height: 'calc(0.04 * var(--w))', marginLeft: 'calc(-0.09 * var(--w))', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-white font-[family-name:var(--font-libre-baskerville)]" style={{ fontSize: 'calc(0.021 * var(--w))', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 900 }}>
                  Tue–Fri: 7am–9pm
                </p>
                <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(0.018 * var(--w))', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 700 }}>
                  Sat: 8am-7pm
                </p>
                <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(0.018 * var(--w))', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 700 }}>
                  Sun: 8am–5pm
                </p>
                <p className="text-white font-[family-name:var(--font-inter)]" style={{ fontSize: 'calc(0.018 * var(--w))', textShadow: '2px 2px 8px rgba(0,0,0,0.9)', fontWeight: 700 }}>
                  Monday: Unplugged <br></br>
                  <span style={{ display: 'inline-block', width: 0, verticalAlign: 'top' }}>
                    <span className="whitespace-nowrap">(Flipping the records & prepping the beans.</span>
                  </span>
                  <br></br>
                  <span style={{ display: 'inline-block', width: 0, verticalAlign: 'top' }}>
                    <span className="whitespace-nowrap">See you Tuesday at 7am.)</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Us + Navigate */}
        <div className="flex-1" style={{ marginLeft: 'calc(0.015 * var(--w))',}}>
          {/* Contact Button */}
          <div style={{ marginTop: 0, marginLeft: 'calc(0.03 * var(--w))' }}>
            <button
              type="button"
              onClick={openContact}
              className="rounded-full inline-block"
              style={{ padding: 'calc(0.0035 * var(--w))', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            >
              <div
                className="rounded-full bg-[#2d1f1a] flex items-center justify-center"
                style={{ paddingBlock: 'calc(0.01 * var(--w))', paddingInline: 'calc(0.02625 * var(--w))' }}
              >
                <span
                  className="text-white font-[family-name:var(--font-libre-baskerville)] uppercase whitespace-nowrap"
                  style={{ fontSize: 'calc(0.023 * var(--w))', fontWeight: 900, letterSpacing: '0.1em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Contact Us
                </span>
              </div>
            </button>
          </div>

          {/* Follow Us*/}
          <h3
            className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
            style={{ fontSize: 'calc(0.037 * var(--w))', letterSpacing: '0.15em', marginTop: 'calc(0.03875 * var(--w))', textShadow: '2px 2px 8px rgba(0,0,0,0.3)', fontWeight: 700, marginLeft: 'calc(0.03 * var(--w))', }}
          >
            Follow Us
          </h3>
          <div className="flex" style={{ gap: 'calc(0.01875 * var(--w))', marginTop: 'calc(0.0075 * var(--w))', marginLeft: 'calc(0.03 * var(--w))', }}>
            <a href="https://www.instagram.com/espressogroove/" target="_blank" rel="noopener noreferrer" className="border-5 border-white rounded-full flex items-center justify-center text-white" style={{ width: 'calc(0.07125 * var(--w))', height: 'calc(0.07125 * var(--w))', marginLeft: 'calc(-0.0075 * var(--w))' }}>
              <svg style={{ width: 'calc(0.0325 * var(--w))', height: 'calc(0.0325 * var(--w))', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1CVuQUjhZL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="border-5 border-white rounded-full flex items-center justify-center text-white" style={{ width: 'calc(0.07125 * var(--w))', height: 'calc(0.07125 * var(--w))' }}>
              <svg style={{ width: 'calc(0.0325 * var(--w))', height: 'calc(0.0325 * var(--w))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hidden border-5 border-white rounded-full flex items-center justify-center text-white" style={{ width: 'calc(0.04125 * var(--w))', height: 'calc(0.04125 * var(--w))' }}>
              <svg style={{ width: 'calc(0.0225 * var(--w))', height: 'calc(0.0225 * var(--w))', filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.6))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* === Contact Form Modal === */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.65)', padding: '1.5vw' }}
          onClick={() => setContactOpen(false)}
        >
          <div
            className="rounded-2xl"
            style={{ width: '30vw', padding: '0.1875vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl bg-[#2d1f1a] relative"
              style={{ padding: '1.875vw', maxHeight: '85vh', overflowY: 'auto' }}
            >
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact form"
                className="absolute text-white leading-none cursor-pointer"
                style={{ top: '0.9vw', right: '1.125vw', fontSize: '1.8vw', fontWeight: 700 }}
              >
                &times;
              </button>

              <h4
                className="text-white font-[family-name:var(--font-bebas-neue)] uppercase"
                style={{ fontSize: '1.95vw', letterSpacing: '0.12em', textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}
              >
                Contact Us
              </h4>

              {contactStatus === "success" ? (
                <p
                  className="text-white font-[family-name:var(--font-libre-baskerville)] text-center"
                  style={{ fontSize: '1.2vw', fontWeight: 900, marginTop: '1.875vw', marginBottom: '1.5vw', lineHeight: 1.5 }}
                >
                  Thanks! We&apos;ll be in touch soon.
                </p>
              ) : (
                <form
                  className="flex flex-col"
                  style={{ gap: '0.9vw', marginTop: '1.35vw' }}
                  onSubmit={handleContactSubmit}
                >
                  <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
                  <ContactDropdown size="desktop" />
                  <div className="flex" style={{ gap: '0.9vw' }}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      autoComplete="given-name"
                      className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)]"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '0.75vw', fontSize: '0.975vw' }}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      autoComplete="family-name"
                      className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)]"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '0.75vw', fontSize: '0.975vw' }}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '0.75vw', fontSize: '0.975vw' }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '0.75vw', fontSize: '0.975vw' }}
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    required
                    className="contact-input w-full text-white rounded-lg font-[family-name:var(--font-inter)] resize-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', padding: '0.75vw', fontSize: '0.975vw' }}
                  />
                  {contactStatus === "error" && (
                    <p className="text-center" style={{ color: '#ff9b6b', fontSize: '0.825vw' }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={contactStatus === "sending"}
                    className="rounded-full"
                    style={{ marginTop: '0.45vw', padding: '0.1875vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)', opacity: contactStatus === "sending" ? 0.6 : 1 }}
                  >
                    <div
                      className="rounded-full bg-[#2d1f1a] flex items-center justify-center"
                      style={{ paddingBlock: '0.675vw' }}
                    >
                      <span
                        className="text-white font-[family-name:var(--font-libre-baskerville)] uppercase"
                        style={{ fontSize: '1.125vw', fontWeight: 900, letterSpacing: '0.12em' }}
                      >
                        {contactStatus === "sending" ? "Sending..." : "Send"}
                      </span>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
