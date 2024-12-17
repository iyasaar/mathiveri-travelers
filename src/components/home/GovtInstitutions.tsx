import React, { useRef, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GovtInstitutions = () => {
  const containerRef = useRef<any>(null);
  const cardRefs = useRef<any>([]);

  const data = [
    {
      id: 1,
      title: "Mathiveri Council",
      description:
        "The Mathiveri Council is the governing body responsible for overseeing local administration and community development on Mathiveri Island in the Maldives. It manages public services, infrastructure, and local policies.",
      phone: "+960 6660058",
      email: "info@mathiveri.gov.mv",
      website: "https://mathiveri.gov.mv",
      image: "/govt/council.jpg",
    },
    {
      id: 2,
      title: "Mathiveri Health Centre",
      description:
        "The Mathiveri Health Centre provides essential healthcare services, offering medical treatment, ambulance service, emergency care, and health education to promote community well-being.",
      phone: "+960 6660858",
      email: "aa.mathiverihc@health.gov.mv",
      website: null,
      image: "/govt/health.jpg",
    },
    {
      id: 3,
      title: "Mathiveri Police Station",
      description:
        "The Mathiveri Police Station ensures law and order, providing security, handling local law enforcement, and promoting safety for both residents and visitors.",
      phone: "+960 9994875",
      email: "info@police.gov.mv",
      website: null,
      image: "/govt/police.jpg",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", 
        },
      });
    }, containerRef);

    return () => {
      // cleanup
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-16 px-8 lg:px-32 mt-8">
      <h2 className="text-2xl md:text-4xl font-serif uppercase font-medium mb-8 mt-8">
        Government Institutions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((institution, index) => (
          <div
            key={institution.id}
            ref={(el: any) => (cardRefs.current[index] = el)}
            className="rounded-lg shadow-md p-6 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Title */}
            <h3 className="text-xl font-serif mb-2">{institution.title}</h3>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {institution.description}
            </p>

            {/* Contact Information */}
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              {institution.phone && (
                <li className="flex items-center">
                  <FaPhoneAlt className="text-main mr-2" />
                  <span>{institution.phone}</span>
                </li>
              )}
              {institution.email && (
                <li className="flex items-center">
                  <FaEnvelope className="text-main mr-2" />
                  <a
                    href={`mailto:${institution.email}`}
                    className="hover:underline"
                  >
                    {institution.email}
                  </a>
                </li>
              )}
              {institution.website && (
                <li className="flex items-center">
                  <FaGlobe className="text-main mr-2" />
                  <a
                    href={institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {institution.website.replace("https://", "")}
                  </a>
                </li>
              )}
            </ul>

            {/* Image at the bottom with fixed height and object-cover */}
            <div className="mt-auto">
              <img
                src={institution.image}
                alt={institution.title}
                className="w-full h-48 object-cover object-center rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GovtInstitutions;
