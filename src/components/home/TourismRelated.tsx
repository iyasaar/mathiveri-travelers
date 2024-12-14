import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import SplitText from "@/components/Animations/Splittext";

gsap.registerPlugin(ScrollTrigger);

const TourismRelated = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation trigger setup
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center", // Adjust start position as needed
        onEnter: () => setIsVisible(true),
        onLeaveBack: () => setIsVisible(false), // Reset if scrolling back
      });

      // Intro text animation
      gsap.fromTo(
        ".ethos-intro-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
      );

      // Large image parallax effect
      gsap.to(".ethos-large-image", {
        y: -50,
        scrollTrigger: {
          trigger: ".ethos-large-image",
          start: "top bottom",
          scrub: true,
        },
      });

      // Large image text animation
      gsap.fromTo(
        ".ethos-text",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.7 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ethos" ref={sectionRef} className="relative bg-[#e0ebf3] ">
      {/* Background */}
      <div className="absolute inset-0 bg-bluebg z-0 will-change-transform"></div>

      {/* main container */}
      <div
        className="relative z-10 mx-auto"
        style={{ width: `calc(100% - 15.5vw)` }}
      >
        {/* Small Image and Title */}
        <div className="flex">
          {/* Small Image */}
          <div className="w-[22.5vw] h-[16.493vw] max-w-96 overflow-hidden -mt-[5vw] z-[999]">
            <img
              src="/finolhu/01.jpg"
              alt="Ethos Small"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <div className="text-4xl font-serif text-black ml-5 self-end mt-[1.6vw] will-change-transform">
            <h2 className="flex overflow-hidden">
              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SplitText
                      initial={{ y: "100%" }}
                      animate="visible"
                      variants={{
                        visible: (i: any) => ({
                          y: 0,
                          transition: {
                            delay: i * 0.2,
                          },
                        }),
                      }}
                    >
                      Mathiveri Finolhu
                    </SplitText>
                  </motion.div>
                )}
              </AnimatePresence>
            </h2>
          </div>
        </div>

        {/* Intro Text */}
        <blockquote
          className="text-lg text-gray-600 font-light ethos-intro-text max-w-[600px] mt-[3vw] overflow-hidden leading-8 will-change-transform"
          style={{ marginLeft: `calc(23.5vw)` }}
        >
          Mathiveri Finolhu is a stunning sandbank in the Mathiveri Lagoon,
          easily accessible by walking or swimming from Mathiveri Island. This
          picturesque sandbank features a few scattered trees and is surrounded
          by pristine beaches, offering a serene escape with crystal-clear
          waters and breathtaking views of the tropical paradise.
        </blockquote>

        {/* Content Section */}
        <div className="flex">
          {/* Large Image */}
          <div className="relative ml-[5vw] w-[56vw] h-[38vw] top-[10vw]">
            <img
              src="/finolhu/02.webp"
              alt="Ethos Large"
              className="w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Text beside Image */}
          <div className="ml-[5vw] max-w-[500px] flex items-center mt-[10vw]">
            <p className="text-lg text-gray-600 ethos-text">
              Mathiveri Island is surrounded by vibrant coral reefs and a
              picturesque lagoon, teeming with marine life. The clear, shallow
              waters make it an ideal spot for snorkeling , diving and
              watersports. Colorful fish, sea turtles, and diverse coral
              formations offer an unforgettable underwater experience,
              showcasing the Maldives' natural beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismRelated;
