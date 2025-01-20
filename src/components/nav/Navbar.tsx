"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import navItems from "./NavItems";
import { Cedarville_Cursive } from "next/font/google";

const cedar = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

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

  const isActiveRoute = (href: any) => pathname === href;

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
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-colors ${
          scrollPosition > 10
            ? "bg-white drop-shadow-md"
            : "bg-transparent drop-shadow-none"
        }`}
      >
        {/* Logo Section */}
        <div
          className={`flex items-center space-x-4 cursor-pointer`}
          onClick={() => router.push("/")}
        >
          {/* <Image src="/logo.png" alt="Logo" width={60} height={60} /> */}
          <span
            className={`${cedar.className} ${
              scrollPosition > 10 ? "text-black" : "text-white"
            }`}
          >
            Mathiveri
            <br /> Maldives
          </span>
          {/* Language Dropdown */}
          <select
            className={`bg-transparent focus:outline-none ${
              scrollPosition > 10 ? "text-black" : "text-white"
            }`}
            onChange={(e) => e.preventDefault()}
          >
            <option value="en" className="text-black">
              English
            </option>
            <option value="zh" className="text-black">
              Chinese
            </option>
            <option value="ru" className="text-black">
              Russian
            </option>
          </select>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`px-2 py-1 transition-colors ${
                isActiveRoute(item.href)
                  ? "text-black font-semibold"
                  : scrollPosition > 0
                  ? "text-black hover:text-main"
                  : "text-white hover:text-black"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Book Now Button */}
        <div></div>
        {/* Mobile Hamburger Menu */}
        <button
          className="space-y-1 focus:outline-none lg:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.div
            className={`w-6 h-0.5 ${
              scrollPosition > 10 ? "bg-black" : "bg-white"
            }`}
            animate={isExpanded ? "open" : "closed"}
            variants={topLineVariants}
          ></motion.div>
          <motion.div
            className={`w-6 h-0.5 ${
              scrollPosition > 10 ? "bg-black" : "bg-white"
            }`}
            animate={isExpanded ? "open" : "closed"}
            variants={middleLineVariants}
          ></motion.div>
          <motion.div
            className={`w-6 h-0.5 ${
              scrollPosition > 10 ? "bg-black" : "bg-white"
            }`}
            animate={isExpanded ? "open" : "closed"}
            variants={bottomLineVariants}
          ></motion.div>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={`fixed inset-0 bg-white z-40 flex flex-col lg:hidden md:mt-11 overflow-y-auto transition-all ${scrollPosition > 10 ? "mt-14 " : "z-50"}`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuContainerVariants}
          >
            <div className="p-8 space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`block text-lg py-2 ${
                    isActiveRoute(item.href)
                      ? "text-main font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
