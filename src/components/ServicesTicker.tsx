import { motion } from "motion/react";

export default function ServicesTicker() {
  const items = [
    "Ombrè Shadow",
    "Correção de Cor",
    "Correção de Design",
    "Micro Pálpebras",
    "Micro Labial",
    "Fio a Fio",
    "Remoção a Laser"
  ];

  // We duplicate the array to create a seamless infinite scroll effect
  const tickerItems = [...items, ...items, ...items, ...items];

  return (
    <section className="w-full overflow-hidden bg-surface-low py-3 flex items-center relative z-20">
      <div className="flex whitespace-nowrap animate-scroll-left-slow w-max">
        {/* First Set */}
        <div className="flex shrink-0 items-center">
          {tickerItems.map((item, index) => (
            <div key={`set1-${index}`} className="flex items-center">
              <span className="font-juana italic text-sm md:text-base uppercase tracking-[0.15em] font-bold bg-gradient-to-r from-[#3d2014] via-[#c9834c] to-[#3d2014] bg-clip-text text-transparent px-4 md:px-8">
                {item}
              </span>
              <span className="text-primary/30 text-[8px] md:text-[10px] px-1">●</span>
            </div>
          ))}
        </div>
        {/* Second Set (identical for seamless loop) */}
        <div className="flex shrink-0 items-center">
          {tickerItems.map((item, index) => (
            <div key={`set2-${index}`} className="flex items-center">
              <span className="font-juana italic text-sm md:text-base uppercase tracking-[0.15em] font-bold bg-gradient-to-r from-[#3d2014] via-[#c9834c] to-[#3d2014] bg-clip-text text-transparent px-4 md:px-8">
                {item}
              </span>
              <span className="text-primary/30 text-[8px] md:text-[10px] px-1">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
