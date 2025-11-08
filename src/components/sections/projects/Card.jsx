import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ project, index, onProjectClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'live':
        return 'bg-green-500';
      case 'archived':
        return 'bg-gray-500';
      case 'finished':
        return 'bg-blue-500';
      case 'on-hold':
        return 'bg-yellow-500';
      case 'lost':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'live':
        return 'Live';
      case 'archived':
        return 'Archived';
      case 'finished':
        return 'Finished';
      case 'on-hold':
        return 'On Hold';
      case 'lost':
        return 'Lost';
      default:
        return status;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-[#edeeef] cursor-pointer h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProjectClick(project)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden flex-shrink-0">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-2xl"></div>
          )}
        </div>
        
        {/* Overlay with technologies */}
        <div className={`absolute inset-0 bg-[#1e1a17] bg-opacity-80 transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-[#edeeef] text-center p-3 sm:p-4">
            <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Technologies Used</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-[#545454] rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-[#545454] rounded-full text-xs sm:text-sm">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className={`${getStatusColor(project.status)} text-white px-2 py-1 rounded-full text-xs sm:text-sm font-bold`}>
            {getStatusText(project.status)}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <span className="bg-white bg-opacity-90 text-[#1e1a17] px-2 py-1 rounded text-xs sm:text-sm font-semibold backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-[#1e1a17] group-hover:text-[#545454] transition-colors duration-200 line-clamp-1">
            {project.title}
          </h3>
          <span className="text-xs sm:text-sm text-[#545454] font-medium flex-shrink-0 ml-2">
            {project.year}
          </span>
        </div>
        
        <p className="text-[#545454] mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base flex-1">
          {project.description}
        </p>

        {/* Project Features */}
        <div className="mb-3 sm:mb-4">
          <h4 className="font-semibold text-[#1e1a17] mb-1 sm:mb-2 text-sm sm:text-base">Key Features:</h4>
          <ul className="text-xs sm:text-sm text-[#545454] space-y-1">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#1e1a17] rounded-full mt-1.5 flex-shrink-0"></span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-[#545454] text-xs sm:text-sm">
                +{project.features.length - 3} more features...
              </li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3 mt-auto pt-2" onClick={(e) => e.stopPropagation()}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#1e1a17] text-[#edeeef] text-center py-2 px-3 sm:px-4 rounded-lg font-semibold hover:bg-[#545454] transition-colors duration-200 text-sm sm:text-base"
            >
              Live Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                project.demoUrl ? 'flex-1' : 'flex-1'
              } border-2 border-[#c5cddf] text-[#1e1a17] text-center py-2 px-3 sm:px-4 rounded-lg font-semibold hover:border-[#1e1a17] hover:text-[#1e1a17] transition-colors duration-200 text-sm sm:text-base`}
            >
              Code
            </a>
          )}

          {!project.demoUrl && !project.githubUrl && (
            <button className="flex-1 bg-gray-200 text-gray-600 text-center py-2 px-3 sm:px-4 rounded-lg font-semibold cursor-not-allowed text-sm sm:text-base">
              No Links
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;