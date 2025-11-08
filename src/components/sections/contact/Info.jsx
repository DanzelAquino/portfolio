import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactInfo = () => {
  const [copiedField, setCopiedField] = useState(null);

  const contactMethods = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "danzel21.aquino@gmail.com",
      link: "mailto:danzel21.aquino@gmail.com",
      copyText: "danzel21.aquino@gmail.com"
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+63 995 105 0272",
      copyText: "+63 995 105 0272"
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Pasig City, Metro Manila",
      link: "https://www.google.com/maps/place/SMDC+Shine+Residences/@14.5821998,121.0624923,816m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3397c812327379f5:0xaf2833dd7b6ebf0b!8m2!3d14.5821946!4d121.0650672!16s%2Fg%2F11b6gppnh4?entry=ttu&g_ep=EgoyMDI5MTAyNi.4wIKXMDSoASAFQAw%3D%3D",
      copyText: "Shine Residences, Renaissance Center, Meralco Ave, Pasig City, Metro Manila"
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Timezone",
      value: "PST (UTC+8)"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      url: "https://www.linkedin.com/in/danzelaquino",
      color: "hover:bg-[#0077b5]"
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: "https://github.com/DanzelAquino",
      color: "hover:bg-[#333]"
    }
  ];

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#edeeef] via-white to-[#c5cddf] backdrop-blur-sm relative overflow-hidden">
      {/* Clean Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        <motion.div
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 bg-[#1e1a17]/10 rounded-lg"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 45, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-10 sm:w-14 h-10 sm:h-14 bg-[#1e1a17]/10 rounded-full"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -45, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-[#1e1a17]/5 rounded-lg"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-8 sm:mb-16" variants={itemVariants}>
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[#1e1a17]">Let's Stay Connected</h2>
          <p className="text-sm sm:text-xl text-[#545454] max-w-2xl mx-auto px-4">
            Find me on these platforms or save my contact information for future reference.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-16 w-full max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-[#1e1a17]/10 shadow-lg hover:shadow-xl transition-all duration-300 group relative z-20 w-full"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                {/* Mobile Layout - Centered with Tight Spacing */}
                <div className="flex flex-col items-center justify-center text-center h-full sm:hidden min-h-[140px]">
                  <motion.div 
                    className="w-10 h-10 bg-[#1e1a17] rounded-lg flex items-center justify-center text-white group-hover:bg-[#545454] transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    {method.icon}
                  </motion.div>
                  <h3 className="font-semibold text-[#1e1a17] text-base mt-1">
                    {method.title}
                  </h3>
                  <div className="text-sm text-[#545454] leading-tight mt-1 px-1">
                    {method.link ? (
                      <a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : '_self'}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="hover:text-[#1e1a17] transition-colors duration-200"
                      >
                        {method.value}
                      </a>
                    ) : (
                      method.value
                    )}
                  </div>
                </div>

                {/* Desktop Layout - Wider Cards */}
                <div className="hidden sm:block">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-[#1e1a17] rounded-lg flex items-center justify-center text-white group-hover:bg-[#545454] transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      {method.icon}
                    </motion.div>
                    {method.copyText && (
                      <motion.button
                        onClick={() => copyToClipboard(method.copyText, method.title)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-[#1e1a17]/10 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title={`Copy ${method.title}`}
                      >
                        <svg className="w-4 h-4 text-[#545454]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </motion.button>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-[#1e1a17] mb-3 text-lg">
                    {method.title}
                  </h3>
                  
                  {method.link ? (
                    <a
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-[#545454] hover:text-[#1e1a17] transition-colors duration-200 block text-base break-words leading-relaxed"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-[#545454] text-base leading-relaxed">{method.value}</p>
                  )}
                </div>

                {/* Copy Success Message */}
                <AnimatePresence>
                  {copiedField === method.title && (
                    <motion.div
                      className="text-xs text-green-600 font-medium text-center sm:text-left mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <motion.div className="text-center" variants={itemVariants}>
          <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-6 text-[#1e1a17]">Follow My Work</h3>
          <p className="text-sm sm:text-lg text-[#545454] mb-4 sm:mb-8 max-w-2xl mx-auto px-4">
            Stay updated with my latest projects, coding experiments, and professional journey.
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-[#1e1a17]/10 flex items-center justify-center shadow-md ${social.color} transition-colors duration-300 relative z-20 group`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                <div className="text-[#545454] group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;