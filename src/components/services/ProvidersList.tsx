// ProvidersList.tsx
"use client";

import { useRef, useEffect } from "react";
import ProvidersItem, { Provider } from "./ProvidersItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { providersData } from "./providersData";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ProvidersListProps {
  slug: any;
}

const ProvidersList: React.FC<ProvidersListProps> = ({ slug }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProviders = providersData.filter(
    (provider: any) => provider.slug.toLowerCase() === slug.toLowerCase()
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Select all child elements with the class 'provider-card'
    const cards = gsap.utils.toArray<HTMLElement>(".provider-card");

    gsap.set(cards, { opacity: 0, y: 50 });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      },
      onLeave: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      },
      onEnterBack: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      },
      start: "top 80%",
      // markers: true, // Uncomment for debugging
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container mx-auto py-8" ref={containerRef}>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProviders.map((provider: any) => (
          <div key={provider.id} className="provider-card">
            <ProvidersItem provider={provider} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProvidersList;
