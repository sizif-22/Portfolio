"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  return (
    <section
      className="bg-[#212121] min-h-[100svh] px-4 md:px-[10%] py-16 noise"
      id="Projects"
    >
      {/* Professional Experience */}
      <motion.div {...fadeInUp} className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <FaBriefcase className="text-[var(--thirdColor)] text-2xl" />
          <h3 className="text-2xl font-semibold">Professional Experience</h3>
        </div>

        <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
          <h4 className="text-xl font-semibold text-[var(--thirdColor)]">
            Software Engineering Intern
          </h4>
          <p className="text-gray-400 mb-2">WebbingStone</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Developed and maintained multiple web applications including
              WebbingEvents and PostPilot
            </li>
            <li>
              Created a React-based clone of the company website, improving
              performance and user experience
            </li>
            <li>
              Collaborated with senior developers on system optimization and
              feature implementation
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Project Highlights */}
      <motion.div {...fadeInUp} className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <FaCode className="text-[var(--thirdColor)] text-2xl" />
          <h3 className="text-2xl font-semibold">Notable Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <h4 className="text-xl font-semibold text-[var(--thirdColor)]">
              Orbit
            </h4>
            <p className="text-gray-400 mb-2">NASA Space Apps Hackathon</p>
            <p className="text-gray-300">
              Collaborated in developing an interactive 3D solar system
              visualization tool, showcasing real-time celestial body positions
              and NEO tracking.
            </p>
          </div>

          <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <h4 className="text-xl font-semibold text-[var(--thirdColor)]">
              Repai All
            </h4>
            <p className="text-gray-400 mb-2">Team Project</p>
            <p className="text-gray-300">
              Contributed to building a comprehensive repair service platform,
              focusing on user experience and service provider integration.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div {...fadeInUp} className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <FaGraduationCap className="text-[var(--thirdColor)] text-2xl" />
          <h3 className="text-2xl font-semibold">Education</h3>
        </div>

        <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
          <h4 className="text-xl font-semibold text-[var(--thirdColor)]">
            Bachelor of Computer Science
          </h4>
          <p className="text-gray-400">Ain Shams University</p>
          <p className="text-gray-300">Third Year Student</p>
        </div>
      </motion.div>
    </section>
  );
};
export default Projects;
