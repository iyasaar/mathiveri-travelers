"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Lenis from "lenis";
import { ReactLenis } from "lenis/react";
import About from "@/components/home/About";
import Facilities from "@/components/home/Facilities";
import Information from "@/components/home/Information";
import Tourism from "@/components/home/Tourism";
import Footer from "@/components/footer/Footer";
import TourismRelated from "@/components/home/TourismRelated";
import GovtInstitutions from "@/components/home/GovtInstitutions";
import ThingsToDo from "@/components/home/ThingsToDo";
import Historical from "@/components/home/Historical";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      <div id="main">
        <Hero />
        <Introduction />
        <About />
        <Facilities />
        <Information />
        <Tourism />
        <TourismRelated />
        <GovtInstitutions />
        <ThingsToDo />
        <Historical />
      </div>
    </>
  );
};

export default Home;
