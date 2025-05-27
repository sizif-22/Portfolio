"use client";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";

const Resume = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="bg-[#212121] min-h-[50svh] px-4 md:px-[10%] py-16 noise"
      id="Resume"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.div {...fadeInUp} className="space-y-8">
          <div className="bg-black/30 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-[var(--thirdColor)]/50 transition-colors">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                My Resume
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Thank you for taking the time to review my portfolio. For a
                comprehensive overview of my skills, experience, and
                qualifications, please download my resume below.
              </p>
              <Link
                href="https://raw.githubusercontent.com/sizif-22/sizif-22/c974a825defcc7f46866af580578b5ed6f463d32/Sherif%20Lotfy.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 
                         bg-[var(--thirdColor)]/10 hover:bg-[var(--thirdColor)]/20 
                         border border-[var(--thirdColor)]/50 rounded-lg
                         text-[var(--thirdColor)] transition-all duration-300
                         hover:scale-105 text-lg"
              >
                <FaFileDownload size={24} />
                Download Resume
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
