import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const AboutSection2 = () => {
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
    <section className="bg-white py-0 mt-20 px-8 lg:px-32 min-h-[70vh] flex flex-col justify-center ">
      {/* Top Row - Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left - Heading */}
        <div ref={headingRef} className="text-left space-y-4">
          <h3 className="text-sm uppercase tracking-wide text-gray-500">
            Introduction to
          </h3>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight text-gray-900">
            <i>Mathiveri</i> <br />
          </h2>
        </div>

        {/* Right - Body Text and Button */}
        <div ref={textRef} className="space-y-4">
          <p className="text-base lg:text-lg text-gray-600">
            Mathiveri is a beautiful island located in the Maldives near
            hulhuleVelana International Airport, a tropical paradise in the
            Indian Ocean. Part of the North Ari Atoll, Mathiveri is a small, yet
            vibrant island known for its natural beauty, tranquil environment,
            and rich local culture.
          </p>
        </div>
      </div>

      {/* Bottom Row - Images */}
      <div className="grid grid-cols-5 gap-8 mt-16 items-center">
        {/* Left - Smaller Grayscale Image */}

        {/* Right - Larger Color Image */}
        <div
          ref={(el: any) => imageRefs.current.push(el)}
          className="col-span-5 relative h-[400px] lg:h-[600px] overflow-hidden"
        >
          <Image
            src="/introduction/03.jpg"
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

export default AboutSection2;
