import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Logo from "../../../assets/images/logo.png";
import ResumeImage from "../../../assets/images/resume.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [hoverStyle, setHoverStyle] = useState({ opacity: 0 });
  const [showResume, setShowResume] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const location = useLocation();
  const navigate = useNavigate();
  const navItemsRef = useRef([]);
  const navContainerRef = useRef(null);
  const containerRef = useRef(null);
  
  const hoverTimeoutRef = useRef(null);
  const indicatorTimeoutRef = useRef(null);
  const isInsideNavRef = useRef(false);
  const lastHoverIndexRef = useRef(null);

  // Disable body scroll when resume is open
  useEffect(() => {
    if (showResume) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showResume]);

  // Prevent layout shift by always showing scrollbar
  useEffect(() => {
    document.documentElement.style.overflowY = 'scroll';
    return () => {
      document.documentElement.style.overflowY = '';
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Simple navigation
  const handleLinkClick = (path, e) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on navigation
    navigate(path);
  };

  // Update indicator position
  const updateIndicatorPosition = () => {
    const activeIndex = navItems.findIndex(item => isActiveLink(item.path));
    
    if (activeIndex !== -1 && navItemsRef.current[activeIndex] && navContainerRef.current) {
      const activeElement = navItemsRef.current[activeIndex];
      
      const left = activeElement.offsetLeft;
      const width = activeElement.offsetWidth;
      
      setIndicatorStyle({
        transform: `translateX(${left}px)`,
        width: `${width}px`,
        opacity: 1,
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  };

  // Update indicator on route change and resize
  useEffect(() => {
    updateIndicatorPosition();
    
    const handleResize = () => {
      updateIndicatorPosition();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (indicatorTimeoutRef.current) {
        clearTimeout(indicatorTimeoutRef.current);
      }
    };
  }, [location.pathname]);

  // Initial setup
  useEffect(() => {
    const timer = setTimeout(() => {
      updateIndicatorPosition();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // FIXED Hover logic with proper entrance/slide/exit animations
  const handleMouseEnter = (index) => {
    if (!isActiveLink(navItems[index].path) && navItemsRef.current[index]) {
      const element = navItemsRef.current[index];
      const left = element.offsetLeft;
      const width = element.offsetWidth;
      
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      const isMovingBetweenLinks = isInsideNavRef.current && lastHoverIndexRef.current !== null;
      
      if (!isInsideNavRef.current) {
        // ENTRANCE: First hover into nav - fade in without slide
        setHoverStyle({
          transform: `translateX(${left}px)`,
          width: `${width}px`,
          opacity: 0,
          borderRadius: '12px',
          backgroundColor: 'rgba(30, 26, 23, 0.15)',
          border: '1px solid rgba(30, 26, 23, 0.2)',
          transformOrigin: 'center center',
          transition: 'opacity 0.25s ease-out, transform 0s ease-out' // No transform transition on entrance
        });

        // Fade in after setting position
        setTimeout(() => {
          setHoverStyle(prev => ({
            ...prev,
            opacity: 1
          }));
        }, 10);
        
        isInsideNavRef.current = true;
      } else if (isMovingBetweenLinks) {
        // SLIDE: Moving between links - smooth sliding transition
        setHoverStyle({
          transform: `translateX(${left}px)`,
          width: `${width}px`,
          opacity: 1,
          borderRadius: '12px',
          backgroundColor: 'rgba(30, 26, 23, 0.15)',
          border: '1px solid rgba(30, 26, 23, 0.2)',
          transformOrigin: 'center center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' // Smooth slide transition
        });
      } else {
        // SAME LINK or quick return - maintain position with fade
        setHoverStyle({
          transform: `translateX(${left}px)`,
          width: `${width}px`,
          opacity: 1,
          borderRadius: '12px',
          backgroundColor: 'rgba(30, 26, 23, 0.15)',
          border: '1px solid rgba(30, 26, 23, 0.2)',
          transformOrigin: 'center center',
          transition: 'opacity 0.15s ease-out, transform 0s ease-out'
        });
      }

      lastHoverIndexRef.current = index;
    }
  };

  const handleMouseLeaveNav = () => {
    // EXIT: Simple fade out without any position change
    setHoverStyle(prev => ({
      ...prev,
      opacity: 0,
      transition: 'opacity 0.2s ease-out, transform 0s ease-out' // No transform on exit
    }));

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setHoverStyle({ 
        opacity: 0
      });
    }, 200);
  };

  // Reset when mouse leaves entire nav area
  const handleNavContainerMouseLeave = () => {
    handleMouseLeaveNav();
    
    // Reset after leaving nav completely
    setTimeout(() => {
      isInsideNavRef.current = false;
      lastHoverIndexRef.current = null;
    }, 50);
  };

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (indicatorTimeoutRef.current) clearTimeout(indicatorTimeoutRef.current);
    };
  }, []);

  // Image zoom and pan handlers (resume viewer)
  const handleWheel = (e) => {
    if (!showResume) return;
    e.preventDefault();
    e.stopPropagation();
    const zoomSpeed = 0.1;
    const newZoom = zoom + (e.deltaY > 0 ? -zoomSpeed : zoomSpeed);
    setZoom(Math.max(0.5, Math.min(3, newZoom)));
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    if (!showResume) return;
    if (e.touches.length === 1) {
      // Single touch for panning
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    } else if (e.touches.length === 2) {
      // Double touch for zooming
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      e.target.setAttribute('data-initial-distance', distance);
      e.target.setAttribute('data-initial-zoom', zoom);
    }
  };

  const handleTouchMove = (e) => {
    if (!showResume) return;
    
    if (e.touches.length === 1 && isDragging) {
      // Panning
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    } else if (e.touches.length === 2) {
      // Pinch to zoom
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const currentDistance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      
      const initialDistance = parseFloat(e.target.getAttribute('data-initial-distance'));
      const initialZoom = parseFloat(e.target.getAttribute('data-initial-zoom'));
      
      if (initialDistance && initialZoom) {
        const zoomFactor = currentDistance / initialDistance;
        const newZoom = Math.max(0.5, Math.min(3, initialZoom * zoomFactor));
        setZoom(newZoom);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    if (e.button === 0 && showResume) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grabbing';
      }
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && showResume) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeaveResume = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const closeResumeViewer = () => {
    setShowResume(false);
    setTimeout(() => {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }, 300);
  };

  const resetView = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = ResumeImage;
    link.download = "Danzel-Aquino-Resume.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleResumeViewer = () => {
    setShowResume(!showResume);
    if (!showResume) {
      setTimeout(() => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
      }, 50);
    }
  };

  // Zoom controls for mobile
  const handleZoomIn = () => {
    setZoom(prev => Math.min(3, prev + 0.2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(0.5, prev - 0.2));
  };

  return (
    <>
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#c5cddf]" 
          : "bg-white/90 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group cursor-pointer flex-shrink-0"
              onClick={(e) => handleLinkClick("/", e)}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-[#edeeef] to-[#c5cddf] p-2 rounded-xl shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:scale-105">
                  <img 
                    src={Logo} 
                    alt="Logo" 
                    className="h-8 w-auto object-contain transition-transform duration-300" 
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#1e1a17] font-bold text-xl tracking-tight hidden sm:block">
                  Danzel Aquino
                </span>
                <span className="text-[#545454] text-sm hidden lg:block transition-opacity duration-300 group-hover:opacity-80">
                  Portfolio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div 
              ref={navContainerRef}
              className="hidden md:flex items-center relative bg-white/80 rounded-2xl px-2 py-1 shadow-sm border border-[#edeeef] flex-shrink-0"
              onMouseLeave={handleNavContainerMouseLeave}
            >
              {/* Hover Background */}
              <div 
                className="absolute h-[140%] top-1/2 transform -translate-y-1/2 rounded-xl bg-gradient-to-r from-[#1e1a17]/15 to-[#545454]/15 backdrop-blur-sm border border-[#1e1a17]/20"
                style={{
                  transform: hoverStyle.transform || 'translateX(0)',
                  width: hoverStyle.width || '0px',
                  opacity: hoverStyle.opacity || 0,
                  borderRadius: hoverStyle.borderRadius || '12px',
                  transformOrigin: hoverStyle.transformOrigin || 'center center',
                  transition: hoverStyle.transition || 'all 0.3s ease',
                  backgroundColor: hoverStyle.backgroundColor || 'transparent',
                  border: hoverStyle.border || 'none'
                }}
              />
              
              {/* Active Indicator */}
              <div 
                className="absolute h-[140%] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#edeeef] to-[#c5cddf] rounded-xl shadow-inner transition-all duration-500 ease-out"
                style={indicatorStyle}
              />
              
              <ul className="flex items-center space-x-1 relative z-10">
                {navItems.map((item, index) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      ref={el => navItemsRef.current[index] = el}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onClick={(e) => handleLinkClick(item.path, e)}
                      className={`relative px-6 py-3 rounded-xl transition-all duration-300 font-medium z-20 cursor-pointer ${
                        isActiveLink(item.path)
                          ? "text-[#1e1a17] font-semibold"
                          : "text-[#545454] hover:text-[#1e1a17]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Resume Viewer & Social */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              {/* Social Links */}
              <div className="flex items-center space-x-3 mr-4">
                <a 
                  href="https://github.com/DanzelAquino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#545454] hover:text-[#1e1a17] transition-all duration-300 p-2 hover:bg-[#edeeef] rounded-lg cursor-pointer"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/danzelaquino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#545454] hover:text-[#1e1a17] transition-all duration-300 p-2 hover:bg-[#edeeef] rounded-lg cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Resume Viewer Button */}
              <button
                onClick={toggleResumeViewer}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#1e1a17] to-[#545454] text-white px-5 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 transform shadow-md group cursor-pointer flex-shrink-0"
              >
                <span>Resume</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>

            {/* Mobile menu button - FIXED POSITIONING */}
            <button 
              className={`md:hidden p-3 rounded-xl transition-all duration-300 cursor-pointer flex-shrink-0 ${
                isScrolled ? "bg-[#edeeef] text-[#1e1a17]" : "bg-[#1e1a17] text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                  {isMenuOpen ? '✕' : '☰'}
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg border border-[#edeeef] p-6 space-y-4">
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        handleLinkClick(item.path, e);
                      }}
                      className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 font-medium cursor-pointer ${
                        isActiveLink(item.path)
                          ? "text-[#1e1a17] bg-gradient-to-r from-[#edeeef] to-[#c5cddf] shadow-inner"
                          : "text-[#545454] hover:text-[#1e1a17] hover:bg-[#1e1a17]/10"
                      }`}
                    >
                      {item.label}
                      {isActiveLink(item.path) && (
                        <div className="w-2 h-2 bg-[#1e1a17] rounded-full"></div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Social Links */}
              <div className="pt-4 pb-2 border-t border-[#edeeef]">
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/DanzelAquino" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#545454] hover:text-[#1e1a17] transition-all duration-300 p-3 hover:bg-[#edeeef] rounded-xl cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/danzelaquino" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#545454] hover:text-[#1e1a17] transition-all duration-300 p-3 hover:bg-[#edeeef] rounded-xl cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Mobile Resume Viewer */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    toggleResumeViewer();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-center bg-gradient-to-r from-[#1e1a17] to-[#545454] text-white px-4 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>View Resume</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Viewer Modal */}
      {showResume && (
        <div 
          ref={containerRef}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm cursor-grab"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeaveResume}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Control Buttons */}
          <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
            {/* Mobile Zoom Controls - Visible on small screens */}
            <div className="md:hidden flex items-center space-x-1 bg-black/50 rounded-xl p-1 backdrop-blur-sm">
              <button 
                onClick={handleZoomOut}
                className="p-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
                title="Zoom Out"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="text-white/80 text-sm px-1">{Math.round(zoom * 100)}%</span>
              <button 
                onClick={handleZoomIn}
                className="p-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
                title="Zoom In"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            <button 
              onClick={resetView}
              className="p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
              title="Reset to full view"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>

            <button
              onClick={handleResumeDownload}
              className="p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
              title="Download Resume"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>

            <button 
              onClick={closeResumeViewer}
              className="p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Instructions - Only show on small screens */}
          <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-black/50 text-white/80 text-xs px-3 py-2 rounded-xl backdrop-blur-sm text-center">
              Pinch to zoom • Drag to pan
            </div>
          </div>

          {/* Zoomable Image */}
          <div className="w-full h-full flex items-center justify-center p-4 touch-none">
            <img 
              src={ResumeImage} 
              alt="Danzel Aquino Resume" 
              className="max-h-full max-w-full object-contain transition-transform duration-150 ease-out select-none touch-none"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;