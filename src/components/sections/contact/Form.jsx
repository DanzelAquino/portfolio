import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const EMAILJS_SERVICE_ID = 'service_qcqsdbo';
  const EMAILJS_TEMPLATE_ID = 'template_u3w7okr';
  const EMAILJS_PUBLIC_KEY = 'hXJoNoL3gf5TfDWT-';

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.2,
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

  const sidebarVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Your Name',
        reply_to: formData.email,
        timestamp: new Date().toLocaleString()
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#edeeef] to-white">
      {/* Enhanced Background that connects with header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Large Floating Circles */}
        <motion.div
          className="absolute top-20 sm:top-40 left-4 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-[#1e1a17]/5 rounded-full" 
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 sm:top-60 right-4 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-[#545454]/15 rounded-full"
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-60 sm:top-80 left-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-[#1e1a17]/10 rounded-full" 
          animate={{
            y: [0, -30, 0],
            x: [0, 12, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Animated Gradient Blobs */}
        <motion.div
          className="absolute top-40 sm:top-60 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-[#1e1a17]/5 to-[#545454]/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 sm:bottom-20 left-1/4 w-40 sm:w-56 h-40 sm:h-56 bg-gradient-to-r from-[#edeeef]/10 to-[#c5cddf]/20 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Bouncing Dots */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 2 === 0 ? 'bg-[#1e1a17]/15' : 'bg-[#545454]/20'
            }`}
            style={{
              left: `${15 + i * 20}%`,
              top: `${50 + i * 10}%`, 
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Pulsing Rings */}
        <motion.div
          className="absolute top-2/3 left-1/2 w-6 h-6 border border-[#1e1a17]/10 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#1e1a17]/10 shadow-2xl relative z-20"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.002 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="flex items-center mb-6 sm:mb-8" variants={itemVariants}>
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1e1a17] rounded-lg flex items-center justify-center mr-3 sm:mr-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1e1a17]">Send a Message</h2>
                <p className="text-[#545454] text-sm sm:text-base">I'll get back to you within 24 hours</p>
              </div>
            </motion.div>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-800 text-sm sm:text-base">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-800 text-sm sm:text-base">Failed to send message. Please try again or email me directly.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#545454] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1a17] focus:border-transparent transition-all duration-200 text-[#1e1a17] placeholder-[#545454]/50 ${
                      errors.name ? 'border-red-300' : 'border-[#1e1a17]/20'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#545454] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1a17] focus:border-transparent transition-all duration-200 text-[#1e1a17] placeholder-[#545454]/50 ${
                      errors.email ? 'border-red-300' : 'border-[#1e1a17]/20'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#545454] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1a17] focus:border-transparent transition-all duration-200 text-[#1e1a17] placeholder-[#545454]/50 ${
                    errors.subject ? 'border-red-300' : 'border-[#1e1a17]/20'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-semibold text-[#545454] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1a17] focus:border-transparent transition-all duration-200 text-[#1e1a17] placeholder-[#545454]/50 resize-none ${
                    errors.message ? 'border-red-300' : 'border-[#1e1a17]/20'
                  }`}
                  placeholder="Tell me what you'd like to discuss..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                <div className="flex justify-between items-center mt-2">
                  <span className={`text-xs ${formData.message.length < 10 ? 'text-red-500' : 'text-[#545454]'}`}>
                    {formData.message.length}/10 min characters
                  </span>
                  <span className="text-xs text-[#545454]">Required fields *</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1e1a17] hover:bg-[#545454] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1e1a17] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <motion.div 
                        className="rounded-full h-6 w-6 border-b-2 border-white mr-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="text-sm sm:text-base">Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span className="text-sm sm:text-base">Send Message</span>
                      <motion.svg 
                        className="w-5 h-5 ml-2"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </div>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div 
            className="space-y-4 sm:space-y-6 relative z-20"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#1e1a17]/10 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-3 sm:mb-4 text-[#1e1a17] flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#545454]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick Response
              </h3>
              <p className="text-[#545454] text-sm">
                I typically respond within <span className="font-semibold text-[#1e1a17]">2-4 hours</span> during business days. 
                I'm always happy to connect and discuss new opportunities.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#1e1a17]/10 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-3 sm:mb-4 text-[#1e1a17] flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#545454]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                What I'm Interested In
              </h3>
              <ul className="text-[#545454] text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1e1a17] mr-2">•</span>
                  Technical discussions and knowledge sharing
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e1a17] mr-2">•</span>
                  Open source contributions
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e1a17] mr-2">•</span>
                  Career opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e1a17] mr-2">•</span>
                  Networking with fellow developers
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#1e1a17] to-[#545454] rounded-2xl p-4 sm:p-6 text-white shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-2">Quick Question?</h3>
              <p className="text-white/80 text-sm mb-4">For brief inquiries or quick chats</p>
              <motion.a 
                href="mailto:danzel21.aquino@gmail.com" 
                className="inline-flex items-center justify-center w-full bg-white text-[#1e1a17] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Directly
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;