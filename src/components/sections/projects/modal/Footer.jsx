import { motion } from "framer-motion";

const ProjectFooter = ({ project, allMedia, onClose }) => {
  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-3 sm:p-4 rounded-b-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
          {project.technologies.length} technologies • {project.features.length} features
          {allMedia.length > 0 && ` • ${allMedia.length} media files`}
        </div>
        <motion.button
          onClick={onClose}
          className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm sm:text-base w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectFooter;