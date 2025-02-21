"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FacilitiesItem = ({ service }: any) => {
  const itemRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const element = itemRef.current;

    gsap.fromTo(
      element,
      { y: 100, opacity: 0, scale: 0.9 }, // Start animation state
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%", // Trigger animation when 90% of the item enters the viewport
          end: "top 50%",
          toggleActions: "play none none reverse", // Play animation and reverse on scroll back
        },
      }
    );
  }, []);

  const handleRouteClick = (slug: any) => {
    router.push(`/services/${slug}`);
  };

  return (
    <div
      ref={itemRef}
      className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-12"
    >
      {/* Image */}
      <Image
        src={service.image}
        width={400}
        height={300}
        alt={service.title}
        className="rounded-lg object-cover w-full md:w-[400px] h-[250px] shadow-md"
      />

      {/* Content */}
      <div className="flex-1 text-left">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          {service.title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
          {service.description}
        </p>
        <button
          onClick={() => handleRouteClick(service.slug)}
          aria-label={`Explore more about ${service.title}`}
          className="mt-4 px-6 py-3 bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded transition duration-300"
        >
          Explore more
        </button>
      </div>
    </div>
  );
};

export default FacilitiesItem;
