import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-36 md:pt-32 pb-0 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex-none"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 -tracking-widest bg-gradient-to-r from-[#3d2014] via-[#c9834c] to-[#3d2014] bg-clip-text text-transparent">
            A transformação<br className="hidden sm:block" /> que você merece
          </h1>
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-primary font-headline text-2xl italic">Fabiana Lopes</p>
              <span className="text-primary tracking-[0.2em] font-bold text-[10px] block uppercase mt-1">
                Autoridade Internacional com mais de 20 anos
              </span>
            </div>
            <p className="text-on-surface-variant text-base sm:text-lg max-w-xl leading-relaxed">
              Pioneira em Ombrè Shadow e especialista em casos complexos no Brasil. Criadora do Método SOS, a solução definitiva para a neutralização de tons indesejados na micropigmentação.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
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
                Reservar minha vaga
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex-1 flex justify-center items-end h-full mt-8 lg:mt-0"
        >
          {/* Elegant Glowing Backdrop (Light) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-[#c9834c] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-white rounded-full filter blur-[60px] opacity-80"></div>
          
          {/* Subtle Ring Accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] border border-[#c9834c]/20 rounded-full -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] border border-[#c9834c]/10 rounded-full -z-10"></div>

          {/* Cutout Image with Drop Shadow */}
          <img
            className="relative z-20 w-full max-w-[450px] lg:max-w-[550px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(61,32,20,0.5)]"
            src="/fabi-principal.png?v=1"
            alt="Fabiana Lopes"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
