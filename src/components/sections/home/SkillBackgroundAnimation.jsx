// components/SkillsBackgroundAnimation.jsx
import { useEffect, useRef } from "react";

const SkillsBackgroundAnimation = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const binaryTextsRef = useRef([]);

  // Binary texts moving in straight lines
  const createBinaryText = (id, totalTexts) => {
    const depth = 0.4 + Math.random() * 0.6;
    
    const binaryLength = Math.random() > 0.6 ? 
      (4 + Math.floor(Math.random() * 3)) : 
      (7 + Math.floor(Math.random() * 4));
    
    const binaryString = Array.from({ length: binaryLength }, () => 
      Math.random() > 0.5 ? '1' : '0'
    ).join('');
    
    const behaviorType = Math.floor(Math.random() * 4); // 0-3 for more variety
    
    let startX, startY, velocityX, velocityY;
    
    const baseSpeed = 0.06 + Math.random() * 0.14; // Wider speed range
    const speed = baseSpeed * (2 - depth);
    
    // MORE SCATTERED STARTING POSITIONS
    switch (behaviorType) {
      case 0: // Left to right - more vertical spread
        startX = -15 - Math.random() * 10; // Start further left with variation
        startY = 5 + Math.random() * 90; // Wider vertical spread
        velocityX = speed;
        velocityY = (Math.random() - 0.5) * 0.02; // Slight vertical drift
        break;
      case 1: // Right to left - more vertical spread
        startX = 115 + Math.random() * 10; // Start further right with variation
        startY = 5 + Math.random() * 90; // Wider vertical spread
        velocityX = -speed;
        velocityY = (Math.random() - 0.5) * 0.02; // Slight vertical drift
        break;
      case 2: // Top to bottom - more horizontal spread
        startX = 5 + Math.random() * 90; // Wider horizontal spread
        startY = -15 - Math.random() * 10; // Start further up
        velocityX = (Math.random() - 0.5) * 0.02; // Slight horizontal drift
        velocityY = speed;
        break;
      case 3: // Bottom to top - more horizontal spread
        startX = 5 + Math.random() * 90; // Wider horizontal spread
        startY = 115 + Math.random() * 10; // Start further down
        velocityX = (Math.random() - 0.5) * 0.02; // Slight horizontal drift
        velocityY = -speed;
        break;
    }
    
    const size = 12 + Math.random() * 20; // More size variation
    const opacity = 0.3 + Math.random() * 0.5; // More opacity variation
    
    return {
      id,
      text: binaryString,
      x: startX,
      y: startY,
      velocityX,
      velocityY,
      behaviorType,
      opacity,
      size,
      depth,
      lastSwitch: 0,
      // VERY FAST BIT FLIPPING
      switchSpeed: 20 + Math.random() * 30,
      flipIntensity: 2 + Math.floor(Math.random() * 4),
      // MORE STAGGERED ENTRY: Wider delay range
      entryDelay: Math.random() * 8000, // 0-8 seconds delay (much wider range)
      isActive: false,
      startTime: null,
      // Add some randomness to movement patterns
      movementVariation: Math.random() * 0.03,
      variationCounter: 0,
    };
  };

  // Move binary text with slight variations
  const moveBinaryText = (binary, deltaTime) => {
    if (!binary.isActive) return;
    
    // Add slight movement variations for more organic feel
    binary.variationCounter += deltaTime;
    if (binary.variationCounter > 60) { // Change variation every ~1 second
      binary.velocityX += (Math.random() - 0.5) * binary.movementVariation;
      binary.velocityY += (Math.random() - 0.5) * binary.movementVariation;
      // Clamp velocities to prevent too much drift
      binary.velocityX = Math.max(-0.25, Math.min(0.25, binary.velocityX));
      binary.velocityY = Math.max(-0.25, Math.min(0.25, binary.velocityY));
      binary.variationCounter = 0;
    }
    
    binary.x += binary.velocityX * deltaTime;
    binary.y += binary.velocityY * deltaTime;
    
    // Reset when out of bounds with more scattered re-entry
    const isOutOfBounds = 
      binary.x < -25 || binary.x > 125 || 
      binary.y < -25 || binary.y > 125;
    
    if (isOutOfBounds) {
      // Randomly choose new behavior type and starting position
      const newBehaviorType = Math.floor(Math.random() * 4);
      
      switch (newBehaviorType) {
        case 0: // Left to right
          binary.x = -20 - Math.random() * 15;
          binary.y = Math.random() * 100;
          binary.velocityX = Math.abs(binary.velocityX) || (0.08 + Math.random() * 0.12);
          binary.velocityY = (Math.random() - 0.5) * 0.02;
          break;
        case 1: // Right to left
          binary.x = 120 + Math.random() * 15;
          binary.y = Math.random() * 100;
          binary.velocityX = -Math.abs(binary.velocityX) || -(0.08 + Math.random() * 0.12);
          binary.velocityY = (Math.random() - 0.5) * 0.02;
          break;
        case 2: // Top to bottom
          binary.x = Math.random() * 100;
          binary.y = -20 - Math.random() * 15;
          binary.velocityX = (Math.random() - 0.5) * 0.02;
          binary.velocityY = Math.abs(binary.velocityY) || (0.08 + Math.random() * 0.12);
          break;
        case 3: // Bottom to top
          binary.x = Math.random() * 100;
          binary.y = 120 + Math.random() * 15;
          binary.velocityX = (Math.random() - 0.5) * 0.02;
          binary.velocityY = -Math.abs(binary.velocityY) || -(0.08 + Math.random() * 0.12);
          break;
      }
      binary.behaviorType = newBehaviorType;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Increased quantity for more density
    const totalTexts = 50;
    
    binaryTextsRef.current = Array.from({ length: totalTexts }, (_, i) => createBinaryText(i, totalTexts));

    let lastTime = performance.now();
    let startTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 16;
      lastTime = currentTime;

      const container = containerRef.current;
      if (!container) return;

      container.innerHTML = '';

      const binaryContainer = document.createElement('div');
      binaryContainer.className = 'absolute inset-0 pointer-events-none';
      container.appendChild(binaryContainer);

      // Update and draw binary texts
      const now = performance.now();
      const elapsedTotal = now - startTime;
      
      binaryTextsRef.current.forEach((binary) => {
        // ACTIVATE BINARIES GRADUALLY OVER TIME
        if (!binary.isActive) {
          // Some binaries start immediately, others gradually over 10 seconds
          const activationThreshold = binary.entryDelay;
          if (elapsedTotal > activationThreshold) {
            binary.isActive = true;
            binary.startTime = now;
          }
        }

        if (binary.isActive) {
          moveBinaryText(binary, deltaTime);

          // VERY FAST BIT FLIPPING
          if (now - binary.lastSwitch > binary.switchSpeed) {
            const chars = binary.text.split('');
            
            // 80% chance to flip bits each cycle
            if (Math.random() < 0.8) {
              const bitsToFlip = binary.flipIntensity;
              for (let i = 0; i < bitsToFlip; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                chars[randomIndex] = chars[randomIndex] === '0' ? '1' : '0';
              }
              binary.text = chars.join('');
            }
            
            binary.lastSwitch = now;
          }

          const textEl = document.createElement('div');
          textEl.className = 'absolute font-mono pointer-events-none select-none';
          textEl.style.cssText = `
            color: rgba(30, 26, 23, ${binary.opacity});
            font-size: ${binary.size}px;
            left: ${binary.x}%;
            top: ${binary.y}%;
            white-space: nowrap;
            z-index: ${Math.floor(binary.depth * 10)};
            font-weight: 600;
            opacity: ${binary.opacity};
            letter-spacing: 1px;
            transform: translate(-50%, -50%);
            text-shadow: 0 0 2px rgba(30, 26, 23, ${binary.opacity * 0.3});
          `;
          textEl.textContent = binary.text;
          binaryContainer.appendChild(textEl);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // START THE ANIMATION
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden w-full h-full"
      style={{
        minHeight: '100vh',
        zIndex: 0,
        background: 'transparent'
      }}
    />
  );
};

export default SkillsBackgroundAnimation;