"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaGithub, FaJava, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiAngular,
  SiThreedotjs,
  SiGooglegemini,
  SiPython,
  SiMysql,
  SiGo,
} from "react-icons/si";
import Link from "next/link";

const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideIn = {
    initial: { x: -60, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const webbingStoneProjects = [
    {
      name: "WebbingEvents",
      description:
        "Developed a dynamic event management platform using Next.js and Firebase, enabling organizers to create event pages, design custom forms, track participants, and send scheduled emails via SMTP. Node.js and Express.js power email scheduling, while owners manage accounts and events.",
      tools: ["Next.js", "Firebase"],
      github: "https://github.com/sizif-22/web-events",
    },
    {
      name: "PostPilot",
      description:
        "A web service for scheduling posts across multiple social media platforms including Facebook, Instagram, and TikTok, streamlining social media management and content scheduling.",
      tools: ["Next.js", "Firebase"],
      github: "https://github.com/sizif-22/PostPilot",
    },
  ];

  const masonsProjects = [
    {
      name: "Orbit",
      description:
        "Created an interactive 3D solar system orrery, including NEOs, for the NASA Space Apps Cairo 2024 challenge. Collaborated with the Masons team, utilizing Next.js, Three.js, and npm packages to showcase skills in web development, teamwork, and 3D visualization.",
      tools: ["Next.js", "Three.js"],
      github: "https://github.com/TheGrandMasons/orbit",
    },
    {
      name: "repAI",
      description:
        "An AI-powered recycling platform built during GDG Cairo's AI Finance Hackathon 2025. The project combines Angular and Go with Gemini AI API to promote sustainable recycling practices through intelligent material recognition and incentivization.",
      tools: ["Angular", "Go", "Gemini AI"],
      github: "https://github.com/wearemasons/repAI",
    },
  ];
  const CollageProjects = [
    {
      name: "Club DB",
      description:
        'Developed "Club DB" as a university database course project using MySQL. Created Python scripts to generate random data for testing, enabling efficient database functionality and validation.',
      tools: ["MySQL", "Python"],
      github: "https://github.com/sizif-22/C207Proj",
    },
    {
      name: "Swuber",
      description:
        "A taxi service system developed as a project for both the university's Java programming and advanced database courses. The system's core functionality was implemented using Java, with data persistence handled through JPA and an object-oriented database (ODB). The user interface was designed with Java Swing, providing an interactive and intuitive experience.",
      tools: ["Java", "ODB"],
      github: "https://github.com/sizif-22/Swuber",
    },
  ];

  const ProjectsGrid = ({ projects }) => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          variants={slideIn}
          className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-white/10 
                   hover:border-[var(--thirdColor)]/50 transition-all duration-300
                   group hover:-translate-y-1 relative project-card"
        >
          <h3 className="text-2xl font-semibold text-[var(--thirdColor)] mb-3">
            {project.name}
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-16">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-sm
                         border border-white/10 group-hover:border-[var(--thirdColor)]/30
                         tool-badge"
              >
                {tool === "Next.js" && <SiNextdotjs className="text-white" />}
                {tool === "Firebase" && (
                  <SiFirebase className="text-[#FFCA28]" />
                )}
                {tool === "Angular" && <SiAngular className="text-[#DD0031]" />}
                {tool === "Three.js" && <SiThreedotjs className="text-white" />}
                {tool === "Go" && <SiGo className="text-[#00ADD8]" />}
                {tool === "Python" && <SiPython className="text-[#00ADD8]" />}
                {tool === "Java" && <FaJava className="text-[#00ADD8]" />}
                {tool === "ODB" && <FaDatabase className="text-[#00ADD8]" />}
                {tool === "MySQL" && <SiMysql className="text-[#00ADD8]" />}
                {tool === "Gemini AI" && (
                  <SiGooglegemini className="text-[#4285F4]" />
                )}
                {tool}
              </span>
            ))}
          </div>
          <Link
            href={project.github}
            target="_blank"
            className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 
                     bg-[var(--thirdColor)]/10 hover:bg-[var(--thirdColor)]/20 
                     border border-[var(--thirdColor)]/50 rounded-lg
                     text-[var(--thirdColor)] transition-all duration-300
                     hover:scale-105 github-link"
          >
            <FaGithub size={20} />
            View on GitHub
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      className="bg-[#212121] min-h-[100svh] px-4 md:px-[10%] py-16 noise"
      id="Projects"
    >
      <style jsx>{`
        .project-card {
          animation: cardFloat 6s ease-in-out infinite;
        }

        .tool-badge {
          animation: badgePulse 2s ease-in-out infinite;
        }

        .github-link {
          animation: buttonGlow 3s ease-in-out infinite;
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes badgePulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.95);
          }
        }

        @keyframes buttonGlow {
          0%,
          100% {
            box-shadow: 0 0 5px var(--thirdColor);
          }
          50% {
            box-shadow: 0 0 15px var(--thirdColor);
          }
        }

        .experience-card {
          position: relative;
          overflow: hidden;
        }

        .experience-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(var(--thirdColor), 0.1),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          100% {
            left: 100%;
          }
        }
      `}</style>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-16"
      >
        {/* Header */}
        <motion.div variants={fadeInUp}>
          <div className="flex items-center gap-3 mb-8">
            <FaBriefcase className="text-[var(--thirdColor)] text-3xl animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Professional Experience & Projects
            </h2>
          </div>
        </motion.div>

        {/* WebbingStone Experience & Projects */}
        <motion.div variants={fadeInUp} className="space-y-8">
          <div className="experience-card bg-black/30 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-[var(--thirdColor)]/50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-[var(--thirdColor)]">
                Software Engineering Intern
              </h3>
              <p className="text-gray-400">August 2024 - October 2024</p>
            </div>
            <h4 className="text-xl text-white mb-4">WebbingStone</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Worked on developing and maintaining multiple web applications,
              focusing on creating efficient and user-friendly solutions for
              event management and social media scheduling.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-white/80 mt-12 mb-6">
            Projects at WebbingStone
          </h3>
          <ProjectsGrid projects={webbingStoneProjects} />
        </motion.div>
        <hr />

        {/* Masons Experience & Projects */}
        <motion.div variants={fadeInUp} className="space-y-8">
          <div className="experience-card bg-black/30 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-[var(--thirdColor)]/50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-[var(--thirdColor)]">
                Co-Founder & Developer
              </h3>
              <p className="text-gray-400">2024 - Present</p>
            </div>
            <h4 className="text-xl text-white mb-4">The Grand Masons</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Co-founder and team member of a GitHub organization called Masons.
              We created this group to unite our friends who share a passion for
              technology and innovation. Together, we&apos;ve worked on several
              projects and continue to collaborate on new ideas.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-white/80 mt-12 mb-6">
            Projects with The Grand Masons
          </h3>
          <ProjectsGrid projects={masonsProjects} />
        </motion.div>
        <hr />

        {/* Collage Projects */}
        <motion.div variants={fadeInUp} className="space-y-8">
          <div className="experience-card bg-black/30 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-[var(--thirdColor)]/50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-[var(--thirdColor)]">
                Academic Projects
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Throughout my academic journey, I&apos;ve developed various
              projects that demonstrate my understanding of core computer
              science concepts and practical implementation skills. Here are
              some highlights from my coursework.
            </p>
          </div>
          <h3 className="text-2xl font-semibold text-white/80 mt-12 mb-6">
            Featured Academic Projects
          </h3>
          <ProjectsGrid projects={CollageProjects} />
        </motion.div>
        <hr />

        {/* Additional Projects Note */}
        <motion.div variants={fadeInUp} className="space-y-8">
          <div className="experience-card bg-black/30 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-[var(--thirdColor)]/50 transition-colors">
            <p className="text-gray-300 mb-6 leading-relaxed">
              These are just a few highlights of my work. I invite you to
              explore more of my projects on my
              <Link
                href="https://github.com/sizif-22"
                target="_blank"
                className="text-[var(--thirdColor)] hover:underline mx-2"
              >
                GitHub profile
              </Link>
              where you can find additional personal projects, experiments, and
              contributions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
