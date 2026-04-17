import { motion } from "motion/react";
import { Award, Sparkles, CalendarCheck } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-about-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-primary mb-12 leading-tight font-juana italic">
              Quem é Fabiana Lopes
            </h2>

            <div className="space-y-10">
              {/* Topic 1 */}
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-2 font-sans uppercase tracking-wider">
                    Autoridade Internacional e Pioneira no Brasil
                  </h4>
                  <p className="text-on-surface-variant/80 text-sm leading-relaxed font-sans max-w-xl">
                    Com mais de 20 anos de maestria, Fabiana Lopes trouxe a técnica Ombrè Shadow para o Brasil. Sua expertise é reconhecida além das fronteiras, com uma carreira consolidada em técnicas europeias exclusivas.
                  </p>
                </div>
              </div>

              {/* Topic 2 */}
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-2 font-sans uppercase tracking-wider">
                    Criadora do Método Próprio SOS Correção
                  </h4>
                  <p className="text-on-surface-variant/80 text-sm leading-relaxed font-sans max-w-xl">
                    Especialista em casos complexos e recusados por outros profissionais. Neutralizamos tons indesejados e pigmentos profundos considerados impossíveis por especialistas.
                  </p>
                </div>
              </div>

              {/* Topic 3 */}
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-2 font-sans uppercase tracking-wider">
                    Atendimentos no Brasil Iniciados (Vagas Limitadas)
                  </h4>
                  <p className="text-on-surface-variant/80 text-sm leading-relaxed font-sans max-w-xl">
                    Recém-chegada de uma temporada na Suíça. Aproveite a oportunidade única de agendar sua avaliação com a Fabiana agora em abril.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center lg:items-end"
          >
            {/* Square frame with golden drop shadow and blur */}
            <div className="relative w-full max-w-[420px] aspect-square mx-auto lg:mx-0">
              {/* Golden Blur Background */}
              <div className="absolute -inset-4 bg-[#c9834c] rounded-3xl filter blur-[50px] opacity-30"></div>
              
              {/* Square frame with rotating gradient border */}
              <div className="relative w-full h-full rounded-2xl p-[3px] overflow-hidden shadow-[0_20px_50px_rgba(61,32,20,0.15)] z-10">
                {/* Rotating Gradient Background (Slower rotation: 12s) */}
                <div className="absolute inset-[-50%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#c9834c_0%,transparent_25%,transparent_50%,#c9834c_75%,transparent_100%)] opacity-80" />
                
                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden z-10 bg-about-bg">
                  <img
                    className="w-full h-full object-cover object-top"
                    src="./fabiana-perfil.png?v=1"
                    alt="Fabiana Lopes"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 w-full max-w-[420px] flex justify-center"
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
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-sos-modal'))}
                  className="relative z-10 block bg-gradient-to-r from-[#3d2014] to-[#c9834c] text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_20px_50px_rgba(61,32,20,0.3)] transition-all duration-500 text-center"
                >
                  Conheça o Método SOS
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
