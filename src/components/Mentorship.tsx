import { motion } from "motion/react";

const galleryItemsRow1 = [
  "./mentora-png1.png?t=3",
  "./mentora-gif-1.gif?t=3",
  "./mentora-png-2.png?t=3",
  "./mentora-2.gif?t=3",
  "./mentora-png-3.png?t=3",
];

const galleryItemsRow2 = [
  "./cur-png1.png?t=3",
  "./cur-png2.png?t=3",
  "./cur-png4.png?t=3",
  "./cur-png5.png?t=3",
  "./cur-png6.png?t=3",
];

export default function Mentorship() {
  const duplicatedRow1 = [...galleryItemsRow1, ...galleryItemsRow1];
  const duplicatedRow2 = [...galleryItemsRow2, ...galleryItemsRow2];

  return (
    <section id="mentoria" className="py-24 bg-surface-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          >
            Fabiana Mentora
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[46px] font-juana italic text-on-surface mb-6"
          >
            Cursos, Mentorias e Palestras
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg"
          >
            Compartilhando conhecimento e transformando vidas. Acompanhe um pouco dos nossos encontros, aulas presenciais e palestras pelo Brasil e pelo mundo.
          </motion.p>
        </div>
      </div>

      {/* Infinite Carousel Row 1 */}
      <div className="relative flex overflow-x-hidden mb-6">
        <div
          className="flex gap-6 whitespace-nowrap py-4 animate-scroll-left-slow hover:pause-animation"
          style={{ willChange: "transform" }}
        >
          {duplicatedRow1.map((src, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[280px] md:w-[400px] h-[200px] md:h-[280px] flex-shrink-0 rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10"
            >
              <img src={src} alt="Mentoria e Palestras" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Carousel Row 2 */}
      <div className="relative flex overflow-x-hidden">
        <div
          className="flex gap-6 whitespace-nowrap py-4 animate-scroll-right-slow hover:pause-animation"
          style={{ willChange: "transform" }}
        >
          {duplicatedRow2.map((src, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[280px] md:w-[400px] h-[200px] md:h-[280px] flex-shrink-0 rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10"
            >
              <img src={src} alt="Mentoria e Palestras" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <motion.div 
          animate={{
            scale: [1, 1.02, 1],
            boxShadow: [
              "0 0 15px rgba(212, 175, 55, 0.2)",
              "0 0 30px rgba(212, 175, 55, 0.5)",
              "0 0 15px rgba(212, 175, 55, 0.2)"
            ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative p-[2px] rounded-full overflow-hidden group shadow-2xl inline-block"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#D4AF37_360deg)] opacity-100"
          />
          <a 
            href="https://wa.me/5511999000658?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20no%20Google%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Fabiana."
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 block bg-gradient-to-r from-[#3d2014] to-[#c9834c] text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_20px_50px_rgba(61,32,20,0.3)] transition-all duration-500 text-center"
          >
            Quero marcar uma Avaliação
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
