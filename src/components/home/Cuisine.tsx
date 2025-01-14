// components/CuisineSection.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const CuisineSection: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".cuisine-images",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cuisine-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="cuisine-section relative bg-white py-16 px-8 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column with Single Tall Image */}
          <motion.div
            className="overflow-hidden rounded-t-[165px] rounded-bl-[156px]"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/cuisine/local.jpg"
              alt="local"
              width={420}
              height={600}
              className="object-cover h-full overflow-hidden"
            />
          </motion.div>

          {/* Right Column with Two Circular Images */}
          <div className="grid grid-cols-1 gap-6">
            {/* Top Circular Image */}
            <motion.div
              className="w-full h-full rounded- overflow-hidden rounded-t-[165px] rounded-br-[156px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/cuisine/international.jpg"
                alt="int"
                width={300}
                height={300}
                className="object-cover h-full w-full"
              />
            </motion.div>

            {/* Bottom Circular Image */}
            <motion.div
              className="w-full h-full rounded- overflow-hidden rounded-b-[165px] rounded-tl-[156px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/cuisine/seafood.webp"
                alt="sea"
                width={300}
                height={300}
                className="object-cover h-full w-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="flex flex-col items-start md:ml-20">
          <div className="text-left space-y-4 mb-10">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Available
            </h3>
            <h2 className="text-2xl lg:text-6xl font-serif font-medium leading-tight text-gray-900">
              Cuisines
              <br />
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed md:w-5/6">
            There are many variations of dishes available, but the majority have
            suffered alteration in some form, by injected humor, or randomized
            cuisines that don't look even slightly familiar.
          </p>
          <div className="mt-8 space-y-4 md:w-5/6">
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-lg">Local Foods</h4>
                <p className="text-base text-gray-600">
                  Maldivian cuisine is rich and flavorful, with main dishes like
                  roshi or rice with curry, fihunumas, mashuni, and garudhiya.
                  Snacks like boakiba, gulha, and bajiya and othe hedhika are
                  popular, while Mathiveri's unique haalufolhi is a must-try,
                  with visitors praising its taste.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-lg">Seafood</h4>
                <p className="text-sm text-gray-600">
                  Seafood in Mathiveri is a popular choice for visitors,
                  offering fresh, high-quality octopus, lobsters, and other
                  seafood. International seafood dishes are expertly prepared,
                  making it a must-try experience for all.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-lg">
                  International Cuisines
                </h4>
                <p className="text-sm text-gray-600">
                  Mathiveri offers a variety of international cuisines, with
                  local restaurants and guesthouses serving high-quality dishes
                  from around the world, including Western, Indian, and Chinese
                  foods, ensuring a diverse dining experience for visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuisineSection;
