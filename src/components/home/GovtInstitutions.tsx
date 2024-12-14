import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const GovtInstitutions = () => {
  const containerRef = useRef(null);

  const data = [
    {
      id: 1,
      title: "Mathiveri Council",
      description:
        "The Mathiveri Council is the governing body responsible for overseeing local administration and community development on Mathiveri Island in the Maldives. It plays a key role in managing public services, infrastructure, and local policies, ensuring the well-being of the island’s residents and visitors.",
      phone: "+960 6660058",
      email: "info@mathiveri.gov.mv",
      website: "https://mathiveri.gov.mv",
      image: "/govt/council.jpg",
    },
    {
      id: 2,
      title: "Mathiveri Health Centre",
      description:
        "The Mathiveri Health Centre provides essential healthcare services to the island’s residents and visitors, offering medical treatment, ambulance service, emergency care, and health education. It plays a crucial role in promoting community health and well-being.",
      phone: "+960 6660858",
      email: "aa.mathiverihc@health.gov.mv",
      website: null,
      image: "/govt/health.jpg",
    },
    {
      id: 3,
      title: "Mathiveri Police Station",
      description:
        "The Mathiveri Police Station ensures law and order on the island, providing security and maintaining peace. It handles local law enforcement, addressing community concerns and promoting safety for residents and visitors.",
      phone: "+960 9994875",
      email: "info@police.gov.mv",
      website: null,
      image: "/govt/police.jpg",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-white py-16 px-8 lg:px-32 min-h-screen flex flex-col mt-20"
    >
      {data.map((institution) => (
        <div
          key={institution.id}
          className="institution-section flex flex-col lg:flex-row items-start justify-between min-h-screen"
        >
          {/* Section Title */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-between">
              {/* Left Section */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-base font-serif uppercase font-medium tracking-wide">
                  Government Institutions
                </h2>
                <h1 className="text-6xl font-serif leading-tight mt-2">
                  <span className="font-light">
                    {String(institution.id).padStart(2, "0")} / 03{" "}
                  </span>
                  {institution.title.split(" ")[0]}{" "}
                  <span className="italic">
                    {institution.title.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
              </div>

              {/* Right Section */}
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {institution.description}
                </p>

                {/* Contact Information */}
                <div className="mt-8">
                  <ul className="space-y-4">
                    {institution.phone && (
                      <li className="flex items-center text-gray-700">
                        <FaPhoneAlt className="text-main mr-4" />
                        <span>{institution.phone}</span>
                      </li>
                    )}
                    {institution.email && (
                      <li className="flex items-center text-gray-700">
                        <FaEnvelope className="text-main mr-4" />
                        <a
                          href={`mailto:${institution.email}`}
                          className="hover:underline"
                        >
                          {institution.email}
                        </a>
                      </li>
                    )}
                    {institution.website && (
                      <li className="flex items-center text-gray-700">
                        <FaGlobe className="text-main mr-4" />
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
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center mt-12">
              <img
                src={institution.image}
                alt={institution.title}
                className="w-full lg:w-auto lg:max-w-4xl rounded-lg shadow-lg"
                style={{ width: "500px", height: "300px" }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GovtInstitutions;
