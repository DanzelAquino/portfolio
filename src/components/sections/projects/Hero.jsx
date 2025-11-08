import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ProjectsHero = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Multiple waves with different properties
    const waves = [
      {
        amplitude: dimensions.width < 768 ? 30 : 60,
        frequency: 0.003,
        speed: 0.015,
        phase: 0,
        color: 'rgba(30, 26, 23, 0.25)',
        lineWidth: dimensions.width < 768 ? 2 : 3,
        points: []
      },
      {
        amplitude: dimensions.width < 768 ? 25 : 45,
        frequency: 0.006,
        speed: 0.025,
        phase: Math.PI / 3,
        color: 'rgba(30, 26, 23, 0.2)',
        lineWidth: dimensions.width < 768 ? 1.5 : 2.5,
        points: []
      },
      {
        amplitude: dimensions.width < 768 ? 20 : 35,
        frequency: 0.009,
        speed: 0.035,
        phase: Math.PI / 1.5,
        color: 'rgba(84, 84, 84, 0.18)',
        lineWidth: dimensions.width < 768 ? 1 : 2,
        points: []
      },
      {
        amplitude: dimensions.width < 768 ? 25 : 50,
        frequency: 0.004,
        speed: 0.02,
        phase: Math.PI / 4,
        color: 'rgba(30, 26, 23, 0.15)',
        lineWidth: dimensions.width < 768 ? 1.2 : 2.2,
        points: []
      }
    ];

    // Individual binary elements scattered randomly across the entire screen
    const binaryElements = [];
    const elementCount = dimensions.width < 768 ? 40 : 80;
    
    for (let i = 0; i < elementCount; i++) {
      const direction = Math.random() > 0.5 ? 1 : -1;
      
      // Start elements randomly across the entire screen width
      const startX = Math.random() * dimensions.width;
      
      binaryElements.push({
        x: startX,
        y: Math.random() * dimensions.height * 0.7 + dimensions.height * 0.15,
        speed: (0.5 + Math.random() * 1) * direction,
        value: Math.random() > 0.5 ? 1 : 0,
        size: dimensions.width < 768 ? 8 + Math.random() * 8 : 12 + Math.random() * 12,
        opacity: 0.4 + Math.random() * 0.4,
        shiftTimer: 800 + Math.random() * 1200,
        lastShift: Date.now() - Math.random() * 2000,
        direction: direction,
        waveOffset: Math.random() * Math.PI * 2,
        horizontalDrift: (Math.random() - 0.5) * 0.3
      });
    }

    let animationFrameId;

    const animate = () => {
      // Clear canvas with subtle fade
      ctx.fillStyle = 'rgba(237, 238, 239, 0.02)';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Draw static gradient background
      const gradient = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height);
      gradient.addColorStop(0, '#edeeef');
      gradient.addColorStop(1, '#c5cddf');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw analog waves
      waves.forEach(wave => {
        wave.phase += wave.speed;
        
        ctx.beginPath();
        ctx.moveTo(0, dimensions.height / 2);
        
        const points = [];
        for (let x = 0; x <= dimensions.width; x += 4) {
          const y = dimensions.height / 2 + 
            Math.sin(x * wave.frequency + wave.phase) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.5 + wave.phase * 1.7) * wave.amplitude * 0.4;
          
          points.push({ x, y });
          ctx.lineTo(x, y);
        }
        
        wave.points = points;
        
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.stroke();

        // Draw wave peaks as dots
        ctx.fillStyle = wave.color.replace('0.25', '0.4').replace('0.2', '0.35').replace('0.18', '0.3').replace('0.15', '0.25');
        for (let i = 0; i < wave.points.length; i += 8) {
          const point = wave.points[i];
          const waveValue = Math.sin(point.x * wave.frequency + wave.phase);
          if (waveValue > 0.8 || waveValue < -0.8) {
            const dotSize = dimensions.width < 768 ? 2 + Math.abs(waveValue) * 1 : 3 + Math.abs(waveValue) * 2;
            ctx.beginPath();
            ctx.arc(point.x, point.y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Update and draw scattered binary elements
      const now = Date.now();
      binaryElements.forEach(element => {
        // Add subtle vertical wave movement
        element.waveOffset += 0.02;
        const verticalMovement = Math.sin(element.waveOffset) * 2;
        
        // Move element with horizontal drift
        element.x += element.speed + element.horizontalDrift;
        element.y += verticalMovement;

        // Shift value randomly
        if (now - element.lastShift > element.shiftTimer) {
          element.value = element.value === 1 ? 0 : 1;
          element.lastShift = now;
          element.shiftTimer = 600 + Math.random() * 1400;
        }

        // Check if element is visible
        const isVisible = element.x >= -100 && element.x <= dimensions.width + 100;
        
        if (isVisible) {
          ctx.font = `bold ${element.size}px monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          if (element.value === 1) {
            // Draw 1s with subtle background
            ctx.fillStyle = `rgba(30, 26, 23, ${element.opacity * 0.1})`;
            ctx.fillRect(
              element.x - element.size/2 - 2, 
              element.y - element.size/2 - 2, 
              element.size + 4, 
              element.size + 4
            );
            
            // Main 1
            ctx.fillStyle = `rgba(30, 26, 23, ${element.opacity})`;
            ctx.fillText('1', element.x, element.y);
          } else {
            // Draw 0s more subtly
            ctx.fillStyle = `rgba(84, 84, 84, ${element.opacity * 0.6})`;
            ctx.fillText('0', element.x, element.y);
          }
        }

        // Reset position when off screen - wrap to the other side
        if (element.direction === 1 && element.x > dimensions.width + 150) {
          element.x = -50;
          element.y = Math.random() * dimensions.height * 0.7 + dimensions.height * 0.15;
          element.value = Math.random() > 0.5 ? 1 : 0;
        } else if (element.direction === -1 && element.x < -150) {
          element.x = dimensions.width + 50;
          element.y = Math.random() * dimensions.height * 0.7 + dimensions.height * 0.15;
          element.value = Math.random() > 0.5 ? 1 : 0;
        }
      });

      // Occasionally create connections between nearby 1s
      ctx.strokeStyle = 'rgba(30, 26, 23, 0.08)';
      ctx.lineWidth = 0.8;
      ctx.setLineDash([2, 4]);
      
      for (let i = 0; i < binaryElements.length; i++) {
        for (let j = i + 1; j < binaryElements.length; j++) {
          const elem1 = binaryElements[i];
          const elem2 = binaryElements[j];
          
          if (elem1.value === 1 && elem2.value === 1) {
            const dx = elem1.x - elem2.x;
            const dy = elem1.y - elem2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only connect if relatively close and both visible
            if (distance < 120 && 
                elem1.x >= -50 && elem1.x <= dimensions.width + 50 &&
                elem2.x >= -50 && elem2.x <= dimensions.width + 50) {
              ctx.beginPath();
              ctx.moveTo(elem1.x, elem1.y);
              ctx.lineTo(elem2.x, elem2.y);
              ctx.stroke();
            }
          }
        }
      }
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <div className="min-h-screen flex items-center justify-center text-[#1e1a17] px-4 sm:px-6 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#edeeef]/85 to-[#c5cddf]/85" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-[#545454] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Showcasing my journey through code, design, and innovation
        </motion.p>
      </div>

      {/* Scroll indicator positioned higher - raised from bottom-4 to bottom-12 */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-[#545454]/70 text-xs sm:text-sm font-light tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll to explore</span>
          <motion.svg
            className="w-3 h-3 text-[#545454]/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsHero;