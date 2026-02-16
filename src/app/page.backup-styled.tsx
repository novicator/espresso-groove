"use client";

import { useState, useRef, useEffect } from "react";
import VinylPlayer, { VinylPlayerRef } from "./components/VinylPlayer";
import MusicNotes from "./components/MusicNotes";

const coffeeMenu = [
  { name: "HOUSE BLEND", desc: "Rich, smooth, everyday classic", price: "$3.50" },
  { name: "ESPRESSO", desc: "Bold and concentrated", price: "$2.75" },
  { name: "CAPPUCCINO", desc: "Espresso with steamed milk foam", price: "$4.50" },
  { name: "VINYL LATTE", desc: "Our signature — hints of vanilla & caramel", price: "$5.75" },
  { name: "COLD BREW", desc: "Slow-steeped for 24 hours", price: "$4.25" },
  { name: "MOCHA GROOVE", desc: "Espresso meets rich chocolate", price: "$5.50" },
];

const vinylMenu = [
  { name: "RUMOURS", artist: "Fleetwood Mac", price: "$32.99" },
  { name: "ABBEY ROAD", artist: "The Beatles", price: "$34.99" },
  { name: "DARK SIDE OF THE MOON", artist: "Pink Floyd", price: "$29.99" },
  { name: "THRILLER", artist: "Michael Jackson", price: "$27.99" },
  { name: "BACK TO BLACK", artist: "Amy Winehouse", price: "$31.99" },
  { name: "RANDOM ACCESS MEMORIES", artist: "Daft Punk", price: "$39.99" },
];

