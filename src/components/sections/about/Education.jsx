import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import pupLogo from "../../../assets/images/about/pup.png";

const AboutEducation = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const educationLearnings = [
    {
      category: "Web Development",
      items: ["HTML/CSS/JavaScript", "Bootstrap Framework", "Java Servlets Backend", "MySQL & Derby Databases", "Full-Stack CRUD Applications"],
      icon: "🌐",
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Programming & Software",
      items: ["Java OOP Programming", "Python Logic & Design", "R Programming for Data Analysis", "Eclipse IDE Development", "Software Development Principles"],
      icon: "💻",
      color: "from-green-500 to-green-600"
    },
    {
      category: "Computer Engineering",
      items: ["Arduino Microprocessors", "Logic Circuits & Design", "Mixed Signals & Sensors", "Electrical & Electronic Circuits", "Operating Systems Theory"],
      icon: "⚡",
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Design & Technical Skills",
      items: ["Adobe Photoshop", "Adobe Animate 2D Animation", "AutoCAD Technical Design", "Cisco Packet Tracer Networking", "Technical Research Methods"],
      icon: "🎨",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const learningCardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-[#545454] mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            My technical foundation in Computer Engineering Technology
          </motion.p>
          <motion.div 
            className="w-20 sm:w-24 h-1 bg-[#1e1a17] mx-auto mt-3 sm:mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Education Card */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-[#1e1a17] to-[#545454] rounded-2xl p-6 sm:p-8 text-white shadow-2xl h-full hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* PUP Logo with animation */}
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img 
                    src={pupLogo} 
                    alt="PUP Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-2 leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Polytechnic University of the Philippines
                </motion.h3>
                
                <motion.p 
                  className="text-lg sm:text-xl mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Diploma
                </motion.p>
                
                <motion.p 
                  className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Computer Engineering Technology
                </motion.p>
                
                <motion.div 
                  className="bg-white text-[#1e1a17] rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold inline-block hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  2022 - 2025
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* What I Learned */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 h-full hover:shadow-xl transition-all duration-500">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-[#545454] mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Technical Skills & Knowledge
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {educationLearnings.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    variants={learningCardVariants}
                    custom={categoryIndex}
                    className="bg-white rounded-lg p-3 sm:p-4 shadow border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
                  >
                    {/* Category Header with Icon */}
                    <motion.div 
                      className="flex items-center gap-3 mb-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * categoryIndex }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-sm sm:text-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h4 className="font-bold text-[#1e1a17] text-base sm:text-lg">{category.category}</h4>
                    </motion.div>
                    
                    <ul className="space-y-1 sm:space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="flex items-start gap-2"
                          variants={listItemVariants}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 + categoryIndex * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-[#1e1a17] rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Key Takeaway */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
                className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="text-lg sm:text-xl mt-0.5"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    💡
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1 text-sm sm:text-base">Educational Focus</h4>
                    <p className="text-xs sm:text-sm text-blue-700">
                      Comprehensive 3-year program covering full-stack web development, computer engineering fundamentals, 
                      and practical technical skills through hands-on projects and real-world applications.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Section Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-12 sm:mt-16"
        />
      </div>
    </section>
  );
};

export default AboutEducation;