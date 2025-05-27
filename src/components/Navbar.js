"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 90; // Adjust this value based on your navbar height
      const targetPosition = section.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Projects", label: "Projects" },
    { id: "Resume", label: "Resume" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full h-[90px] flex items-center justify-between z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8 font-[Italiana] text-4xl select-none">SiZiF</div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-white hover:text-[var(--thirdColor)] px-3 py-2 text-sm font-medium 
                         transition-colors duration-300 relative group"
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--thirdColor)] transform scale-x-0 
                               group-hover:scale-x-100 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
