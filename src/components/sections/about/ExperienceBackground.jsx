import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const VSCodeEditorAnimation = () => {
  const [activeEditors, setActiveEditors] = useState({
    knowles: true,
    uip: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveEditors({ knowles: true, uip: true });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const experienceCode = {
    knowles: {
      stage1: [
        "class WordPressDeveloper:",
        "    def __init__(self):",
        "        self.period = 'Mar. 2025 - May 2025'",
        "        self.technologies = [",
        "            'WordPress', 'PHP', 'CSS',",
        "            'Wordfence', 'Booking Plugins'",
        "        ]",
        "",
        "    def develop(self):",
        "        achievements = [",
        "            'Built complete frontend pages',",
        "            'Implemented booking functionality',",
        "            'Security maintenance with Wordfence',",
        "            'Plugin management & updates'",
        "        ]",
        "        return achievements",
      ],
      stage2: [
        "    def develop(self):",
        "        achievements = [",
        "            'Built complete frontend pages',",
        "            'Implemented booking functionality',",
        "            'Security maintenance with Wordfence',",
        "            'Plugin management & updates'",
        "        ]",
        "        return achievements",
        "",
        "    def maintain_security(self):",
        "        # Regular updates & monitoring",
        "        self.block_suspicious_ips()",
        "        self.update_plugins()",
        "        self.ensure_stability()",
      ],
    },
    uip: {
      stage1: [
        "class UIDeveloper:",
        "    def __init__(self):",
        "        self.period = 'Aug. 2024 - Sept. 2024'",
        "        self.technologies = [",
        "            'Figma', 'Laravel', 'PHP',",
        "            'JavaScript', 'HTML/CSS'",
        "        ]",
        "",
        "    def design_components(self):",
        "        designs = [",
        "            'Responsive UI components',",
        "            'Attendance Tracker V2',",
        "            'Figma design system'",
        "        ]",
        "        return designs",
      ],
      stage2: [
        "    def design_components(self):",
        "        designs = [",
        "            'Responsive UI components',",
        "            'Attendance Tracker V2',",
        "            'Figma design system'",
        "        ]",
        "        return designs",
        "",
        "    def develop_features(self):",
        "        # Full development lifecycle",
        "        self.implement_designs()",
        "        self.collaborate_with_teams()",
        "        self.ensure_pixel_perfect()",
      ],
    },
  };

  return (
    <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-150 opacity-90"></div>

      {/* Solid White Overlay with Low Opacity */}
      <div className="absolute inset-0 bg-white/20 z-1"></div>

      {/* Just Floating Dots */}
      <FloatingDots />

      {/* Knowles Editor */}
      <motion.div
        className="absolute w-[480px] h-72 bg-white/95 backdrop-blur-md rounded-xl border-2 border-gray-300/60 overflow-hidden shadow-2xl z-30"
        style={{
          top: "21.5%",
          left: "calc(50% + 100px)",
          transform: "translateY(-50%)",
        }}
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
      >
        <PythonVSCodeWindow
          title="wordpress_developer.py"
          codeStages={experienceCode.knowles}
          isActive={activeEditors.knowles}
          startDelay={0.5}
        />
      </motion.div>

      {/* UIP Editor */}
      <motion.div
        className="absolute w-[480px] h-72 bg-white/95 backdrop-blur-md rounded-xl border-2 border-gray-300/60 overflow-hidden shadow-2xl z-30"
        style={{
          top: "55.5%",
          right: "calc(50% + 100px)",
          transform: "translateY(-50%)",
        }}
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 50 }}
      >
        <PythonVSCodeWindow
          title="ui_developer.py"
          codeStages={experienceCode.uip}
          isActive={activeEditors.uip}
          startDelay={1.0}
        />
      </motion.div>
    </div>
  );
};

