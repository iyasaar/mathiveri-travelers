import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Introduction = () => {
  const containerRef = useRef(null);
  const lookRef = useRef(null);
  const beyondRef = useRef(null);
  const findRef = useRef(null);
  const perfectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      lookRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    )
      .fromTo(
        beyondRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        imageRefs.current,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.5"
      )
      .fromTo(
        [findRef.current, perfectionRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 },
        "-=0.8"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* First Row - LOOK + Panoramic Image */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div className="flex flex-col items-start">
              <h1
                ref={lookRef}
                className="text-[120px] md:text-[160px] font-extralight text-gray-200 leading-none tracking-wider"
              >
                LOOK
              </h1>
              <h2
                ref={beyondRef}
                className="text-xl md:text-2xl text-gray-400 tracking-widest ml-2 -mt-4"
              >
                BEYOND LIMITS.
              </h2>
            </div>
          </div>
          <div
            ref={(el) => (imageRefs.current[0] = el)}
            className="col-span-4 relative h-[20vh]"
          >
            <Image
              src="/introduction/01.jpg"
              alt="Coastal Panorama"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Second Row - Main Image + FIND */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-8">
        <div className="relative">
          <div
            ref={(el) => (imageRefs.current[1] = el)}
            className="relative h-[40vh] w-full"
          >
            <Image
              src="/landmarks/welcome.jpg"
              alt="Resort View"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute right-4 -bottom-12">
            <span
              ref={findRef}
              className="text-xl text-gray-300 tracking-widest"
            >
              FIND
            </span>
          </div>
        </div>
      </div>

      {/* Third Row - TRUE PERFECTION */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-20">
        <h2
          ref={perfectionRef}
          className="text-5xl md:text-7xl font-extralight text-gray-400 tracking-wider text-center"
        >
          TRUE PERFECTION.
        </h2>
      </div>
    </div>
  );
};

export default Introduction;
