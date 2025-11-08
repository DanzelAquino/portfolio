import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative">
      {/* Header with unified gradient */}
      <div className="relative overflow-hidden">
        {/* Unified background gradient that spans entire header */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#d8dce3] via-[#c2c9dc] to-[#edeeef] pt-32 sm:pt-16 md:pt-20 lg:pt-24 pb-32 md:pb-40 lg:pb-48" />
        
        {/* Wave Animation Container - Raised up */}
        <div className="absolute top-12 sm:top-4 md:top-6 lg:top-8 left-0 right-0 h-24 md:h-32 lg:h-36 pointer-events-none z-10">
          
          {/* Wave animations remain the same */}
          <motion.svg
            className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-36 transform rotate-180"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M-100,15 C50,30 200,10 350,15 C500,30 650,10 800,15 C950,30 1100,10 1300,15 L1300,120 L-100,120 Z"
              fill="#8a95b5"
              fillOpacity="0.9"
              animate={{
                d: [
                  "M-100,15 C50,30 200,10 350,15 C500,30 650,10 800,15 C950,30 1100,10 1300,15 L1300,120 L-100,120 Z",
                  "M-100,18 C50,28 200,13 350,18 C500,28 650,13 800,18 C950,28 1100,13 1300,18 L1300,120 L-100,120 Z",
                  "M-100,12 C50,32 200,7 350,12 C500,32 650,7 800,12 C950,32 1100,7 1300,12 L1300,120 L-100,120 Z",
                  "M-100,17 C50,27 200,14 350,17 C500,27 650,14 800,17 C950,27 1100,14 1300,17 L1300,120 L-100,120 Z",
                  "M-100,15 C50,30 200,10 350,15 C500,30 650,10 800,15 C950,30 1100,10 1300,15 L1300,120 L-100,120 Z"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.svg>

          {/* Other waves remain the same */}
          <motion.svg
            className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-36 transform rotate-180"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M-80,35 C80,55 240,30 400,35 C560,55 720,30 880,35 C1040,55 1160,30 1280,35 L1280,120 L-80,120 Z"
              fill="#9ca6c0"
              fillOpacity="0.85"
              animate={{
                d: [
                  "M-80,35 C80,55 240,30 400,35 C560,55 720,30 880,35 C1040,55 1160,30 1280,35 L1280,120 L-80,120 Z",
                  "M-80,38 C80,52 240,33 400,38 C560,52 720,33 880,38 C1040,52 1160,33 1280,38 L1280,120 L-80,120 Z",
                  "M-80,32 C80,58 240,27 400,32 C560,58 720,27 880,32 C1040,58 1160,27 1280,32 L1280,120 L-80,120 Z",
                  "M-80,37 C80,53 240,31 400,37 C560,53 720,31 880,37 C1040,53 1160,31 1280,37 L1280,120 L-80,120 Z",
                  "M-80,35 C80,55 240,30 400,35 C560,55 720,30 880,35 C1040,55 1160,30 1280,35 L1280,120 L-80,120 Z"
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.svg>

          <motion.svg
            className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-36 transform rotate-180"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M-60,55 C60,75 180,50 300,55 C420,75 540,50 660,55 C780,75 900,50 1020,55 C1140,75 1200,50 1260,55 L1260,120 L-60,120 Z"
              fill="#aeb8d0"
              fillOpacity="0.8"
              animate={{
                d: [
                  "M-60,55 C60,75 180,50 300,55 C420,75 540,50 660,55 C780,75 900,50 1020,55 C1140,75 1200,50 1260,55 L1260,120 L-60,120 Z",
                  "M-60,58 C60,72 180,53 300,58 C420,72 540,53 660,58 C780,72 900,53 1020,58 C1140,72 1200,53 1260,58 L1260,120 L-60,120 Z",
                  "M-60,52 C60,78 180,47 300,52 C420,78 540,47 660,52 C780,78 900,47 1020,52 C1140,78 1200,47 1260,52 L1260,120 L-60,120 Z",
                  "M-60,57 C60,73 180,51 300,57 C420,73 540,51 660,57 C780,73 900,51 1020,57 C1140,73 1200,51 1260,57 L1260,120 L-60,120 Z",
                  "M-60,55 C60,75 180,50 300,55 C420,75 540,50 660,55 C780,75 900,50 1020,55 C1140,75 1200,50 1260,55 L1260,120 L-60,120 Z"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.svg>

          <motion.svg
            className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-36 transform rotate-180"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M-40,75 C40,90 120,70 200,75 C280,90 360,70 440,75 C520,90 600,70 680,75 C760,90 840,70 920,75 C1000,90 1080,70 1160,75 C1200,80 1240,70 1240,75 L1240,120 L-40,120 Z"
              fill="#c0cae0"
              fillOpacity="0.75"
              animate={{
                d: [
                  "M-40,75 C40,90 120,70 200,75 C280,90 360,70 440,75 C520,90 600,70 680,75 C760,90 840,70 920,75 C1000,90 1080,70 1160,75 C1200,80 1240,70 1240,75 L1240,120 L-40,120 Z",
                  "M-40,78 C40,88 120,73 200,78 C280,88 360,73 440,78 C520,88 600,73 680,78 C760,88 840,73 920,78 C1000,88 1080,73 1160,78 C1200,78 1240,73 1240,78 L1240,120 L-40,120 Z",
                  "M-40,72 C40,92 120,67 200,72 C280,92 360,67 440,72 C520,92 600,67 680,72 C760,92 840,67 920,72 C1000,92 1080,67 1160,72 C1200,82 1240,67 1240,72 L1240,120 L-40,120 Z",
                  "M-40,77 C40,87 120,71 200,77 C280,87 360,71 440,77 C520,87 600,71 680,77 C760,87 840,71 920,77 C1000,87 1080,71 1160,77 C1200,79 1240,71 1240,77 L1240,120 L-40,120 Z",
                  "M-40,75 C40,90 120,70 200,75 C280,90 360,70 440,75 C520,90 600,70 680,75 C760,90 840,70 920,75 C1000,90 1080,70 1160,75 C1200,80 1240,70 1240,75 L1240,120 L-40,120 Z"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </motion.svg>
        </div>

        {/* Header Content - Lowered on mobile */}
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-20 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-16 md:pt-20 lg:pt-24 pb-32 md:pb-40 lg:pb-48"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Animated Badge - Lowered on mobile */}
          <motion.div 
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/90 backdrop-blur-lg border border-[#1e1a17]/10 shadow-lg mb-8 sm:mb-8 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.95)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#1e1a17]/10 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div 
              className="w-2 h-2 bg-[#1e1a17] rounded-full mr-2 sm:mr-3 relative z-10"
              animate={{
                scale: [1, 1.4, 1],
                boxShadow: [
                  '0 0 0 0 rgba(30, 26, 23, 0.4)',
                  '0 0 0 6px rgba(30, 26, 23, 0)',
                  '0 0 0 0 rgba(30, 26, 23, 0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-xs sm:text-sm font-semibold text-[#545454] relative z-10">
              Always open to connect
            </span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-6 text-[#1e1a17] cursor-default"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-[#1e1a17] to-[#545454] bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl text-[#545454] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-8 px-4"
            variants={itemVariants}
          >
            Whether you have a question, want to discuss technology, or just say hello —{' '}
            <motion.span
              className="text-[#1e1a17] font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              I'd love to hear from you.
            </motion.span>
          </motion.p>

          {/* Animated Arrow */}
          <motion.div
            className="mt-12 sm:mt-16"
            variants={itemVariants}
          >
            <motion.div
              className="w-6 h-6 mx-auto border-r-2 border-b-2 border-[#1e1a17] transform rotate-45"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Clean Gradient Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-52 pointer-events-none z-0" />
      </div>
    </div>
  );
};

export default ContactHeader;