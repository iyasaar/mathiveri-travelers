import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Tourism = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animation for images
      gsap.fromTo(
        ".large-image",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        ".small-image",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Clean up on component unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white md:py-0 py-16 px-6 sm:px-8 md:px-16 min-[80vh] flex items-center justify-center mb-48"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-52">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-serif font-light text-black mb-6 leading-snug">
            Tourism and Attractions
          </h2>
          <blockquote className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            Mathiveri offers visitors a unique Maldivian experience, where they
            can immerse themselves in the local culture and enjoy the serenity
            of the island. While the island itself is relatively small, it has a
            lot to offer in terms of natural beauty, one of the special features
            that visitors to the island highlights is the island's natural
            beauty and cleaning efforts carried out by women of the island, the
            nearby Mathiveri Finolhu (Mathiveri sandbank), the beautiful lagoon
            between the two islands, and the vibrancy of the island's shallow
            lagoon.
          </blockquote>
        </div>

        {/* Right: Images */}
        <div className="relative">
          {/* Large Background Image */}
          <img
            src="/activities/excursion/01.png"
            alt="Lake View"
            className="large-image rounded-lg shadow-md w-[90%] md:w-[85%] ml-auto"
          />
          {/* Smaller Foreground Image */}
          <img
            src="/activities/snorkeling/01.jpg"
            alt="Closer Lake View"
            className="small-image rounded-lg shadow-md w-[50%] absolute -bottom-36 -left-2 md:w-[45%] md:-bottom-28 md:-left-20 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Tourism;