const testimonials = [
  {
    quote: "Finally, a place in Myrtle Beach that gets it. Can't wait for opening day.",
    author: "Local Music Lover"
  },
  {
    quote: "The vibes here are unmatched. Coffee and vinyl? Say less.",
    author: "Coffee Enthusiast"
  },
  {
    quote: "Found my new favorite spot. The jazz selection is incredible.",
    author: "Vinyl Collector"
  },
  {
    quote: "Best espresso in town, hands down. And the atmosphere is perfect.",
    author: "Regular Customer"
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vinylPlaying, setVinylPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState<'coffee' | 'vinyl'>('coffee');
  const vinylRef = useRef<VinylPlayerRef>(null);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsSliding(false);
      }, 800); // Slide animation duration
    }, 6000); // Display time between slides

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#e8dcc8] font-[family-name:var(--font-inter)]">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#e8dcc8] shadow-md z-40">
        <div className="px-5 py-5 flex items-center">
          {/* Left Side - Hamburger + Logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#2d1f1a]"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Logo */}
            <img src="/images/espresso-groove-text.png" alt="Espresso Groove" className="h-12 ml-3 w-auto" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-8 relative min-h-[550px]">
        <h1 className="mt-6 text-[40px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#2d1f1a] leading-[1.1] tracking-tight">
          Where Coffee<br />
          Meets Culture
        </h1>
        
        <p className="mt-2 text-[22px] font-[family-name:var(--font-inter)] font-semibold text-[#2d1f1a] tracking-[0.2em] uppercase">
          Drip • Drop • Vibe.
        </p>
        <p className="mt-0 text-[16px] font-[family-name:var(--font-inter)] font-medium text-[#2d1f1a] tracking-[0.25em] uppercase">
          Coffee • Vinyl • Culture
        </p>

        {/* Vinyl Player - LOCKED POSITION */}
        <div className="absolute top-[190px] left-[-80px]">
          <div className="-mt-[10px]">
            <VinylPlayer ref={vinylRef} onPlayChange={setVinylPlaying} />
            
            {/* Controls - under vinyl */}
            {/* Music Notes - positioned relative to vinyl */}
            <div className="absolute top-[170px] left-[200px]">
              <MusicNotes isPlaying={vinylPlaying} />
            </div>

            {/* NOW PLAYING Card */}
            <div 
              className="absolute top-[205px] left-[265px] w-[180px] border-2 border-[#2d1f1a] rounded-2xl overflow-hidden"
              style={{ 
                opacity: vinylPlaying ? 1 : 0,
                transform: vinylPlaying ? 'translateX(0)' : 'translateX(200px)',
                transition: 'all 0.8s ease-out'
              }}
            >
              {/* Top section - NOW PLAYING */}
              <div className="bg-[#2d1f1a] py-1 flex items-center justify-center">
                <p 
                  className="text-[18px] font-[family-name:var(--font-righteous)] text-[#e8dcc8]"
                >
                  Now Playing
                </p>
              </div>
              
              {/* Divider */}
              <div className="h-[2px] bg-[#e8dcc8]"></div>
              
              {/* Bottom section - ESPRESSO GROOVE */}
              <div className="bg-[#2d1f1a] py-1 flex items-center justify-center">
                <p 
                  className="text-[18px] font-[family-name:var(--font-righteous)] text-[#e8dcc8]"
                >
                  Espresso Groove
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NOW SPINNING Section */}
        <div 
          className="mt-[250px] mx-0 border-2 border-[#2d1f1a] rounded-2xl overflow-hidden"
          style={{ 
            opacity: vinylPlaying ? 1 : 0,
            transform: vinylPlaying ? 'translateY(0)' : 'translateY(200px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: vinylPlaying ? '0.6s' : '0s'
          }}
        >
          {/* Header */}
          <div className="bg-[#2d1f1a] py-1 flex items-center justify-center">
            <p 
              className="text-[30px] font-[family-name:var(--font-righteous)] text-[#e8dcc8]"
            >
              Genre of the Week
            </p>
          </div>
          
          {/* Jazz Theme Header */}
          <div className="bg-[#e8dcc8] px-4 py-3 text-center">
            {/* JAZZ text */}
            <p 
              className="text-[80px] text-[#2d1f1a] font-[family-name:var(--font-luckiest-guy)] leading-none tracking-tight"
              style={{ 
                WebkitTextStroke: '2px white',
                textShadow: '3px 3px 0 #1a1310, 6px 6px 0 #c4470a, 9px 9px 0 rgba(0,0,0,0.12)'
              }}
            >
              JAZZ
            </p>
          </div>
          
          {/* Divider */}
          <div className="mx-4 h-[3px] bg-[#2d1f1a] rounded-full"></div>
          
          {/* Content area */}
          <div className="bg-[#e8dcc8] py-4 px-4">
            {/* Featured Items Label */}
            <p className="mt-4 text-[20px] font-[family-name:var(--font-pacifico)] text-[#2d1f1a] underline">
              Featured Items:
            </p>
            
            {/* CUP - Featured Drink */}
            <div className="mt-4 flex gap-4">
              {/* Image */}
              <div className="w-[100px] h-[100px] bg-[#2d1f1a] rounded-xl flex items-center justify-center flex-shrink-0">
                <p className="text-[#e8dcc8] text-[11px] font-[family-name:var(--font-inter)]">[ cup ]</p>
              </div>
              
              {/* Details */}
              <div className="flex flex-col justify-between flex-1">
                {/* Name & Description */}
                <div className="-mt-1">
                  <h3 className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-[0.05em]">
                    BLUE NOTE LATTE
                  </h3>
                  <p className="text-[14px] text-[#2d1f1a] font-[family-name:var(--font-inter)] leading-tight">
                    Smooth and mellow, like a late-night jazz session.
                  </p>
                </div>
                
                {/* Price & Button */}
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#c4470a]">
                    $5.50
                  </p>
                  <button className="text-[11px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#2d1f1a] bg-transparent border-2 border-[#2d1f1a] px-3 py-2 rounded-full tracking-[0.05em]">
                    VIEW OUR MENU
                  </button>
                </div>
              </div>
            </div>
            
            {/* VINYL - Featured Record */}
            <div className="mt-4 flex gap-4">
              {/* Image */}
              <div className="mt-2 w-[100px] h-[100px] bg-[#2d1f1a] rounded-xl flex items-center justify-center flex-shrink-0">
                <p className="text-[#e8dcc8] text-[11px] font-[family-name:var(--font-inter)]">[ vinyl ]</p>
              </div>
              
              {/* Details */}
              <div className="flex flex-col justify-between flex-1">
                {/* Name & Description */}
                <div>
                  <h3 className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-[0.05em]">
                    KIND OF BLUE
                  </h3>
                  <p className="text-[14px] text-[#2d1f1a] font-[family-name:var(--font-inter)] leading-tight">
                    Miles Davis' masterpiece. The best-selling jazz album of all time.
                  </p>
                </div>
                
                {/* Price & Button */}
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[22px] -mx-2 font-[family-name:var(--font-bebas-neue)] text-[#c4470a]">
                    $29.99
                  </p>
                  <button className="text-[11px] -mx-2 font-[family-name:var(--font-libre-baskerville)] font-bold text-[#2d1f1a] bg-transparent border-2 border-[#2d1f1a] px-3 py-2 rounded-full tracking-[0.05em] whitespace-nowrap">
                    VIEW ALL VINYLS
                  </button>
                </div>
              </div>
            </div>
            
            {/* Divider */}
            <div className="my-6 h-[2px] bg-[#2d1f1a] opacity-20"></div>
            
            {/* Genre Info Section */}
            <div className="px-2">
              <h4 
                className="text-[24px] font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-[0.1em]"
              >
                THE ROOTS OF JAZZ
              </h4>
              <p className="mt-2 text-[16px] text-[#2d1f1a] font-[family-name:var(--font-inter)] leading-relaxed">
                Born in New Orleans in the early 1900s, jazz blended African rhythms, blues, and ragtime into something entirely new. It gave us legends like Miles Davis, John Coltrane, and Ella Fitzgerald — and changed music forever.
              </p>
              
              {/* Learn More Link */}
              <button className="mt-4 text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#2a7d7d] tracking-[0.1em] flex items-center gap-2 hover:opacity-70 transition-all">
                DIVE DEEPER
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Stats Bar */}
      <section className="mt-4">
        <div className="bg-[#c4470a] py-5 px-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="py-2">
              <p className="text-4xl font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8]">50+</p>
              <p className="text-sm font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8]/80 tracking-[0.15em] uppercase">Vinyl</p>
            </div>
            <div className="border-x-2 border-[#e8dcc8]/30 py-2">
              <p className="text-4xl font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8]">24</p>
              <p className="text-sm font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8]/80 tracking-[0.15em] uppercase">Blends</p>
            </div>
            <div className="py-2">
              <p className="text-4xl text-[#e8dcc8]">&#8734;</p>
              <p className="text-sm font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8]/80 tracking-[0.15em] uppercase">Vibes</p>
            </div>
          </div>
          
          {/* View All Items Button */}
          <div className="mt-6 text-center">
            <button className="bg-[#2d1f1a] text-[#e8dcc8] px-8 py-3 rounded-full font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.1em] hover:opacity-90 transition-all">
              VIEW ALL ITEMS
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#2a7d7d] py-10 px-6">
        <div className="text-center">
          {/* Stars + Rating + Faces + Link */}
          <div className="flex justify-center items-center gap-3 mb-4 flex-wrap">
            {/* Stars */}
            <div className="flex gap-1 text-amber-400 text-xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            
            {/* 5.0 */}
            <span className="text-[#e8dcc8] text-xl font-[family-name:var(--font-bebas-neue)]">5.0</span>
            
            {/* Faces */}
            <div className="flex items-center -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-[#2a7d7d] object-cover" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-[#2a7d7d] object-cover" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-[#2a7d7d] object-cover" />
              <span className="ml-3 text-[#e8dcc8] text-sm font-[family-name:var(--font-bebas-neue)]">+99</span>
            </div>
            
            {/* View All Reviews */}
            <button className="flex items-center gap-1 text-[#e8dcc8] text-sm font-[family-name:var(--font-inter)] hover:opacity-80 transition-all">
              view all reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Quote */}
          <div className="overflow-hidden h-[140px]">
            <div 
              className="transition-transform duration-700 ease-in-out"
              style={{
                transform: isSliding ? 'translateX(-100%)' : 'translateX(0)'
              }}
            >
              <p className="text-[#e8dcc8] text-xl font-[family-name:var(--font-libre-baskerville)] italic leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="mt-3 text-[#e8dcc8]/70 font-[family-name:var(--font-inter)]">
                — {testimonials[currentTestimonial].author}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-[#e8dcc8] py-12 px-6">
        <span className="text-[#c4470a] text-[24px] font-[family-name:var(--font-bebas-neue)] tracking-[0.2em] uppercase">Our Story</span>
        <h2 className="mt-3 text-3xl font-[family-name:var(--font-libre-baskerville)] font-semibold text-[#2d1f1a] leading-tight">
          More Than Just<br />a Coffee Shop
        </h2>
        <div className="mt-6 space-y-4 text-[#2d1f1a]/80 font-[family-name:var(--font-inter)] leading-relaxed">
          <p>
            Espresso Groove was born from a simple idea: create a space where the ritual of coffee meets the soul of music.
          </p>
          <p>
            We believe that great espresso and great vinyl share something in common — they're both meant to be savored, not rushed.
          </p>
          <p>
            Our space is designed for those who want to slow down. Pull up a chair, flip through the crates, and let the aroma of fresh espresso fill the air while your favorite record spins.
          </p>
        </div>
        
        {/* Action Shot Placeholder */}
        <div className="mt-8 w-full h-[280px] bg-[#2d1f1a] rounded-2xl flex flex-col items-center justify-center">
          <p className="text-[#e8dcc8] text-[20px] font-[family-name:var(--font-bebas-neue)] tracking-[0.1em]">
            Store Photo
          </p>
          <p className="text-[#e8dcc8]/60 text-[14px] font-[family-name:var(--font-inter)] mt-1">
            Photo Coming Soon
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-[#2d1f1a] py-12 px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-[#c4470a] text-[24px] font-[family-name:var(--font-bebas-neue)] tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl font-[family-name:var(--font-libre-baskerville)] font-semibold text-[#e8dcc8] leading-tight">
            The Menu
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveMenuTab('coffee')}
            className={`px-6 py-3 rounded-full font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.1em] transition-all ${
              activeMenuTab === 'coffee'
                ? 'bg-[#c4470a] text-[#e8dcc8]'
                : 'bg-transparent border-2 border-[#e8dcc8] text-[#e8dcc8] hover:bg-[#e8dcc8]/10'
            }`}
          >
            ☕ COFFEE
          </button>
          <button
            onClick={() => setActiveMenuTab('vinyl')}
            className={`px-6 py-3 rounded-full font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.1em] transition-all ${
              activeMenuTab === 'vinyl'
                ? 'bg-[#c4470a] text-[#e8dcc8]'
                : 'bg-transparent border-2 border-[#e8dcc8] text-[#e8dcc8] hover:bg-[#e8dcc8]/10'
            }`}
          >
            💿 VINYL
          </button>
        </div>

        {/* Menu Content */}
        <div className="border-2 border-[#e8dcc8]/30 rounded-2xl overflow-hidden">
          {/* Menu Items */}
          <div className="divide-y divide-[#e8dcc8]/20">
            {activeMenuTab === 'coffee' ? (
              coffeeMenu.map((item, index) => (
                <div key={index} className="flex items-center justify-between px-5 py-4">
                  <div className="flex-1">
                    <h3 className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] tracking-[0.05em]">
                      {item.name}
                    </h3>
                    <p className="text-[13px] text-[#e8dcc8]/60 font-[family-name:var(--font-inter)]">
                      {item.desc}
                    </p>
                  </div>
                  <p className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#c4470a] ml-4">
                    {item.price}
                  </p>
                </div>
              ))
            ) : (
              vinylMenu.map((item, index) => (
                <div key={index} className="flex items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Vinyl Icon Placeholder */}
                    <div className="w-12 h-12 bg-[#e8dcc8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">💿</span>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] tracking-[0.05em]">
                        {item.name}
                      </h3>
                      <p className="text-[13px] text-[#2a7d7d] font-[family-name:var(--font-inter)]">
                        {item.artist}
                      </p>
                    </div>
                  </div>
                  <p className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#c4470a] ml-4">
                    {item.price}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* View Full Menu Button */}
        <div className="mt-8 text-center">
          <button className="bg-[#e8dcc8] text-[#2d1f1a] px-8 py-3 rounded-full font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.1em] hover:opacity-90 transition-all">
            {activeMenuTab === 'coffee' ? 'VIEW FULL COFFEE MENU' : 'BROWSE ALL VINYLS'}
          </button>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="bg-[#e8dcc8] py-12 px-6">
        <span className="text-[#c4470a] text-[24px] font-[family-name:var(--font-bebas-neue)] tracking-[0.2em] uppercase">
          Find Us
        </span>
        <h2 className="mt-2 text-3xl font-[family-name:var(--font-libre-baskerville)] font-semibold text-[#2d1f1a] leading-tight">
          Visit Espresso Groove
        </h2>

        {/* Map Placeholder */}
        <div className="mt-8 border-2 border-[#2d1f1a] rounded-2xl overflow-hidden">
          <div className="bg-[#2d1f1a]/10 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#c4470a] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-[#e8dcc8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[#2d1f1a]/60 font-[family-name:var(--font-inter)]">Map Coming Soon</p>
            </div>
          </div>

          {/* Address & Contact */}
          <div className="bg-[#e8dcc8] p-6">
            <p className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-[0.05em]">
              3540 Belle Terre Blvd. • Unit C
            </p>
            <p className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-[0.05em]">
              Myrtle Beach, SC 29579
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-[#2d1f1a]/80 font-[family-name:var(--font-inter)]">
                <svg className="w-5 h-5 text-[#c4470a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@espressogroove.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#2d1f1a]/80 font-[family-name:var(--font-inter)]">
                <svg className="w-5 h-5 text-[#c4470a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(843) 555-BREW</span>
              </div>
            </div>

            <a 
              href="https://www.espressogroove.com" 
              className="mt-5 inline-flex items-center gap-2 text-[#2a7d7d] font-[family-name:var(--font-bebas-neue)] text-[18px] tracking-[0.05em] hover:opacity-70 transition-all"
            >
              WWW.ESPRESSOGROOVE.COM
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="bg-[#2a7d7d] py-12 px-6">
        <div className="text-center mb-8">
          <span className="text-[#e8dcc8]/70 text-[24px] font-[family-name:var(--font-bebas-neue)] tracking-[0.2em] uppercase">
            Hours
          </span>
          <h2 className="mt-2 text-3xl font-[family-name:var(--font-libre-baskerville)] font-semibold text-[#e8dcc8] leading-tight">
            When to Visit
          </h2>
        </div>

        {/* Hours Grid */}
        <div className="border-2 border-[#e8dcc8]/30 rounded-2xl overflow-hidden">
          <div className="divide-y divide-[#e8dcc8]/20">
            {[
              { day: "Monday", hours: "7am – 7pm" },
              { day: "Tuesday", hours: "7am – 7pm" },
              { day: "Wednesday", hours: "7am – 7pm" },
              { day: "Thursday", hours: "7am – 7pm" },
              { day: "Friday", hours: "7am – 9pm" },
              { day: "Saturday", hours: "8am – 9pm" },
              { day: "Sunday", hours: "8am – 5pm" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between px-6 py-4">
                <span className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] tracking-[0.05em]">
                  {item.day}
                </span>
                <span className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] tracking-[0.05em]">
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Groove Section */}
      <section className="bg-[#c4470a] py-16 px-6">
        <div className="text-center">
          <h2 className="text-4xl font-[family-name:var(--font-libre-baskerville)] font-semibold text-white leading-tight">
            Ready to Groove?
          </h2>
          <p className="mt-4 text-white/80 font-[family-name:var(--font-inter)] max-w-[280px] mx-auto">
            Follow us for updates on our grand opening and exclusive first-look invites.
          </p>
          
          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-4">
            {/* Instagram */}
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#c4470a] transition-all">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* TikTok */}
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#c4470a] transition-all">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            
            {/* X / Twitter */}
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#c4470a] transition-all">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6">
        <div className="text-center">
          {/* Logo */}
          <img 
            src="/images/espresso-groove-text.png" 
            alt="Espresso Groove" 
            className="h-14 mx-auto mb-6"
          />
          
          {/* Tagline */}
          <p className="text-[#2d1f1a]/60 font-[family-name:var(--font-inter)] text-sm mb-6">
            Bold Coffee • Curated Vinyl • Underground Culture
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <a 
              href="tel:843-555-2739" 
              className="text-[#2d1f1a] font-[family-name:var(--font-bebas-neue)] text-[20px] tracking-[0.1em] hover:text-[#c4470a] transition-all"
            >
              (843) 555-BREW
            </a>
            <a 
              href="mailto:hello@espressogroove.com" 
              className="text-[#2d1f1a] font-[family-name:var(--font-bebas-neue)] text-[20px] tracking-[0.1em] hover:text-[#c4470a] transition-all"
            >
              HELLO@ESPRESSOGROOVE.COM
            </a>
          </div>
          
          {/* Address */}
          <p className="text-[#2d1f1a]/50 font-[family-name:var(--font-inter)] text-sm mb-8">
            3540 Belle Terre Blvd. • Unit C • Myrtle Beach, SC 29579
          </p>
          
          {/* Divider */}
          <div className="w-24 h-[2px] bg-[#2d1f1a]/20 mx-auto mb-6"></div>
          
          {/* Copyright */}
          <p className="text-[#2d1f1a]/40 font-[family-name:var(--font-inter)] text-xs">
            © 2026 Espresso Groove. All rights reserved.
          </p>
          
          {/* Powered by Novic */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-[#2d1f1a]/40 font-[family-name:var(--font-inter)] text-xs">
              Powered by
            </span>
            <img 
              src="/images/novic-logo.png" 
              alt="Novic" 
              className="h-5 opacity-60"
            />
          </div>
        </div>
      </footer>

    </div>
  );
}
