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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row md:items-center md:justify-between mx-auto px-4 md:gap-10 min-h-[80vh] md:-mt-44 mt-52 max-w-screen-2xl md:px-16"
    >
      {/* Small Image */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <img src="/finolhu/01.jpg" alt="Ethos Small" className="w-full" />
      </div>
      {/* Title and Description */}
      <div className="w-full md:w-1/2 self-center mt-5 md:mt-0 md:ml-20">
        <div className="">
          <h2 className="flex overflow-hidden text-2xl md:text-4xl font-serif font-medium mb-8 mt-8 text-center md:text-left">
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
        <p className="w-full md:w-5/6 text-base md:text-lg text-gray-600 mb-8 leading-relaxed text-left md:text-left">
          Mathiveri Finolhu is a stunning sandbank in the Mathiveri Lagoon,
          easily accessible by walking or swimming from Mathiveri Island. This
          picturesque sandbank features a few scattered trees and is surrounded
          by pristine beaches, offering a serene escape with crystal-clear
          waters and breathtaking views of the tropical paradise.
        </p>
      </div>
    </section>
  );
};

export default TourismRelated;
