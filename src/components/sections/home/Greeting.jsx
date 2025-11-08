import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Me from "../../../assets/images/me.JPG";

const Greeting = () => {
  // Tech-related symbols and elements for the rain
  const techSymbols = ['{ }', '</>', ';', '=>', '()', '[]', '/*', '*/', '==', '!=', '++', '--', '||', '&&', '::', '->'];
  const codeElements = ['div', 'span', 'func', 'class', 'const', 'let', 'var', 'import', 'export', 'return', 'async', 'await', 'fetch', 'react', 'vue', 'node', 'python', 'java', 'mysql'];
  const shapes = ['●', '■', '▲', '◆', '★', '✦', '◈', '▣', '◉', '◎', '▢', '▤', '▥', '▦', '▧'];

  // Define safe zones where shapes should avoid (image area)
  const getSafePosition = () => {
    const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024; // lg breakpoint
    let safeX, safeY;
    let attempts = 0;
    
    do {
      // Generate random position
      safeX = Math.random() * 100;
      safeY = Math.random() * 100;
      attempts++;
      
      // Define image area to avoid (right side on large screens, center on small screens)
      if (isLargeScreen) {
        // On large screens, image is on right (60-100% width)
        const inImageAreaX = safeX > 55;
        const inImageAreaY = safeY > 35 && safeY < 65;
        if (!(inImageAreaX && inImageAreaY)) break;
      } else {
        // On small screens, image is centered (30-70% width, 40-60% height)
        const inImageAreaX = safeX > 30 && safeX < 70;
        const inImageAreaY = safeY > 40 && safeY < 60;
        if (!(inImageAreaX && inImageAreaY)) break;
      }
    } while (attempts < 20); // Prevent infinite loop
    
    return { x: safeX, y: safeY };
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-24 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#edeeef] to-[#c5cddf]">
      {/* Grid Background with Low Opacity */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#1e1a17 1px, transparent 1px),
            linear-gradient(90deg, #1e1a17 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Enhanced Upside-down Rain with Staggered Appearance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* First wave - reduced elements for mobile */}
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 30)].map((_, i) => {
          const isCode = Math.random() > 0.5;
          const content = isCode 
            ? codeElements[Math.floor(Math.random() * codeElements.length)]
            : techSymbols[Math.floor(Math.random() * techSymbols.length)];

          const startX = Math.random() * 100;
          const waveFrequency = Math.random() * 2 + 1;
          const waveAmplitude = Math.random() * 40 + 20;
          const initialDelay = Math.random() * 5;

          return (
            <motion.div
              key={`wave1-${i}`}
              className={`absolute font-mono select-none pointer-events-none ${
                isCode ? 'text-xs' : 'text-sm'
              } text-[#1e1a17]`}
              style={{
                left: `${startX}%`,
                bottom: '-30px',
                opacity: Math.random() * 0.3 + 0.1,
                fontSize: `${Math.random() * 8 + 8}px`,
                fontWeight: Math.random() > 0.8 ? 'bold' : 'normal',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0.3, 0.1],
                y: [0, -window.innerHeight - 100],
                x: [
                  `${startX}%`,
                  `${startX + Math.sin(0) * waveAmplitude}%`,
                  `${startX + Math.sin(waveFrequency * 0.5) * waveAmplitude}%`,
                  `${startX + Math.sin(waveFrequency * 1) * waveAmplitude}%`,
                  `${startX + Math.sin(waveFrequency * 1.5) * waveAmplitude}%`,
                  `${startX}%`
                ],
                rotate: [0, Math.random() * 90 - 45, Math.random() * 180 - 90, 0],
                scale: [0.8, 1.1, 1, 0.9],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: initialDelay,
                ease: "linear",
              }}
            >
              {content}
            </motion.div>
          );
        })}

        {/* Second wave - reduced elements for mobile */}
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : 25)].map((_, i) => {
          const isCode = Math.random() > 0.5;
          const content = isCode 
            ? codeElements[Math.floor(Math.random() * codeElements.length)]
            : techSymbols[Math.floor(Math.random() * techSymbols.length)];

          const startX = Math.random() * 100;
          const waveFrequency = Math.random() * 2 + 1.5;
          const waveAmplitude = Math.random() * 30 + 25;
          const initialDelay = Math.random() * 8 + 2;

          return (
            <motion.div
              key={`wave2-${i}`}
              className={`absolute font-mono select-none pointer-events-none ${
                isCode ? 'text-xs' : 'text-sm'
              } text-[#1e1a17]`}
              style={{
                left: `${startX}%`,
                bottom: '-30px',
                opacity: Math.random() * 0.25 + 0.05,
                fontSize: `${Math.random() * 6 + 6}px`,
                fontWeight: Math.random() > 0.9 ? 'bold' : 'normal',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0.2, 0.05],
                y: [0, -window.innerHeight - 100],
                x: [
                  `${startX}%`,
                  `${startX + Math.sin(0) * waveAmplitude}%`,
                  `${startX + Math.sin(waveFrequency * 0.5) * waveAmplitude}%`,
                  `${startX + Math.sin(waveFrequency * 1) * waveAmplitude}%`,
                  `${startX + Math.sin(waveFrequency * 1.5) * waveAmplitude}%`,
                  `${startX}%`
                ],
                rotate: [0, Math.random() * 120 - 60, Math.random() * 240 - 120, 0],
                scale: [0.7, 1.05, 0.95, 0.8],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                delay: initialDelay,
                ease: "linear",
              }}
            >
              {content}
            </motion.div>
          );
        })}

        {/* Third wave - reduced elements for mobile */}
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20)].map((_, i) => {
          const isCode = Math.random() > 0.6;
          const content = isCode 
            ? codeElements[Math.floor(Math.random() * codeElements.length)]
            : techSymbols[Math.floor(Math.random() * techSymbols.length)];

          const startX = Math.random() * 100;
          const waveFrequency = Math.random() * 3 + 2;
          const waveAmplitude = Math.random() * 20 + 15;
          const initialDelay = Math.random() * 12 + 5;

          return (
            <motion.div
              key={`wave3-${i}`}
              className={`absolute font-mono select-none pointer-events-none ${
                isCode ? 'text-xs' : 'text-sm'
              } text-[#1e1a17]`}
              style={{
                left: `${startX}%`,
                bottom: '-30px',
                opacity: Math.random() * 0.2 + 0.08,
                fontSize: `${Math.random() * 10 + 4}px`,
                fontWeight: Math.random() > 0.85 ? 'bold' : 'normal',
                fontStyle: Math.random() > 0.8 ? 'italic' : 'normal',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.25, 0.15, 0.08],
                y: [0, -window.innerHeight - 100],
                x: [
                  `${startX}%`,
                  `${startX + Math.sin(0) * waveAmplitude}%`,
                  `${startX + Math.sin(waveFrequency * 0.3) * waveAmplitude}%`,
                  `${startX + Math.sin(waveFrequency * 0.6) * waveAmplitude}%`,
                  `${startX + Math.sin(waveFrequency * 0.9) * waveAmplitude}%`,
                  `${startX}%`
                ],
                rotate: [0, Math.random() * 180 - 90, Math.random() * 360 - 180, 0],
                scale: [0.6, 1.2, 0.9, 0.7],
              }}
              transition={{
                duration: Math.random() * 12 + 8,
                repeat: Infinity,
                delay: initialDelay,
                ease: "linear",
              }}
            >
              {content}
            </motion.div>
          );
        })}
      </div>

      {/* Reduced number of background shapes for mobile */}
      <div className="absolute inset-0">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 4)].map((_, i) => {
          const size = Math.random() * 200 + 150;
          const shapeType = Math.floor(Math.random() * 3);
          const isOutline = Math.random() > 0.7;
          const { x, y } = getSafePosition();
          
          return (
            <motion.div
              key={`massive-${i}`}
              className={`absolute border-2 border-[#1e1a17]/30 ${
                shapeType === 0 ? 'rounded-full' : 
                shapeType === 1 ? 'rounded-[40px]' : 'rounded-[30px]'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}%`,
                top: `${y}%`,
                backgroundColor: isOutline ? 'transparent' : `rgba(30, 26, 23, ${Math.random() * 0.1 + 0.05})`,
                borderColor: `rgba(84, 84, 84, ${Math.random() * 0.3 + 0.2})`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 60 - 30, 0],
                rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                scale: [1, 1.02, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 40 + 30,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Extra Large Background Shapes - Reduced for mobile */}
      <div className="absolute inset-0">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 6)].map((_, i) => {
          const size = Math.random() * 120 + 80;
          const shapeType = Math.floor(Math.random() * 3);
          const isOutline = Math.random() > 0.6;
          const { x, y } = getSafePosition();
          
          return (
            <motion.div
              key={`xlarge-${i}`}
              className={`absolute border-2 border-[#1e1a17]/40 ${
                shapeType === 0 ? 'rounded-full' : 
                shapeType === 1 ? 'rounded-3xl' : 'rounded-xl'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}%`,
                top: `${y}%`,
                backgroundColor: isOutline ? 'transparent' : `rgba(30, 26, 23, ${Math.random() * 0.15 + 0.08})`,
                borderColor: `rgba(84, 84, 84, ${Math.random() * 0.4 + 0.3})`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, Math.random() * 80 - 40, 0],
                x: [0, Math.random() * 50 - 25, 0],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.03, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: Math.random() * 30 + 25,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Large Background Shapes - Reduced for mobile */}
      <div className="absolute inset-0">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 5 : 10)].map((_, i) => {
          const size = Math.random() * 60 + 40;
          const shapeType = Math.floor(Math.random() * 3);
          const isOutline = Math.random() > 0.5;
          const { x, y } = getSafePosition();
          
          return (
            <motion.div
              key={`large-${i}`}
              className={`absolute border-2 border-[#1e1a17]/50 ${
                shapeType === 0 ? 'rounded-full' : 
                shapeType === 1 ? 'rounded-2xl' : 'rounded-lg'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}%`,
                top: `${y}%`,
                backgroundColor: isOutline ? 'transparent' : `rgba(30, 26, 23, ${Math.random() * 0.2 + 0.1})`,
                borderColor: `rgba(84, 84, 84, ${Math.random() * 0.5 + 0.4})`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, Math.random() * 60 - 30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: Math.random() * 25 + 20,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Medium Background Shapes - Reduced for mobile */}
      <div className="absolute inset-0">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 15)].map((_, i) => {
          const size = Math.random() * 40 + 20;
          const shapeType = Math.floor(Math.random() * 3);
          const isOutline = Math.random() > 0.4;
          const { x, y } = getSafePosition();
          
          return (
            <motion.div
              key={`medium-${i}`}
              className={`absolute border-2 border-[#1e1a17]/60 ${
                shapeType === 0 ? 'rounded-full' : 
                shapeType === 1 ? 'rounded-lg' : 'rounded-md'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}%`,
                top: `${y}%`,
                backgroundColor: isOutline ? 'transparent' : `rgba(30, 26, 23, ${Math.random() * 0.25 + 0.15})`,
                borderColor: `rgba(84, 84, 84, ${Math.random() * 0.6 + 0.5})`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, Math.random() * 40 - 20, 0],
                x: [0, Math.random() * 30 - 15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: Math.random() * 18 + 12,
                repeat: Infinity,
                delay: Math.random() * 1,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Big Floating Shape Characters - Reduced for mobile */}
      <div className="absolute inset-0">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 6 : 12)].map((_, i) => {
          const fontSize = Math.random() * 24 + 32;
          const { x, y } = getSafePosition();

          return (
            <motion.div
              key={i}
              className="absolute text-[#1e1a17] opacity-25 pointer-events-none select-none"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                fontSize: `${fontSize}px`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, Math.random() * 40 - 20, 0],
                x: [0, Math.random() * 30 - 15, 0],
                rotate: [0, 360],
                scale: [0.9, 1.4, 0.9],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                delay: Math.random() * 1.5,
                ease: "easeInOut",
              }}
            >
              {shapes[Math.floor(Math.random() * shapes.length)]}
            </motion.div>
          );
        })}
      </div>

      {/* Huge Pulsing Orbs - Reduced for mobile */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 4)].map((_, i) => {
        const orbSize = Math.random() * 150 + 200;
        const { x, y } = getSafePosition();

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#1e1a17]/20 to-[#545454]/20 pointer-events-none"
            style={{
              width: `${orbSize}px`,
              height: `${orbSize}px`,
              left: `${x}%`,
              top: `${y}%`,
              filter: 'blur(40px)',
              willChange: 'transform, opacity',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Connection Lines - Reduced for mobile */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="#1e1a17"
            strokeWidth="1"
            animate={{
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mt-8 lg:mt-0">
        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, ease: "easeOut" }}
            className="inline-block mb-6 md:mb-8"
          >
            <span className="text-xs sm:text-sm font-semibold text-[#1e1a17] bg-white/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide border border-[#1e1a17]/20">
              Computer Engineering Portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[#1e1a17]">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="relative block">
                  <span className="text-[#1e1a17] block">Danzel</span>
                  <motion.span
                    className="absolute top-0 left-0 right-0 bottom-0 text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 20%, #6a6a6a 40%, #7a7a7a 50%, #6a6a6a 60%, transparent 80%, transparent 100%)',
                      backgroundSize: '400% 100%',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '400% 0%'],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Danzel
                  </motion.span>
                </span>
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#545454] mb-8 md:mb-10 leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Computer Engineering Graduate
            <br />
            <span className="text-base sm:text-lg text-[#545454]/80">
              Polytechnic University of the Philippines
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/about"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#1e1a17] text-white rounded-xl font-semibold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 bg-[#1e1a17]" />
              <motion.div
                className="absolute inset-0"
                animate={{
                  x: ["-100%", "100%", "-100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "linear-gradient(90deg, transparent, #6a6a6a, transparent)",
                  width: "100%",
                  transform: "skewX(-12deg)",
                }}
              />
              <span className="relative z-10">Explore My Journey</span>
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </Link>
            
            <Link
              to="/projects"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#1e1a17] text-[#1e1a17] rounded-xl font-semibold text-base sm:text-lg hover:bg-[#1e1a17] hover:text-white transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto text-center"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#1e1a17] to-[#6a6a6a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                whileHover={{ opacity: 1 }}
              />
              <span className="relative">View Projects</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            type: "spring", 
            stiffness: 50, 
            damping: 15 
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-3 sm:-inset-4 rounded-full"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ 
                background: 'conic-gradient(from 0deg at 50% 50%, #1e1a17, #6a6a6a, #1e1a17)',
                filter: 'blur(20px) opacity(0.3)'
              }}
            />
            
            <img
              src={Me}
              alt="Danzel Aquino"
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-[50%_40%] shadow-2xl border-4 border-white/20"
            />
            
            <motion.div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1e1a17]/20 to-[#6a6a6a]/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                y: [0, -8, 0],
                x: [0, 4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#6a6a6a]/20 to-[#1e1a17]/20 rounded-full blur-xl"
              animate={{
                scale: [1.1, 0.9, 1.1],
                opacity: [0.4, 0.2, 0.4],
                y: [0, 6, 0],
                x: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Positioned at the very bottom with space around it */}
      <motion.div
        className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 py-3 px-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center text-[#545454]">
          <span className="text-xs sm:text-sm mb-3 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#545454] rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.2
              }}
              className="w-1 h-2 sm:h-3 bg-[#545454] rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Greeting;