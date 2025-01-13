import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Overpass, Bebas_Neue } from "next/font/google";
import SplitType from "split-type";

const overpasss = Overpass({ subsets: ["latin"], weight: "400" });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef: any = useRef(null);

  useEffect(() => {
    // Parallax effect for the image
    gsap.to(imageRef.current, {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Fade and Slide effect for the text
    const splitText = new SplitType(headingRef.current, { types: "chars" });
    gsap.from(splitText.chars, {
      duration: 0.5,
      x: -100,
      opacity: 0,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white min-h-screen flex flex-col justify-center items-center"
    >
      {/* Text Section */}
      <div className="relative z-10 mb-8">
        <h1
          ref={headingRef}
          className="text-[40px] md:text-[60px] font-extralight text-black font-serif italic text-center w-[80%] md:w-[70%] mx-auto"
        >
          "A true paradise where nature and culture blend in perfect harmony"
        </h1>
      </div>

      {/* Parallax Image */}
      <div className="relative w-[80%] h-[50vh] overflow-hidden rounded-lg ">
        <div ref={imageRef} className="relative w-full h-full">
          <Image
            src="/introduction/01.jpg"
            alt="Mathiveri Island"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
