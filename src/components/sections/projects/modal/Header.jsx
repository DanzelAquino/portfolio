import { motion } from "framer-motion";

const ProjectHeader = ({ project, onClose }) => {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 p-4 rounded-t-2xl z-10">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1e1a17] truncate">
              {project.title}
            </h2>
            <span className="text-sm sm:text-base text-[#545454] font-medium whitespace-nowrap">
              ({project.year})
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[#1e1a17] text-white rounded-full text-xs whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <motion.button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl font-bold p-1 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ×
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectHeader;