// components/SkillCarousel.jsx
import { useEffect, useState, useRef, useCallback } from "react";
import Container from "../shared/Container";

const VISIBLE_COUNT = 7;
const INTERVAL = 5000;
const ITEM_GAP = 36;
const ITEM_WIDTH = 120;

// Instance-based sync manager for carousel only
const createCarouselSyncManager = () => {
  let masterTimer = null;
  const subscribers = new Set();

  return {
    subscribe(callback) {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    },

    start() {
      if (masterTimer) return;
      masterTimer = setInterval(() => {
        subscribers.forEach((callback) => callback());
      }, INTERVAL);
    },

    stop() {
      if (masterTimer) {
        clearInterval(masterTimer);
        masterTimer = null;
      }
    },

    // Cleanup method
    destroy() {
      this.stop();
      subscribers.clear();
    }
  };
};

// SkillCarousel component without any background animation
const SkillCarousel = ({ skills, initialIndex = 0, onIndexChange }) => {
  // Use the initialIndex prop to preserve state
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingIndex, setAnimatingIndex] = useState(initialIndex);
  const animationDirectionRef = useRef("next");
  const manualControlEndTimeRef = useRef(0);
  const hasStartedRef = useRef(false);
  const skillsRef = useRef(skills);
  const initialIndexRef = useRef(initialIndex);
  
  // Create instance-specific sync manager
  const syncManagerRef = useRef(null);

  // Initialize sync manager
  useEffect(() => {
    syncManagerRef.current = createCarouselSyncManager();
    return () => {
      if (syncManagerRef.current) {
        syncManagerRef.current.destroy();
      }
    };
  }, []);

  // Update refs when props change
  useEffect(() => {
    skillsRef.current = skills;
    initialIndexRef.current = initialIndex;
  }, [skills, initialIndex]);

  // Only update state when skills actually change, not during animations
  useEffect(() => {
    if (!isAnimating && (skills !== skillsRef.current || initialIndex !== initialIndexRef.current)) {
      setCurrentIndex(initialIndex);
      setAnimatingIndex(initialIndex);
      hasStartedRef.current = false;
      manualControlEndTimeRef.current = Date.now() + 3000;
    }
  }, [skills, initialIndex, isAnimating]);

  // Notify parent of index changes
  useEffect(() => {
    if (onIndexChange && !isAnimating) {
      onIndexChange(currentIndex);
    }
  }, [currentIndex, onIndexChange, isAnimating]);

  const half = Math.floor(VISIBLE_COUNT / 2);

  // Get visible indices
  const getVisibleIndices = useCallback(() => {
    const currentSkills = skillsRef.current;
    const indices = [];
    for (let i = -half; i <= half; i++) {
      let index = currentIndex + i;
      if (index < 0) index = currentSkills.length + index;
      if (index >= currentSkills.length) index = index % currentSkills.length;
      indices.push(index);
    }
    return indices;
  }, [currentIndex, half]);

  const visibleIndices = getVisibleIndices();

  // Check if currently in manual control mode
  const isManuallyControlled = useCallback(() => {
    return Date.now() < manualControlEndTimeRef.current;
  }, []);

  // Safe index setter - ensures index is always within bounds
  const setSafeCurrentIndex = useCallback((newIndex) => {
    const currentSkills = skillsRef.current;
    if (currentSkills.length === 0) return;
    const safeIndex = ((newIndex % currentSkills.length) + currentSkills.length) % currentSkills.length;
    setCurrentIndex(safeIndex);
  }, []);

  const setSafeAnimatingIndex = useCallback((newIndex) => {
    const currentSkills = skillsRef.current;
    if (currentSkills.length === 0) return;
    const safeIndex = ((newIndex % currentSkills.length) + currentSkills.length) % currentSkills.length;
    setAnimatingIndex(safeIndex);
  }, []);

  // Rotate function
  const rotate = useCallback(
    (direction = "next") => {
      if (isAnimating || skillsRef.current.length <= 1) return;

      setIsAnimating(true);
      animationDirectionRef.current = direction;

      // Set the animating index for dots transition
      if (direction === "next") {
        setSafeAnimatingIndex(currentIndex + 1);
      } else {
        setSafeAnimatingIndex(currentIndex - 1);
      }

      setTimeout(() => {
        if (direction === "next") {
          setSafeCurrentIndex(currentIndex + 1);
        } else {
          setSafeCurrentIndex(currentIndex - 1);
        }
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating, currentIndex, setSafeCurrentIndex, setSafeAnimatingIndex]
  );

  // Manual navigation
  const navigate = useCallback(
    (direction) => {
      if (isAnimating || skillsRef.current.length <= 1) return;
      manualControlEndTimeRef.current = Date.now() + 3000;
      rotate(direction);
    },
    [isAnimating, rotate]
  );

  // Auto-rotate function
  const autoRotate = useCallback(() => {
    if (!isManuallyControlled() && !isAnimating && skillsRef.current.length > 1) {
      // Don't auto-rotate immediately after category change
      if (!hasStartedRef.current) {
        hasStartedRef.current = true;
        return;
      }
      rotate("next");
    }
  }, [isManuallyControlled, isAnimating, rotate]);

  // Subscribe to instance-specific carousel sync manager
  useEffect(() => {
    if (!syncManagerRef.current) return;
    
    const unsubscribe = syncManagerRef.current.subscribe(autoRotate);
    syncManagerRef.current.start();
    
    return () => {
      unsubscribe();
      // Don't stop the timer - let each instance manage its own timing
    };
  }, [autoRotate]);

  // Get properties for position
  const getPropertiesForPosition = useCallback((position) => {
    const absPosition = Math.abs(position);

    if (absPosition <= 0.1) {
      return {
        scale: 1.3,
        opacity: 1,
        filter: "grayscale(0%) brightness(1)",
        imgSize: 100,
        containerSize: 140,
        textSize: "text-sm",
        zIndex: 3,
      };
    } else if (absPosition <= 1.1) {
      return {
        scale: 1.0,
        opacity: 0.9,
        filter: "grayscale(20%) brightness(0.9)",
        imgSize: 80,
        containerSize: 110,
        textSize: "text-xs",
        zIndex: 2,
      };
    } else if (absPosition <= 2.1) {
      return {
        scale: 0.8,
        opacity: 0.7,
        filter: "grayscale(50%) brightness(0.8)",
        imgSize: 65,
        containerSize: 90,
        textSize: "text-xs",
        zIndex: 1,
      };
    } else {
      return {
        scale: 0.6,
        opacity: 0.4,
        filter: "grayscale(80%) brightness(0.6)",
        imgSize: 55,
        containerSize: 75,
        textSize: "text-xs",
        zIndex: 0,
      };
    }
  }, []);

  // Get the effective index for dots (shows animating index during animation)
  const getEffectiveDotIndex = () => {
    return isAnimating ? animatingIndex : currentIndex;
  };

  // Don't render if no skills
  if (skills.length === 0) {
    return (
      <Container
        className="relative flex justify-center items-center overflow-hidden bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl border border-[#1e1a17]/10"
        style={{
          height: 280,
          width: VISIBLE_COUNT * (ITEM_WIDTH + ITEM_GAP) - ITEM_GAP,
          margin: "0 auto",
        }}
      >
        <div className="text-[#545454]">No skills to display</div>
      </Container>
    );
  }

  return (
    <Container
      className="relative flex justify-center items-center overflow-hidden bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl border border-[#1e1a17]/10"
      style={{
        height: 280,
        width: VISIBLE_COUNT * (ITEM_WIDTH + ITEM_GAP) - ITEM_GAP,
        margin: "0 auto",
      }}
    >
      {/* Navigation Arrows - Hide if only one skill */}
      {skills.length > 1 && (
        <>
          <button
            onClick={() => navigate("prev")}
            className="absolute left-4 z-20 bg-white/90 hover:bg-white border-2 border-[#1e1a17]/20 hover:border-[#1e1a17]/40 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 hover:cursor-pointer group"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
            aria-label="Previous skill"
          >
            <svg
              className="w-6 h-6 text-[#1e1a17] group-hover:text-[#545454] transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => navigate("next")}
            className="absolute right-4 z-20 bg-white/90 hover:bg-white border-2 border-[#1e1a17]/20 hover:border-[#1e1a17]/40 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 hover:cursor-pointer group"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
            aria-label="Next skill"
          >
            <svg
              className="w-6 h-6 text-[#1e1a17] group-hover:text-[#545454] transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Gradient fade for edges */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white/80 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white/80 to-transparent" />

      {/* Text Display Area - Separate from carousel items */}
      <div className="absolute bottom-8 left-0 right-0 z-10 h-12 flex items-center justify-center">
        <div className="text-center">
          {visibleIndices.map((skillIndex, positionIndex) => {
            const skill = skills[skillIndex];
            const targetPosition = positionIndex - half;
            const isCenter = Math.abs(targetPosition) <= 0.1 && !isAnimating;
            
            return (
              <div
                key={`text-${skillIndex}-${positionIndex}`}
                className={`absolute left-1/2 transform -translate-x-1/2 font-semibold text-[#1e1a17] text-center transition-all duration-300 ${
                  isCenter 
                    ? 'opacity-100 translate-y-0 text-sm' 
                    : 'opacity-0 translate-y-4 text-xs pointer-events-none'
                }`}
                style={{
                  maxWidth: '120px',
                }}
              >
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Logo Carousel - Only logos without text */}
      <div className="flex items-center justify-center relative">
        {visibleIndices.map((skillIndex, positionIndex) => {
          const skill = skills[skillIndex];
          const targetPosition = positionIndex - half;

          let currentPosition;
          if (isAnimating) {
            currentPosition =
              animationDirectionRef.current === "next"
                ? targetPosition - 1
                : targetPosition + 1;
          } else {
            currentPosition = targetPosition;
          }

          const props = getPropertiesForPosition(currentPosition);
          const translateX = currentPosition * (ITEM_WIDTH + ITEM_GAP);

          return (
            <div
              key={`logo-${skillIndex}-${positionIndex}-${currentIndex}`}
              className="flex items-center justify-center absolute"
              style={{
                width: props.containerSize,
                height: props.containerSize,
                transform: `translateX(${translateX}px) scale(${props.scale})`,
                opacity: props.opacity,
                filter: props.filter,
                zIndex: props.zIndex,
                left: `50%`,
                marginLeft: -props.containerSize / 2,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Clean logo without any frame or text */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="rounded-lg"
                style={{
                  width: props.imgSize,
                  height: props.imgSize,
                  objectFit: "contain",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Progress indicator - Only show if more than one skill */}
      {skills.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {skills.map((_, index) => {
            const effectiveIndex = getEffectiveDotIndex();
            const isActive = index === effectiveIndex;
            
            return (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    manualControlEndTimeRef.current = Date.now() + 3000;
                    setSafeCurrentIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out hover:scale-125 ${
                  isActive 
                    ? 'bg-[#1e1a17] scale-110' 
                    : 'bg-[#1e1a17]/30 hover:bg-[#1e1a17]/50'
                }`}
                style={{
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                aria-label={`Go to skill ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default SkillCarousel;