import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const Explore = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-150vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div
        style={{
          backgroundImage: `url('/activities/snorkeling/01.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
        }}
        ref={triggerRef}
      >
        <div
          ref={sectionRef}
          className="h-screen w-[400vw] flex relative items-end"
        >
          <div className="w-[35vw] h-[22vw] flex justify-center items-center ">
            <div className="w-3/5 h-4/5 relative">
              <img
                src="/finolhu/01.jpg"
                alt="Wellbeing"
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
              <h2 className="absolute bottom-4 left-4 text-white text-4xl font-bold">
                WELLBEING
              </h2>
            </div>
          </div>
          <div className="w-[22vw] h-[35vw] flex justify-center items-center">
            <div className="w-3/5 h-4/5 relative">
              <img
                src="/finolhu/01.jpg"
                alt="Wellbeing"
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
              <h2 className="absolute bottom-4 left-4 text-white text-4xl font-bold">
                Sectin 2
              </h2>
            </div>
          </div>
          <div className="w-[35vw] h-[22vw] flex justify-center items-center ">
            <div className="w-3/5 h-4/5 relative">
              <img
                src="/finolhu/01.jpg"
                alt="Wellbeing"
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
              <h2 className="absolute bottom-4 left-4 text-white text-4xl font-bold">
                WELLBEING
              </h2>
            </div>
          </div>
          <div className="w-[22vw] h-[35vw] flex justify-center items-center">
            <div className="w-3/5 h-4/5 relative">
              <img
                src="/finolhu/01.jpg"
                alt="Wellbeing"
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
              <h2 className="absolute bottom-4 left-4 text-white text-4xl font-bold">
                Sectin 2
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
