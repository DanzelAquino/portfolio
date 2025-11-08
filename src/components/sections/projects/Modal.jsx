import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MediaCarousel from "./modal/Carousel";
import ProjectHeader from "./modal/Header";
import ProjectDetails from "./modal/Details";
import ProjectFooter from "./modal/Footer";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('no-scroll');
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.classList.remove('no-scroll');
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset media index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentMediaIndex(0);
    }
  }, [isOpen]);

  // Combine all images and videos into one media array
  const allMedia = [
    ...(project.images || []).map(img => ({ type: 'image', src: img, title: '' })),
    ...(project.videos || []).map(video => ({ type: 'video', src: video.src, title: video.title }))
  ];

  const nextMedia = () => {
    if (allMedia.length > 1) {
      setCurrentMediaIndex((prev) => 
        prev === allMedia.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMedia = () => {
    if (allMedia.length > 1) {
      setCurrentMediaIndex((prev) => 
        prev === 0 ? allMedia.length - 1 : prev - 1
      );
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-white rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto flex flex-col mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Fixed at top */}
          <div className="flex-shrink-0">
            <ProjectHeader 
              project={project} 
              onClose={onClose} 
            />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6">
              {/* Media Gallery */}
              {allMedia.length > 0 && (
                <MediaCarousel
                  allMedia={allMedia}
                  currentMediaIndex={currentMediaIndex}
                  setCurrentMediaIndex={setCurrentMediaIndex}
                  onNext={nextMedia}
                  onPrev={prevMedia}
                  project={project}
                />
              )}

              {/* Project Details */}
              <ProjectDetails project={project} />
            </div>
          </div>

          {/* Footer - Fixed at bottom */}
          <div className="flex-shrink-0">
            <ProjectFooter 
              project={project} 
              allMedia={allMedia} 
              onClose={onClose} 
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;