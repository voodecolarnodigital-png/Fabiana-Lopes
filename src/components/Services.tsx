import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../firebase";

const defaultServices = [
  {
    id: "default-1",
    title: "Ombrè shadow",
    description: "Técnica exclusiva para quem busca sobrancelhas definidas e naturais. O método europeu Ombrè shadow cria um degradê suave, ideal para preencher falhas com elegância e durabilidade.",
    image: "./sombra-ombre-novo.jpg?v=2",
    tags: ["Definição", "Naturalidade"]
  },
  {
    id: "default-2",
    title: "Micropigmentação palpebras",
    description: "Olhar marcante e prático 24h por dia. Realizamos desde o delineado clássico até o efeito Soft Shadow (esfumado), ideal para realçar a base dos cílios com naturalidade e elegância, sem borrar.",
    image: "./palpebras-novo.png",
    tags: ["Praticidade", "Elegância"]
  },
  {
    id: "default-3",
    title: "Micropigmentação labial (Lips)",
    description: "Definição de contorno e revitalização da cor dos lábios. Proporciona um aspecto saudável, com efeito \"gloss\" ou batom, corrigindo assimetrias leves.",
    image: "./labios.png?v=1",
    tags: ["Revitalização", "Contorno"]
  },
  {
    id: "default-4",
    title: "Fio a fio Natural",
    description: "Para quem ama a naturalidade extrema. Desenhamos fios ultra finos que se misturam aos seus pelos naturais, preenchendo falhas e corrigindo o formato de forma imperceptível.",
    image: "./fio-a-fio-novo-2.png",
    tags: ["Naturalidade Extrema", "Precisão"]
  },
  {
    id: "default-5",
    title: "Remoção a Laser",
    description: "Processo seguro para remover ou clarear procedimentos antigos e mal sucedidos, preparando a pele para um novo design perfeito e limpo.",
    image: "./remocao-a-laser.png?v=1",
    tags: ["Segurança", "Correção"]
  },
  {
    id: "default-6",
    title: "SOS Correção",
    description: "Especialista em corrigir casos complexos que outros recusam. Com 20 anos de técnica, neutralizamos tons esverdeados, alaranjados, azulados e cinzas. Recuperamos pigmentos profundos com a segurança e a maestria de quem é referência internacional.",
    image: "./correcao-cor.png?v=1",
    tags: ["Casos Complexos", "Referência"]
  }
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    const q = query(collection(db, 'services'), orderBy('order', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const servicesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as any[];
        setServices(servicesData);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'services');
    });

    return () => unsubscribe();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="servicos" className="pt-8 pb-16 md:pb-32 bg-surface-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary tracking-widest text-xs font-bold block mb-4 uppercase">Serviços</span>
            <h2 className="text-3xl md:text-[46px] text-on-surface leading-tight font-juana italic whitespace-normal md:whitespace-nowrap">
              Excelência em Micropigmentação
            </h2>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85vw] sm:min-w-[350px] md:min-w-[400px] snap-start"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-xl bg-surface-variant">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Tags at the top */}
                <div className="absolute top-0 left-0 right-0 p-8 flex flex-wrap gap-2 z-10">
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} translate="no" className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/50">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content at the bottom */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <h3 className="text-2xl md:text-3xl text-white mb-3 font-headline italic leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm leading-relaxed transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg bg-white"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg bg-white"
            aria-label="Próximo"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
