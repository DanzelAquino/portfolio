// App.jsx
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Changed to HashRouter
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/sections/shared/Navbar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98
  },
  in: {
    opacity: 1,
    scale: 1
  },
  out: {
    opacity: 0,
    scale: 1.02
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.4
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Projects />
              </motion.div>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router> 
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;