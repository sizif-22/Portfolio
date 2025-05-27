"use client";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  const socialButtons = [
    {
      href: "https://github.com/sizif-22",
      icon: <FaGithub size={24} />,
      label: "GitHub",
      delay: 0.9,
    },
    {
      href: "mailto:sheriflotfy22@hotmail.com",
      icon: <MdEmail size={24} />,
      label: "Email",
      delay: 1.0,
    },
    {
      href: "https://linkedin.com/in/sizif",
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      delay: 1.1,
    },
  ];

  return (
    <section className="h-[100svh] bg-[#212121] noise relative overflow-hidden pt-[10vh]" id="Home">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-0" />

      <div className="px-4 md:px-[10%] lg:px-[20%] flex flex-col md:justify-between justify-center h-full md:py-10 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center pb-[5svh] md:pb-0 md:h-[50vh]  space-y-6"
        >
          {/* Main heading with gradient effect */}
          <motion.h1
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-center gradient-text"
          >
            Hi, I&apos;m Sherif Lotfy
          </motion.h1>

          {/* Role with highlight effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl font-medium text-center highlight"
          >
            SoftWare Engineer | Web Developer
          </motion.div>

          {/* Tagline with fade-in effect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-center text-gray-300 readable fade-in"
          >
            Solving problems through clean code and creative design.
          </motion.p>

          {/* Social Media Buttons */}
          <div className="flex gap-4 mt-8">
            {socialButtons.map((button) => (
              <motion.a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: button.delay, duration: 0.6 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--thirdColor)] to-[#4CAF50] 
                         text-white rounded-full hover:shadow-lg hover:shadow-[var(--thirdColor)]/20 
                         transition-all duration-300 transform hover:-translate-y-1"
              >
                {button.icon}
                <span className="hidden md:inline">{button.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* GitHub calendar with glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-black/40 backdrop-blur-sm border-white/10 border rounded-xl p-4 w-fit lg:block hidden
                     shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <GitHubCalendar
            username="sizif-22"
            colorScheme="dark"
            theme={{
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-black/40 backdrop-blur-sm border-white/10 border rounded-xl p-4 w-fit lg:hidden
                     shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=sizif-22&theme=highcontrast&short_numbers=true&mode=weekly"
            alt="GitHub Streak"
          />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--thirdColor)]/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--thirdColor)]/5 rounded-full filter blur-3xl" />
    </section>
  );
};

export default Hero;
