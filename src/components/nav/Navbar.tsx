"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import navItems from "./NavItems";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<any>(null);
  const pathname = usePathname();

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
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
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

  const isActiveRoute = (href: any) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-colors ${
          scrollPosition > 10 ? "bg-white drop-shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href={item.href}
                className={`px-2 py-1 transition-colors ${
                  isActiveRoute(item.href)
                    ? "text-main font-medium"
                    : scrollPosition > 0
                    ? "text-black hover:text-main"
                    : "text-white hover:text-main"
                }`}
              >
                {item.name}
              </a>
              {item.subItems.length > 0 && hoveredItem === index && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-main"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        <div></div>

        {/* Mobile Hamburger Menu */}
        <button
          className={`space-y-1 focus:outline-none lg:hidden px-4`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.div
            className={`w-6 h-0.5 bg-black ${scrollPosition > 10 ? "bg-black" : "bg-white"}`}
            animate={isExpanded ? "open" : "closed"}
            variants={topLineVariants}
            initial="closed"
          ></motion.div>
          <motion.div
            className={`w-6 h-0.5 bg-black ${scrollPosition > 10 ? "bg-black" : "bg-white"}`}
            animate={isExpanded ? "open" : "closed"}
            variants={middleLineVariants}
            initial="closed"
          ></motion.div>
          <motion.div
            className={`w-6 h-0.5 bg-black ${scrollPosition > 10 ? "bg-black" : "bg-white"}`}
            animate={isExpanded ? "open" : "closed"}
            variants={bottomLineVariants}
            initial="closed"
          ></motion.div>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex flex-col lg:hidden mt-11"
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
                  <motion.div key={item.name} variants={menuItemVariants}>
                    <a
                      href={item.href}
                      className={`block text-xl py-2 border-b border-gray-200 hover:text-main ${
                        isActiveRoute(item.href)
                          ? "text-main font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </a>
                    {item.subItems.length > 0 && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-lg text-gray-600 hover:text-main"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
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
