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
  const imageRefs = useRef<any>([]);
  const headingRefs = useRef<any>([]);

  useEffect(() => {
    const mm = gsap.matchMedia(); // Create a matchMedia instance

    mm.add("(min-width: 640px)", () => {
      // Parallax effect for larger screens
      imageRefs.current.forEach((image: any) => {
        gsap.to(image, {
          y: "-50%",
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    mm.add("(max-width: 639px)", () => {
      // Reduced parallax effect for smaller screens
      imageRefs.current.forEach((image: any) => {
        gsap.to(image, {
          y: "-20%", // Less translation for mobile
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    // Fade and Slide effect for the texts (applies to all screens)
    headingRefs.current.forEach((heading: any) => {
      const splitText = new SplitType(heading, { types: "chars" });
      gsap.from(splitText.chars, {
        duration: 1,
        x: -100,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => mm.revert(); // Clean up matchMedia instances
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white min-h-screen flex justify-center items-center"
    >
      {/* First Row - LOOK + Panoramic Image */}
      <div
        className={`font-serif italic font-light container pt-8 md:space-y-4 text-black`}
      >
        <div className="grid grid-cols-12 gap-4 items-center ">
          <div className="col-span-7 md:self-end self-start">
            <div className="flex flex-col items-end mr-10 ">
              <h1
                ref={(el) => headingRefs.current.push(el)}
                className="text-[40px] md:text-[100px] font-extralight"
              >
                Welcome
              </h1>
            </div>
          </div>
          {/* Parallax Image */}
          <div className="col-span-5 relative h-[20vh] overflow-hidden rounded-lg">
            <div
              ref={(el: any) => imageRefs.current.push(el)} // Add this image to refs
              className="relative w-full h-full"
            >
              <Image
                src="/introduction/01.jpg"
                alt="Coastal Panorama"
                layout="responsive"
                width={800}
                height={600}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Second Row - Panoramic Image + TO */}
        <div className="grid grid-cols-12 gap-4 items-center md:mt-0 -mt-8">
          {/* Parallax Image */}
          <div className="col-span-9 relative h-[22vh] overflow-hidden rounded-lg">
            <div
              ref={(el: any) => imageRefs.current.push(el)} // Add this image to refs
              className="relative w-full h-full "
            >
              <Image
                src="/activities/excursion/01.png"
                alt="Excursion Panorama"
                layout="responsive"
                width={1200}
                height={800}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col items-start">
              <h1
                ref={(el) => headingRefs.current.push(el)}
                className="text-[40px] md:text-[80px] font-extralight"
              >
                To
              </h1>
            </div>
          </div>
        </div>

        {/* Third Row - MATHIVERI */}
        <div className="grid grid-cols-12 gap-4 items-center ">
          <div className="col-span-4 relative h-[20vh] hidden md:block"></div>
          <div className="md:col-span-8 col-span-10">
            <div className="flex flex-col items-start mt-10 md:-mt-14">
              <h1
                ref={(el) => headingRefs.current.push(el)}
                className="text-[40px] md:text-[100px] font-extralight"
              >
                Mathiveri Island
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
