import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const AboutSection = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRefs = useRef<any>([]);

  useEffect(() => {
    // Animations for text
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animations for images
    imageRefs.current.forEach((image: any, index: any) => {
      gsap.fromTo(
        image,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5 + index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white py-16 px-8 lg:px-32 min-h-screen flex flex-col justify-center">
      {/* Top Row - Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left - Heading */}
        <div ref={headingRef} className="text-left space-y-4">
          <h3 className="text-sm uppercase tracking-wide text-gray-500">
            About
          </h3>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight text-gray-900">
            <i>Mathiveri</i> <br />
          </h2>
        </div>

        {/* Right - Body Text and Button */}
        <div ref={textRef} className="space-y-4">
          <p className="text-base lg:text-lg text-gray-600">
            Mathiveri is a hidden gem in the Maldives, offering an authentic,
            serene experience that combines the best of the natural beauty of
            the Maldives with the charm of local culture. Whether you are
            looking to relax on the beach, explore vibrant coral reefs, or
            simply enjoy the tranquility of island life, Mathiveri provides an
            idyllic setting for an unforgettable getaway. And it's budget
            friendly.
          </p>
          <button
            ref={buttonRef}
            className="mt-4 px-6 py-3 bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300"
          >
            Discover more
          </button>
        </div>
      </div>

      {/* Bottom Row - Images */}
      <div className="grid grid-cols-3 gap-8 mt-16 items-center">
        {/* Left - Smaller Grayscale Image */}
        <div
          ref={(el: any) => imageRefs.current.push(el)}
          className="col-span-1 relative h-[200px] lg:h-[300px] overflow-hidden"
        >
          <Image
            src="/beaches/mathiveri-finolhu-beach/01.jpg"
            alt="Stone Texture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right - Larger Color Image */}
        <div
          ref={(el: any) => imageRefs.current.push(el)}
          className="col-span-2 relative h-[400px] lg:h-[600px] overflow-hidden"
        >
          <Image
            src="/beaches/tourist-beach/01.JPG"
            alt="Group of People"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
