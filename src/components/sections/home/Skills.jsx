import SkillCarousel from "./SkillCarousel";
import SkillsBackgroundAnimation from "./SkillBackgroundAnimation";
import { useEffect, useState, useCallback } from "react";
import * as skillIcons from "../../../assets/images/skills/index.js";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [categoryIndices, setCategoryIndices] = useState({});
  const [direction, setDirection] = useState(0);

  const skillCategories = [
    { 
      label: "Programming Languages", 
      skills: [
        { name: "Java", icon: skillIcons.java },
        { name: "Python", icon: skillIcons.python },
        { name: "R", icon: skillIcons.r },
        { name: "C++", icon: skillIcons.cpp },
      ],
      description: "Core programming languages for software development and data analysis"
    },
    { 
      label: "Web Development", 
      skills: [
        { name: "HTML5", icon: skillIcons.html },
        { name: "CSS3", icon: skillIcons.css },
        { name: "JavaScript", icon: skillIcons.js },
        { name: "PHP", icon: skillIcons.php },
        { name: "MySQL", icon: skillIcons.mysql },
        { name: "Derby", icon: skillIcons.derby },
        { name: "React", icon: skillIcons.react },
        { name: "Vue", icon: skillIcons.vue },
        { name: "Tailwind", icon: skillIcons.tailwind },
      ],
      description: "Full-stack web development technologies and frameworks"
    },
    { 
      label: "Development Environments", 
      skills: [
        { name: "VS Code", icon: skillIcons.vscode },
        { name: "NetBeans", icon: skillIcons.netbeans },
        { name: "Eclipse", icon: skillIcons.eclipse },
        { name: "RStudio", icon: skillIcons.rstudio },
      ],
      description: "Integrated development environments for efficient coding"
    },
    { 
      label: "Design Tools", 
      skills: [
        { name: "Canva", icon: skillIcons.canva },
        { name: "Figma", icon: skillIcons.figma },
        { name: "Adobe Photoshop", icon: skillIcons.photoshop },
        { name: "Adobe Illustrator", icon: skillIcons.illustrator },
        { name: "WordPress", icon: skillIcons.wordpress },
      ],
      description: "Design and content creation tools for UI/UX and graphics"
    },
  ];

  // Springy slide transition variants with bounce/jolt effect
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { 
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.8,
        },
        opacity: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      transition: {
        x: { 
          type: "spring",
          stiffness: 350,
          damping: 30,
          mass: 0.9,
        },
        opacity: { 
          duration: 0.25,
          ease: "easeIn"
        }
      }
    })
  };

  const descriptionVariants = {
    enter: {
      opacity: 0,
      y: 15
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const mobileGridVariants = {
    enter: {
      opacity: 0,
      y: 25
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      y: -25,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const handleCategoryChange = (newIndex) => {
    if (isAnimating || newIndex === activeCategory) return;
    
    const newDirection = newIndex > activeCategory ? 1 : -1;
    setDirection(newDirection);
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveCategory(newIndex);
      setIsAnimating(false);
    }, 400);
  };

  const navigateCategories = (navDirection) => {
    if (navDirection === "next") {
      const nextIndex = (activeCategory + 1) % skillCategories.length;
      handleCategoryChange(nextIndex);
    } else {
      const prevIndex = (activeCategory - 1 + skillCategories.length) % skillCategories.length;
      handleCategoryChange(prevIndex);
    }
  };

  const handleCarouselIndexChange = useCallback((newIndex) => {
    setCategoryIndices(prev => {
      if (prev[activeCategory] === newIndex) {
        return prev;
      }
      return {
        ...prev,
        [activeCategory]: newIndex
      };
    });
  }, [activeCategory]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="relative min-h-screen py-20 bg-transparent">
        <div className="text-center text-[#545454] relative z-10">Loading skills...</div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-transparent">
      {/* Background Animation with transparent background */}
      <SkillsBackgroundAnimation />

      {/* Semi-transparent overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-[1px] z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-[#1e1a17] bg-white/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide border border-[#1e1a17]/10 shadow-lg">
              Technical Stack
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1a17] mb-3 md:mb-4 leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-[#545454] max-w-2xl mx-auto">
            Tools and technologies I use to create innovative solutions
          </p>
        </div>

        {/* Category Navigation - Column layout on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8 md:mb-12 gap-4 lg:gap-8">
          {/* Navigation Arrows - Hidden on mobile and tablet, visible only on large desktop */}
          <div className="hidden xl:flex items-center">
            <button
              onClick={() => navigateCategories("prev")}
              disabled={isAnimating}
              className="bg-white/90 hover:bg-white border-2 border-[#1e1a17]/20 hover:border-[#1e1a17]/40 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 hover:cursor-pointer group mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous category"
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
          </div>

          {/* Category Buttons - Column on mobile, row on desktop */}
          <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-3 lg:gap-4 w-full lg:w-auto">
            {skillCategories.map((category, index) => (
              <button
                key={category.label}
                onClick={() => handleCategoryChange(index)}
                disabled={isAnimating}
                className={`px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full lg:w-auto text-center ${
                  activeCategory === index
                    ? 'bg-[#1e1a17] text-white shadow-lg transform scale-105'
                    : 'bg-white/90 text-[#545454] hover:bg-white hover:shadow-md hover:scale-105'
                } border border-[#1e1a17]/10 shadow-lg`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile and tablet, visible only on large desktop */}
          <div className="hidden xl:flex items-center">
            <button
              onClick={() => navigateCategories("next")}
              disabled={isAnimating}
              className="bg-white/90 hover:bg-white border-2 border-[#1e1a17]/20 hover:border-[#1e1a17]/40 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 hover:cursor-pointer group ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next category"
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
          </div>
        </div>

        {/* Category Description with Springy Transition */}
        <div className="text-center mb-6 md:mb-8 min-h-[60px] md:min-h-[80px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`desc-${activeCategory}`}
              custom={direction}
              variants={descriptionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-2xl mx-auto"
            >
              <p className="text-sm sm:text-base md:text-lg text-[#545454] italic bg-white/80 rounded-lg py-2 sm:py-3 px-4 sm:px-6 shadow-lg border border-[#1e1a17]/10">
                {skillCategories[activeCategory].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Skill Carousel with Springy Slide Transition - Only visible on large desktop (xl breakpoint) */}
        <div className="hidden xl:block mb-12 md:mb-16 relative overflow-hidden" style={{ height: '300px' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`carousel-${activeCategory}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full"
            >
              <SkillCarousel 
                skills={skillCategories[activeCategory].skills} 
                initialIndex={categoryIndices[activeCategory] || 0}
                onIndexChange={handleCarouselIndexChange}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Grid Layout - Visible on mobile, tablet, and medium desktop (hidden only on xl+) */}
        <div className="xl:hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`grid-${activeCategory}`}
              custom={direction}
              variants={mobileGridVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-white/90 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center shadow-lg border border-[#1e1a17]/10 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 350,
                    damping: 20,
                    delay: index * 0.06
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    transition: { 
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                >
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 object-contain"
                    whileHover={{ 
                      scale: 1.15,
                      transition: { 
                        type: "spring",
                        stiffness: 400,
                        damping: 5
                      }
                    }}
                  />
                  <span className="font-semibold text-[#1e1a17] text-xs sm:text-sm md:text-base">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;