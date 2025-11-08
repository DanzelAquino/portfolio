import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const MediaCarousel = ({ allMedia, currentMediaIndex, setCurrentMediaIndex, onNext, onPrev, project }) => {
  const videoRefs = useRef([]);
  const [direction, setDirection] = useState(0);

  const VISIBLE_INDICATORS = 5;
  const HALF_VISIBLE = Math.floor(VISIBLE_INDICATORS / 2);

  useEffect(() => {
    if (allMedia[currentMediaIndex]?.type === 'video') {
      const video = videoRefs.current[currentMediaIndex];
      if (video) {
        video.play().catch(error => {
          console.log('Auto-play prevented:', error);
        });
      }
    }
  }, [currentMediaIndex, allMedia]);

  // Get the 5 indicators to show with current in middle when possible
  const getVisibleIndicators = () => {
    if (allMedia.length <= VISIBLE_INDICATORS) {
      return allMedia.map((_, index) => index);
    }

    let start = currentMediaIndex - HALF_VISIBLE;
    let end = currentMediaIndex + HALF_VISIBLE;

    if (start < 0) {
      start = 0;
      end = VISIBLE_INDICATORS - 1;
    } else if (end >= allMedia.length) {
      end = allMedia.length - 1;
      start = end - VISIBLE_INDICATORS + 1;
    }

    const indices = [];
    for (let i = start; i <= end; i++) {
      indices.push(i);
    }
    return indices;
  };

  const getIndicatorPosition = (index, indicatorIndex) => {
    const positions = ['farLeft', 'left', 'center', 'right', 'farRight'];
    return positions[indicatorIndex];
  };

  const visibleIndicators = getVisibleIndicators();
  const showLeftEllipsis = visibleIndicators[0] > 0;
  const showRightEllipsis = visibleIndicators[visibleIndicators.length - 1] < allMedia.length - 1;
  const canScrollLeft = currentMediaIndex > 0;
  const canScrollRight = currentMediaIndex < allMedia.length - 1;

  // Calculate dynamic opacity based on distance from active indicator
  const getIndicatorOpacity = (index, positionIndex) => {
    const activePosition = visibleIndicators.indexOf(currentMediaIndex);
    const distanceFromActive = Math.abs(positionIndex - activePosition);
    
    switch (distanceFromActive) {
      case 0: return 1;    // Active indicator
      case 1: return 0.7;  // Adjacent to active
      case 2: return 0.4;  // Two positions away
      default: return 0.3; // Edge cases
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  // Position variants with smooth animations
  const positionVariants = {
    farLeft: { x: -24 },
    left: { x: -12 },
    center: { x: 0 },
    right: { x: 12 },
    farRight: { x: 24 }
  };

  // Get initial position - dots should come from the direction they're entering from
  const getInitialPosition = (position, isNewDot) => {
    if (!isNewDot) return positionVariants[position];
    
    switch (position) {
      case 'farLeft':
      case 'left':
        return { x: -40 };
      case 'farRight':
      case 'right':
        return { x: 40 };
      case 'center':
        return direction > 0 ? { x: -20 } : { x: 20 };
      default:
        return positionVariants[position];
    }
  };

  // Check if a dot is new (entering the visible set)
  const isNewDot = (index) => {
    const position = getIndicatorPosition(index, visibleIndicators.indexOf(index));
    return (direction > 0 && (position === 'farRight' || position === 'right')) ||
           (direction < 0 && (position === 'farLeft' || position === 'left'));
  };

  const handleNext = () => {
    setDirection(1);
    onNext();
  };

  const handlePrev = () => {
    setDirection(-1);
    onPrev();
  };

  const handleIndicatorClick = (index) => {
    const newDirection = index > currentMediaIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentMediaIndex(index);
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    const swipeConfidenceThreshold = 10000;

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
  };

  return (
    <div className="mb-4 sm:mb-6">
      {/* Media Container - Responsive Height */}
      <div className="relative rounded-2xl overflow-hidden bg-gray-900 mb-3 sm:mb-4 shadow-2xl w-full h-48 sm:h-64 md:h-80 lg:h-96">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentMediaIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {allMedia[currentMediaIndex]?.type === 'image' ? (
              <motion.img
                src={allMedia[currentMediaIndex].src}
                alt={`${project.title} - Media ${currentMediaIndex + 1}`}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <video 
                  ref={el => videoRefs.current[currentMediaIndex] = el}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                  poster={project.images?.[0]}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source src={allMedia[currentMediaIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Arrows - Responsive sizing */}
        {allMedia.length > 1 && (
          <>
            <motion.button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-lg z-20 border border-white/10 ${
                !canScrollLeft 
                  ? 'opacity-20 cursor-not-allowed' 
                  : 'cursor-pointer hover:bg-black/90 hover:scale-105 shadow-lg'
              }`}
              whileHover={canScrollLeft ? { scale: 1.05 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={handleNext}
              disabled={!canScrollRight}
              className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-lg z-20 border border-white/10 ${
                !canScrollRight 
                  ? 'opacity-20 cursor-not-allowed' 
                  : 'cursor-pointer hover:bg-black/90 hover:scale-105 shadow-lg'
              }`}
              whileHover={canScrollRight ? { scale: 1.05 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </>
        )}

        {/* Current position overlay - Responsive positioning */}
        <motion.div 
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/80 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-sm backdrop-blur-lg border border-white/10 font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {currentMediaIndex + 1} / {allMedia.length}
        </motion.div>
      </div>

      {/* Dot Indicators - Responsive container */}
      {allMedia.length > 1 && (
        <div className="flex justify-center items-center pt-3 sm:pt-4 pb-1 sm:pb-2 border-t border-gray-700/50">
          <div className="bg-black/80 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 border border-white/10 shadow-2xl min-w-[240px] sm:min-w-[280px] md:min-w-[320px]">
            <div className="flex items-center justify-between w-full">
              {/* Left ellipsis */}
              <div className="w-4 sm:w-6 flex items-center justify-center">
                <AnimatePresence>
                  {showLeftEllipsis && (
                    <motion.span
                      key="left-ellipsis"
                      className="text-white/50 text-xs sm:text-sm font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      •••
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Dot container */}
              <div className="flex items-center justify-center mx-2 sm:mx-4">
                <div className="flex items-center justify-center w-48 sm:w-56 md:w-64">
                  <div className="flex items-center justify-center w-full">
                    {visibleIndicators.map((index, positionIndex) => {
                      const position = getIndicatorPosition(index, positionIndex);
                      const opacity = getIndicatorOpacity(index, positionIndex);
                      const isActive = index === currentMediaIndex;
                      const isNew = isNewDot(index);
                      
                      return (
                        <motion.button
                          key={index}
                          onClick={() => handleIndicatorClick(index)}
                          className="relative group"
                          initial={getInitialPosition(position, isNew)}
                          animate={positionVariants[position]}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 25,
                            duration: 0.4
                          }}
                        >
                          <div
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300"
                            style={{
                              backgroundColor: isActive ? "#ffffff" : `rgba(255, 255, 255, ${opacity})`
                            }}
                          />
                          
                          {/* Tooltip - Hidden on mobile, shown on desktop */}
                          <div className="hidden sm:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs py-1.5 px-2.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-30 shadow-lg border">
                            {index + 1} / {allMedia.length}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right ellipsis */}
              <div className="w-4 sm:w-6 flex items-center justify-center">
                <AnimatePresence>
                  {showRightEllipsis && (
                    <motion.span
                      key="right-ellipsis"
                      className="text-white/50 text-xs sm:text-sm font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      •••
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media title */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentMediaIndex}
          className="text-center py-2 sm:py-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white/80 text-sm sm:text-base font-medium">
            {allMedia[currentMediaIndex]?.title || `${currentMediaIndex + 1} of ${allMedia.length}`}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MediaCarousel;