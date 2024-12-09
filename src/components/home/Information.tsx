import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const Information = () => {
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Trigger when the section is near the viewport
          end: "bottom 20%",
          scrub: false,
          once: true, // Animation triggers only once
        },
      });

      // Animation Sequence
      timeline
        .from(".intro-text", {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".image",
          {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8" // Overlaps with the previous animation
        )
        .from(
          ".text-content",
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8" // Overlaps with the previous animation
        );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 px-8 md:px-16 overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro Text */}
        <div className="mb-12 intro-text">
          <h2 className="text-xl md:text-3xl font-serif font-light text-black">
            Mathiveri Island is Located in the Western Part of Ari Atoll, at
            4.191833 degrees north and 72.746139 degrees east, and belongs to
            North Ari Atoll. The code assigned to this island is U5. Mathiveri
            is an island with a large shallow lagoon and a sandbank, relatively
            centrally located among all the islands in the atoll, making it
            easily accessible for traveling during both seasons. The Island's
            area is 21.39 hectares.
          </h2>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="image">
            <img
              src="/people/01.jpg"
              alt="Local People"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Right: Text */}
          <div className="text-content">
            <h3 className="text-2xl md:text-4xl font-serif font-medium text-black mb-4">
              Local Life
            </h3>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              Mathiveri is home to a modest population, primarily made up of
              Maldivian locals. The island's community is known for its warm
              hospitality and traditional lifestyle, which revolves around
              fishing, agriculture, and tourism. The local people are proud of
              their cultural heritage and are known to maintain traditional
              Maldivian customs, including the language, food, and dress. The
              island also has a few local businesses, including guesthouses,
              which provide accommodations for travelers who prefer to stay in a
              more authentic, local setting rather than larger, more
              commercialized resorts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
