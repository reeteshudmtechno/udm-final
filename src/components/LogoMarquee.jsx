import React from "react";

import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.png";
import logo10 from "../assets/10.png";
import logo11 from "../assets/11.png";

export default function LogoMarquee() {
  const logos = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10, logo11
  ];

  return (
    <section className="py-16 border-b-4 border-black overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-sm font-bold tracking-widest uppercase text-zinc-500">
          Trusted by industry leaders
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-16 grayscale hover:grayscale-0 transition-all duration-500">
          
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-12 w-auto object-contain flex-shrink-0"
            />
          ))}

        </div>
      </div>

    </section>
  );
}