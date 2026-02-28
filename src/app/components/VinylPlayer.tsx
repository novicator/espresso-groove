"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap";

interface VinylPlayerProps {
  onPlayChange?: (isPlaying: boolean) => void;
}

export interface VinylPlayerRef {
  toggle: () => void;
  isPlaying: () => boolean;
}

const VinylPlayer = forwardRef<VinylPlayerRef, VinylPlayerProps>(
  ({ onPlayChange }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const vinylShineGroupRef = useRef<SVGGElement>(null);
    const armGroupRef = useRef<SVGGElement>(null);
    const openHandRef = useRef<SVGImageElement>(null);
    const grabHandRef = useRef<SVGImageElement>(null);
    const isPlayingRef = useRef(false);
    const vinylSpinTlRef = useRef<gsap.core.Timeline | null>(null);

    const vinylStartRotation = 31;

    const onPlayChangeRef = useRef(onPlayChange);
    onPlayChangeRef.current = onPlayChange;

    function playVinyl() {
      if (!isPlayingRef.current && vinylSpinTlRef.current) {
        vinylSpinTlRef.current.play();
        isPlayingRef.current = true;
        onPlayChangeRef.current?.(true);
      }
    }

    function pauseVinyl() {
      if (vinylSpinTlRef.current) {
        vinylSpinTlRef.current.pause();
        isPlayingRef.current = false;
        onPlayChangeRef.current?.(false);
      }
    }

    // Expose toggle and isPlaying to parent
    useImperativeHandle(ref, () => ({
      toggle: () => {
        const armGroup = armGroupRef.current;
        if (isPlayingRef.current) {
          // Pause - move needle slightly off the record
          if (vinylSpinTlRef.current) {
            vinylSpinTlRef.current.pause();
            gsap.to(armGroup, {
              rotation: vinylStartRotation - 8,
              duration: 0.3,
              ease: "power2.out",
            });
            isPlayingRef.current = false;
            onPlayChangeRef.current?.(false);
          }
        } else {
          // Play - move needle back onto record
          if (vinylSpinTlRef.current) {
            gsap.to(armGroup, {
              rotation: vinylStartRotation,
              duration: 0.3,
              ease: "power2.out",
            });
            vinylSpinTlRef.current.play();
            isPlayingRef.current = true;
            onPlayChangeRef.current?.(true);
          }
        }
      },
      isPlaying: () => isPlayingRef.current,
    }));

    useEffect(() => {
      if (typeof window === "undefined") return;

      const armGroup = armGroupRef.current;
      const vinylShineGroup = vinylShineGroupRef.current;
      const openHand = openHandRef.current;
      const grabHand = grabHandRef.current;

      if (!armGroup || !vinylShineGroup || !openHand || !grabHand) return;

      // Check if user is coming from external site or fresh visit
      const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';
      const isDirectNavigation = navEntries.length > 0 && navEntries[0].type === 'navigate';
      
      // Check if referrer is from a different site (or no referrer = direct/bookmark)
      const referrer = document.referrer;
      const isExternalOrDirect = !referrer || !referrer.includes(window.location.hostname);
      
      // Clear the flag if coming from external site, direct navigation, or reload
      if (isReload || (isDirectNavigation && isExternalOrDirect)) {
        sessionStorage.removeItem('vinylIntroPlayed');
      }
      
      // Check if we've already played the intro this session
      const hasPlayedIntro = sessionStorage.getItem('vinylIntroPlayed') === 'true';

      // Set initial states
      gsap.set(armGroup, { svgOrigin: "396.5 188" });
      gsap.set(vinylShineGroup, { transformOrigin: "50% 50%" });

      // Create vinyl spin animation (paused)
      vinylSpinTlRef.current = gsap.timeline({ paused: true, repeat: -1 });
      vinylSpinTlRef.current.to(vinylShineGroup, {
        rotation: "+=360",
        duration: 2,
        ease: "none",
      });

      if (hasPlayedIntro) {
        // Skip intro - go straight to playing state
        gsap.set(openHand, { opacity: 0 });
        gsap.set(grabHand, { opacity: 0 });
        gsap.set(armGroup, { rotation: vinylStartRotation });
        // Start playing immediately
        playVinyl();
      } else {
        // Hand initial states - both off-screen to the right
        gsap.set(openHand, { x: 200, opacity: 0 });
        gsap.set(grabHand, { opacity: 0 });

        // Intro animation
        const introTl = gsap.timeline();
        introTl
          .from("#arm", {
            drawSVG: "0% 0%",
            duration: 0.5,
            ease: "power1.out",
          })
          .from(
            "#balance",
            {
              attr: { r: 0 },
              duration: 0.5,
              ease: "power2.inOut",
            },
            "-=0.3"
          )
          .from(
            "#stylus",
            {
              scale: 0,
              transformOrigin: "75% 15%",
              duration: 0.4,
              ease: "power2.inOut",
            },
            "-=0.2"
          )
          .from(
            "#vinylGroup circle",
            {
              attr: { r: 0 },
              duration: 0.8,
              stagger: 0.1,
              ease: "elastic.out(1, 0.8)",
            },
            "-=0.4"
          )
          // Open hand slides in from right, hovers over stylus
          .to(openHand, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }, "-=0.7")
          // Brief pause while hovering
          .to({}, { duration: 0.2 })
          // Swap hands: hide open, show grab
          .to(openHand, {
            opacity: 0,
            duration: 0.1,
          })
          .to(grabHand, {
            opacity: 1,
            duration: 0.1,
          }, "<")
          // Drag needle onto record
          .to(armGroup, {
            rotation: vinylStartRotation,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              // Start vinyl spinning and mark intro as played
              sessionStorage.setItem('vinylIntroPlayed', 'true');
              playVinyl();
            }
          })
          // Hand releases and fades away
          .to(grabHand, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          }, "+=0.15");
      }

      return () => {
        if (vinylSpinTlRef.current) {
          vinylSpinTlRef.current.kill();
        }
      };
    }, []);

    return (
      <div ref={containerRef} className="vinyl-container w-[350px] relative z-10">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 600 600"
          className="w-full h-auto overflow-visible"
        >
          <defs>
            <path
              id="titlePath"
              fill="none"
              stroke="#FF0049"
              strokeMiterlimit="10"
              d="M284,346.5c-14.6,0-26.5-11.9-26.5-26.5c0-14.6,11.9-26.5,26.5-26.5s26.5,11.9,26.5,26.5C310.5,334.6,298.6,346.5,284,346.5z"
            />
          </defs>

          <g id="vinylGroup">
            <circle id="vinylMain" fill="#2d1f1a" cx="284" cy="320" r="121" />
            <circle id="vinylStart" fill="#261a16" cx="284" cy="320" r="117" />
            <circle id="vinylEnd" fill="#2d1f1a" cx="284" cy="320" r="50" />
            <circle id="vinylTealRing" fill="#2a7d7d" cx="284" cy="320" r="54" />
            <circle id="vinylLabel" fill="#c4470a" cx="284" cy="320" r="40.8" />
            <circle id="vinylInner" fill="#B32A38" cx="284" cy="320" r="17" />
            <circle id="vinylHole" fill="#eff2e1" cx="284" cy="320" r="2.5" />
          </g>

          <g
            ref={vinylShineGroupRef}
            id="vinylShineGroup"
            stroke="#403737"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              id="vinylShine1"
              opacity="0.3"
              fill="none"
              cx="284"
              cy="320"
              r="103"
            />
            <circle
              id="vinylShine2"
              opacity="0.3"
              fill="none"
              cx="284"
              cy="320"
              r="91"
            />
            <circle
              id="vinylShine3"
              opacity="0.3"
              fill="none"
              cx="284"
              cy="320"
              r="60"
            />
            <g id="titleGroup" stroke="none" opacity="1">
              <text fontSize="7" fill="#ffffff" letterSpacing="1.5" fontWeight="bold">
                <textPath xlinkHref="#titlePath">ESPRESSO GROOVE</textPath>
              </text>
            </g>
          </g>

          <g ref={armGroupRef} id="armGroup">
            <path
              id="arm"
              fill="none"
              stroke="#9F978D"
              strokeWidth="5"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="M398.5,159v29c0,0-5.7,11.2-6.4,15.2s-4.3,16.2,7.6,30.1s81.7,93.9,85.5,99.4c3.7,5.5,5.1,8.7,3.4,20.2"
            />
            <circle id="balance" fill="#CCCBCB" cx="396.5" cy="188" r="19" />
            <path
              id="stylus"
              fill="#18110E"
              d="M489.9,367.5l-11.5-1.1c-2.2-0.2-3.8-2.2-3.6-4.4l1.5-15.9c0.2-2.2,2.2-3.8,4.4-3.6l11.5,1.1c2.2,0.2,3.8,2.2,3.6,4.4l-1.5,15.9C494,366.1,492.1,367.7,489.9,367.5z"
            />
            {/* Grabbing hand - inside armGroup so it rotates with the needle */}
            <image
              ref={grabHandRef}
              href="/images/hand-grabbing.svg"
              x="455"
              y="310"
              width="70"
              height="70"
            />
          </g>

          {/* Open hand - slides in from right, stays outside armGroup */}
          <image
            ref={openHandRef}
            href="/images/hand.svg"
            x="455"
            y="310"
            width="70"
            height="70"
          />
        </svg>
      </div>
    );
  }
);

VinylPlayer.displayName = "VinylPlayer";

export default VinylPlayer;
