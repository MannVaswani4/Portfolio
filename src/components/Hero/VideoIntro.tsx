import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, ChevronDown, Radio } from 'lucide-react';
import { content } from '../../data/content';
import styles from './VideoIntro.module.css';

export const VideoIntro: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Default to unmuted once started

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWorkSection = (e: React.MouseEvent) => {
    e.stopPropagation();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 1. Scroll Lock Management
  useEffect(() => {
    // Lock scrolling on document load until user starts the experience
    if (!hasStarted) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      // Always restore default scroll behavior on component unmount
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [hasStarted]);

  // 2. Start Experience Trigger
  const handleStartExperience = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const video = videoRef.current;
    if (!video) return;

    // Fade out overlay and start playing unmuted
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => {
        setHasStarted(true);
      }
    });

    video.muted = false;
    setIsMuted(false);
    video.play()
      .then(() => {
        setIsPlaying(true);
        triggerEntranceAnimations();
      })
      .catch((err) => {
        console.log("Play failed on user click", err);
      });
  };

  // 3. Playback Scroll Tracking (Observer)
  useEffect(() => {
    if (!hasStarted) return; // Only track viewport if experience has started

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Restart video on return scroll
            video.currentTime = 0;
            video.play()
              .then(() => setIsPlaying(true))
              .catch((err) => console.log("Intersection play failed", err));
          } else {
            // Pause video when scrolled out of view
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  // 4. User Playback Controls
  const handleContainerClick = () => {
    if (!hasStarted) return;
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMuteUnmute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMutedState = !isMuted;
    video.muted = nextMutedState;
    setIsMuted(nextMutedState);
  };

  const handleScrollClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    scrollToNextSection();
  };

  // 5. GSAP Entrance Animation (Triggered after click)
  const triggerEntranceAnimations = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

    // Set initial offsets
    gsap.set(
      [
        textLeftRef.current,
        textRightRef.current,
        controlsRef.current,
        scrollRef.current,
      ],
      { opacity: 0 }
    );

    tl.fromTo(
      textLeftRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1.1 }
    )
      .fromTo(
        textRightRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1.1 },
        '-=1.1'
      )
      .fromTo(
        [controlsRef.current, scrollRef.current],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
        '-=0.7'
      );
  };

  const nameParts = content.hero.name.split(' ');
  const firstName = nameParts[0] || 'MANN';
  const lastName = nameParts.slice(1).join(' ') || 'VASWANI';

  return (
    <div
      ref={containerRef}
      className={styles.heroContainer}
      onClick={handleContainerClick}
      title={hasStarted ? "Click screen to pause or play" : ""}
      style={{ cursor: hasStarted ? 'pointer' : 'default' }}
    >
      {/* 1. Fullscreen Blurred Entrance Overlay */}
      <div 
        ref={overlayRef} 
        className={`${styles.enterOverlay} ${hasStarted ? styles.enterOverlayHidden : ''}`}
      >
        <span className={styles.enterTitle}>MANN VASWANI • PORTFOLIO</span>
        <button className={styles.enterBtn} onClick={handleStartExperience}>
          <Radio size={14} className="animate-pulse" />
          Enter Experience
        </button>
      </div>

      {/* 2. Fullscreen Video Background */}
      <video
        ref={videoRef}
        className={styles.fullscreenVideo}
        src="/i_just_want_the_pronunciation.mp4"
        playsInline
        muted={isMuted}
        onEnded={scrollToNextSection}
      />

      {/* 3. Lightened Cinematic Readability Overlays */}
      <div className={styles.vignetteOverlay} />
      <div className={styles.topOverlay} />
      <div className={styles.bottomOverlay} />

      {/* 4. Asymmetrical Content Overlay */}
      <div className={styles.contentWrapper}>
        {/* Left Side Info */}
        <div ref={textLeftRef} className={styles.textLeft}>
          <div className={styles.tagline}>
            {content.hero.taglines[0]}
          </div>
          <p className={styles.subtitle}>
            {content.hero.description}
          </p>
          <button className={styles.viewWorkBtn} onClick={scrollToWorkSection}>
            View Selected Work
          </button>
        </div>

        {/* Right Side Stacked Name */}
        <div ref={textRightRef} className={styles.textRight}>
          <h1 className={styles.nameStacked}>
            {firstName}
            <span className={styles.accentText}>{lastName}</span>
          </h1>
        </div>

        {/* Dynamic Video Controls (Bottom Right) */}
        <div ref={controlsRef} className={styles.controlsPanel}>
          <button
            className={styles.controlButton}
            onClick={handlePlayPause}
            aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            className={styles.controlButton}
            onClick={handleMuteUnmute}
            aria-label={isMuted ? 'Unmute Video' : 'Mute Video'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      </div>

      {/* 5. Bottom Scroll Down Indicator */}
      <div ref={scrollRef} className={styles.scrollIndicator} onClick={handleScrollClick}>
        <span className={styles.scrollLabel}>SCROLL TO EXPLORE</span>
        <div className={styles.scrollLineWrapper}>
          <div className={styles.scrollPulseLine} />
        </div>
        <ChevronDown size={14} style={{ opacity: 0.5, marginTop: '2px' }} />
      </div>
    </div>
  );
};
