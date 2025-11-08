import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import knowlesLogo from "../../../assets/images/about/knowles.png";
import uipLogo from "../../../assets/images/about/uip.png";
import aurealLogo from "../../../assets/images/about/aureal.png";
import umonicsLogo from "../../../assets/images/about/umonics.png";
import { VSCodeEditorAnimation } from "./ExperienceBackground";

const AboutExperience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const experiences = [
    {
      company: "Knowles Training Institute",
      subCompany: "The Umonics Method",
      position: "WordPress Developer Intern",
      period: "Mar. 2025 - May 2025",
      description:
        "Developed and maintained WordPress websites for a leading training institute and its subsidiary The Umonics Method, focusing on creating responsive and user-friendly interfaces while ensuring site security and performance.",
      companyBackground:
        "Knowles Training Institute is a premier corporate training provider in Singapore and across Asia, offering comprehensive training solutions to organizations. The Umonics Method is their specialized memory training program for preschoolers, teaching advanced memory techniques to enhance cognitive development.",
      achievements: [
        "Built complete frontend pages including homepage, booking system with plugins, and contact forms",
        "Implemented booking functionality and managed WordPress plugins for enhanced features",
        "Performed security maintenance using Wordfence and managed suspicious IP blocking",
        "Conducted regular updates and monitoring to ensure website stability and security",
      ],
      logo: knowlesLogo,
      subLogo: umonicsLogo,
      color: "from-blue-500 to-blue-600",
      technologies: ["WordPress", "Elementor", "Wordfence", "Booking Plugins", "Form Plugins"],
    },
    {
      company: "UIP Incorporated",
      subCompany: "Aureal Industry Corp.",
      position: "UI/UX & Web Development Intern",
      period: "Aug. 2024 - Sept. 2024",
      description:
        "Contributed to the development of Attendance Tracker V2 at Aureal Industry Corp., working under UIP Incorporated on both design and implementation phases to create an efficient and user-friendly application.",
      companyBackground:
        "UIP Incorporated (Unified Internship Program) is a nonprofit organization that connects students with industry partners for professional development. Aureal Industry Corp. is one of their partner companies specializing in software solutions.",
      achievements: [
        "Designed responsive UI components using Figma for attendance tracking system",
        "Developed web pages based on Figma designs using Laravel framework",
        "Collaborated with design and development teams to ensure pixel-perfect implementation",
        "Participated in the complete development lifecycle from design to deployment",
      ],
      logo: uipLogo,
      subLogo: aurealLogo,
      color: "from-green-500 to-green-600",
      technologies: ["Figma", "Laravel", "PHP", "JavaScript", "HTML/CSS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const timelineItemRightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white relative overflow-hidden min-h-screen lg:min-h-[300vh]"
      ref={containerRef}
    >
      {/* VSCode Editor Animation - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <VSCodeEditorAnimation />
      </div>

      {/* Simple background for mobile */}
      <div className="lg:hidden absolute inset-0 bg-gray-50/80 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#545454] mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work Experience
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My professional journey and hands-on experience in web development
          </motion.p>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-[#1e1a17] mx-auto mt-3 sm:mt-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Mobile Timeline Layout - Clean without background animation */}
        <div className="lg:hidden">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={timelineItemVariants}
                className="w-full"
              >
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 relative z-20"
                >
                  <CompanyContent
                    experience={experience}
                    isInView={isInView}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Timeline with Central Line and VSCode Animation */}
        <motion.div
          className="hidden lg:block relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Animated Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1e1a17] via-gray-400 to-gray-300 z-10"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />

          {/* Experience Container */}
          <div className="relative">
            {/* First Experience - Left Side */}
            <motion.div
              variants={timelineItemVariants}
              className="flex justify-start mb-20 relative"
            >
              {/* Timeline dot */}
              <motion.div
                variants={dotVariants}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1e1a17] rounded-full border-4 border-white z-20 shadow-lg top-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.3, backgroundColor: "#545454" }}
                transition={{ duration: 0.2 }}
              />

              {/* Content Card */}
              <div className="w-full md:w-[45%] pr-8 md:pr-0">
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-200 relative z-20"
                >
                  <CompanyContent
                    experience={experiences[0]}
                    isInView={isInView}
                  />
                </motion.div>
              </div>

              {/* Space for VSCode Window on the right */}
              <div className="hidden lg:block absolute left-1/2 ml-20 w-[480px] h-72 top-1/2 transform -translate-y-1/2">
                {/* Knowles VSCode window will be positioned here by the background component */}
              </div>
            </motion.div>

            {/* Second Experience - Right Side */}
            <motion.div
              variants={timelineItemRightVariants}
              className="flex justify-end relative"
            >
              {/* Timeline dot */}
              <motion.div
                variants={dotVariants}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1e1a17] rounded-full border-4 border-white z-20 shadow-lg top-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.3, backgroundColor: "#545454" }}
                transition={{ duration: 0.2 }}
              />

              {/* Space for VSCode Window on the left */}
              <div className="hidden lg:block absolute right-1/2 mr-20 w-[480px] h-72 top-1/2 transform -translate-y-1/2">
                {/* UIP VSCode window will be positioned here by the background component */}
              </div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] pl-8 md:pl-0">
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-200 relative z-20"
                >
                  <CompanyContent
                    experience={experiences[1]}
                    isInView={isInView}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Professional Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.95 }
          }
          transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
          className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-2xl relative z-20"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1e1a17] to-[#545454] rounded-xl flex items-center justify-center text-white text-lg sm:text-xl shadow-lg"
              animate={
                isInView
                  ? {
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </motion.div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#545454]">
                Professional Growth Journey
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                From design to full-stack development
              </p>
            </div>
          </div>
          <motion.p
            className="text-gray-700 leading-relaxed text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Starting with UI/UX design and Laravel development at UIP
            Incorporated (Aureal Industry Corp.), then progressing to full
            WordPress development and security management at Knowles Training
            Institute (The Umonics Method), I've built a diverse skill set that
            spans both design implementation and backend functionality. This
            progression demonstrates my ability to adapt and grow across
            different tech stacks and project requirements.
          </motion.p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className="text-center mt-8 sm:mt-12 relative z-20"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-[#1e1a17] text-white rounded-full font-semibold hover:bg-[#545454] transition-all duration-300 text-xs sm:text-sm shadow-lg hover:shadow-xl block"
              >
                Back to Home
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-[#1e1a17] text-[#1e1a17] rounded-full font-semibold hover:bg-[#1e1a17] hover:text-white transition-all duration-300 text-xs sm:text-sm shadow-lg hover:shadow-xl block"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CompanyContent component (unchanged from previous version)
const CompanyContent = ({ experience, isInView }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.1 }}
    >
      {/* Company Header */}
      <motion.div
        className="flex items-start gap-3 sm:gap-4 mb-3"
        variants={itemVariants}
      >
        {/* Dual Logos Container */}
        {experience.subLogo ? (
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Main Company Logo */}
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </motion.div>

            {/* Vertical Divider */}
            <div className="h-8 sm:h-10 w-px bg-gradient-to-b from-gray-300 to-transparent"></div>

            {/* Sub-company Logo */}
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={experience.subLogo}
                alt={`${experience.subCompany} logo`}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </motion.div>
        )}

        <div className="flex-1 min-w-0">
          <div className="space-y-1">
            <motion.h3
              className="text-lg sm:text-xl font-bold text-[#545454] leading-tight"
              variants={itemVariants}
            >
              {experience.company}
            </motion.h3>
            {experience.subCompany && (
              <motion.p
                className="text-xs sm:text-sm font-medium text-gray-600 leading-tight"
                variants={itemVariants}
              >
                {experience.subCompany}
              </motion.p>
            )}
          </div>
          <motion.p
            className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm"
            variants={itemVariants}
          >
            {experience.position}
          </motion.p>
        </div>
      </motion.div>

      {/* Duration */}
      <motion.div className="mb-3 sm:mb-4" variants={itemVariants}>
        <span className="text-xs sm:text-sm text-gray-500 font-medium">
          {experience.period}
        </span>
      </motion.div>

      {experience.companyBackground && (
        <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
          <div className="relative pl-4 sm:pl-5">
            <div className="absolute left-0 top-0 text-xl sm:text-2xl text-[#1e1a17] opacity-20 font-serif leading-none">
              "
            </div>
            <div className="pl-3 sm:pl-4 border-l-2 border-[#1e1a17]">
              <div className="flex items-start gap-2 mb-1">
                <motion.div
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e1a17] rounded-full mt-1 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                />
                <span className="text-xs font-semibold text-[#1e1a17] uppercase tracking-wide">
                  Company Profile
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic pl-1">
                {experience.companyBackground}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <motion.p
        className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed"
        variants={itemVariants}
      >
        {experience.description}
      </motion.p>

      <motion.div className="mb-3 sm:mb-4" variants={itemVariants}>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-2 sm:px-3 py-1 bg-white text-[#545454] rounded-full text-xs font-medium border border-gray-300 shadow-sm cursor-default"
              variants={techItemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ 
                duration: 0.3, 
                delay: techIndex * 0.1,
                ease: "easeOut" 
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <ul className="space-y-1 sm:space-y-2">
          {experience.achievements.map((achievement, achievementIndex) => (
            <motion.li
              key={achievementIndex}
              className="flex items-start gap-2"
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-[#1e1a17] rounded-full mt-1 sm:mt-1.5 flex-shrink-0"
                whileHover={{ scale: 1.5 }}
              />
              <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {achievement}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutExperience;