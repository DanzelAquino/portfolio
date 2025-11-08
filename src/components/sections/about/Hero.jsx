import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Mouse follower component
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-white/3 to-white/8 rounded-full blur-3xl pointer-events-none"
      animate={{
        x: `${mousePosition.x - 50}%`,
        y: `${mousePosition.y - 50}%`,
      }}
      transition={{ type: "spring", stiffness: 50, damping: 30 }}
    />
  );
};

// Enhanced Firefly particles
const Firefly = ({ index }) => {
  const size = Math.random() * 4 + 2;
  const duration = Math.random() * 8 + 5;
  const blurIntensity = Math.random() * 2 + 1;
  
  const path = {
    x: [
      0,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 10,
      0
    ],
    y: [
      0,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 8,
      0
    ],
  };

  const pulsePattern = [0, 0.8, 0.4, 0.9, 0.3, 0.7, 0.2, 0];

  return (
    <motion.div
      className="absolute bg-yellow-100 rounded-full cursor-pointer"
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 120 - 10}%`,
        top: `${Math.random() * 120 - 10}%`,
        filter: `blur(${blurIntensity}px)`,
        boxShadow: '0 0 8px #fef3c7, 0 0 12px #fef3c7, 0 0 16px #fef3c7'
      }}
      initial={{ 
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: pulsePattern,
        scale: [0, 1, 0.8, 1.05, 0.85, 0.95, 0.9, 0],
        x: path.x,
        y: path.y,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        delay: index * 0.2,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.5, 0.7, 0.8, 0.9, 1],
      }}
      whileHover={{
        scale: 2,
        opacity: 1,
        transition: { duration: 0.3 }
      }}
    />
  );
};

// Fast-moving fireflies
const FastFirefly = ({ index }) => {
  const size = Math.random() * 3 + 1;
  const duration = Math.random() * 4 + 3;
  
  return (
    <motion.div
      key={`fast-firefly-${index}`}
      className="absolute bg-amber-200 rounded-full"
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 130 - 15}%`,
        top: `${Math.random() * 130 - 15}%`,
        filter: 'blur(1px)',
        boxShadow: '0 0 6px #fde68a, 0 0 10px #fde68a'
      }}
      initial={{ 
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 0.8, 0.3, 0.9, 0.2, 0.7, 0.1, 0],
        scale: [0, 1, 0.7, 1.1, 0.8, 0.95, 0.85, 0],
        x: [
          0,
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 90,
          (Math.random() - 0.5) * 70,
          0
        ],
        y: [
          0,
          (Math.random() - 0.5) * 45,
          (Math.random() - 0.5) * 70,
          (Math.random() - 0.5) * 50,
          0
        ],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        delay: index * 0.15,
        ease: "easeInOut",
        times: [0, 0.15, 0.35, 0.5, 0.65, 0.8, 0.9, 1],
      }}
    />
  );
};

// Glowing orb particles
const GlowingOrb = ({ index }) => {
  const size = Math.random() * 100 + 50;
  const duration = Math.random() * 25 + 20;
  
  return (
    <motion.div
      key={`orb-${index}`}
      className="absolute bg-gradient-to-br from-yellow-50/8 to-amber-100/3 rounded-full"
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        filter: 'blur(25px)',
      }}
      initial={{ 
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 0.1, 0.04, 0.08, 0.02, 0],
        scale: [0, 1, 0.8, 1.1, 0.9, 0],
        x: [0, (Math.random() - 0.5) * 15, 0],
        y: [0, (Math.random() - 0.5) * 10, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        delay: index * 4,
        ease: "easeInOut",
      }}
    />
  );
};

// Floating background words with better positioning
const FloatingElements = () => {
  const elements = [
    { 
      text: "Full-Stack Developer", 
      delay: 0,
      position: { left: "10%", top: "25%" },
      floatRange: { y: [-15, 15, -15], x: [-8, 8, -8] },
      duration: 9,
      size: "text-sm md:text-base"
    },
    { 
      text: "Problem Solver", 
      delay: 0.3,
      position: { left: "80%", top: "30%" },
      floatRange: { y: [-12, 12, -12], x: [-10, 10, -10] },
      duration: 8,
      size: "text-xs md:text-sm"
    },
    { 
      text: "Creative Thinker", 
      delay: 0.6,
      position: { left: "15%", top: "70%" },
      floatRange: { y: [-18, 18, -18], x: [-6, 6, -6] },
      duration: 10,
      size: "text-sm md:text-base"
    },
    { 
      text: "Continuous Learner", 
      delay: 0.9,
      position: { left: "75%", top: "65%" },
      floatRange: { y: [-14, 14, -14], x: [-9, 9, -9] },
      duration: 11,
      size: "text-xs md:text-sm"
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute text-white/35 font-light cursor-default ${element.size}`}
          style={element.position}
          initial={{ 
            opacity: 0,
            y: 20,
            x: 0
          }}
          animate={{
            opacity: [0.25, 0.45, 0.25],
            y: element.floatRange.y,
            x: element.floatRange.x,
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.5 + element.delay,
            ease: "easeInOut"
          }}
          whileHover={{
            opacity: 0.7,
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        >
          {element.text}
        </motion.div>
      ))}
    </div>
  );
};

const AboutHero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-[#1e1a17] text-white px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Mouse follower */}
      <MouseFollower />

      {/* Glowing Orbs for depth */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <GlowingOrb key={`orb-${i}`} index={i} />
        ))}
      </div>

      {/* Regular Firefly Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <Firefly key={`firefly-${i}`} index={i} />
        ))}
      </div>

      {/* Fast Firefly Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <FastFirefly key={`fast-firefly-${i}`} index={i} />
        ))}
      </div>

      {/* Better Positioned Floating Words */}
      <FloatingElements />

      {/* Subtle ambient glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-amber-100/8 rounded-full blur-3xl"
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-yellow-100/8 rounded-full blur-3xl"
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.3, 1],
          x: [0, -15, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
      />

      {/* Main Content - Clean and Minimal */}
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent leading-tight"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          About Me
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-white/70 font-light px-2"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Computer Engineering Graduate &<br className="hidden sm:block" />
          Aspiring Full-Stack Developer
        </motion.p>
      </div>

      {/* Scroll indicator positioned correctly at the bottom - outside the main content */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-white/50 text-xs sm:text-sm font-light tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll to explore</span>
          <motion.svg
            className="w-3 h-3 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Top and bottom ambient glows */}
      <motion.div
        className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-amber-100/8 to-transparent pointer-events-none"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-yellow-100/8 to-transparent pointer-events-none"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, delay: 5 }}
      />
    </section>
  );
};

export default AboutHero;