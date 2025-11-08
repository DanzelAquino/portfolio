import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const infoCardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="bg-white py-16 md:py-20 px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div variants={badgeVariants} className="inline-block mb-6 md:mb-8">
          <span className="text-xs sm:text-sm font-semibold text-[#1e1a17] bg-[#edeeef] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide border border-[#1e1a17]/10">
            About Me
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1a17] mb-6 md:mb-8 leading-tight">
          From Gaming Passion to<br className="hidden sm:block" />Full-Stack Development
        </motion.h2>

        {/* Content Paragraphs */}
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[#545454] leading-relaxed sm:leading-relaxed">
          <motion.p variants={itemVariants}>
            I'm a Computer Engineering graduate from Polytechnic University of the Philippines 
            who discovered programming through video games and evolved into a full-stack developer 
            passionate about creating practical solutions.
          </motion.p>
          <motion.p variants={itemVariants}>
            I love building applications from front to back-end, watching ideas transform into 
            functional systems that solve real problems and make people's lives easier.
          </motion.p>
          <motion.p variants={itemVariants}>
            Currently exploring modern frameworks like React and Vue.js while building projects 
            with cloud services like Firebase and Cloudinary.
          </motion.p>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          variants={statsVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#c5cddf]"
        >
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e1a17]">2+</div>
            <div className="text-xs sm:text-sm text-[#545454]">Years Learning</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e1a17]">10+</div>
            <div className="text-xs sm:text-sm text-[#545454]">Projects Built</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e1a17]">4+</div>
            <div className="text-xs sm:text-sm text-[#545454]">Frameworks</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1e1a17] leading-tight">Full-Stack</div>
            <div className="text-xs sm:text-sm text-[#545454]">Development</div>
          </motion.div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div 
          variants={infoCardVariants}
          className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-[#edeeef] to-[#c5cddf] rounded-xl sm:rounded-2xl border border-[#1e1a17]/10"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#1e1a17] mb-3 sm:mb-4">What Drives Me</h3>
          <p className="text-[#545454] leading-relaxed text-sm sm:text-base">
            The satisfaction of turning complex challenges into elegant solutions keeps me motivated. 
            Whether it's a personal project or professional work, I'm driven by the opportunity to 
            create something meaningful that delivers real value to users.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;