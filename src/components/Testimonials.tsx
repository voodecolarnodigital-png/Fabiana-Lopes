import { motion, AnimatePresence } from "motion/react";
import { Star, X, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../firebase";

const defaultVideoTestimonials = [
  {
    id: "default-1",
    name: "Cliente Satisfeita",
    image: "/capa-depoimento-1.png",
    videoUrl: "https://www.youtube.com/embed/3n64vExptwk?autoplay=1&playsinline=1&rel=0",
    active: true
  },
  {
    id: "default-2",
    name: "Cliente Satisfeita",
    image: "/capa-depoimento-2.png",
    videoUrl: "https://www.youtube.com/embed/ToTAWiHHfLo?autoplay=1&playsinline=1&rel=0",
    active: true
  },
  {
    id: "default-3",
    name: "Cliente Satisfeita",
    image: "/capa-depoimento-3.png",
    videoUrl: "https://www.youtube.com/embed/PC6IGSd83Fw?autoplay=1&playsinline=1&rel=0",
    active: true
  }
];

const testimonials = [
  { name: "Mariana S.", text: "A Fabiana é uma artista! Minhas sobrancelhas ficaram perfeitas e super naturais." },
  { name: "Beatriz L.", text: "Melhor investimento que já fiz na minha autoestima. Atendimento impecável." },
  { name: "Carla M.", text: "Estava com medo de ficar artificial, mas o resultado superou todas as expectativas." },
  { name: "Juliana R.", text: "Ambiente maravilhoso e profissionalismo nota mil. Recomendo de olhos fechados." },
  { name: "Fernanda O.", text: "A técnica dela é única. Já fiz em outros lugares, mas nada se compara ao trabalho da Fabi." },
  { name: "Amanda K.", text: "Minha boca ficou com uma cor linda e natural. Amei o resultado da revitalização labial." },
  { name: "Letícia P.", text: "Profissional extremamente detalhista. O design de sobrancelhas mudou meu rosto." },
  { name: "Patrícia G.", text: "Fiz a micropigmentação há 6 meses e ainda está perfeita. Qualidade incrível." },
  { name: "Gabriela V.", text: "Atendimento VIP do início ao fim. Me senti muito segura com a Fabiana." },
  { name: "Renata C.", text: "O Studio é lindo e a higiene é impecável. Isso me passou muita confiança." },
  { name: "Camila B.", text: "Recuperei minha confiança após o procedimento. Obrigada, Fabiana!" },
  { name: "Vanessa D.", text: "Sobrancelhas dos sonhos! O desenho ficou harmônico com meu rosto." },
  { name: "Tatiane S.", text: "A melhor micropigmentadora que já conheci. Técnica e sensibilidade andam juntas." },
  { name: "Priscila L.", text: "Fiz o delineado de olhos e ficou super delicado. Acordo pronta todos os dias!" },
  { name: "Mônica F.", text: "Excelente profissional. Explica todo o processo e tira todas as dúvidas." },
  { name: "Cláudia A.", text: "Resultado muito natural. Ninguém diz que fiz micro, apenas que estou mais bonita." },
  { name: "Silvana M.", text: "Vale cada centavo. O trabalho é de uma delicadeza sem igual." },
  { name: "Aline R.", text: "A Fabiana é muito atenciosa e o resultado ficou exatamente como eu queria." },
  { name: "Jéssica T.", text: "Studio super aconchegante e o procedimento foi praticamente indolor." },
  { name: "Isabela N.", text: "Minha autoestima foi renovada. Recomendo para todas as minhas amigas." },
];

export default function Testimonials() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedData, setSelectedData] = useState<any>(null);
  const [playingInline, setPlayingInline] = useState<string | number | null>(null);
  const [videoTestimonials, setVideoTestimonials] = useState(defaultVideoTestimonials);

  useEffect(() => {
    const q = query(collection(db, 'testimonials'), orderBy('order', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const testimonialsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as any[];
        setVideoTestimonials(testimonialsData);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'testimonials');
    });

    return () => unsubscribe();
  }, []);

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handleCardClick = (item: any, id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
      setSelectedData(null);
    } else {
      setSelectedId(id);
      setSelectedData(item);
    }
  };

  const pauseClass = selectedId ? 'pause-animation' : '';

  return (
    <section 
      id="depoimentos" 
      className="pt-16 pb-24 md:py-24 bg-surface overflow-hidden relative"
    >
      {/* SVG Definitions for Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#FDE08B" offset="0%" />
            <stop stopColor="#D4AF37" offset="50%" />
            <stop stopColor="#8A651B" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          >
            Nossos Clientes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[46px] font-juana italic text-on-surface mb-6"
          >
            O que dizem sobre nós
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg"
          >
            Mais de 5.000 procedimentos realizados com excelência e carinho.
          </motion.p>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-24">
          {videoTestimonials.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.id * 0.1 }}
              className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-surface border border-outline-variant/20 group"
            >
              {playingInline === item.id ? (
                <>
                  <iframe
                    src={item.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full absolute inset-0 z-10"
                  ></iframe>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none z-20">
                    <button 
                      onClick={() => setPlayingInline(null)}
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/60 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)] pointer-events-auto"
                      title="Pausar vídeo"
                    >
                      <Pause className="w-5 h-5 fill-white" />
                    </button>
                    <div className="flex gap-1 mt-1 opacity-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3" />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img src={item.image} alt="Depoimento em vídeo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6">
                    {item.active && (
                      <button 
                        onClick={() => setPlayingInline(item.id)}
                        className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/60 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                      >
                        <Play className="w-5 h-5 ml-1 fill-white" />
                      </button>
                    )}
                    {item.active && (
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* First row moving in opposite direction */}
      <div className="relative flex overflow-x-hidden">
        <div
          className={`flex gap-6 whitespace-nowrap py-4 animate-scroll-left-slow ${pauseClass}`}
          style={{ willChange: "transform" }}
        >
          {duplicatedTestimonials.map((item, idx) => {
            const id = `row1-${idx}`;
            return (
              <motion.div
                key={id}
                layoutId={id}
                onClick={() => handleCardClick(item, id)}
                whileHover={{ scale: 1.02 }}
                className="w-[300px] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/10 cursor-pointer hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-6 whitespace-normal leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-on-surface">{item.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Second row moving in opposite direction */}
      <div className="relative flex overflow-x-hidden mt-6">
        <div
          className={`flex gap-6 whitespace-nowrap py-4 animate-scroll-right-slow ${pauseClass}`}
          style={{ willChange: "transform" }}
        >
          {duplicatedTestimonials.map((item, idx) => {
            const id = `row2-${idx}`;
            return (
              <motion.div
                key={id}
                layoutId={id}
                onClick={() => handleCardClick(item, id)}
                whileHover={{ scale: 1.02 }}
                className="w-[300px] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/10 cursor-pointer hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-6 whitespace-normal leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-on-surface">{item.name}</span>
                </div>
              </motion.div>
            );
          })}
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
            Quero agendar agora
          </a>
        </motion.div>
      </motion.div>

      {/* Zoomed Card Overlay */}
      <AnimatePresence>
        {selectedId && selectedData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setSelectedId(null); setSelectedData(null); }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-lg bg-white p-12 rounded-[3rem] shadow-2xl border border-outline-variant/10 z-10"
            >
              <button
                onClick={() => { setSelectedId(null); setSelectedData(null); }}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all"
              >
                <X size={20} />
              </button>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-on-surface-variant italic mb-10 text-xl leading-relaxed">
                "{selectedData.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  {selectedData.name.charAt(0)}
                </div>
                <div>
                  <span className="font-bold text-on-surface text-lg block">{selectedData.name}</span>
                  <span className="text-primary text-sm uppercase tracking-widest font-semibold">Cliente Verificada</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
