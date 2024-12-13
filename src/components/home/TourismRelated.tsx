import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TourismRelated = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ethos-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", stagger: 0.2 }
      );

      gsap.fromTo(
        ".ethos-image",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F8F5F2] px-6 md:px-16 py-16"
    >
      {/* Small Image */}
      <div className="absolute top-[-2rem] left-6 md:left-16">
        <img
          src="/introduction/01.jpg"
          alt="Small Decorative"
          className="w-96 h-96 object-cover ethos-image shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-start mx-auto gap-8">
        {/* Title and Description */}
        <div className="flex w-full">
          <div className="basis-1/4"></div>
          <div className="mt-16 ">
            <h2 className="text-3xl font-serif text-[#625D57] ethos-text">
                Cuisine
            </h2>
            {/* <p className="mt-4 text-lg text-[#625D57] ethos-text">
              Understated chic is our design ethos and subtle details are our
              raison d’être.
            </p> */}
          </div>
        </div>

        {/* Large Image and Text */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Large Image */}
          <img
            src="/introduction/02.jpg"
            alt="Living Room"
            className="w-full md:w-2/3 h-auto object-cover ethos-image shadow-md"
          />

          {/* Text beside Image */}
          <div className="md:w-1/3">
            <p className="text-lg text-[#625D57] ethos-text">
              We ensure everything about your stay is immaculate, from the
              pillowy white Etro cotton sheets dressing your bed to the
              thoughtfully-placed garden-grown herb garnishes on your plate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismRelated;
