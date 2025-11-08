import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

// Move random data generation outside the component so it doesn't change on re-render
const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 5
}));

const techSymbols = ['{}', '</>', '();', '=>', '[]', '/*', '*/', '==', '++', '||'].map((symbol, index) => ({
  id: index,
  symbol,
  fontSize: Math.random() * 16 + 12,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 8,
  yMovement: Math.random() * 80,
  xMovement: Math.random() * 40 - 20
}));

const CallToAction = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: -30 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Button hover animation with scale and lift
  const buttonHover = {
    y: -6,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  // Text bounce animation - just up and down
  const textBounceAnimation = {
    y: [0, -3, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Pulsing border glow animation for both buttons
  const borderGlowAnimation = {
    borderColor: ["rgba(197, 205, 223, 0.3)", "rgba(197, 205, 223, 0.8)", "rgba(197, 205, 223, 0.3)"],
    boxShadow: [
      "0 0 0px rgba(197, 205, 223, 0)",
      "0 0 20px rgba(197, 205, 223, 0.4)",
      "0 0 0px rgba(197, 205, 223, 0)"
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="min-h-screen py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1e1a17] to-[#2a2623] relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated background grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `linear-gradient(#c5cddf 1px, transparent 1px), linear-gradient(90deg, #c5cddf 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles - now with stable positions */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#c5cddf] opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating tech symbols - now with stable positions */}
        {techSymbols.map((tech) => (
          <motion.div
            key={tech.id}
            className="absolute text-[#c5cddf] opacity-10 font-mono pointer-events-none"
            style={{
              fontSize: `${tech.fontSize}px`,
              left: `${tech.x}%`,
              top: `${tech.y}%`,
            }}
            animate={{
              y: [0, -tech.yMovement, 0],
              x: [0, tech.xMovement, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.15, 0],
            }}
            transition={{
              duration: tech.duration,
              repeat: Infinity,
              delay: tech.delay,
              ease: "easeInOut",
            }}
          >
            {tech.symbol}
          </motion.div>
        ))}

        {/* Pulsing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#c5cddf]/10 to-[#edeeef]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-[#edeeef]/10 to-[#c5cddf]/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.08, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Moving connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="#c5cddf"
              strokeWidth="1"
              animate={{
                opacity: [0, 0.3, 0],
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Floating geometric shapes */}
        {[...Array(4)].map((_, i) => {
          const size = Math.random() * 60 + 30;
          const shapeType = Math.floor(Math.random() * 3);
          
          return (
            <motion.div
              key={i}
              className={`absolute border border-[#c5cddf]/20 ${
                shapeType === 0 ? 'rounded-full' : 
                shapeType === 1 ? 'rounded-lg' : 'rounded-md'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 80 - 40, 0],
                rotate: [0, 180, 360],
                opacity: [0.05, 0.15, 0.05],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Wave pattern overlay */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #c5cddf 2px, transparent 2px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Main Content - All content is properly included now */}
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10 w-full px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div variants={badgeVariants} className="inline-block mb-6 md:mb-8">
          <motion.span 
            className="text-xs sm:text-sm font-semibold text-[#c5cddf] bg-[#1e1a17] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide border border-[#c5cddf]/30"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(30, 26, 23, 0.8)",
              transition: { duration: 0.2 }
            }}
          >
            Open for Opportunities
          </motion.span>
        </motion.div>

        {/* Title */}
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#edeeef] mb-4 md:mb-6 leading-tight">
          Ready to Bring Value<br className="sm:hidden" /> to Your Team
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-[#c5cddf] mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm actively seeking new opportunities where I can apply my full-stack development skills 
          to solve challenging problems and contribute to meaningful projects.
        </motion.p>
        
        {/* Buttons with Full Hover Effects - Updated to use Link */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 md:mb-16">
          {/* Primary Button - Hire Me */}
          <motion.div
            variants={buttonVariants}
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredButton("hire")}
            onHoverEnd={() => setHoveredButton(null)}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#c5cddf] to-[#a8b3cf] text-[#1e1a17] rounded-full font-semibold text-base sm:text-lg shadow-2xl border border-[#c5cddf] relative overflow-hidden group block text-center"
            >
              {/* Animated gradient flow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#c5cddf] via-[#d8e0f0] to-[#c5cddf] bg-[length:200%_100%] rounded-full"
                initial={{ backgroundPosition: "0% 0%" }}
                whileHover={{
                  backgroundPosition: "100% 0%",
                  transition: { duration: 1.2, ease: "easeInOut" }
                }}
              />
              
              {/* Pulsing border glow */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#c5cddf]"
                whileHover={borderGlowAnimation}
              />

              {/* Text that bounces based on this specific button's hover state */}
              <motion.span 
                className="relative z-10 inline-block"
                animate={hoveredButton === "hire" ? textBounceAnimation : { y: 0 }}
              >
                Hire Me
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Secondary Button - See My Work */}
          <motion.div
            variants={buttonVariants}
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredButton("work")}
            onHoverEnd={() => setHoveredButton(null)}
            className="w-full sm:w-auto"
          >
            <Link
              to="/projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1e1a17] text-[#c5cddf] rounded-full font-semibold text-base sm:text-lg relative overflow-hidden group border border-[#c5cddf]/30 shadow-2xl block text-center"
            >
              {/* Background slide animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c5cddf]/10 to-transparent rounded-full"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "100%",
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              />
              
              {/* Pulsing border glow */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#c5cddf]/30"
                whileHover={borderGlowAnimation}
              />
              
              {/* Text that bounces based on this specific button's hover state */}
              <motion.span 
                className="relative z-10 inline-block"
                animate={hoveredButton === "work" ? textBounceAnimation : { y: 0 }}
              >
                See My Work
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Contact Options with Original Wave Animation */}
        <motion.div variants={itemVariants} className="bg-[#2a2623]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#545454]/30">
          <motion.p variants={itemVariants} className="text-[#c5cddf] mb-6 md:mb-8 text-base sm:text-lg font-medium">
            Let's start a conversation
          </motion.p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            {[
              {
                href: "mailto:danzel21.aquino@gmail.com",
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                ),
                name: "Email",
                detail: "danzel21.aquino@gmail.com",
                isExternal: true
              },
              {
                href: "https://linkedin.com/in/danzelaquino",
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                name: "LinkedIn",
                detail: "/in/danzelaquino",
                isExternal: true
              },
              {
                href: "https://github.com/DanzelAquino",
                icon: (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                ),
                name: "GitHub",
                detail: "@DanzelAquino",
                isExternal: true
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.name}
                variants={contactItemVariants}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  backgroundColor: "rgba(84, 84, 84, 0.4)",
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    duration: 0.3 
                  }
                }}
                className="text-[#edeeef] flex items-center gap-3 px-4 py-3 rounded-lg w-full sm:w-auto sm:min-w-[200px] bg-[#545454]/20 cursor-pointer relative overflow-hidden border border-[#545454]/30"
              >
                {contact.isExternal ? (
                  // External links still use <a> tag
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full"
                  >
                    {/* Icon with original wave animation */}
                    <motion.div 
                      className="p-2 bg-[#545454]/30 rounded-lg relative z-10"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -8, 8, -4, 4, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      {contact.icon}
                    </motion.div>
                    <div className="text-left relative z-10 flex-1 min-w-0">
                      <div className="font-semibold text-sm sm:text-base truncate">{contact.name}</div>
                      <div className="text-[#c5cddf] text-xs truncate">{contact.detail}</div>
                    </div>
                  </a>
                ) : (
                  // Internal links use Link component
                  <Link
                    to={contact.href}
                    className="flex items-center gap-3 w-full"
                  >
                    {/* Icon with original wave animation */}
                    <motion.div 
                      className="p-2 bg-[#545454]/30 rounded-lg relative z-10"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -8, 8, -4, 4, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      {contact.icon}
                    </motion.div>
                    <div className="text-left relative z-10 flex-1 min-w-0">
                      <div className="font-semibold text-sm sm:text-base truncate">{contact.name}</div>
                      <div className="text-[#c5cddf] text-xs truncate">{contact.detail}</div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;