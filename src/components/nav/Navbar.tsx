import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const leftColumnLinks = [
    "press",
    "hotel policies",
    "travel safe",
    "faq",
    "leaders club",
    "contacts",
    "careers",
    "credits",
    "special thanks",
    "privacy policy",
  ];

  const rightColumnSections = [
    {
      heading: "Dining",
      items: [
        "taste",
        "breakfast",
        "un piano nel cielo, italian fine dining",
        "wine cellar",
        "seascape casual dining",
        "seascape cocktail bar",
        "rooftop terrace",
      ],
    },
    {
      heading: "Guest Services",
      items: [
        "wellbeing",
        "pool",
        "beach",
        "the grounds",
        "our boats",
        "concierge",
      ],
    },
  ];

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  const menuContainerVariants = {
    closed: { opacity: 0, x: -100 },
    open: { opacity: 1, x: 0 },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -50 },
    open: { opacity: 1, x: 0 },
  };

  const menuListVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsScrolled(position > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50">
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button
            className="space-y-1 focus:outline-none"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <motion.div
              className={`w-6 h-0.5  transition-colors ${isScrolled ? "bg-gray-700" : "bg-white"}`}
              animate={isExpanded ? "open" : "closed"}
              variants={topLineVariants}
              initial="closed"
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.div
              className={`w-6 h-0.5  transition-colors ${isScrolled ? "bg-gray-700" : "bg-white"}`}
              animate={isExpanded ? "open" : "closed"}
              variants={middleLineVariants}
              initial="closed"
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.div
              className={`w-6 h-0.5  transition-colors ${isScrolled ? "bg-gray-700" : "bg-white"}`}
              animate={isExpanded ? "open" : "closed"}
              variants={bottomLineVariants}
              initial="closed"
              transition={{ duration: 0.3 }}
            ></motion.div>
          </button>
          {/* Language Selector */}
          <div
            className={`flex space-x-4 text-sm transition-all  ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <a href="#" className="hover:underline">
              english
            </a>
            <span>|</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          {/* Social Media Icons */}
          <div className={`flex space-x-4 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Expanded Navigation Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-transparent z-40 flex items-center justify-center"
            style={{
              backgroundImage: `url('/beaches/mathiveri-finolhu-beach/01.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuContainerVariants}
            transition={{ duration: 0.5 }}
          >
            {/* Menu Container */}
            <div className="bg-nav w-[97%] h-[92%] opacity-90 rounded-lg shadow-lg grid grid-cols-5 gap-20 p-10">
              {/* Left Column */}
              <motion.div
                className="text-sm text-gray-600 space-y-4 flex flex-col"
                variants={menuListVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div>
                  <Image
                    src="/logo.png"
                    alt="Mathiveri Finolhu Beach"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="ml-10">
                  {leftColumnLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="px-4 py-2 flex justify-between items-center group hover:border hover:rounded-full hover:border-gray-300 hover:px-6 hover:py-3 transition-all ease-in-out duration-200 text-xl"
                      variants={menuItemVariants}
                    >
                      <span className="text-white group-hover:text-gray-900">
                        {link}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                className="space-y-12 col-span-4"
                variants={menuListVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {rightColumnSections.map((section, index) => (
                  <motion.div key={index} variants={menuListVariants}>
                    <h2 className="text-4xl font-semibold mb-6 border-b-2 border-white pb-4">
                      {section.heading}
                    </h2>
                    <ul className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <motion.li key={itemIndex} variants={menuItemVariants}>
                          <a
                            href="#"
                            className="px-4 py-2 flex justify-between items-center group hover:border hover:rounded-full hover:border-gray-300 hover:px-6 hover:py-3 transition-all ease-in-out duration-200 text-xl"
                          >
                            <span className="text-white group-hover:text-gray-900">
                              {item}
                            </span>
                            <span className="text-white group-hover:text-gray-700">
                              →
                            </span>
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
