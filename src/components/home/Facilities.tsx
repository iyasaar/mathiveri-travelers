import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { WhiteBtn } from "../generic/WhiteBtn";

const fetchFacilities = () => {
  // Assuming the folder structure and images are in `public/facilities`
  const facilityFolders = [
    {
      name: "Accommodation & Food",
      image: "/facilities/Accomodation-&-Food/01.jpg",
    },
    { name: "ATM", image: "/facilities/ATM/01.jpg" },
    { name: "Children Park", image: "/facilities/Children-Park/01.jpg" },
    { name: "Excursion Trips", image: "/facilities/Exursion-Trips/01.jpg" },
    {
      name: "Hair Dressing & Spa Treatments",
      image: "/facilities/Hair-Dressing-&-Spa-Treatments/01.jpg",
    },
    {
      name: "Indoor & Outdoor Gym",
      image: "/facilities/Indoor-&-Outdoor-Gym/01.jpg",
    },
    { name: "Land Sports", image: "/facilities/Land-Sports/01.jpg" },
    {
      name: "Modern Medicine & Local Treatments",
      image: "/facilities/Modern-Medicine-&-Local-Treatments/01.jpg",
    },
    { name: "Pharmacy", image: "/facilities/Pharmacy/01.PNG" },
    { name: "Photography", image: "/facilities/Photography/01.jpg" },
    { name: "Traveling", image: "/facilities/Traveling/01.JPG" },
    {
      name: "Water Sports & Dive Centers",
      image: "/facilities/Water-Sports-&-Dive-Centers/01.jpeg",
    },
  ];

  return facilityFolders;
};

const Facilities = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [facilities, setFacilities] = useState<any>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const facilitiesData = fetchFacilities();
    setFacilities(facilitiesData);

    const totalWidth = facilitiesData.length * 35; // Assuming each card is 35vw wide
    const endValue = `${totalWidth * 8}vw top`;

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${totalWidth}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: endValue,
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
    <section className="overflow-hidden bg-white relative">
      <div className="absolute top-12 right-20 z-20">
        <h1 className="text-4xl lg:text-6xl font-bold  font-serif italic text-white">
          Facilities
        </h1>
        <WhiteBtn>Discover more</WhiteBtn>
      </div>
      <div
        style={{
          backgroundImage: `url('01.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        ref={triggerRef}
      >
        <div
          ref={sectionRef}
          className="h-screen w-[400vw] flex relative items-end"
        >
          {facilities.map((facility: any, index: any) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "w-[40vw] h-[80vh]" : "w-[40vw] h-[80vh]"
              } flex justify-center items-center`}
            >
              <div className="w-4/5 h-4/5 relative">
                {/* Card Image */}
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-lg"></div>
                {/* Card Text */}
                <h2 className="absolute bottom-4 left-4 text-white text-4xl font-bold z-10">
                  {facility.name.toUpperCase()}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
