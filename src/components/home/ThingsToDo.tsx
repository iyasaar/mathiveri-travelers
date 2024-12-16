import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThingsToDo = () => {
  const sectionRef = useRef<any>(null);
  const imagesRef = useRef<any>([]);

  const images = [
    {
      src: "/things/diving/01.PNG",
      alt: "Activity 1",
      span: "col-span-2 row-span-2",
      title: "Diving",
    },
    {
      src: "/things/local-life/01.JPG",
      alt: "Activity 2",
      span: "col-span-1 row-span-1",
      title: "Local Life",
    },
    {
      src: "/things/picnic/01.JPG",
      alt: "Activity 3",
      span: "col-span-1 row-span-1",
      title: "Picnic",
    },
    {
      src: "/things/sun-bathing/01.JPG",
      alt: "Activity 4",
      span: "col-span-2 row-span-1",
      title: "Sun Bathing",
    },
    {
      src: "/things/canoe/01.JPG",
      alt: "Activity 5",
      span: "col-span-1 row-span-1",
      title: "Water Sports",
    },
    {
      src: "/things/dinner-beach/01.jpeg",
      alt: "Activity 6",
      span: "col-span-1 row-span-1",
      title: "Dinner at the Beach",
    },
    {
      src: "/things/fishing/01.PNG",
      alt: "Activity 7",
      span: "col-span-1 row-span-1",
      title: "Fishing",
    },
    {
      src: "/things/excursion-trip/01.PNG",
      alt: "Activity 8",
      span: "col-span-1 row-span-1",
      title: "Excursion Trip",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1,
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Parallax effect on images
      // Move images slightly on scroll
      imagesRef.current.forEach((img: any) => {
        gsap.to(img, {
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col bg-white mt-28"
    >
      {/* Heading Area */}
      <div className="max-w-5xl mx-auto text-center mb-10 px-4">
        <h2 className="text-base font-serif uppercase font-medium mb-2">
          Things To Do
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif font-medium mb-4">
          Encounter Unforgettable Experiences
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Immerse yourself in a world of activities that celebrate the natural
          beauty, culture, and adventure of this unique destination. Whether
          you're drawn to the serenity of pristine beaches, the thrill of
          watersports, or the richness of local traditions, there is always
          something here to captivate your senses.
        </p>
      </div>

      {/* Image Grid */}
      <div className="flex-grow px-4 pb-4 max-w-screen-lg h-80 self-center">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full h-full">
          {images.map((img, index) => (
            <div
              key={index}
              ref={(el: any) => (imagesRef.current[index] = el)}
              className={`relative overflow-hidden rounded-md bg-gray-100 ${img.span} group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                <p className="text-white text-sm md:text-base font-semibold text-center px-2">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
