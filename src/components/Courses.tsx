import { motion } from "motion/react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const courses = [
  {
    title: "Correção de Cor",
    description: "Técnicas avançadas de colorimetria para correção e neutralização segura de cores indesejadas.",
    image: "/Corre%C3%A7%C3%A3o%20de%20Cor.png",
    link: "https://pay.kiwify.com.br/sG3aoFP",
    tags: ["Colorimetria", "Correção"]
  },
  {
    title: "O Segredo da Ombrè",
    description: "Descubra todos os segredos para criar o efeito Ombrè perfeito, com transições suaves e design impecável.",
    image: "/O%20Segredo%20da%20Ombre.png",
    link: "https://pay.kiwify.com.br/TKS05Xa",
    tags: ["Sobrancelhas", "Ombrè"]
  },
  {
    title: "O PORTAL - método SOS Correção",
    description: "Acesso completo ao método SOS Correção. Torne-se referência resolvendo os casos mais complexos do mercado.",
    image: "/O%20PORTAL%20-%20m%C3%A9todo%20SOS%20Corre%C3%A7%C3%A3o.png",
    link: "https://pay.kiwify.com.br/2fNtJuM",
    tags: ["SOS", "Avançado"]
  },
  {
    title: "Camuflagem Ilusionism HD",
    description: "Aprenda a técnica de camuflagem com alta definição para entregar resultados imperceptíveis e restaurar a autoestima.",
    image: "/Camuflagem%20Ilusionism%20HD.png",
    link: "https://pay.kiwify.com.br/l2JHBVo",
    tags: ["Camuflagem", "Estética"]
  },
  {
    title: "Imersão Shadow 3RS",
    description: "Domine a técnica Shadow 3RS para sobrancelhas perfeitas e resultados incrivelmente naturais.",
    image: "/Imers%C3%A3o%20Shadow%203RS.png",
    link: "https://pay.kiwify.com.br/DuoIDeT",
    tags: ["Sobrancelhas", "Shadow"]
  },
  {
    title: "IMERSÃO IVP",
    description: "Imersão completa no método IVP para transformar seus resultados e elevar o nível dos seus atendimentos.",
    image: "/IMERS%C3%83O%20IVP.png",
    link: "https://pay.kiwify.com.br/z0ACbUf",
    tags: ["Imersão", "Método IVP"]
  },
  {
    title: "Projeto 100% - Agenda Cheia",
    description: "Estratégias validadas de marketing, posicionamento e captação para lotar sua agenda de clientes todos os meses.",
    image: "/Projeto%20100%25%20-%20Agenda%20Cheia.png",
    link: "https://pay.kiwify.com.br/yTZtGUO",
    tags: ["Negócios", "Marketing"]
  }
];

export default function Courses() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="cursos" className="py-24 bg-[#1A0E0A] text-white overflow-hidden">
      <div className="max-w-[100vw] mx-auto">
        <div className="px-6 md:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-2 block"
            >
              Área Educacional
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-[40px] font-juana italic mb-2"
            >
              Domine as técnicas que transformam vidas e carreiras.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg max-w-2xl"
            >
              O espaço dedicado a profissionais que buscam o próximo nível. Explore nossas especializações e aprenda os protocolos de alta performance que tornaram a clínica Fabiana Lopes uma referência em resultados naturais.
            </motion.p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 px-6 md:px-12 pb-12 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-none w-[280px] md:w-[320px] lg:w-[380px] snap-start group"
              >
                <div className="bg-[#2A1610] rounded-md overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:z-10 relative border border-white/5 hover:border-white/20 flex flex-col h-full">
                  {/* Thumbnail */}
                  <div className="aspect-square relative overflow-hidden bg-[#1A0E0A]">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A1610] via-transparent to-transparent opacity-80" />
                  </div>
                    
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">{course.title}</h3>
                    <p className="text-white/70 text-sm mb-5 line-clamp-2 min-h-[40px]">{course.description}</p>
                    
                    <div className="flex items-center gap-3 mt-auto">
                      <a 
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-bold transition-colors"
                      >
                        <Play className="w-4 h-4 fill-black" /> Saiba mais
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Fade edges for carousel */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#1A0E0A] to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#1A0E0A] to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* Navigation Buttons (Bottom Right) */}
        <div className="flex justify-end gap-3 px-6 md:px-12 mt-4">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
