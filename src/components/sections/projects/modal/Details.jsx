import { motion } from "framer-motion";

const ProjectDetails = ({ project }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Left Column */}
      <div className="space-y-4 sm:space-y-6">
        {/* Description */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#1e1a17] mb-2 sm:mb-3">
            Project Overview
          </h3>
          <p className="text-[#545454] leading-relaxed text-sm sm:text-base">
            {project.longDescription}
          </p>
        </div>

        {/* Challenges */}
        {project.challenges && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1e1a17] mb-2 sm:mb-3">
              Challenges & Solutions
            </h3>
            <p className="text-[#545454] leading-relaxed text-sm sm:text-base">
              {project.challenges}
            </p>
          </div>
        )}

        {/* Learnings */}
        {project.learnings && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1e1a17] mb-2 sm:mb-3">
              Key Learnings
            </h3>
            <p className="text-[#545454] leading-relaxed text-sm sm:text-base">
              {project.learnings}
            </p>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="space-y-4 sm:space-y-6">
        {/* Features */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#1e1a17] mb-2 sm:mb-3">
            Key Features
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {project.features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="w-2 h-2 bg-[#1e1a17] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#545454] flex-1 text-sm sm:text-base">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Project Links - Conditionally rendered */}
        {(project.demoUrl || project.githubUrl) && (
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-[#1e1a17] mb-3 sm:mb-4">
              Project Links
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1e1a17] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#545454] transition-all duration-200 text-center justify-center hover:scale-105 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg sm:text-xl">🌐</span>
                  <span>View Live Demo</span>
                </motion.a>
              )}
              
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border-2 border-[#1e1a17] text-[#1e1a17] px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#1e1a17] hover:text-white transition-all duration-200 text-center justify-center hover:scale-105 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg sm:text-xl">💻</span>
                  <span>View Source Code</span>
                </motion.a>
              )}
            </div>
          </div>
        )}

        {/* Project Info */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-[#1e1a17] mb-3 sm:mb-4">
            Project Information
          </h3>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[#545454] font-semibold text-sm sm:text-base">Year:</span>
              <span className="text-[#1e1a17] font-semibold text-sm sm:text-base">
                {project.year}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#545454] font-semibold text-sm sm:text-base">Status:</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  project.status === 'live' ? 'bg-green-500' :
                  project.status === 'on-hold' ? 'bg-yellow-500' :
                  project.status === 'finished' ? 'bg-blue-500' :
                  project.status === 'archived' ? 'bg-gray-500' :
                  'bg-red-500'
                }`}></div>
                <span className="text-[#545454] font-semibold capitalize text-sm sm:text-base">
                  {project.status === 'live' ? 'Live' :
                  project.status === 'on-hold' ? 'On Hold' :
                  project.status === 'finished' ? 'Finished' :
                  project.status === 'archived' ? 'Archived' :
                  'Lost'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;