"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Occasions", href: "/occasions" },
  { name: "Facilities", href: "/facilities" },
  { name: "Landmarks", href: "/landmarks" },
];

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-colors ${
          scrollPosition > 10 ? "bg-white drop-shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu (mobile) */}
          <button
            className="space-y-1 focus:outline-none lg:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <motion.div
              className={`w-6 h-0.5 ${
                scrollPosition > 0 ? "bg-gray-700" : "bg-white"
              }`}
              animate={isExpanded ? "open" : "closed"}
              variants={topLineVariants}
              initial="closed"
            ></motion.div>
            <motion.div
              className={`w-6 h-0.5 ${
                scrollPosition > 0 ? "bg-gray-700" : "bg-white"
              }`}
              animate={isExpanded ? "open" : "closed"}
              variants={middleLineVariants}
              initial="closed"
            ></motion.div>
            <motion.div
              className={`w-6 h-0.5 ${
                scrollPosition > 0 ? "bg-gray-700" : "bg-white"
              }`}
              animate={isExpanded ? "open" : "closed"}
              variants={bottomLineVariants}
              initial="closed"
            ></motion.div>
          </button>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${
                scrollPosition > 0 ? "text-black" : "text-white"
              } hover:text-main transition-colors px-2 py-1 ${
                // Replace with your logic for active route
                item.name === "Home" ? "text-main" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Social or other icons */}
        <div className="flex items-center space-x-6">
          <div
            className={`flex space-x-4 ${
              scrollPosition > 0 ? "text-gray-700" : "text-white"
            }`}
          >
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

      {/* Sidebar (mobile only) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex flex-col lg:hidden mt-14"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuContainerVariants}
          >
            <div className="p-8 space-y-6">
              <motion.div
                variants={menuListVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={menuItemVariants}
                    className={`block text-xl py-2 border-b border-gray-200 hover:text-main ${
                      // Replace with your logic for active route
                      item.name === "Home" ? "text-main" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </motion.a>
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
