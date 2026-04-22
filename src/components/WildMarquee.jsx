import React from "react";

export default function WildMarquee() {
  const baseItems = [
    "Digital Strategy",
    "Social Media Marketing",
    "SEO Optimization",
    "Performance Marketing",
    "Web Development",
    "Content Creation",
    "Google Ranking",
    "Meta Ads",
    "Brand Building",
    "Lead Generation",
    "Email Marketing",
    "Conversion Optimization",
  ];

  // Triple duplication for ultra-smooth loop
  const items = [...baseItems, ...baseItems, ...baseItems];

  return (
    <div className="w-full overflow-hidden bg-blue-600 border-y-4 border-black py-4 mt-12 -rotate-1 relative z-20 shadow-[0_8px_0_0_black]">

      <div className="flex w-max animate-marquee-fast whitespace-nowrap hover:[animation-play-state:paused]">
        {items.map((label, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-3xl md:text-5xl font-black tracking-tight uppercase text-white shrink-0 px-8"
          >
            {label}
            <span className="text-white text-2xl md:text-4xl">★</span>
          </span>
        ))}
      </div>

    </div>
  );
}