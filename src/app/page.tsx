"use client";

import Link from "next/link";
import MusicNotes from "./components/MusicNotes";

export default function Home() {
  return (
    <>
      <style jsx global>{`
          /* Mobile */
          @keyframes logoGlowPulseMobile {
              0% {
                  filter: drop-shadow(0px 0px 0px rgba(255, 150, 50, 0));
              }
              100% {
                  filter: drop-shadow(0px 0px 10px rgb(195, 100, 0));
              }
          }

          /* Desktop */
          @keyframes logoGlowPulseDesktop {
              0% {
                  filter: drop-shadow(0px 0px 0px rgba(255, 150, 50, 0));
              }
              100% {
                  filter: drop-shadow(0px 0px 80px rgb(195, 100, 0));
              }
          }

          .logo-glow {
              animation: logoGlowPulseMobile 3s cubic-bezier(0.5, 0, 0.2, 1) forwards;
          }

          @media (min-width: 768px) {
              .logo-glow {
                  animation: logoGlowPulseDesktop 3s cubic-bezier(0.5, 0, 0.2, 1) forwards;
              }
          }

          .noisy {
              position: relative;
          }
          .noisy::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: inherit;
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
              opacity: 0.8;
              mix-blend-mode: overlay;
              pointer-events: none;
          }
      `}</style>
      {/* Desktop Hero */}
      <div
        className="hidden md:flex min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: `url('/images/background.png')` }}
      >
        {/* Left side - Content */}
        <div className="flex-1 flex flex-col justify-center pl-16 lg:pl-24 xl:pl-32 pr-8 z-10">
          {/* Logo */}
          <img
            src="/images/espresso_groove.png"
            alt="Espresso Groove"
            className="w-72 lg:w-96 xl:w-[480px] xl:ml-[0px] xl:-mt-[150px] mb-8 logo-glow"
          />

          {/* Main Text */}
          <h2
            className="text-5xl lg:text-6xl xl:text-10xl xl:max-w-[2000px] xl:translate-y-[-50px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] leading-tight uppercase tracking-tight mb-4"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
          >
            Where Coffee<br />Meets Culture
          </h2>

          <p
            className="text-3xl lg:text-4xl xl:text-[50px] xl:translate-y-[-50px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] tracking-[0.15em] uppercase"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
          >
            Drip • Drop • Vibe.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap xl:flex-nowrap gap-4 xl:gap-[70px] mt-12">
            <Link href="/menu" className="w-44 lg:w-48 h-14 lg:h-16 xl:scale-[1.3] rounded-full bg-[#e05620] noisy flex items-center justify-center hover:scale-105 transition-transform">
              <img src="/images/menu_cup.svg" className="w-7 lg:w-8 h-7 lg:h-8 translate-x-[-10px]" style={{filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))'}} />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-[#e8c88c] translate-x-[-3px] text-[20px] lg:text-[22px]"
                style={{textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)', letterSpacing: '0.1em'}}
              >Menu</span>
            </Link>

            <Link href="/vinyl" className="w-44 lg:w-48 h-14 lg:h-16 xl:scale-[1.3] rounded-full bg-[#2a7d7d] noisy flex items-center justify-center hover:scale-105 transition-transform">
              <img src="/images/vinyl-svgrepo-com.svg" className="w-7 lg:w-8 h-7 lg:h-8 translate-x-[-7px]" style={{filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))'}} />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-[#e8c88c] translate-x-[3px] text-[20px] lg:text-[22px]"
                style={{textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)', letterSpacing: '0.2em'}}
              >Vinyl</span>
            </Link>

            <Link href="/merch" className="w-44 lg:w-48 h-14 lg:h-16 xl:scale-[1.3] rounded-full bg-[#6b4c8c] noisy flex items-center justify-center hover:scale-105 transition-transform">
              <img src="/images/shirt-outline-svgrepo-com.svg" className="w-7 lg:w-8 h-7 lg:h-8 translate-x-[-4px]" style={{filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))'}} />
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-[#e8c88c] translate-x-[3px] text-[20px] lg:text-[22px]"
                style={{textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)', letterSpacing: '0.12em'}}
              >Merch</span>
            </Link>
          </div>
        </div>

        {/* Right side - Mug */}
        <div className="flex-1 flex items-end justify-center relative">
          <img
            src="/images/mug.png"
            alt="Coffee mug with vinyl steam"
            className="w-[400px] lg:w-[480px] xl:w-[570px] xl:max-w-none xl:mb-[120px] xl:mr-[0px] pointer-events-none mb-[-80px] lg:mb-[-100px]"
            style={{
              filter: 'drop-shadow(0px 0px 25px rgba(255,150,50,0.5))'
            }}
          />
        </div>
      </div>

      {/* Mobile Site */}
      <div
        className="md:hidden min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('/images/background.png')` }}
      >
        {/* Logo */}
        <div className="pt-6 px-6">
          <img
            src="/images/espresso_groove.png"
            alt="Espresso Groove"
            className="min-[479px]:max-[481px]:!w-80 min-[427px]:max-[431px]:!w-75 min-[320px]:max-[321px]:!w-40 w-60 logo-glow scale-[1.4] translate-y-[20px]"
          />
        </div>

        {/* Main Text */}
        <div className="min-[479px]:max-[481px]:!max-w-[800px] min-[427px]:max-[431px]:!max-w-[800px] px-5 mt-2 max-w-[400px]">
          <h2
            className="min-[479px]:max-[481px]:!text-[40px] min-[427px]:max-[431px]:!text-[38px] min-[410px]:max-[415px]:!text-[35px] min-[320px]:max-[321px]:!text-[20px] text-[28px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] leading-tight uppercase tracking-tight"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
          >
            Where Coffee<br />Meets Culture
          </h2>

          <p
            className="min-[479px]:max-[481px]:!text-[32px] min-[427px]:max-[431px]:!text-[31px] min-[410px]:max-[415px]:!text-[29px] min-[320px]:max-[321px]:!text-[17px] text-[25px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] tracking-[0.15em] uppercase mt-2"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
          >
            Drip • Drop • Vibe.
          </p>

        </div>

        {/* Buttons */}
        <div className="min-[479px]:max-[481px]:!mt- min-[479px]:max-[481px]:!ml-3 min-[479px]:max-[481px]:!space-y-7 min-[427px]:max-[431px]:!mt-25 min-[427px]:max-[431px]:!ml- min-[427px]:max-[431px]:!space-y-4 min-[410px]:max-[415px]:!mt-25 min-[410px]:max-[415px]:!-ml-2 min-[383px]:max-[394px]:!mt-15 min-[383px]:max-[394px]:!ml-[] min-[374px]:max-[376px]:!mt-15 min-[374px]:max-[376px]:!-ml-1 min-[343px]:max-[361px]:!mt-15 min-[343px]:max-[361px]:!-ml-3 min-[320px]:max-[321px]:!mt-7 min-[320px]:max-[321px]:!-ml-4 min-[320px]:max-[321px]:!space-y-0 px-5 mt-20 space-y-3">
          <Link href="/menu" className="min-[479px]:max-[481px]:!scale-[1.25] min-[427px]:max-[431px]:!scale-[1.07] min-[410px]:max-[415px]:!scale-[] min-[374px]:max-[376px]:!scale-[0.95] min-[343px]:max-[361px]:!scale-90 min-[320px]:max-[321px]:!scale-[0.73] w-40 h-12 rounded-full bg-[#e05620] noisy flex items-center justify-center">
            <img src="/images/menu_cup.svg" className="w-6 h-6 translate-x-[-10px] translate-y-[-2px]" style={{filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))'}} />
            <span
              className={`
                font-[family-name:var(--font-libre-baskerville)]
                font-bold uppercase text-[#e8c88c]
                translate-x-[-3px] translate-y-[-1px] text-[18px]
              `}
              style={{textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)', letterSpacing: '0.1em'}}
            >Menu</span>
          </Link>

          <Link href="/vinyl" className="min-[479px]:max-[481px]:!scale-[1.25] min-[427px]:max-[431px]:!scale-[1.07] min-[410px]:max-[415px]:!scale-[] min-[383px]:max-[394px]:!scale-[] min-[374px]:max-[376px]:!scale-[0.95] min-[343px]:max-[361px]:!scale-90 min-[320px]:max-[321px]:!scale-[0.73] w-40 h-12 rounded-full bg-[#2a7d7d] noisy flex items-center justify-center">
            <img src="/images/vinyl-svgrepo-com.svg" className="w-6 h-6 translate-x-[-7px] translate-y-[-2px]" style={{filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))'}} />
            <span
              className={`
                font-[family-name:var(--font-libre-baskerville)]
                font-bold uppercase text-[#e8c88c]
                translate-x-[3px] translate-y-[-1px] text-[18px]
              `}
              style={{textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)', letterSpacing: '0.2em'}}
            >Vinyl</span>
          </Link>

          <Link href="/merch" className="min-[479px]:max-[481px]:!scale-[1.25] min-[427px]:max-[431px]:!scale-[1.07] min-[410px]:max-[415px]:!scale- min-[383px]:max-[394px]:!scale-[] min-[374px]:max-[376px]:!scale-[0.95] min-[343px]:max-[361px]:!scale-90 min-[320px]:max-[321px]:!scale-[0.73] w-40 h-12 rounded-full bg-[#6b4c8c] noisy flex items-center justify-center">
            <img src="/images/shirt-outline-svgrepo-com.svg" className="w-6 h-6 translate-x-[-4px] translate-y-[-2px]" style={{filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))'}} />
            <span
              className={`
                font-[family-name:var(--font-libre-baskerville)]
                font-bold uppercase text-[#e8c88c]
                translate-x-[3px] translate-y-[-1px] text-[18px]
              `}
              style={{textShadow: '1px 1px 0 rgba(255,255,255,0.4), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)', letterSpacing: '0.12em'}}
            >Merch</span>
          </Link>
        </div>

        {/* Mug with Steam */}
        <img
          src="/images/mug.png"
          alt="Coffee mug with vinyl steam"
          className="min-[479px]:max-[481px]:!top- min-[479px]:max-[481px]:!mr- min-[479px]:max-[481px]:!w-67 min-[427px]:max-[431px]:!top-[363px] min-[427px]:max-[431px]:!-mr-3 min-[427px]:max-[431px]:!w-65 min-[410px]:max-[415px]:!top-[315px] min-[410px]:max-[415px]:!-mr-4 min-[410px]:max-[415px]:!w-63 min-[383px]:max-[394px]:!top-[270px] min-[383px]:max-[394px]:!-mr-2 min-[383px]:max-[394px]:!w-54 min-[374px]:max-[376px]:!top-[275px] min-[374px]:max-[376px]:!-mr-1 min-[374px]:max-[376px]:!w-52 min-[343px]:max-[361px]:!top-[290px] min-[343px]:max-[361px]:!-mr-2 min-[343px]:max-[361px]:!w-48 min-[320px]:max-[321px]:!top-[175px] min-[320px]:max-[321px]:!-mr-2 min-[320px]:max-[321px]:!w-44 absolute top-[360px] right-0 w-57 pointer-events-none"
          style={{
            filter: 'drop-shadow(0px 0px 15px rgba(255,150,50,0.5))'
          }}
        />
      </div>

      {/* Gradient Divider */}
      <div className="w-full flex flex-col items-center gap-[3px] py-6 lg:py-8 relative top-[-185px] -ml-[80px] scale-[1.8]">
        <div
          className="w-4/5 h-[3px] rounded-full"
          style={{
            background: 'linear-gradient(to right, #2a7d7d 0%, #2a7d7d 60%, #e8c88c 85%, #d4a04a 100%)',
            boxShadow: '0 0 8px rgba(16,185,129,0.5), 0 0 20px rgba(232,200,140,0.3)',
          }}
        />
        <div
          className="w-4/5 h-[3px] rounded-full"
          style={{
            background: 'linear-gradient(to right, #2a7d7d 0%, #2a7d7d 60%, #e8c88c 85%, #d4a04a 100%)',
            boxShadow: '0 0 8px rgba(16,185,129,0.5), 0 0 20px rgba(232,200,140,0.3)',
          }}
        />
      </div>


            <style>{`
        @keyframes eq-bounce {
          0%, 100% { transform: scaleY(1); background-color: #2a7d7d; box-shadow: 0 0 4px #2a7d7d99; }
          33% { transform: scaleY(0.4); background-color: #e05620; box-shadow: 0 0 4px #e0562099; }
          66% { transform: scaleY(0.7); background-color: #6b4c8c; box-shadow: 0 0 4px #6b4c8c99; }
        }
      `}</style>
      {/* Now Playing Section */}
      <div className="w-full flex items-center justify-center gap-4 py-4 relative top-[-200px]">
{/* Left Equalizer */}
        <div className="flex items-end gap-[3px] self-stretch">
          {[
            {h: 0.3, c: '#e05620'}, {h: 0.5, c: '#2a7d7d'}, {h: 0.4, c: '#6b4c8c'},
            {h: 0.6, c: '#2a7d7d'}, {h: 0.35, c: '#e05620'}, {h: 0.55, c: '#6b4c8c'}
          ].map((b, i) => (
            <div key={i} className="w-[6px] rounded-full" style={{height: (b.h * 100) + '%', backgroundColor: b.c, boxShadow: '0 0 4px ' + b.c + '99', animation: 'eq-bounce ' + (1.1 + i * 0.15) + 's ease-in-out infinite', transformOrigin: 'bottom'}} />
          ))}
        </div>

        {/* Center Text */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex-1 flex flex-col items-center">
            <span className="font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] uppercase text-[26px] tracking-tight font-bold whitespace-nowrap" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>Now Playing</span>
            <span className="font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] italic text-[20px] whitespace-nowrap">Espresso Groove Radio</span>
          </div>
        </div>

        {/* Right Equalizer */}
        <div className="flex items-end gap-[3px] self-stretch">
          {[
            {h: 0.55, c: '#6b4c8c'}, {h: 0.35, c: '#e05620'}, {h: 0.6, c: '#2a7d7d'},
            {h: 0.4, c: '#6b4c8c'}, {h: 0.5, c: '#2a7d7d'}, {h: 0.3, c: '#e05620'}
          ].map((b, i) => (
            <div key={i} className="w-[6px] rounded-full" style={{height: (b.h * 100) + '%', backgroundColor: b.c, boxShadow: '0 0 4px ' + b.c + '99', animation: 'eq-bounce ' + (1.1 + i * 0.15) + 's ease-in-out infinite', transformOrigin: 'bottom'}} />
          ))}
        </div>

      </div>


      {/* Extended Background */}
      <div className="w-full min-h-screen relative top-[-175px]" style={{ backgroundImage: `url('/images/background2.png')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleY(-1)' }}>
        {/* Gradient Divider 2 (flipped back since parent is scaleY-1) */}
        <div className="w-full flex flex-col items-center gap-[3px] pt-6 relative top-[750px] -ml-[80px] scale-[1.8]" style={{transform: 'scaleY(-1)'}}>
          <div className="w-4/5 h-[3px] rounded-full" style={{background: 'linear-gradient(to right, #2a7d7d 0%, #2a7d7d 60%, #e8c88c 85%, #d4a04a 100%)', boxShadow: '0 0 8px rgba(16,185,129,0.5), 0 0 20px rgba(232,200,140,0.3)'}} />
          <div className="w-4/5 h-[3px] rounded-full" style={{background: 'linear-gradient(to right, #2a7d7d 0%, #2a7d7d 60%, #e8c88c 85%, #d4a04a 100%)', boxShadow: '0 0 8px rgba(16,185,129,0.5), 0 0 20px rgba(232,200,140,0.3)'}} />
        </div>

        {/* Now Spinning */}
        <div className="flex items-center justify-center gap-3 mt-6 relative top-[620px]" style={{transform: 'scaleY(-1)'}}>
          <div className="w-[60px] h-[2px] bg-[#e8c88c]" style={{boxShadow: '0 0 6px rgba(232,200,140,0.3)'}} />
          <span className="font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] uppercase text-[26px] tracking-tight font-bold whitespace-nowrap" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>Now Spinning</span>
          <div className="w-[60px] h-[2px] bg-[#e8c88c]" style={{boxShadow: '0 0 6px rgba(232,200,140,0.3)'}} />
        </div>

        {/* Our Featured Genre */}
        <div className="flex flex-col items-center gap-3 mt-8 relative top-[400px]" style={{transform: 'scaleY(-1)'}}>
          <span className="font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] uppercase text-[20px] tracking-tight font-medium">Our Featured Genre</span>

          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[1px] bg-[#b8e8e8]" />
            <span className="font-[family-name:var(--font-libre-baskerville)] text-[#b8e8e8] uppercase text-[64px] tracking-tight font-bold -mt-2" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>Jazz</span>
            <div className="w-[40px] h-[1px] bg-[#b8e8e8]" />
          </div>
        </div>
        {/* Album Cards Background */}
        <div className="w-full py-6 relative top-[-200px]" style={{transform: 'scaleY(-1)'}}>
          <div className="flex justify-center items-stretch gap-4 px-2">
          {/* Left Card - Jazz History */}
          <div className="w-[200px] rounded-xl overflow-hidden flex flex-col border-[3px] border-[#e8c88c]">
            <div className="bg-[#2d1f1a] px-3 py-2">
              <span className="font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] uppercase text-[14px] tracking-[0.15em] font-bold">Jazz History</span>
            </div>
            <div className="w-full h-[160px] bg-[#d4d4d4] flex items-center justify-center"><span className="text-[#555555] text-[11px] font-[family-name:var(--font-inter)]">Jazz picture (person, vibe, etc)</span></div>
            <div className="bg-[#2d1f1a] px-3 py-2 flex-1">
              <p className="text-[#e8c88c]/70 text-[10px] font-[family-name:var(--font-inter)] leading-relaxed">In the early 1900s, the streets of New Orleans were alive with a new sound. African rhythms met blues and ragtime to create something entirely new. It wasn't just music - it was freedom, expression, and revolution all at once. From New Orleans to Harlem, jazz gave voice to a generation...</p>
            </div>
            <a href="/jazz/history" className="bg-[#2d1f1a] px-3 py-2 border-t border-[#e8c88c]/10 mt-auto flex items-center justify-between">
              <span className="text-[#e8c88c] text-[13px] font-[family-name:var(--font-libre-baskerville)]">Learn More</span>
              <span className="text-[#e8c88c] text-[13px]">→</span>
            </a>
          </div>

          {/* Right Card - Featured Sips */}
          <div className="w-[200px] rounded-xl overflow-hidden flex flex-col bg-[#2d1f1a] border-[3px] border-[#e8c88c]">
            <div className="px-3 py-2 border-b border-[#2d1f1a]/10">
              <span className="font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] uppercase text-[14px] tracking-[0.15em] font-bold whitespace-nowrap">Featured Sips</span>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1 border-b border-[#2d1f1a]/10 flex flex-col bg-[#2d1f1a] overflow-hidden">
                <div className="bg-[#e05620] noisy px-3 py-1">
                  <p className="text-[12px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-[0.07em] text-center"
                    style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                    <img src="/images/menu_cup.svg" className="w-4 h-4 inline-block mr-1 -mt-1" style={{filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))'}} /> Coffee
                  </p>
                </div>
                <div className="flex gap-2 p-2">
                  <div className="w-[70px] h-[70px] relative top-[-1px] bg-[#1a1310] rounded-lg flex items-center justify-center">
                    <span className="text-white/40 text-[7px]">PICTURE</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <span className="text-[#e8c88c] text-[16px] whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide">Blue Note Brew</span>
                    <span className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#e05620]" style={{ textShadow: '0 0 8px rgba(224,86,32,0.4)' }}>$5.75</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 border-b border-[#2d1f1a]/10 flex flex-col bg-[#2d1f1a] overflow-hidden">
                <div className="bg-[#2a7d7d] noisy px-3 py-1">
                  <p className="text-[12px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-[0.07em] text-center"
                    style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                    Tea
                  </p>
                </div>
                <div className="flex gap-2 p-2">
                  <div className="w-[70px] h-[70px] relative top-[-1px] bg-[#1a1310] rounded-lg flex items-center justify-center">
                    <span className="text-white/40 text-[7px]">PICTURE</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <span className="text-[#e8c88c] text-[16px] whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide">Coltrane Chai</span>
                    <span className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#e05620]" style={{ textShadow: '0 0 8px rgba(224,86,32,0.4)' }}>$4.50</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col bg-[#2d1f1a] overflow-hidden">
                <div className="bg-[#6b4c8c] noisy px-3 py-1">
                  <p className="text-[12px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-[0.07em] text-center"
                    style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                    Energy Drinks
                  </p>
                </div>
                <div className="flex gap-2 p-2">
                  <div className="w-[70px] h-[70px] relative top-[-1px] bg-[#1a1310] rounded-lg flex items-center justify-center">
                    <span className="text-white/40 text-[7px]">PICTURE</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <span className="text-[#e8c88c] text-[16px] whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide">Bebop Blast</span>
                    <span className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#e05620]" style={{ textShadow: '0 0 8px rgba(224,86,32,0.4)' }}>$4.75</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#2d1f1a] px-3 py-2 border-t border-[#e8c88c]/10 mt-auto flex items-center justify-between">
                <span className="text-[#e8c88c] text-[13px] whitespace-nowrap font-[family-name:var(--font-libre-baskerville)]">View Featured Menu</span>
                <span className="text-[#e8c88c] text-[12px]">→</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Second Background Extension */}
      <div
        className="w-full h-[800px] relative top-[-180px]"
        style={{
          backgroundImage: `url('/images/background3.png')`,
          backgroundSize: '153%',
          backgroundPosition: 'center top',
          transform: 'scaleY(-1)',
        }}
      >
        {/* About Us */}
        <div className="absolute top-[780px] left-0 w-full flex items-center justify-center gap-3" style={{transform: `scaleY(-1)`}}>
          <div className="w-[80px] h-[2px] bg-[#e8c88c]" style={{boxShadow: '0 0 6px rgba(232,200,140,0.3)'}} />
          <span className="font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] uppercase text-[26px] tracking-tight font-bold whitespace-nowrap" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>About Us</span>
          <div className="w-[80px] h-[2px] bg-[#e8c88c]" style={{boxShadow: '0 0 6px rgba(232,200,140,0.3)'}} />
        </div>

        {/* Store Photo */}
        <div className="bg-[#2d1f1a] left-0 right-0 mx-auto absolute top-[230px] w-[330px] h-[520px] rounded-xl overflow-hidden border-[3px] border-[#e8c88c]" style={{transform: 'scaleY(-1)'}}>
          <div className="bg-[#2d1f1a] px-3 py-3 text-center">
            <span className="font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] uppercase text-[18px] tracking-[0.15em] font-bold">Our Store</span>
          </div>
          <div className="w-full flex-1 bg-[#d4d4d4] flex items-center justify-center h-[calc(100%-240px)]">
            <span className="text-[#555555] text-[14px] font-[family-name:var(--font-inter)]">Store Photo Coming Soon</span>
          </div>
          <div className="bg-[#2d1f1a] px-4 py-4 space-y-3">
            {/* Address */}
            <a 
              href="https://maps.google.com/?q=Espresso+Groove" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:opacity-80 transition cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#e8c88c] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-[#e8c88c] text-[13px] font-[family-name:var(--font-libre-baskerville)] font-medium">123 Groove St.</p>
                <p className="text-[#e8c88c]/70 text-[12px] font-[family-name:var(--font-inter)]">City, State 00000</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#e8c88c] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[#e8c88c] text-[13px] font-[family-name:var(--font-libre-baskerville)] font-medium">Mon–Fri: 7am–9pm</p>
                <p className="text-[#e8c88c]/70 text-[12px] font-[family-name:var(--font-inter)]">Sat–Sun: 8am–10pm</p>
              </div>
            </div>

            {/* Phone */}
            <a href="tel:+10000000000" className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer">
              <svg className="w-5 h-5 text-[#e8c88c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-[#e8c88c] text-[13px] font-[family-name:var(--font-libre-baskerville)] font-medium">(000) 000-0000</p>
            </a>

            {/* Get Directions */}
            <a href="https://maps.google.com/?q=Espresso+Groove" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 mt-4 hover:opacity-80 transition cursor-pointer">
              <span className="text-[#e8c88c] text-[14px] font-[family-name:var(--font-libre-baskerville)] scale-110 font-medium">Get Directions</span>
              <span className="text-[#e8c88c] text-[14px] scale-110 ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Third Background Extension */}
      <div
        className="w-full h-[650px] relative top-[-192px]"
        style={{
          backgroundImage: `url('/images/background6.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          transform: 'scaleY(-1)',
        }}
      >
        {/* The Vibe Header */}
        <div className="absolute top-[780px] left-0 w-full flex items-center justify-center gap-3" style={{transform: 'scaleY(-1)'}}>
          <div className="w-[80px] h-[2px] bg-[#e8c88c]" style={{boxShadow: '0 0 6px rgba(232,200,140,0.3)'}}/>
          <span className="font-[family-name:var(--font-libre-baskerville)] text-[#e8c88c] uppercase text-[26px] tracking-tight font-bold whitespace-nowrap" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>The Vibe</span>
          <div className="w-[80px] h-[2px] bg-[#e8c88c]" style={{boxShadow: '0 0 6px rgba(232,200,140,0.3)'}}/>
        </div>

        {/* The Vibe Text */}
        <div className="absolute top-[150px] left-0 w-full px-8" style={{transform: 'scaleY(-1)'}}>
          <p className="text-[#e8c88c] text-[24px] font-[500] [font-[family-name:var(--font-inter)] leading-relaxed">
            <span className="text-[#e8c88c] font-[900]">Espresso Groove</span> was born from a simple idea:
          </p>
          <p className="text-[#e8c88c] text-[24px] font-[500] font-[family-name:var(--font-inter)] leading-relaxed mt-4">A space where the ritual of coffee meets the soul of music. Great espresso and great vinyl share something in common — they&apos;re both meant to be <span className="text-[#e8c88c] font-[800]">savored</span>, not rushed.</p>
          <p className="text-[#e8c88c] text-[24px] font-[500] font-[family-name:var(--font-inter)] leading-relaxed mt-4">
            Pull up a chair. Flip through the crates. Espresso <span className="text-[#e8c88c] font-[900]">drips</span>, the needle <span className="text-[#e8c88c] font-[800]">drops</span>, and the <span className="text-[#e8c88c] font-[800]">vibe</span> takes over.
          </p>
          <p className="text-[#e8c88c] text-[26px] font-[500] font-[family-name:var(--font-libre-baskerville)] italic mt-4" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.5)'}}>
            Drip. Drop. Vibe.
          </p>
        </div>

        {/* Music Notes */}
        <div className="absolute top-[100px] left-0 w-full" style={{transform: 'scaleY(-1)'}}>
          <MusicNotes isPlaying={true} />
        </div>

      </div>

      {/* Fourth Background Extension */}
      <div className="w-full h-[350px] relative top-[-208px] overflow-hidden mb-[-208px]"
        style={{
          backgroundImage: `url('/images/background7.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          transform: 'scaleY(-1)',
        }}
      >
        {/* Logo */}
        <div className="relative top-[25vh]">
          <img
            src="/images/espresso_groove.png"
            alt="Espresso Groove"
            className="ml-[6vw] min-[479px]:max-[481px]:!w-80 min-[427px]:max-[431px]:!w-75 min-[320px]:max-[321px]:!w-40 w-55 logo-glow scale-[1.4] translate-y-[20px]" style={{transform: 'scaleY(-1)'}}
          />
        </div>

        {/* Tagline */}
        <div>
          <p className="text-[#e8c88c] text-[26px] font-[500] font-[family-name:var(--font-libre-baskerville)] italic relative top-[5vh] left-[3vh]" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.5)', transform: 'scaleY(-1)'}}>
            Drip. Drop. Vibe.
          </p>
        </div>

        {/* Description */}
        <div>
          <p className="text-[#e8c88c] text-[15px] font-[500] font-[family-name:var(--font-libre-baskerville)] relative top-[-11vh] left-[3vh] max-w-[250px]" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)', transform: 'scaleY(-1)'}}>
            A vinyl-fueled coffee shop coffee meets culture.<br />Sip slow, dig deep, stay groovy.
          </p>
        </div>
      </div>

      {/* Fifth Background Extension */}
      <div className="w-full h-[685px]"
        style={{
          backgroundImage: `url('images/background8.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scaleY(-1)',
        }}
        >

        {/* Visit Us Title */}
        <div className="relative top-[100vh] left-[3vh]" style={{transform: 'scaleY(-1)'}}>
          <h3 className="text-[#e8c88c] text-[22px] font-[family-name:var(--font-bebas-neue)] tracking-[0.15em] uppercase">Visit Us</h3>
        </div>

        {/* Store Info */}
        <div className="flex flex-col gap-4 relative top-[73vh] left-[3vh]" style={{transform: 'scaleY(-1)'}}>

            {/* Address */}
            <a 
              href="https://maps.google.com/?q=Espresso+Groove" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:opacity-80 transition cursor-pointer"
            >
              <svg className="w-7 h-7 text-[#e8c88c] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-[#e8c88c] text-[16px] font-[family-name:var(--font-libre-baskerville)] font-medium">3540 Belle Terre Bldv • Unit C</p>
                <p className="text-[#e8c88c]/70 text-[15px] font-[family-name:var(--font-inter)]">Myrtle Beach, SC 29579</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <svg className="w-7 h-7 text-[#e8c88c] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[#e8c88c] text-[16px] font-[family-name:var(--font-libre-baskerville)] font-medium">Mon–Fri: 7am–9pm</p>
                <p className="text-[#e8c88c]/70 text-[15px] font-[family-name:var(--font-inter)]">Sat–Sun: 8am–10pm</p>
              </div>
            </div>

            {/* Phone */}
            <a href="tel:+10000000000" className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer">
              <svg className="w-7 h-7 text-[#e8c88c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-[#e8c88c] text-[16px] font-[family-name:var(--font-libre-baskerville)] font-medium">(000) 000-0000</p>
            </a>

        </div>

        {/* Social Icons */}
        <div className="flex gap-4 relative top-[35vh] left-[3vh]" style={{transform: 'scaleY(-1)'}}>
          {/* Instagram */}
          <a href="#" className="w-12 h-12 border-2 border-[#e8c88c] rounded-full flex items-center justify-center text-[#e8c88c] hover:bg-[#e8c88c] hover:text-[#2d1f1a] transition-all">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" className="w-12 h-12 border-2 border-[#e8c88c] rounded-full flex items-center justify-center text-[#e8c88c] hover:bg-[#e8c88c] hover:text-[#2d1f1a] transition-all">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className="w-12 h-12 border-2 border-[#e8c88c] rounded-full flex items-center justify-center text-[#e8c88c] hover:bg-[#e8c88c] hover:text-[#2d1f1a] transition-all">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

      </div>
    </>
  );
}