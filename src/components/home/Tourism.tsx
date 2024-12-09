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
      className="bg-white py-16 px-8 md:px-16 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-52">
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
            nearby mathiveri finolhu (mathiveri sandbank), the beautiful lagoon
            between the two islands, and the vibrancy of the island's shallow
            lagoon.
          </blockquote>
          <div className="flex space-x-4">
            <button className="mt-4 px-6 py-3 bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300">
              Discover more
            </button>
          </div>
        </div>

        {/* Right: Images */}
        <div className="relative">
          {/* Large Background Image */}
          <img
            src="/activities/excursion/01.png"
            alt="Lake View"
            className="large-image rounded-lg shadow-md w-full md:w-[90%] ml-auto"
          />
          {/* Smaller Foreground Image */}
          <img
            src="/activities/snorkeling/01.jpg"
            alt="Closer Lake View"
            className="small-image rounded-lg shadow-md w-2/3 absolute -bottom-36 -left-32 md:w-[50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Tourism;
