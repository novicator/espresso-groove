"use client";

import Link from "next/link";

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
            <div className="w-full h-[160px] bg-[#1a1310] flex items-center justify-center"><span className="text-white text-[11px] font-[family-name:var(--font-inter)] opacity-50">Jazz picture (person, vibe, etc)</span></div>
            <div className="bg-[#2d1f1a] px-3 py-2 flex-1">
              <p className="text-[#e8c88c]/70 text-[10px] font-[family-name:var(--font-inter)] leading-relaxed">In the early 1900s, the streets of New Orleans were alive with a new sound. African rhythms met blues and ragtime to create something entirely new. It wasn't just music — it was freedom, expression, and revolution all at once. From New Orleans to Harlem, jazz gave voice to a generation...</p>
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
    </>
  );
}