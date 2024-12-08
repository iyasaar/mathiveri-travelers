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

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* First Row - LOOK + Panoramic Image */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-8">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-8">
            <div className="flex flex-col items-start">
              <h1
                ref={lookRef}
                className="text-[120px] md:text-[160px] font-extralight text-gray-200 leading-none tracking-wider"
              >
                WELCOME
              </h1>
            </div>
          </div>
          <div
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
    </div>
  );
};

export default Introduction;
