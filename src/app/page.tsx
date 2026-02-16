"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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

// Smooth scroll with easing
const smoothScrollTo = (targetY: number, duration: number = 800) => {
  const startY = window.scrollY;
  const difference = targetY - startY;
  const startTime = performance.now();
  
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  
  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);
    
    window.scrollTo(0, startY + difference * easeProgress);
    
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };
  
  requestAnimationFrame(animateScroll);
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vinylPlaying, setVinylPlaying] = useState(false);
  const [skipAnimations, setSkipAnimations] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState<'coffee' | 'vinyl'>('coffee');
  const vinylRef = useRef<VinylPlayerRef>(null);
  
  // Check if intro already played this session
  // On page refresh, clear the flag so animation plays again
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if this is a page reload
      const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';
      
      if (isReload) {
        sessionStorage.removeItem('vinylIntroPlayed');
      }
      
      const hasPlayed = sessionStorage.getItem('vinylIntroPlayed') === 'true';
      if (hasPlayed) {
        setSkipAnimations(true);
        setVinylPlaying(true);
      }
    }
  }, []);
  
  // Scroll refs for carousels
  const vinylScrollRef = useRef<HTMLDivElement>(null);
  const coffeeScrollRef = useRef<HTMLDivElement>(null);
  
  // Scroll position tracking
  const [vinylPage, setVinylPage] = useState(1);
  const [coffeePage, setCoffeePage] = useState(1);
  
  const cardWidth = 176; // card width (160) + gap (16)
  const visibleCards = 2;
  const vinylTotalPages = vinylMenu.length - visibleCards + 1; // 6 - 2 + 1 = 5
  const coffeeTotalPages = coffeeMenu.length - visibleCards + 1;
  
  // Scroll function for carousels with bounds checking
  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right', currentPage: number, totalPages: number) => {
    if (ref.current) {
      // Don't scroll past bounds
      if (direction === 'left' && currentPage <= 1) return;
      if (direction === 'right' && currentPage >= totalPages) return;
      
      ref.current.scrollBy({
        left: direction === 'right' ? cardWidth : -cardWidth,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle scroll to update page number
  const handleVinylScroll = () => {
    if (vinylScrollRef.current) {
      const scrollPos = vinylScrollRef.current.scrollLeft;
      const page = Math.round(scrollPos / cardWidth) + 1;
      setVinylPage(Math.min(Math.max(page, 1), vinylTotalPages));
    }
  };
  
  const handleCoffeeScroll = () => {
    if (coffeeScrollRef.current) {
      const scrollPos = coffeeScrollRef.current.scrollLeft;
      const page = Math.round(scrollPos / cardWidth) + 1;
      setCoffeePage(Math.min(Math.max(page, 1), coffeeTotalPages));
    }
  };

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
      <div className="md:hidden min-h-screen bg-[#e8dcc8] font-[family-name:var(--font-inter)] overflow-x-hidden">
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Mobile Menu Slide-out */}
      <div 
        className={`fixed top-0 left-0 h-full w-[75%] max-w-[320px] bg-[#e8dcc8] z-50 transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#2d1f1a] mb-6"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Menu Links */}
          <nav className="space-y-5">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                smoothScrollTo(0, 1000);
              }}
              className="block text-xl font-bold text-[#2d1f1a] font-[family-name:var(--font-libre-baskerville)]"
            >
              Home
            </button>
            <Link 
              href="/menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-bold text-[#e8dcc8] font-[family-name:var(--font-libre-baskerville)] bg-[#2d1f1a] -mx-6 px-6 py-3"
            >
              Menu
            </Link>
            <Link 
              href="/reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-bold text-[#2d1f1a] font-[family-name:var(--font-libre-baskerville)]"
            >
              Reviews
            </Link>
            <Link 
              href="/jazz" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-bold text-[#2d1f1a] font-[family-name:var(--font-libre-baskerville)] flex items-center gap-2"
            >
              The Roots of Jazz
              <span className="text-amber-500">★</span>
            </Link>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('hours');
                if (el) smoothScrollTo(el.offsetTop - 80, 1000);
              }}
              className="block text-xl font-bold text-[#2d1f1a] font-[family-name:var(--font-libre-baskerville)]"
            >
              Hours
            </button>
          </nav>
          
          {/* Contact Info Section */}
          <div className="mt-8 -mx-6 -mb-6 p-6 bg-[#2d1f1a]">
            <div className="space-y-4">
              <a href="tel:803-361-1173" className="flex items-center gap-3 text-[#e8dcc8]">
                <svg className="w-5 h-5 text-[#e8dcc8]/70" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-[family-name:var(--font-inter)] font-semibold">(803) 361-1173</span>
              </a>
              <a href="mailto:espressogroove@gmail.com" className="flex items-center gap-3 text-[#e8dcc8]">
                <svg className="w-5 h-5 text-[#e8dcc8]/70" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-[family-name:var(--font-inter)]">espressogroove@gmail.com</span>
              </a>
              <a href="https://maps.google.com/?q=3540+Belle+Terre+Blvd+Unit+C+Myrtle+Beach+SC+29579" target="_blank" className="flex items-start gap-3 text-[#e8dcc8]">
                <svg className="w-5 h-5 text-[#e8dcc8]/70 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-[family-name:var(--font-inter)] leading-tight">
                  3540 Belle Terre Blvd.<br />
                  Unit C, Myrtle Beach, SC 29579
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#e8dcc8] shadow-md z-40">
        <div className="px-5 py-5 flex items-center justify-between">
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
          
          {/* Right Side - Browse Button */}
          <a 
            href="/menu"
            className="bg-[#2d1f1a] text-[#e8dcc8] px-5 py-2 rounded-lg font-[family-name:var(--font-bebas-neue)] text-xl tracking-wide border-2 border-[#2d1f1a] hover:bg-transparent hover:text-[#2d1f1a] transition-all"
          >
            BROWSE
          </a>
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
                transition: skipAnimations ? 'none' : 'all 0.8s ease-out'
              }}
            >
              {/* Top section - NOW PLAYING */}
              <div className="bg-[#e8dcc8] py-1 flex items-center justify-center">
                <p 
                  className="text-[18px] font-[family-name:var(--font-righteous)] text-[#2d1f1a]"
                >
                  Now Playing
                </p>
              </div>
              
              {/* Divider */}
              <div className="h-[2px] bg-[#2d1f1a]"></div>
              
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
            transition: skipAnimations ? 'none' : 'all 0.8s ease-out'
          }}
        >
          {/* Header */}
          <div className="bg-[#2d1f1a] py-2 flex items-center justify-center">
            <p 
              className="text-[26px] font-[family-name:var(--font-righteous)] text-[#e8dcc8]"
            >
              Now Spinning
            </p>
          </div>
          
          {/* Divider */}
          <div className="h-[2px] bg-[#2d1f1a]"></div>
          
          {/* Content area */}
          <div className="bg-[#e8dcc8] py-3 px-4">
            {/* Genre of the Week */}
            <div className="text-center">
              <p 
                className="text-[24px] font-[family-name:var(--font-libre-baskerville)]"
              >
                <span className="text-[#2d1f1a]">Genre of the Week - </span>
                <span className="text-[24px] text-[#2a7d7d]">Jazz</span>
              </p>
              {/* Curved teal accent line under JAZZ */}
              <div className="flex justify-center -mt-1">
                <svg width="70" height="12" viewBox="0 0 70 12" className="ml-[250px] translate-y-[2px] translate-x-[3px]">
                  <path 
                    d="M5 8 Q35 0 65 8" 
                    stroke="#2a7d7d" 
                    strokeWidth="3"
                    fill="none" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            
            {/* Featured Items Label */}
            <p className="mt-3 text-[25px] font-[family-name:var(--font-pacifico)] text-[#2d1f1a]">
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
                  <a href="/menu?tab=coffee" className="text-[11px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#2d1f1a] bg-transparent border-2 border-[#2d1f1a] px-3 py-2 rounded-full tracking-[0.05em]">
                    VIEW OUR MENU
                  </a>
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
                  <a href="/menu?tab=vinyl" className="text-[11px] -mx-2 font-[family-name:var(--font-libre-baskerville)] font-bold text-[#2d1f1a] bg-transparent border-2 border-[#2d1f1a] px-3 py-2 rounded-full tracking-[0.05em] whitespace-nowrap">
                    VIEW ALL VINYLS
                  </a>
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
                Born in New Orleans in the early 1900s, jazz blended African rhythms, blues, and ragtime into something entirely new. It gave us legends like Miles Davis, John Coltrane, and Ella Fitzgerald...
              </p>
              
              {/* Learn More Link */}
              <a href="/jazz" className="mt-4 text-[26px] font-[family-name:var(--font-bebas-neue)] text-[#2a7d7d] tracking-[0.1em] flex items-center gap-2 hover:opacity-70 transition-all font-bold">
                DIVE DEEPER
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
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
              <p className="text-xl font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8]/80 tracking-[0.15em] uppercase">Vinyl</p>
            </div>
            <div className="border-x-2 border-[#e8dcc8]/30 py-2">
              <p className="text-4xl font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8]">24</p>
              <p className="text-xl font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8]/80 tracking-[0.15em] uppercase">Blends</p>
            </div>
            <div className="py-2">
              <svg className="w-10 h-10 mx-auto text-[#e8dcc8]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.781 0-4.781 8 0 8 5.606 0 7.644-8 12.74-8z" />
              </svg>
              <p className="text-xl font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8]/80 tracking-[0.15em] uppercase">Vibes</p>
            </div>
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
            <a href="/reviews" className="flex items-center gap-1 text-[#e8dcc8] text-base font-[family-name:var(--font-libre-baskerville)] font-bold hover:opacity-80 transition-all">
              View All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
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
              <p className="mt-3 text-[#e8dcc8]/70 font-[family-name:var(--font-inter)] font-bold">
                — {testimonials[currentTestimonial].author}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-[#e8dcc8] py-12 px-6">
        <span className="text-[#c4470a] text-3xl font-[family-name:var(--font-bebas-neue)] font-bold tracking-[0.2em] uppercase">Our Story</span>
        <h2 className="mt-3 text-3xl font-[family-name:var(--font-libre-baskerville)] font-semibold text-[#2d1f1a] leading-tight">
          More Than Just<br />a Coffee Shop
        </h2>
        <div className="mt-6 space-y-4 text-[#2d1f1a]/80 font-[family-name:var(--font-inter)] leading-relaxed">
          <p>
            Espresso Groove was born from a simple idea: create a space where the ritual of coffee meets the soul of music.
          </p>
          <p>
            We believe that great espresso and great vinyl share something in common. They're both meant to be savored, not rushed.
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

      {/* Vinyl Divider */}
      <section className="bg-[#2d1f1a] py-6">
        <div className="flex items-center justify-center gap-5">
          {/* Left music notes */}
          <span className="text-[#e8dcc8] text-2xl opacity-60">♫</span>
          <span className="text-[#e8dcc8] text-xl opacity-40">♪</span>
          
          {/* Vinyl record icon */}
          <svg width="56" height="56" viewBox="0 0 56 56" className="text-[#e8dcc8]">
            {/* Outer ring */}
            <circle cx="28" cy="28" r="26" fill="currentColor" />
            {/* Grooves */}
            <circle cx="28" cy="28" r="20" fill="none" stroke="#2d1f1a" strokeWidth="1" opacity="0.3" />
            <circle cx="28" cy="28" r="16" fill="none" stroke="#2d1f1a" strokeWidth="1" opacity="0.3" />
            <circle cx="28" cy="28" r="12" fill="none" stroke="#2d1f1a" strokeWidth="1" opacity="0.3" />
            {/* Label */}
            <circle cx="28" cy="28" r="8" fill="#c4470a" />
            {/* Center hole */}
            <circle cx="28" cy="28" r="2" fill="#2d1f1a" />
          </svg>
          
          {/* Right music notes */}
          <span className="text-[#e8dcc8] text-xl opacity-40">♪</span>
          <span className="text-[#e8dcc8] text-2xl opacity-60">♫</span>
        </div>
      </section>

      {/* Featured Vinyl Section */}
      <section id="vinyl-section" className="bg-[#e8dcc8] py-10 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 px-2">
          <h3 className="text-3xl font-[family-name:var(--font-libre-baskerville)] font-semibold text-[#2d1f1a] leading-tight">
            Featured Vinyl
          </h3>
          <a 
            href="/menu?tab=vinyl" 
            className="text-[#2a7d7d] font-[family-name:var(--font-bebas-neue)] text-[20px] font-bold tracking-wide flex items-center gap-1"
          >
            View All
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div ref={vinylScrollRef} onScroll={handleVinylScroll} className="flex gap-4 overflow-x-auto pb-4">
          {vinylMenu.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[160px] bg-[#2d1f1a] rounded-xl overflow-hidden"
            >
              {/* Album Art Placeholder */}
              <div className={`w-full h-[160px] flex items-center justify-center ${index === 1 ? 'bg-gray-200' : 'bg-[#1a1310]'}`}>
                {index === 1 ? (
                  <div className="text-center px-2">
                    <p className="text-gray-600 text-[14px] font-[family-name:var(--font-inter)] uppercase tracking-wider">
                      Vinyl Image<br />Coming Soon
                    </p>
                  </div>
                ) : (
                  <img 
                    src={`/images/vinyl-icon${index % 3 === 0 ? '' : index % 3 === 1 ? '-2' : '-3'}.svg`} 
                    alt="" 
                    className="w-24 h-24" 
                  />
                )}
              </div>
              {/* Info */}
              <div className="p-3">
                <h4 className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] leading-tight">
                  {item.name}
                </h4>
                <p className="text-[14px] text-[#e8dcc8]/60 font-[family-name:var(--font-inter)] mt-1">
                  {item.artist}
                </p>
                <p className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#c4470a] mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button 
            onClick={() => scrollCarousel(vinylScrollRef, 'left', vinylPage, vinylTotalPages)}
            className={`transition-all ${vinylPage <= 1 ? 'text-[#2d1f1a]/20 cursor-not-allowed' : 'text-[#2d1f1a] hover:text-[#2d1f1a]/70'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-[#2d1f1a] font-[family-name:var(--font-inter)]">{vinylPage}/{vinylTotalPages}</span>
          <button 
            onClick={() => scrollCarousel(vinylScrollRef, 'right', vinylPage, vinylTotalPages)}
            className={`transition-all ${vinylPage >= vinylTotalPages ? 'text-[#2d1f1a]/20 cursor-not-allowed' : 'text-[#2d1f1a] hover:text-[#2d1f1a]/70'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Genre Pills */}
        <div className="flex gap-2 mt-8 overflow-x-auto pb-2">
          {['Rock', 'Electronic', 'Hip-Hop', 'Pop', 'Indie', 'Shoegaze', 'Jazz', 'Funk', 'Country'].map((genre) => (
            <button 
              key={genre}
              className="flex-shrink-0 px-4 py-2 rounded-full border-2 border-[#2d1f1a] text-[#2d1f1a] font-[family-name:var(--font-inter)] text-sm hover:bg-[#2d1f1a] hover:text-[#e8dcc8] transition-all"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Coffee Divider */}
      <section className="bg-[#2d1f1a] py-6">
        <div className="flex items-center justify-center gap-4">
          {/* Left steam swirl */}
          <svg width="40" height="30" viewBox="0 0 40 30" className="text-[#e8dcc8] opacity-60">
            <path 
              d="M5 25 Q10 15 5 10 Q0 5 5 0" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
            />
            <path 
              d="M15 25 Q20 18 15 12 Q10 6 15 0" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
            />
          </svg>
          
          {/* Coffee cup icon */}
          <svg width="56" height="40" viewBox="0 0 56 40" className="text-[#e8dcc8]">
            {/* Cup body */}
            <path 
              d="M8 15 L12 38 L38 38 L42 15 Z" 
              fill="currentColor"
            />
            {/* Handle */}
            <path 
              d="M42 18 Q52 18 52 26 Q52 34 42 34" 
              stroke="currentColor" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round"
            />
            {/* Steam */}
            <path 
              d="M20 10 Q22 5 20 0" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
              opacity="0.7"
            />
            <path 
              d="M30 12 Q32 6 30 0" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
          
          {/* Right steam swirl */}
          <svg width="40" height="30" viewBox="0 0 40 30" className="text-[#e8dcc8] opacity-60 scale-x-[-1]">
            <path 
              d="M5 25 Q10 15 5 10 Q0 5 5 0" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
            />
            <path 
              d="M15 25 Q20 18 15 12 Q10 6 15 0" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* House Favorites Section */}
      <section id="coffee-section" className="bg-[#e8dcc8] py-10 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 px-2">
          <h3 className="text-[28px] font-[family-name:var(--font-libre-baskerville)] font-semibold text-[#2d1f1a] leading-tight">
            House Favorites
          </h3>
          <a 
            href="/menu?tab=coffee" 
            className="text-[#2a7d7d] font-[family-name:var(--font-bebas-neue)] text-[20px] font-bold tracking-wide flex items-center gap-1"
          >
            View All
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div ref={coffeeScrollRef} onScroll={handleCoffeeScroll} className="flex gap-4 overflow-x-scroll pb-4 -mx-4 px-4">
          {coffeeMenu.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[160px] bg-[#2d1f1a] rounded-xl overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className={`w-full h-[160px] flex items-center justify-center ${index === 1 ? 'bg-gray-200' : 'bg-[#1a1310]'}`}>
                {index === 1 ? (
                  <div className="text-center px-2">
                    <p className="text-gray-600 text-[14px] font-[family-name:var(--font-inter)] uppercase tracking-wider">
                      Coffee Image<br />Coming Soon
                    </p>
                  </div>
                ) : (
                  /* Coffee cup icon */
                  <svg width="70" height="60" viewBox="0 0 56 40" className="text-[#e8dcc8] opacity-40">
                    <path 
                      d="M8 15 L12 38 L38 38 L42 15 Z" 
                      fill="currentColor"
                    />
                    <path 
                      d="M42 18 Q52 18 52 26 Q52 34 42 34" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="M20 10 Q22 5 20 0" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                    <path 
                      d="M30 12 Q32 6 30 0" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                )}
              </div>
              {/* Info */}
              <div className="p-3">
                <h4 className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] leading-tight">
                  {item.name}
                </h4>
                <p className="text-[14px] text-[#e8dcc8]/60 font-[family-name:var(--font-inter)] mt-1 line-clamp-2">
                  {item.desc}
                </p>
                <p className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#c4470a] mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button 
            onClick={() => scrollCarousel(coffeeScrollRef, 'left', coffeePage, coffeeTotalPages)}
            className={`transition-all ${coffeePage <= 1 ? 'text-[#2d1f1a]/20 cursor-not-allowed' : 'text-[#2d1f1a] hover:text-[#2d1f1a]/70'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-[#2d1f1a] font-[family-name:var(--font-inter)]">{coffeePage}/{coffeeTotalPages}</span>
          <button 
            onClick={() => scrollCarousel(coffeeScrollRef, 'right', coffeePage, coffeeTotalPages)}
            className={`transition-all ${coffeePage >= coffeeTotalPages ? 'text-[#2d1f1a]/20 cursor-not-allowed' : 'text-[#2d1f1a] hover:text-[#2d1f1a]/70'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 mt-8 overflow-x-scroll pb-2 -mx-4 px-4">
          {['Espresso', 'Lattes', 'Cold Brew', 'Drip', 'Seasonal', 'Matcha', 'Tea', 'Smoothies'].map((category) => (
            <button 
              key={category}
              className="flex-shrink-0 px-4 py-2 rounded-full border-2 border-[#2d1f1a] text-[#2d1f1a] font-[family-name:var(--font-inter)] text-sm hover:bg-[#2d1f1a] hover:text-[#e8dcc8] transition-all"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Find Us Banner */}
      <section className="bg-[#c4470a] py-6">
        <div className="flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-[#e8dcc8]" fill="currentColor" viewBox="0 0 24 24">
            {/* Circle head */}
            <circle cx="12" cy="8" r="6" />
            {/* Stick/point */}
            <path d="M12 14 L12 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <h2 className="text-4xl font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] tracking-[0.2em] uppercase">
            Find Us
          </h2>
        </div>
      </section>

      {/* Find Us Section */}
      <section id="contact" className="bg-[#e8dcc8] py-6 px-4">
        {/* Map Placeholder */}
        <div className="border-2 border-[#2d1f1a] rounded-xl overflow-hidden">
          <div className="bg-[#2d1f1a]/10 h-32 flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 bg-[#c4470a] rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-[#e8dcc8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[#2d1f1a]/60 text-base font-[family-name:var(--font-inter)]">Map Coming Soon</p>
            </div>
          </div>

          {/* Address & Contact */}
          <div className="bg-[#e8dcc8] p-4">
            <a 
              href="https://maps.google.com/?q=3540+Belle+Terre+Blvd+Unit+C+Myrtle+Beach+SC+29579"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#2d1f1a] tracking-[0.05em] hover:text-[#c4470a] transition-all block"
            >
              3540 Belle Terre Blvd.<br />
              Unit C • Myrtle Beach, SC 29579
            </a>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-base text-[#2d1f1a]/80 font-[family-name:var(--font-inter)]">
              <a href="mailto:espressogroove@gmail.com" className="flex items-center gap-2 hover:text-[#c4470a] transition-all">
                <svg className="w-5 h-5 text-[#c4470a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>espressogroove@gmail.com</span>
              </a>
              <a href="tel:803-361-1173" className="flex items-center gap-2 hover:text-[#c4470a] transition-all">
                <svg className="w-5 h-5 text-[#c4470a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(803) 361-1173</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="bg-[#2a7d7d] py-6 px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] tracking-[0.15em] uppercase">
            Hours
          </h2>
        </div>

        {/* Hours Grid */}
        <div className="border border-[#e8dcc8]/30 rounded-xl overflow-hidden">
          <div className="divide-y divide-[#e8dcc8]/20">
            {[
              { day: "Mon–Thu", hours: "7am – 7pm" },
              { day: "Friday", hours: "7am – 9pm" },
              { day: "Saturday", hours: "8am – 9pm" },
              { day: "Sunday", hours: "8am – 5pm" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between px-4 py-3">
                <span className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] tracking-[0.05em]">
                  {item.day}
                </span>
                <span className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#e8dcc8] tracking-[0.05em]">
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
          <p className="mt-4 text-white/80 font-[family-name:var(--font-inter)] max-w-[320px] mx-auto">
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
            
            {/* Facebook */}
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#c4470a] transition-all">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e8dcc8] py-10 px-6">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <img 
            src="/images/espresso-groove-text.png" 
            alt="Espresso Groove" 
            className="h-12 mb-4"
          />
          
          {/* Tagline */}
          <p className="text-[#2a7d7d] font-[family-name:var(--font-libre-baskerville)] italic font-bold text-xl mb-3">
            "Drip. Drop. Vibe."
          </p>
          
          {/* Description */}
          <p className="text-[#2d1f1a]/70 font-[family-name:var(--font-inter)] text-base mb-6">
            Bold coffee and curated vinyl in Myrtle Beach, SC. Your new favorite hangout spot.
          </p>
          
          {/* Contact */}
          <h3 className="text-[#2d1f1a] font-[family-name:var(--font-bebas-neue)] text-xl tracking-wide mb-2">
            Contact
          </h3>
          <div className="text-[#2d1f1a]/80 font-[family-name:var(--font-inter)] text-base space-y-1 mb-6">
            <p>
              <span className="text-[#2d1f1a]/50">Phone:</span>{" "}
              <a href="tel:803-361-1173" className="hover:text-[#c4470a] transition-all">(803) 361-1173</a>
            </p>
            <p>
              <a href="mailto:espressogroove@gmail.com" className="hover:text-[#c4470a] transition-all">espressogroove@gmail.com</a>
            </p>
          </div>
          
          {/* Address */}
          <h3 className="text-[#2d1f1a] font-[family-name:var(--font-bebas-neue)] text-xl tracking-wide mb-2">
            Address
          </h3>
          <a 
            href="https://maps.google.com/?q=3540+Belle+Terre+Blvd+Unit+C+Myrtle+Beach+SC+29579"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d1f1a]/80 font-[family-name:var(--font-inter)] text-base mb-6 block hover:text-[#c4470a] transition-all"
          >
            <p>3540 Belle Terre Blvd.</p>
            <p>Unit C, Myrtle Beach, SC 29579</p>
          </a>
          
          {/* Follow Us */}
          <h3 className="text-[#2d1f1a] font-[family-name:var(--font-bebas-neue)] text-xl tracking-wide mb-3">
            Follow Us
          </h3>
          <div className="flex gap-3 mb-8">
            {/* Instagram */}
            <a href="#" className="w-11 h-11 border-2 border-[#2d1f1a]/60 rounded-lg flex items-center justify-center text-[#2d1f1a]/80 hover:border-[#c4470a] hover:text-[#c4470a] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="w-11 h-11 border-2 border-[#2d1f1a]/60 rounded-lg flex items-center justify-center text-[#2d1f1a]/80 hover:border-[#c4470a] hover:text-[#c4470a] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-11 h-11 border-2 border-[#2d1f1a]/60 rounded-lg flex items-center justify-center text-[#2d1f1a]/80 hover:border-[#c4470a] hover:text-[#c4470a] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          
          {/* Divider */}
          <div className="h-[1px] bg-[#2d1f1a]/20 mb-4"></div>
          
          {/* Copyright */}
          <p className="text-[#2d1f1a]/60 font-[family-name:var(--font-inter)] text-base font-semibold text-center">
            © 2026 Espresso Groove.<br />
            All rights reserved.
          </p>
          
          {/* Powered by Novic */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="text-[#2d1f1a]/80 font-[family-name:var(--font-inter)] text-lg font-semibold">
              Powered by
            </span>
            <img 
              src="/images/novic-logo.png" 
              alt="Novic" 
              className="h-16"
            />
          </div>
        </div>
      </footer>

      </div>
    </>
  );
}
