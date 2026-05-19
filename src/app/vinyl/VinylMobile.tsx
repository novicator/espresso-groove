"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

// All vw values converted from px based on 393px width
// Formula: px ÷ 393 × 100 = vw

const vinylSections = [
  {
    id: "Now Spinning",
    subtitle: "60s Revolution",
    items: [
      { name: "SGT. PEPPER'S", artist: "The Beatles", stock: 3, img: "/images/artwork/sgt-peppers.jpg" },
      { name: "ARE YOU EXPERIENCED", artist: "Jimi Hendrix Experience", stock: 1, img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/00/67/45/006745f5-95d5-5a06-35ed-d515e9cfd7d8/dj.tbwlxwoh.jpg/600x600bb.jpg" },
      { name: "PET SOUNDS", artist: "The Beach Boys", stock: 5, img: "/images/artwork/pet-sounds.jpg" },
      { name: "HIGHWAY 61 REVISITED", artist: "Bob Dylan", stock: 2, img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/ff/c0/f8ffc056-55b4-2033-657d-32492d1eea25/827969239926.jpg/600x600bb.jpg" },
      { name: "ABBEY ROAD", artist: "The Beatles", stock: 4, img: "/images/artwork/abbey-road.jpg" },
    ],
  },
  {
    id: "Fresh Drops",
    items: [
      { name: "COWBOY CARTER", artist: "Beyoncé", stock: 2, img: "/images/artwork/cowboy-carter.jpg" },
      { name: "HIT ME HARD AND SOFT", artist: "Billie Eilish", stock: 4, img: "/images/artwork/hit-me-hard-and-soft.jpg" },
      { name: "THE TORTURED POETS DEPARTMENT", artist: "Taylor Swift", stock: 1, img: "/images/artwork/tortured-poets.jpg" },
      { name: "BRAT", artist: "Charli XCX", stock: 3, img: "/images/artwork/brat.jpg" },
      { name: "GNX", artist: "Kendrick Lamar", stock: 2, img: "/images/artwork/gnx.jpg" },
      { name: "SHORT N' SWEET", artist: "Sabrina Carpenter", stock: 3, img: "/images/artwork/short-n-sweet.jpg" },
      { name: "CHROMAKOPIA", artist: "Tyler, The Creator", stock: 2, img: "/images/artwork/chromakopia.jpg" },
      { name: "CHARM", artist: "Clairo", stock: 4, img: "/images/artwork/charm-clairo.jpg" },
      { name: "MOON MUSIC", artist: "Coldplay", stock: 2, img: "/images/artwork/moon-music.jpg" },
      { name: "ROMANCE", artist: "Fontaines D.C.", stock: 3, img: "/images/artwork/romance-fontaines.jpg" },
    ],
  },
  {
    id: "The Groove Pick",
    items: [
      { name: "RUMOURS", artist: "Fleetwood Mac", stock: 6, img: "/images/artwork/rumours.jpg" },
      { name: "ABBEY ROAD", artist: "The Beatles", stock: 3, img: "/images/artwork/abbey-road.jpg" },
      { name: "BACK TO BLACK", artist: "Amy Winehouse", stock: 2, img: "/images/artwork/back-to-black.jpg" },
      { name: "THRILLER", artist: "Michael Jackson", stock: 4, img: "/images/artwork/thriller.jpg" },
      { name: "LEGEND", artist: "Bob Marley", stock: 5, img: "/images/artwork/legend.jpg" },
      { name: "PURPLE RAIN", artist: "Prince", stock: 2, img: "/images/artwork/purple-rain.jpg" },
      { name: "PET SOUNDS", artist: "The Beach Boys", stock: 3, img: "/images/artwork/pet-sounds.jpg" },
      { name: "SGT. PEPPER'S LONELY HEARTS CLUB BAND", artist: "The Beatles", stock: 1, img: "/images/artwork/sgt-peppers.jpg" },
      { name: "EXILE ON MAIN ST.", artist: "The Rolling Stones", stock: 2, img: "/images/artwork/exile-on-main-st.jpg" },
      { name: "DARK SIDE OF THE MOON", artist: "Pink Floyd", stock: 4, img: "/images/artwork/dark-side-of-the-moon.jpg" },
    ],
  },
];

const digTheStacksSections = [
  {
    title: "Turn It Up",
    desc: "Rock, Punk, and high-energy sound",
    vinyls: [
      { name: "NEVERMIND", artist: "Nirvana", img: "/images/artwork/nevermind.jpg" },
      { name: "OK COMPUTER", artist: "Radiohead", img: "/images/artwork/ok-computer.jpg" },
      { name: "LED ZEPPELIN IV", artist: "Led Zeppelin", img: "/images/artwork/led-zeppelin-iv.jpg" },
      { name: "THE JOSHUA TREE", artist: "U2", img: "/images/artwork/joshua-tree.jpg" },
      { name: "APPETITE FOR DESTRUCTION", artist: "Guns N' Roses", img: "/images/artwork/appetite-for-destruction.jpg" },
      { name: "BACK IN BLACK", artist: "AC/DC", img: "/images/artwork/back-in-black.jpg" },
      { name: "PARANOID", artist: "Black Sabbath", img: "/images/artwork/paranoid.jpg" },
      { name: "LONDON CALLING", artist: "The Clash", img: "/images/artwork/london-calling.jpg" },
      { name: "BORN TO RUN", artist: "Bruce Springsteen", img: "/images/artwork/born-to-run.jpg" },
      { name: "WHO'S NEXT", artist: "The Who", img: "/images/artwork/whos-next.jpg" },
      { name: "MASTER OF PUPPETS", artist: "Metallica", img: "/images/artwork/master-of-puppets.jpg" },
      { name: "RAGE AGAINST THE MACHINE", artist: "Rage Against the Machine", img: "/images/artwork/rage-against-the-machine.jpg" },
      { name: "TEN", artist: "Pearl Jam", img: "/images/artwork/ten-pearl-jam.jpg" },
      { name: "SONGS FOR THE DEAF", artist: "Queens of the Stone Age", img: "/images/artwork/songs-for-the-deaf.jpg" },
      { name: "NEVER MIND THE BOLLOCKS", artist: "Sex Pistols", img: "/images/artwork/never-mind-the-bollocks.jpg" },
    ],
  },
  {
    title: "Smooth Operator",
    desc: "Jazz, Soul, and R&B",
    vinyls: [
      { name: "KIND OF BLUE", artist: "Miles Davis", img: "/images/artwork/kind-of-blue.jpg" },
      { name: "INNERVISIONS", artist: "Stevie Wonder", img: "/images/artwork/innervisions.jpg" },
      { name: "OFF THE WALL", artist: "Michael Jackson", img: "/images/artwork/off-the-wall.jpg" },
      { name: "SUPERFLY", artist: "Curtis Mayfield", img: "/images/artwork/superfly.jpg" },
      { name: "A LOVE SUPREME", artist: "John Coltrane", img: "/images/artwork/a-love-supreme.jpg" },
      { name: "WHAT'S GOING ON", artist: "Marvin Gaye", img: "/images/artwork/whats-going-on.jpg" },
      { name: "SONGS IN THE KEY OF LIFE", artist: "Stevie Wonder", img: "/images/artwork/songs-in-the-key-of-life.jpg" },
      { name: "BACK TO BLACK", artist: "Amy Winehouse", img: "/images/artwork/back-to-black.jpg" },
      { name: "VOODOO", artist: "D'Angelo", img: "/images/artwork/voodoo.jpg" },
      { name: "AJA", artist: "Steely Dan", img: "/images/artwork/aja.jpg" },
      { name: "LADY SOUL", artist: "Aretha Franklin", img: "/images/artwork/lady-soul.jpg" },
      { name: "SONGS IN A MINOR", artist: "Alicia Keys", img: "/images/artwork/songs-in-a-minor.jpg" },
      { name: "LADY SINGS THE BLUES", artist: "Billie Holiday", img: "/images/artwork/lady-sings-the-blues.jpg" },
      { name: "BITCHES BREW", artist: "Miles Davis", img: "/images/artwork/bitches-brew.jpg" },
      { name: "CHANNEL ORANGE", artist: "Frank Ocean", img: "/images/artwork/channel-orange.jpg" },
    ],
  },
  {
    title: "Low End Theory",
    desc: "Hip-Hop, Boom Bap, and Beats",
    vinyls: [
      { name: "ILLMATIC", artist: "Nas", img: "/images/artwork/illmatic.jpg" },
      { name: "TO PIMP A BUTTERFLY", artist: "Kendrick Lamar", img: "/images/artwork/to-pimp-a-butterfly.jpg" },
      { name: "READY TO DIE", artist: "Notorious B.I.G.", img: "/images/artwork/ready-to-die.jpg" },
      { name: "MADVILLAINY", artist: "Madvillain", img: "/images/artwork/madvillainy.jpg" },
      { name: "THE MISEDUCATION OF LAURYN HILL", artist: "Lauryn Hill", img: "/images/artwork/miseducation.jpg" },
      { name: "THE CHRONIC", artist: "Dr. Dre", img: "/images/artwork/the-chronic.jpg" },
      { name: "ENTER THE WU-TANG (36 CHAMBERS)", artist: "Wu-Tang Clan", img: "/images/artwork/36-chambers.jpg" },
      { name: "AQUEMINI", artist: "OutKast", img: "/images/artwork/aquemini.jpg" },
      { name: "THE LOW END THEORY", artist: "A Tribe Called Quest", img: "/images/artwork/low-end-theory-tribe.jpg" },
      { name: "PAID IN FULL", artist: "Eric B. & Rakim", img: "/images/artwork/paid-in-full.jpg" },
      { name: "REASONABLE DOUBT", artist: "Jay-Z", img: "/images/artwork/reasonable-doubt.jpg" },
      { name: "BLACK ON BOTH SIDES", artist: "Mos Def", img: "/images/artwork/black-on-both-sides.jpg" },
      { name: "THE COLLEGE DROPOUT", artist: "Kanye West", img: "/images/artwork/college-dropout.jpg" },
      { name: "GET RICH OR DIE TRYIN'", artist: "50 Cent", img: "/images/artwork/get-rich-or-die-tryin.jpg" },
      { name: "2001", artist: "Dr. Dre", img: "/images/artwork/2001-dre.jpg" },
    ],
  },
  {
    title: "Neon Nights",
    desc: "Electronic, Synth, and Dance",
    vinyls: [
      { name: "RANDOM ACCESS MEMORIES", artist: "Daft Punk", img: "/images/artwork/random-access-memories.jpg" },
      { name: "DISCOVERY", artist: "Daft Punk", img: "/images/artwork/discovery.jpg" },
      { name: "CROSS", artist: "Justice", img: "/images/artwork/cross-justice.jpg" },
      { name: "HOMEWORK", artist: "Daft Punk", img: "/images/artwork/homework.jpg" },
      { name: "MUSIC HAS THE RIGHT TO CHILDREN", artist: "Boards of Canada", img: "/images/artwork/music-has-the-right.jpg" },
      { name: "SELECTED AMBIENT WORKS 85-92", artist: "Aphex Twin", img: "/images/artwork/selected-ambient-works.jpg" },
      { name: "THE FAT OF THE LAND", artist: "The Prodigy", img: "/images/artwork/fat-of-the-land.jpg" },
      { name: "ENDTRODUCING", artist: "DJ Shadow", img: "/images/artwork/endtroducing.jpg" },
      { name: "PLAY", artist: "Moby", img: "/images/artwork/play-moby.jpg" },
      { name: "TRANS-EUROPE EXPRESS", artist: "Kraftwerk", img: "/images/artwork/trans-europe-express.jpg" },
      { name: "UNTRUE", artist: "Burial", img: "/images/artwork/untrue.jpg" },
      { name: "SINCE I LEFT YOU", artist: "The Avalanches", img: "/images/artwork/since-i-left-you.jpg" },
      { name: "DUMMY", artist: "Portishead", img: "/images/artwork/dummy.jpg" },
      { name: "MEZZANINE", artist: "Massive Attack", img: "/images/artwork/mezzanine.jpg" },
      { name: "CONFESSIONS ON A DANCE FLOOR", artist: "Madonna", img: "/images/artwork/confessions-on-a-dance-floor.jpg" },
    ],
  },
  {
    title: "Roots & Dust",
    desc: "Country, Folk, and Americana",
    vinyls: [
      { name: "JOLENE", artist: "Dolly Parton", img: "/images/artwork/jolene.jpg" },
      { name: "AT FOLSOM PRISON", artist: "Johnny Cash", img: "/images/artwork/at-folsom-prison.jpg" },
      { name: "GOLDEN HOUR", artist: "Kacey Musgraves", img: "/images/artwork/golden-hour.jpg" },
      { name: "TRAVELLER", artist: "Chris Stapleton", img: "/images/artwork/traveller.jpg" },
      { name: "RED HEADED STRANGER", artist: "Willie Nelson", img: "/images/artwork/red-headed-stranger.jpg" },
      { name: "BLOOD ON THE TRACKS", artist: "Bob Dylan", img: "/images/artwork/blood-on-the-tracks.jpg" },
      { name: "HARVEST", artist: "Neil Young", img: "/images/artwork/harvest.jpg" },
      { name: "PINK MOON", artist: "Nick Drake", img: "/images/artwork/pink-moon.jpg" },
      { name: "BLUE", artist: "Joni Mitchell", img: "/images/artwork/blue-joni-mitchell.jpg" },
      { name: "WILDFLOWERS", artist: "Tom Petty", img: "/images/artwork/wildflowers.jpg" },
      { name: "STARDUST", artist: "Willie Nelson", img: "/images/artwork/stardust.jpg" },
      { name: "COAL MINER'S DAUGHTER", artist: "Loretta Lynn", img: "/images/artwork/coal-miners-daughter.jpg" },
      { name: "MUSIC FROM BIG PINK", artist: "The Band", img: "/images/artwork/music-from-big-pink.jpg" },
      { name: "HONKY TONK HEROES", artist: "Waylon Jennings", img: "/images/artwork/honky-tonk-heroes.jpg" },
      { name: "WILL THE CIRCLE BE UNBROKEN", artist: "Nitty Gritty Dirt Band", img: "/images/artwork/will-the-circle-be-unbroken.jpg" },
    ],
  },
  {
    title: "Main Stage",
    desc: "Pop, Indie, and Funk",
    vinyls: [
      { name: "FUTURE NOSTALGIA", artist: "Dua Lipa", img: "/images/artwork/future-nostalgia.jpg" },
      { name: "RUMOURS", artist: "Fleetwood Mac", img: "/images/artwork/rumours.jpg" },
      { name: "MOTHERSHIP CONNECTION", artist: "Parliament", img: "/images/artwork/mothership-connection.jpg" },
      { name: "1989", artist: "Taylor Swift", img: "/images/artwork/1989.jpg" },
      { name: "IS THIS IT", artist: "The Strokes", img: "/images/artwork/is-this-it.jpg" },
      { name: "THRILLER", artist: "Michael Jackson", img: "/images/artwork/thriller.jpg" },
      { name: "LEMONADE", artist: "Beyoncé", img: "/images/artwork/lemonade.jpg" },
      { name: "BORN THIS WAY", artist: "Lady Gaga", img: "/images/artwork/born-this-way.jpg" },
      { name: "FUNERAL", artist: "Arcade Fire", img: "/images/artwork/funeral.jpg" },
      { name: "IN THE AEROPLANE OVER THE SEA", artist: "Neutral Milk Hotel", img: "/images/artwork/aeroplane-over-the-sea.jpg" },
      { name: "LOVELESS", artist: "My Bloody Valentine", img: "/images/artwork/loveless.jpg" },
      { name: "MAGGOT BRAIN", artist: "Funkadelic", img: "/images/artwork/maggot-brain.jpg" },
      { name: "PARACHUTES", artist: "Coldplay", img: "/images/artwork/parachutes.jpg" },
      { name: "MODERN VAMPIRES OF THE CITY", artist: "Vampire Weekend", img: "/images/artwork/modern-vampires-of-the-city.jpg" },
      { name: "CURRENTS", artist: "Tame Impala", img: "/images/artwork/currents.jpg" },
    ],
  },
];

function StacksVinylRow({ vinyls, autoScroll = false, isActive = true, rowTitle, variant = "stacks" }: { vinyls: { name: string; artist: string; img: string }[]; autoScroll?: boolean; isActive?: boolean; rowTitle?: string; variant?: "stacks" | "regular" }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollPosRef = useRef(0);

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) { setScrollRatio(0); setThumbWidth(100); return; }
    setScrollRatio(el.scrollLeft / maxScroll);
    setThumbWidth((el.clientWidth / el.scrollWidth) * 100);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener("scroll", updateScroll);
    return () => el.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  // Auto-scroll: drift right→left at constant speed, snap back when one full set has scrolled past.
  // Only runs while isActive — when focus shifts away, we freeze in place.
  // We track position in a float ref because iOS Safari floors writes to scrollLeft,
  // which would prevent sub-pixel speeds (e.g. 0.5/frame) from ever accumulating.
  useEffect(() => {
    const el = scrollRef.current;
    if (!autoScroll || !isActive) {
      isPausedRef.current = false;
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
      return;
    }
    if (!el) return;

    scrollPosRef.current = el.scrollLeft;
    const speed = 0.5; // px per frame (~30 px/sec at 60fps)
    let rafId = 0;

    const tick = () => {
      if (!el) return;
      if (isPausedRef.current) {
        // While paused, the user may be dragging — keep our tracker in sync with their scroll.
        scrollPosRef.current = el.scrollLeft;
      } else {
        scrollPosRef.current += speed;
        el.scrollLeft = scrollPosRef.current;
      }
      // Seamless loop: when scrolled past one full copy, jump back by that distance.
      // Because the second copy is identical to the first, the snap is invisible.
      if (el.children.length >= vinyls.length + 1) {
        const first = el.children[0] as HTMLElement;
        const secondCopyFirst = el.children[vinyls.length] as HTMLElement;
        const loopDistance = secondCopyFirst.offsetLeft - first.offsetLeft;
        if (loopDistance > 0 && scrollPosRef.current >= loopDistance) {
          scrollPosRef.current -= loopDistance;
          el.scrollLeft = scrollPosRef.current;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [autoScroll, isActive, vinyls.length]);

  const handleInteractionStart = () => {
    if (!autoScroll) return;
    isPausedRef.current = true;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const handleInteractionEnd = () => {
    if (!autoScroll) return;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
      resumeTimerRef.current = null;
    }, 2000);
  };

  const items = autoScroll ? [...vinyls, ...vinyls] : vinyls;

  const isRegular = variant === "regular";
  const containerStyle = isRegular
    ? { gap: '4vw', paddingLeft: '3vw', paddingRight: '3vw', paddingBottom: '4vw' }
    : { gap: '3vw', paddingLeft: '4vw', paddingRight: '4vw', paddingBottom: '3vw', paddingTop: '3vw' };
  const cardStyle = isRegular
    ? { width: '40.7vw', paddingTop: '1.2vw', paddingLeft: '1.2vw', paddingRight: '1.2vw', paddingBottom: '6.5vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }
    : { width: '35vw', padding: '.8vw', paddingBottom: '3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' };
  const innerPadding = isRegular ? '3vw' : '1.5vw';
  const idPrefix = isRegular ? 'card' : 'stacks-card';

  return (
    <>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden hide-scrollbar"
        style={containerStyle}
        onPointerDown={handleInteractionStart}
        onPointerUp={handleInteractionEnd}
        onPointerCancel={handleInteractionEnd}
        onWheel={() => { handleInteractionStart(); handleInteractionEnd(); }}
      >
        {items.map((vinyl, vi) => (
          <div
            key={vi}
            id={vi < vinyls.length && rowTitle ? `${idPrefix}-${rowTitle}-${vi}` : undefined}
            className="flex-shrink-0 rounded-xl"
            style={cardStyle}
          >
            <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
              <div className="bg-[#1a1310] overflow-hidden" style={{ width: '100%', aspectRatio: '1' }}>
                <img src={vinyl.img} alt={vinyl.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div style={{ padding: innerPadding }}>
                <h4
                  className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                  style={{ fontSize: '5vw' }}
                >
                  {vinyl.name}
                </h4>
                <p className="text-white/60 font-[family-name:var(--font-inter)] overflow-hidden whitespace-nowrap text-ellipsis" style={{ fontSize: '3.8vw', marginTop: '0.5vw' }}>
                  {vinyl.artist}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!autoScroll && (
        <div
          style={{
            marginLeft: '4vw',
            marginRight: '4vw',
            marginBottom: '3vw',
            height: '1vw',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '999px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: `${scrollRatio * (100 - thumbWidth)}%`,
              width: `${thumbWidth}%`,
              height: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '999px',
            }}
          />
        </div>
      )}
    </>
  );
}

export default function VinylMobile() {
  const [navVisible, setNavVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Dig the Stacks");
  const [searchQuery, setSearchQuery] = useState("");
  const [hasRestored, setHasRestored] = useState(false);

  // Restore last-used filter from localStorage on mount.
  useEffect(() => {
    const stored = localStorage.getItem("vinyl-filter");
    const valid = ["Now Spinning", "Fresh Drops", "The Groove Pick", "Dig the Stacks"];
    if (stored && valid.includes(stored)) setSelectedFilter(stored);
    setHasRestored(true);
  }, []);

  // Persist filter changes — but only after the restore has run, so the initial
  // mount's "Dig the Stacks" default doesn't clobber a previously saved filter.
  useEffect(() => {
    if (!hasRestored) return;
    localStorage.setItem("vinyl-filter", selectedFilter);
  }, [selectedFilter, hasRestored]);
  const touchStartY = React.useRef<number | null>(null);

  // Track which Dig the Stacks row is most-visible — only that row's carousel auto-scrolls.
  const [activeStacksTitle, setActiveStacksTitle] = useState<string | null>(null);
  const stacksRowRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Search-arrival freeze: when the user clicks a search result, the destination
  // carousel sits still until they touch/move on the page.
  const [searchArrival, setSearchArrival] = useState(false);

  useEffect(() => {
    if (!searchArrival) return;
    const clear = () => setSearchArrival(false);
    document.addEventListener("pointerdown", clear, { once: true });
    return () => document.removeEventListener("pointerdown", clear);
  }, [searchArrival]);

  useEffect(() => {
    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = (entry.target as HTMLElement).dataset.rowKey;
          if (key) ratios.set(key, entry.intersectionRatio);
        }
        let bestKey: string | null = null;
        let bestRatio = 0;
        for (const [key, ratio] of ratios.entries()) {
          if (ratio > bestRatio) { bestKey = key; bestRatio = ratio; }
        }
        setActiveStacksTitle(bestKey);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );
    for (const el of stacksRowRefs.current.values()) observer.observe(el);
    return () => observer.disconnect();
  }, [selectedFilter]);

  // Build a unified search index: regular vinyl sections plus Dig the Stacks groups.
  type SearchEntry = {
    name: string;
    artist: string;
    img: string;
    kind: "regular" | "stacks";
    rowKey: string; // section.id for regular, group.title for stacks
    section: string; // display label used in the result row
    itemIndex: number;
  };
  const allVinylItems: SearchEntry[] = [
    ...vinylSections.flatMap((s) =>
      s.items.map((item, i) => ({
        name: item.name,
        artist: item.artist,
        img: item.img,
        kind: "regular" as const,
        rowKey: s.id,
        section: s.id,
        itemIndex: i,
      }))
    ),
    ...digTheStacksSections.flatMap((g) =>
      g.vinyls.map((v, i) => ({
        name: v.name,
        artist: v.artist,
        img: v.img,
        kind: "stacks" as const,
        rowKey: g.title,
        section: g.title,
        itemIndex: i,
      }))
    ),
  ];
  const searchResults: SearchEntry[] = searchQuery.length > 0
    ? allVinylItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.section.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const visibleSections = vinylSections.filter((s) => s.id === selectedFilter);

  const scrollToItem = useCallback((entry: SearchEntry) => {
    setSearchQuery("");
    (document.activeElement as HTMLElement)?.blur();

    if (entry.kind === "stacks") {
      setSelectedFilter("Dig the Stacks");
      setSearchArrival(true);
      setTimeout(() => {
        const sectionEl = document.getElementById(`stacks-section-${entry.rowKey}`);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            const cardEl = document.getElementById(`stacks-card-${entry.rowKey}-${entry.itemIndex}`);
            if (cardEl && cardEl.parentElement) {
              const container = cardEl.parentElement;
              const scrollLeft = cardEl.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (cardEl.clientWidth / 2);
              container.scrollTo({ left: scrollLeft, behavior: "smooth" });
            }
          }, 400);
        }
      }, 100);
    } else {
      setSelectedFilter(entry.rowKey);
      setSearchArrival(true);
      setTimeout(() => {
        const sectionEl = document.getElementById(`section-${entry.rowKey}`);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            const cardEl = document.getElementById(`card-${entry.rowKey}-${entry.itemIndex}`);
            if (cardEl && cardEl.parentElement) {
              const container = cardEl.parentElement;
              const scrollLeft = cardEl.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (cardEl.clientWidth / 2);
              container.scrollTo({ left: scrollLeft, behavior: "smooth" });
            }
          }, 400);
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <MobileNav onShow={() => setNavVisible(true)} />
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes vinyl-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .vinyl-spin {
          animation: vinyl-spin 8s linear infinite;
          transform-origin: 51.6% 39.8%;
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

    <div className={`relative overflow-hidden ${visibleSections.length <= 1 ? 'min-h-screen' : ''}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {selectedFilter === "All" ? (
          <>
            {/* Panel 1 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 2 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background_v2.png')" }}
            />
            {/* Panel 3 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/new_background_v2.png')" }}
            />
            {/* Panel 4 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 5 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')" }}
            />
            {/* Panel 6 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 7 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }}
            />
            {/* Panel 8 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 7 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }}
            />
            {/* Panel 7 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
          </>
        ) : (
          <>
            {/* Panel 1 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 2 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/menu_background_full.png')", }}
            />
            {/* Panel 3 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)",}}
            />
            {/* Panel 4 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", }}
            />
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(-1)" }}
            />
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background.png')", transform: "scaleY(1)" }}
            />
          </>
        )}
      </div>

      {/* Vinyl clip wrapper - prevents horizontal overflow without affecting vertical scroll */}
      <div className="absolute inset-0 z-[5] pointer-events-none" style={{ clipPath: 'inset(0)' }}>
      <div className="absolute" style={{ right: '-58vw', top: '-8vw', width: '120vw', height: '120vw' }}>
        <img
          src="/images/vinyl.svg"
          alt=""
          className="w-full h-full pointer-events-none vinyl-spin"
        />
      </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 transition-all duration-300" style={{ paddingTop: navVisible ? '10vw' : '0' }}>
        {/* We Buy Vinyl Banner */}
        <div
          className="bg-[#d9bc52] noisy flex items-center justify-center"
          style={{
            height: '10vw',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 12px rgba(217,188,82,0.6), 0 0 24px rgba(217,188,82,0.3)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
              animation: 'shimmer 2.5s ease-in-out infinite',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
          <span
            className="font-[family-name:var(--font-libre-baskerville)] font-bold uppercase text-black"
            style={{
              fontSize: '4vw',
              letterSpacing: '0.1em',
              position: 'relative',
              zIndex: 2,
            }}
          >
            We Buy Vinyl!
          </span>
        </div>

        {/* Page Title */}
        <div className="flex flex-col" style={{ marginTop: '2vw', marginBottom: '6.1vw' }}>
          <h1
            className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
            style={{
              fontSize: '10.7vw',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
              paddingLeft: '14.1vw',
              paddingTop: '3vw',
            }}
          >
            Vinyl
          </h1>
          <p
            className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
            style={{
              fontSize: '6.2vw',
              fontWeight: 900,
              letterSpacing: '0.2em',
              marginTop: '0vw',
              paddingLeft: '4.5vw',
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            }}
          >
            Drip • Drop • Vibe
          </p>
        </div>

        {/* Dropdown Bar */}
        <div className="relative flex justify-start" style={{ marginTop: '2vw', paddingLeft: '10vw' }}>
          <div
            className="rounded-full relative"
            style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between rounded-full bg-[#2d1f1a] cursor-pointer"
              style={{ width: '50vw', paddingLeft: '6vw', paddingRight: '5vw', paddingTop: '2.5vw', paddingBottom: '2.5vw', gap: '3vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold"
                style={{ fontSize: selectedFilter === "The Groove Pick" ? '3.65vw' : '4vw' }}
              >
                {selectedFilter}
              </span>
              <svg
                className={`text-white transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                style={{ width: '3.5vw', height: '3.5vw' }}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute left-0 z-[60] rounded-xl overflow-hidden"
                style={{
                  top: '100%',
                  marginTop: '1.5vw',
                  minWidth: '100%',
                  padding: '0.8vw',
                  background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
                }}
              >
                <div className="rounded-lg bg-[#2d1f1a]">
                  {/* Now Spinning */}
                  <button
                    onClick={() => { setSelectedFilter("Now Spinning"); setDropdownOpen(false); }}
                    className="flex flex-col w-full text-left cursor-pointer hover:bg-white/10 transition-colors"
                    style={{ padding: '3vw 5vw' }}
                  >
                    <span className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold" style={{ fontSize: '3.8vw' }}>Now Spinning</span>
                    <span className="font-[family-name:var(--font-inter)] text-white/40" style={{ fontSize: '3vw', marginTop: '0.5vw' }}>What&apos;s playing in the<br />house right now.</span>
                  </button>

                  {/* Fresh Drops */}
                  <button
                    onClick={() => { setSelectedFilter("Fresh Drops"); setDropdownOpen(false); }}
                    className="flex flex-col w-full text-left cursor-pointer hover:bg-white/10 transition-colors"
                    style={{ padding: '3vw 4.8vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <span className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold" style={{ fontSize: '3.8vw' }}>Fresh Drops</span>
                    <span className="font-[family-name:var(--font-inter)] text-white/40" style={{ fontSize: '3vw', marginTop: '0.5vw' }}>New arrivals and recent<br />releases worth pulling up for</span>
                  </button>

                  {/* The Groove Pick */}
                  <button
                    onClick={() => { setSelectedFilter("The Groove Pick"); setDropdownOpen(false); }}
                    className="flex flex-col w-full text-left cursor-pointer hover:bg-white/10 transition-colors"
                    style={{ padding: '3vw 5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <span className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold" style={{ fontSize: '3.8vw' }}>The Groove Pick</span>
                    <span className="font-[family-name:var(--font-inter)] text-white/40" style={{ fontSize: '3vw', marginTop: '0.5vw' }}>Staff favorites, deep cuts,<br /><span style={{ whiteSpace: 'nowrap' }}>and personal recommendations</span></span>
                  </button>

                  {/* Dig the Stacks */}
                  <button
                    onClick={() => { setSelectedFilter("Dig the Stacks"); setDropdownOpen(false); }}
                    className="flex flex-col w-full text-left cursor-pointer hover:bg-white/10 transition-colors"
                    style={{ padding: '3vw 5vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <span className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold" style={{ fontSize: '3.8vw' }}>Dig the Stacks</span>
                    <span className="font-[family-name:var(--font-inter)] text-white/40" style={{ fontSize: '3vw', marginTop: '0.5vw' }}>Rock, Indie, Hip-Hop, and everything in between</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative z-50" style={{ paddingLeft: '10vw', paddingRight: '10vw', marginTop: '4vw' }}>
          <div
            className="rounded-full relative z-50"
            style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
            <div className="flex items-center rounded-full bg-[#2d1f1a]" style={{ paddingLeft: '4vw', paddingRight: '4vw', paddingTop: '2.5vw', paddingBottom: '2.5vw', gap: '2vw' }}>
              <svg
                className="text-white/50"
                style={{ width: '4vw', height: '4vw', flexShrink: 0 }}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search vinyl..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}

                className="bg-transparent text-white font-[family-name:var(--font-libre-baskerville)] outline-none w-full placeholder-white/40"
                style={{ fontSize: '16px' }}
              />
            </div>
          </div>

          {/* Click-outside overlay to dismiss search */}
          {searchQuery.length > 0 && searchResults.length > 0 && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => {
                (document.activeElement as HTMLElement)?.blur();
              }}
              onTouchStart={(e) => { touchStartY.current = e.touches[0].clientY; }}
              onTouchMove={(e) => {
                if (touchStartY.current !== null && e.touches[0].clientY - touchStartY.current > 30) {
                  (document.activeElement as HTMLElement)?.blur();
                  touchStartY.current = null;
                }
              }}
            />
          )}

          {/* Search Results Dropdown */}
          {searchQuery.length > 0 && searchResults.length > 0 && (
            <div
              className="absolute left-0 right-0 z-50 rounded-xl"
              style={{
                marginTop: '1.5vw',
                marginLeft: '10vw',
                marginRight: '10vw',
                padding: '0.8vw',
                background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)',
              }}
            >
              {/* Close button - floats on top-right corner */}
              <button
                onClick={() => setSearchQuery("")}
                className="absolute flex items-center justify-center bg-red-600 rounded-full cursor-pointer active:scale-90 transition-transform"
                style={{
                  width: '6vw',
                  height: '6vw',
                  top: '-2vw',
                  right: '-2vw',
                  zIndex: 10,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                <svg
                  className="text-white"
                  style={{ width: '3.2vw', height: '3.2vw' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
              <div className="overflow-y-auto" style={{ maxHeight: '60vw' }}>
                {searchResults.map((item, i) => (
                  <div
                    key={`${item.name}-${i}`}
                    className="flex items-center font-[family-name:var(--font-libre-baskerville)] text-white cursor-pointer hover:bg-white/10 transition-colors"
                    style={{
                      padding: '3vw 4vw',
                      gap: '3vw',
                      borderTop: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    }}
                    onClick={() => scrollToItem(item)}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded object-cover"
                      style={{ width: '12vw', height: '12vw', flexShrink: 0 }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <p
                        className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight overflow-hidden whitespace-nowrap text-ellipsis"
                        style={{ fontSize: '4.7vw' }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-white/50 font-[family-name:var(--font-inter)]"
                        style={{ fontSize: '4vw' }}
                      >
                        {item.artist}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          )}
        </div>

        {/* Starting At Note */}
        <div
          className="noisy relative overflow-hidden"
          style={{
            marginInline: '4vw',
            marginTop: '5vw',
            padding: '4vw 5vw',
            borderRadius: '12px',
            background: 'rgba(20,14,10,0.92)',
            border: '1px solid rgba(217,188,82,0.4)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(105deg, transparent 40%, rgba(217,188,82,0.2) 50%, transparent 60%)',
              animation: 'shimmer 3s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />
          <p
            className="font-[family-name:var(--font-libre-baskerville)] text-center relative"
            style={{
              fontSize: '3.8vw',
              lineHeight: '1.8',
              zIndex: 1,
            }}
          >
            <span
              className="font-bold"
              style={{
                fontSize: '6vw',
                background: 'linear-gradient(to right, #f0c040, #ffe08a, #f0c040)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(251,191,36,0.7))',
              }}
            >
              Starting at $18
            </span>
            <br />
            <span className="text-white/80">
              Rare pressings, signed vinyl, and colored variants available.
            </span>
          </p>
        </div>

        {/* Dig the Stacks Sections */}
        {hasRestored && selectedFilter === "Dig the Stacks" && (
          <>
            {digTheStacksSections.map((item, index) => (
              <div
                key={index}
                id={`stacks-section-${item.title}`}
                ref={(el) => {
                  if (el) stacksRowRefs.current.set(item.title, el);
                  else stacksRowRefs.current.delete(item.title);
                }}
                data-row-key={item.title}
                style={{ paddingInline: '4vw', marginTop: '4vw' }}
              >
                <div
                  className="rounded-xl"
                  style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
                >
                  <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                    <div className="text-center" style={{ padding: '4vw', paddingBottom: '0' }}>
                      <span className="font-[family-name:var(--font-libre-baskerville)] text-white font-bold uppercase" style={{ fontSize: '4.5vw' }}>
                        {item.title}
                      </span>
                      <p className="font-[family-name:var(--font-libre-baskerville)] text-white italic" style={{ fontSize: '4.5vw', marginTop: '1vw' }}>
                        {item.desc}
                      </p>
                    </div>
                    <StacksVinylRow
                      rowTitle={item.title}
                      vinyls={item.vinyls}
                      autoScroll
                      isActive={item.title === activeStacksTitle && !searchArrival}
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Vinyl Sections */}
        {hasRestored && selectedFilter !== "Dig the Stacks" && visibleSections.map((section) => (
          <div
            key={section.id}
            id={`section-${section.id}`}
            ref={(el) => {
              if (el) stacksRowRefs.current.set(section.id, el);
              else stacksRowRefs.current.delete(section.id);
            }}
            data-row-key={section.id}
            style={{ paddingLeft: '4vw', paddingRight: '4vw', marginTop: '6vw' }}
          >
            <div
              className="rounded-xl"
              style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
            >
              <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">
                {/* Title */}
                <div className="text-center" style={{ paddingTop: '4vw', paddingBottom: '4vw' }}>
                  <span
                    className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                    style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
                  >
                    {section.id}
                  </span>
                  {/* Jazz subtitle - only for Now Spinning */}
                  {section.subtitle && (
                    <div className="flex items-center justify-center" style={{ gap: '3vw', marginTop: '1.5vw' }}>
                      <div style={{ width: '8vw', height: '0.7vw', backgroundColor: 'white' }} />
                      <span
                        className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold whitespace-nowrap"
                        style={{ fontSize: '4.5vw', letterSpacing: '0.15em', marginTop: '1vw' }}
                      >
                        {section.subtitle}
                      </span>
                      <div style={{ width: '8vw', height: '0.7vw', backgroundColor: 'white' }} />
                    </div>
                  )}
                </div>

                <StacksVinylRow
                  variant="regular"
                  rowTitle={section.id}
                  vinyls={section.items}
                  autoScroll
                  isActive={section.id === activeStacksTitle && !searchArrival}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Bottom spacing - peek of background below last section */}
        <div style={{ height: '6vw' }} />

        <Footer />

      </div>
    </div>
    </>
  );
}