// Floating Dots Component with different sizes
const FloatingDots = () => {
  const dots = Array.from({ length: 35 }, (_, i) => i);
  
  // Define empty space areas (avoiding content areas)
  const emptySpaces = [
    // Top corners
    { x: [0, 20], y: [0, 25] },     // Top left
    { x: [80, 100], y: [0, 25] },   // Top right
    
    // Side spaces
    { x: [0, 15], y: [25, 75] },    // Left side
    { x: [85, 100], y: [25, 75] },  // Right side
    
    // Gap between experiences
    { x: [20, 80], y: [40, 60] },   // Between cards
    
    // Bottom corners
    { x: [0, 20], y: [75, 100] },   // Bottom left
    { x: [80, 100], y: [75, 100] }, // Bottom right
  ];

  // Different dot sizes
  const dotSizes = [
    "w-1 h-1",    // Tiny
    "w-1.5 h-1.5", // Small
    "w-2 h-2",    // Medium
    "w-2.5 h-2.5", // Large
    "w-3 h-3",    // Extra large
  ];

  const dotOpacities = [
    "opacity-20",
    "opacity-30", 
    "opacity-40",
    "opacity-50",
  ];

  const getRandomPositionInEmptySpace = () => {
    const space = emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
    const x = space.x[0] + Math.random() * (space.x[1] - space.x[0]);
    const y = space.y[0] + Math.random() * (space.y[1] - space.y[0]);
    return { x, y };
  };

  return (
    <div className="absolute inset-0 z-0">
      {dots.map((i) => {
        const position = getRandomPositionInEmptySpace();
        const size = dotSizes[Math.floor(Math.random() * dotSizes.length)];
        const opacity = dotOpacities[Math.floor(Math.random() * dotOpacities.length)];
        
        return (
          <motion.div
            key={i}
            className={`absolute ${size} ${opacity} bg-gray-500 rounded-full`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 12 - 6, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

// PythonVSCodeWindow component with all gray text
const PythonVSCodeWindow = ({ title, codeStages, isActive, startDelay }) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedCode, setDisplayedCode] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTypingIndentation, setIsTypingIndentation] = useState(false);

  const currentCodeRef = useRef([]);
  const currentLineTextRef = useRef("");

  const getIndentationLevel = (line) => {
    if (!line) return 0;
    const leadingSpaces = line.match(/^ */)?.[0].length || 0;
    return Math.floor(leadingSpaces / 4);
  };

  const getNonIndentationPart = (line) => {
    if (!line) return "";
    const leadingSpaces = line.match(/^ */)?.[0].length || 0;
    return line.substring(leadingSpaces);
  };

  const getIndentationString = (line) => {
    if (!line) return "";
    const leadingSpaces = line.match(/^ */)?.[0].length || 0;
    return " ".repeat(leadingSpaces);
  };

  useEffect(() => {
    currentCodeRef.current =
      currentStage === 0 ? codeStages.stage1 : codeStages.stage2;
  }, [currentStage, codeStages]);

  useEffect(() => {
    if (!isActive) return;

    const typingSpeed = isDeleting ? 30 : 40;
    const indentationSpeed = 50;
    const pauseBetweenActions = 2000;
    const pauseBetweenStages = 1000;

    const timer = setTimeout(
      () => {
        const currentCode = currentCodeRef.current;
        currentLineTextRef.current = currentCode[currentLine] || "";

        if (!isDeleting) {
          if (currentLine < currentCode.length) {
            const currentIndentation = getIndentationString(
              currentLineTextRef.current
            );
            const currentContent = getNonIndentationPart(
              currentLineTextRef.current
            );

            if (
              currentChar === 0 &&
              currentIndentation.length > 0 &&
              !isTypingIndentation
            ) {
              setIsTypingIndentation(true);
              setCurrentChar(currentIndentation.length);
            } else if (
              isTypingIndentation &&
              currentChar === currentIndentation.length
            ) {
              setIsTypingIndentation(false);
            } else if (currentChar < currentLineTextRef.current.length) {
              setCurrentChar((prev) => prev + 1);
            } else {
              const newLine = currentLine + 1;
              setCurrentLine(newLine);
              setCurrentChar(0);
              setIsTypingIndentation(false);

              const linesPerSection = 6;
              const lineHeight = 20;
              const targetSection = Math.floor(newLine / linesPerSection);

              if (targetSection !== currentSection) {
                setCurrentSection(targetSection);
                setScrollPosition(targetSection * linesPerSection * lineHeight);
              }
            }
          } else {
            setTimeout(() => setIsDeleting(true), pauseBetweenActions);
          }
        } else {
          if (currentLine > 0 || currentChar > 0) {
            const currentIndentation = getIndentationString(
              currentLineTextRef.current
            );

            if (currentChar > currentIndentation.length) {
              setCurrentChar((prev) => prev - 1);
            } else if (
              currentChar === currentIndentation.length &&
              currentChar > 0
            ) {
              setCurrentChar(0);
            } else if (currentChar === 0 && currentLine > 0) {
              const newLine = currentLine - 1;
              setCurrentLine(newLine);
              const prevLineText = currentCode[newLine] || "";
              setCurrentChar(prevLineText.length);

              const linesPerSection = 6;
              const lineHeight = 20;
              const targetSection = Math.floor(newLine / linesPerSection);

              if (targetSection !== currentSection) {
                setCurrentSection(targetSection);
                setScrollPosition(targetSection * linesPerSection * lineHeight);
              }
            }
          } else {
            setCurrentSection(0);
            setIsTypingIndentation(false);
            if (currentStage === 0) {
              setTimeout(() => {
                setCurrentStage(1);
                setCurrentLine(0);
                setCurrentChar(0);
                setIsDeleting(false);
                setScrollPosition(0);
              }, pauseBetweenStages);
            } else {
              setTimeout(() => {
                setCurrentStage(0);
                setCurrentLine(0);
                setCurrentChar(0);
                setIsDeleting(false);
                setScrollPosition(0);
              }, pauseBetweenStages);
            }
          }
        }

        const newDisplayedCode = currentCode.slice(0, currentLine);
        if (currentLine < currentCode.length) {
          const currentLineDisplay = currentCode[currentLine].substring(
            0,
            currentChar
          );
          newDisplayedCode.push(currentLineDisplay);
        }
        setDisplayedCode(newDisplayedCode);
      },
      isTypingIndentation ? indentationSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    currentLine,
    currentChar,
    isDeleting,
    currentStage,
    isActive,
    scrollPosition,
    currentSection,
    isTypingIndentation,
  ]);

  return (
    <div className="h-full flex flex-col bg-transparent">
      <div className="flex items-center justify-between px-4 py-2 bg-transparent border-b border-gray-300/40">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 bg-gray-400/60 rounded-full border border-gray-400/80"></div>
            <div className="w-3 h-3 bg-gray-400/60 rounded-full border border-gray-400/80"></div>
            <div className="w-3 h-3 bg-gray-400/60 rounded-full border border-gray-400/80"></div>
          </div>
          <div className="text-xs text-gray-500 font-mono">{title}</div>
        </div>
        <div className="text-xs text-gray-400/70">VSCode</div>
      </div>

      <div className="flex items-center px-4 py-1 bg-transparent border-b border-gray-300/30">
        <div className="px-3 py-1 bg-transparent text-gray-500 text-xs font-mono rounded-t border border-b-0 border-gray-400/50">
          {title}
        </div>
      </div>

      <div className="flex-1 overflow-hidden bg-transparent relative">
        <motion.div
          className="p-4 font-mono text-sm"
          style={{
            transform: `translateY(-${scrollPosition}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <div className="space-y-1">
            {displayedCode.map((line, index) => (
              <PythonCodeLine
                key={index}
                line={line}
                lineNumber={index + 1}
                isCurrentLine={index === currentLine && !isDeleting}
                currentChar={index === currentLine ? currentChar : null}
                showIndentationGuides={false}
              />
            ))}
          </div>
        </motion.div>

        <div className="absolute right-2 top-2 text-xs text-gray-400/50 font-mono">
          Sec {currentSection + 1}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-1 bg-transparent border-t border-gray-300/40 text-xs text-gray-400/70">
        <div className="font-mono">
          Ln {currentLine + 1}, Col {currentChar + 1}
        </div>
        <div className="font-mono">Python</div>
      </div>
    </div>
  );
};

// PythonCodeLine with all gray text in different shades
const PythonCodeLine = ({
  line,
  lineNumber,
  isCurrentLine,
  currentChar,
  showIndentationGuides = false,
}) => {
  // All gray text in different shades
  const getLineColor = (text) => {
    if (text.startsWith("#")) return "text-gray-400/50"; // Comments - lighter gray
    if (text.includes("'") || text.includes('"')) return "text-gray-600/70"; // Strings - medium gray
    if (text.includes("class") || text.includes("def") || text.includes("self"))
      return "text-gray-800/80"; // Keywords - dark gray
    if (text.includes("__init__")) return "text-gray-700/80"; // Special methods
    if (text.match(/return|if|else|for|while/)) return "text-gray-800/80"; // Control flow
    if (text.match(/\[|\]|\(|\)|:/)) return "text-gray-500/60"; // Punctuation
    if (text.trim() === "") return "text-transparent"; // Empty lines
    return "text-gray-700/80"; // Default - medium-dark gray
  };

  const getCursorPosition = (charIndex) => {
    return charIndex * 7;
  };

  return (
    <div
      className={`flex items-start ${isCurrentLine ? "bg-gray-200/20" : ""}`}
    >
      <span className="text-gray-400/50 mr-4 text-xs w-6 text-right select-none">
        {lineNumber}
      </span>
      <div className="flex-1 relative">
        <span
          className={`${getLineColor(
            line
          )} whitespace-pre font-mono text-[13px] leading-relaxed relative z-10`}
        >
          {isCurrentLine && currentChar !== null
            ? line.substring(0, currentChar)
            : line}
        </span>

        {isCurrentLine && (
          <motion.span
            className="absolute w-[2px] h-4 bg-gray-600/90 z-20 top-0"
            style={{
              left: `${getCursorPosition(currentChar)}px`,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0.3] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        )}

        {isCurrentLine && currentChar !== null && (
          <span
            className={`${getLineColor(
              line
            )} whitespace-pre font-mono text-[13px] leading-relaxed opacity-50 relative z-10`}
          >
            {line.substring(currentChar)}
          </span>
        )}
      </div>
    </div>
  );
};

export default VSCodeEditorAnimation;