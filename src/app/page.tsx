"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
    </>
  );
};

export default Home;
