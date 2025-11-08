import { motion } from "framer-motion";

const AboutDetails = () => {
  const passions = [
    { icon: "🎮", title: "Gaming Enthusiast", description: "From video games to discovering my passion for development" },
    { icon: "🌐", title: "Full-Stack Focus", description: "Love seeing projects come to life from front to back-end" },
    { icon: "🤖", title: "AI Curious", description: "Fascinated by the potential of artificial intelligence" },
    { icon: "📚", title: "Continuous Learner", description: "Always exploring new technologies and frameworks" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#edeeef] to-[#c5cddf]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#545454] mb-3 sm:mb-4">About Me</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            From gaming passion to full-stack development
          </p>
          <div className="w-20 sm:w-24 h-1 bg-[#1e1a17] mx-auto mt-3 sm:mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#545454]">My Coding Journey</h3>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              My journey into programming started with video games, which sparked my curiosity about technology. 
              While game development initially drew me in, I discovered my true passion lies in creating practical 
              applications that solve real-world problems.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              As a full-stack developer, I love seeing projects come to life from both front-end and back-end perspectives. 
              There's something incredibly satisfying about building systems that make people's lives easier and watching 
              ideas transform into functional applications.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              When I'm away from the keyboard, you'll find me gaming, exploring new manga and anime series, 
              or spending quality time with my girlfriend. These moments away from code help me recharge and 
              often inspire new approaches to development challenges.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white rounded-lg shadow border border-gray-200 hover:shadow-md transition-shadow"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-[#1e1a17]">2+</div>
                <div className="text-sm text-gray-600">Years Learning</div>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white rounded-lg shadow border border-gray-200 hover:shadow-md transition-shadow"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-[#1e1a17]">10+</div>
                <div className="text-sm text-gray-600">Projects Built</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Passions & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#545454]">My Development Approach</h3>
            
            {/* Passions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {passions.map((passion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-3 sm:p-4 bg-white rounded-lg shadow border border-gray-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                      {passion.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#545454] mb-1 text-sm sm:text-base">{passion.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{passion.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200"
            >
              <div className="flex items-start gap-3">
                <div className="text-lg sm:text-xl">🚀</div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">Currently Learning & Using</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">React</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Vue.js</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Firebase</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Cloudinary</span>
                  </div>
                  <p className="text-xs sm:text-sm text-purple-700 mt-2">
                    Building projects with modern frameworks and cloud services
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Development Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200"
            >
              <div className="flex items-start gap-3">
                <div className="text-lg sm:text-xl">💡</div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1 text-sm sm:text-base">Development Philosophy</h4>
                  <p className="text-xs sm:text-sm text-blue-700">
                    I believe the best solutions come from understanding problems firsthand. 
                    I thrive on creating systems that genuinely help people, and I'm always learning 
                    because in technology, the learning never stops.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future Focus - Fixed timing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200"
            >
              <div className="flex items-center gap-3">
                <div className="text-lg sm:text-xl">🎯</div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm sm:text-base">Looking Forward</h4>
                  <p className="text-xs sm:text-sm text-green-700">
                    Exploring AI technologies and building systems that make a real difference
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;