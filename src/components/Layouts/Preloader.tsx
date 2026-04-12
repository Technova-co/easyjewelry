"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";

// Import GSAP premium plugins
import { SplitText } from "gsap/dist/SplitText";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, MorphSVGPlugin);
}

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const minDisplayTime = 1500; // Minimum 1.5 seconds display time

  // Ensure component only renders on client
  useEffect(() => {
    setIsMounted(true);
    // Immediately hide page content when component mounts
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("preloader-active");
    }
  }, []);

  const finishLoader = useCallback(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // Kill character animations
    if (titleRef.current) {
      try {
        // If SplitText was used, kill those animations
        const titleElement = titleRef.current as HTMLElement & {
          splitTextInstance?: { chars?: HTMLElement[] };
        };
        const splitTitle = titleElement.splitTextInstance;
        if (splitTitle && splitTitle.chars) {
          gsap.killTweensOf(splitTitle.chars);
        }
      } catch {
        // Fallback: kill span animations
        const chars = titleRef.current.querySelectorAll("span");
        chars.forEach((char) => {
          gsap.killTweensOf(char);
        });
      }
    }

    // Fade out loader elements
    tl.to(
      [
        ".loader-title",
        ".loader-percent",
        ".loader-logo",
        ".loader-loading",
        ".progress-fill",
        ".progress-bar",
      ],
      {
        opacity: 0,
        y: -20,
        duration: 0.35,
        stagger: 0.05,
      }
    )
      .to(
        [".morph-me", "#clip-wave"],
        {
          duration: 1,
          morphSVG: "M0,0H1920V560.5s-403.5-149-960-149S0,560.5,0,560.5Z",
          ease: "power3.inOut",
        },
        "-=0.35"
      )
      .to(
        ".preloader-area",
        {
          duration: 0.65,
          y: "-100%",
          opacity: 0,
          ease: "power3.inOut",
        },
        "-=0.35"
      )
      .call(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const remainingTime = Math.max(0, minDisplayTime - elapsed);
        
        setTimeout(() => {
          if (typeof document !== "undefined") {
            document.body.classList.remove("overflow-hidden");
            // Show page content
            document.documentElement.classList.remove("preloader-active");
          }
          setIsVisible(false);
          // Call initAnimations if it exists
          if (typeof window !== "undefined") {
            const win = window as Window & {
              initAnimations?: () => void;
            };
            if (win.initAnimations) {
              win.initAnimations();
            }
          }
        }, remainingTime);
      }, [], "-=.8");

    animationRef.current = tl;
  }, []);

  const startProgressCounter = useCallback(() => {
    // Clear any existing interval first
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }

    let currentProgress = 0;
    let windowLoaded = false;
    
    const handleWindowLoad = () => {
      windowLoaded = true;
    };

    // Check if window is already loaded
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        // Window already loaded
        windowLoaded = true;
      } else {
        // Wait for window load event (this fires when all resources are loaded)
        window.addEventListener("load", handleWindowLoad, { once: true });
      }
    }

    progressIntervalRef.current = setInterval(() => {
      if (!windowLoaded) {
        // Before window loads, slowly increase progress but don't go above 90%
        if (currentProgress < 70) {
          currentProgress += 0.8;
        } else if (currentProgress < 90) {
          currentProgress += 0.3;
        }
        currentProgress = Math.min(currentProgress, 90);
      } else {
        // Window loaded, complete to 100%
        if (currentProgress < 100) {
          currentProgress += 2;
        }
        currentProgress = Math.min(currentProgress, 100);
      }

      setProgress(currentProgress);

      // Only finish when:
      // 1. Window is fully loaded
      // 2. Progress reached 100%
      // 3. Minimum display time has passed
      const elapsed = Date.now() - startTimeRef.current;
      if (windowLoaded && currentProgress >= 100 && elapsed >= minDisplayTime) {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
        if (typeof window !== "undefined") {
          window.removeEventListener("load", handleWindowLoad);
        }
        finishLoader();
      }
    }, 30);
  }, [finishLoader]);

  useEffect(() => {
    // Capture ref value at the start of the effect
    const titleElement = titleRef.current;
    
    // Reset start time
    startTimeRef.current = Date.now();
    
    // Add overflow hidden to body and hide page content
    if (typeof document !== "undefined") {
      document.body.classList.add("overflow-hidden");
      // Hide page content initially
      document.documentElement.classList.add("preloader-active");
    }

    // Start progress counter immediately
    startProgressCounter();

    // Small delay to ensure DOM is ready for animations
    const initTimeout = setTimeout(() => {
      // Animate title characters using SplitText
      if (titleElement) {
        const title = titleElement;
        
        try {
          // Use SplitText to split the text into characters
          const splitTitle = new SplitText(title, { type: "chars" });
          const chars = splitTitle.chars;

          // Animate characters with GSAP
          gsap.fromTo(
            chars,
            { y: 60, opacity: 0, scale: 0.6 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.04,
              ease: "back.out(1.7)",
              repeat: -1,
              repeatDelay: 0.2,
              yoyo: true,
            }
          );
        } catch {
          // Fallback if SplitText is not available
          console.warn("SplitText not available, using fallback");
          const text = title.textContent || "";
          title.innerHTML = "";

          const chars = text.split("").map((char) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.display = "inline-block";
            span.style.transformOrigin = "center bottom";
            span.style.willChange = "transform, opacity";
            span.style.opacity = "0";
            span.style.transform = "translateY(60px) scale(0.6)";
            title.appendChild(span);
            return span;
          });

          chars.forEach((char, index) => {
            gsap.to(char, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: index * 0.04,
              ease: "back.out(1.7)",
            });

            gsap.to(char, {
              y: 60,
              opacity: 0,
              scale: 0.6,
              duration: 0.6,
              delay: index * 0.04 + 0.6 + 0.2,
              ease: "back.in(1.7)",
              repeat: -1,
              yoyo: true,
              repeatDelay: 0.2,
            });
          });
        }
      }
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
      // Clean up character animations
      if (titleElement) {
        const chars = titleElement.querySelectorAll("span");
        chars.forEach((char) => {
          gsap.killTweensOf(char);
        });
      }
    };
  }, [startProgressCounter]);

  if (!isMounted || !isVisible) return null;

  const progressPercent = Math.floor(progress);
  const loaderBgOpacity = progress / 100;

  return (
    <div
      ref={preloaderRef}
      className="preloader-area fixed inset-0 w-screen h-screen z-[999999] overflow-hidden flex items-center justify-center bg-[#0E1422]"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        backgroundColor: '#0E1422'
      }}
    >
      <div className="fixed z-[9999] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        {/* Center Title */}
        <h4
          ref={titleRef}
          className="loader-title text-white font-semibold !leading-[1.1] gradient-text lg:tracking-[1.8px] text-[32px] sm:text-5xl md:text-[52px] lg:text-[64px] overflow-hidden"
        >
          EasyJewelry
        </h4>

        {/* Progress Bar */}
        <div className="progress-bar mt-1 w-full h-[3px] bg-white/10 overflow-hidden rounded">
          <div
            className="progress-fill h-full bg-white"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="loader-footer fixed bottom-6 z-[99999] left-0 right-0 flex flex-wrap justify-between px-5 sm:px-12 items-center text-white/80 text-sm font-light tracking-[3px] gap-5">
        <div className="loader-logo">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={120}
            height={40}
            className="h-auto"
          />
        </div>
        <div className="loader-percent">{progressPercent}%</div>
        <div className="loader-loading">Loading...</div>
      </div>

      {/* Background Image with Clip Path */}
      <svg
        className="loader-bg absolute top-1 left-0 w-full h-full z-[70]"
        style={{ opacity: loaderBgOpacity }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="waveClip">
            <path
              id="clip-wave"
              d="M0,0H1920V1080.5s-403.5-1-960-1-960,1-960,1Z"
            ></path>
          </clipPath>
        </defs>
        <image
          href="/images/home/banner-bg.webp"
          xlinkHref="/images/home/banner-bg.webp"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#waveClip)"
        ></image>
      </svg>

      {/* Morph SVG */}
      <svg
        className="morph absolute bottom-0 left-0 w-full h-full z-[50]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <path
          className="morph-me"
          d="M0,0H1920V1080.5s-403.5-1-960-1-960,1-960,1Z"
          fill="#0E1422"
        ></path>
      </svg>
    </div>
  );
}
