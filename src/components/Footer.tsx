import { Instagram, Facebook, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isSOSOpen, setIsSOSOpen] = useState(false);

  useEffect(() => {
    const handleOpenSOS = () => setIsSOSOpen(true);
    window.addEventListener('open-sos-modal', handleOpenSOS);
    return () => window.removeEventListener('open-sos-modal', handleOpenSOS);
  }, []);

  const termsText = "Ao acessar o site de Fabiana Lopes, você concorda em cumprir estes termos de serviço. O conteúdo deste site, incluindo textos e imagens de casos reais, é de propriedade exclusiva e destinado apenas para fins informativos sobre os serviços de micropigmentação e estética facial. Os resultados dos procedimentos podem variar de acordo com cada organismo e histórico de pele. Agendamentos estão sujeitos à disponibilidade de agenda e política de cancelamento da clínica.";
  const privacyText = "Sua privacidade é nossa prioridade. Os dados coletados através de nossos formulários ou WhatsApp são utilizados exclusivamente para o agendamento de consultas e envio de informações sobre os procedimentos de Fabiana Lopes. Não compartilhamos suas informações com terceiros. Este site utiliza cookies para melhorar sua experiência de navegação e otimizar nossas campanhas de atendimento. Ao continuar navegando, você concorda com nossa coleta de dados mínima e segura.";

  return (
    <footer className="bg-[#efeeec] pt-24 pb-12 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/logo.png?v=1" 
              alt="Fabiana Lopes Logo" 
              className="h-16 w-auto object-contain mb-6"
              referrerPolicy="no-referrer"
            />
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Referência em Casos Complexos e Naturalidade. Neutralização de tons indesejados e design de alta performance. Fabiana Lopes com mais de 20 anos de maestria técnica entre a Europa e o Brasil.
            </p>
          </div>

          <div>
            <h6 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-8">Serviços</h6>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li>Sombra Ombrè</li>
              <li>SOS Correção de Cor</li>
              <li>Micropigmentação de Palpebras</li>
              <li>Micropigmentação de Labios</li>
              <li>Despigmentação</li>
            </ul>
          </div>

          <div>
            <h6 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-8">Institucional</h6>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Mim</a></li>
              <li>
                <button 
                  onClick={() => setIsSOSOpen(true)}
                  className="hover:text-primary transition-colors text-left"
                >
                  Método SOS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-primary transition-colors text-left"
                >
                  Privacidade
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsTermsOpen(true)}
                  className="hover:text-primary transition-colors text-left"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-8">Onde nos Encontrar</h6>
            <div className="space-y-4 text-on-surface-variant text-sm">
              <a 
                href="https://www.google.com/maps/place/Fabiana+Lopes+Clinic+Micropigmenta%C3%A7%C3%A3o+e+Est%C3%A9tica+%7C+Europe+%26+Brazil/@-23.5274974,-46.7969336,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef7a53085d433:0x536da5cc2b9dde01!8m2!3d-23.5274974!4d-46.7969336!16s%2Fg%2F11f3y_y6_z?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <span className="font-bold block text-on-surface mb-1 group-hover:text-primary transition-colors">Endereço:</span>
                <p className="group-hover:text-primary transition-colors">
                  R. Batista da Mata, 45 - Santana<br />
                  São Paulo - SP, 02404-110
                </p>
              </a>
              <p>
                <span className="font-bold block text-on-surface mb-1">Telefone:</span>
                (11) 99900-0658
              </p>
              <div className="pt-4">
                <span className="font-bold block text-on-surface mb-3">Redes Sociais:</span>
                <div className="flex gap-3">
                  <a 
                    href="https://www.instagram.com/fablops/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://www.facebook.com/fabianalopesacademy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://wa.me/5511999000658?text=Olá!+Vi+o+site+e+quero+garantir+meu+horário+com+a+Fabiana+agora+em+abril." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-outline-variant/10 text-center">
          <p className="text-on-surface-variant text-xs">
            © 2024 Fabiana Lopes Spa Brow & Face. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Modal Termos de Uso */}
      <AnimatePresence>
        {isTermsOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTermsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-3xl font-headline italic text-on-surface">Termos de Uso</h3>
                  <button 
                    onClick={() => setIsTermsOpen(false)}
                    className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                  <p className="text-on-surface-variant leading-relaxed text-lg italic">
                    {termsText}
                  </p>
                </div>
                <div className="mt-10 flex justify-end">
                  <button 
                    onClick={() => setIsTermsOpen(false)}
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal Política de Privacidade */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-3xl font-headline italic text-on-surface">Política de Privacidade</h3>
                  <button 
                    onClick={() => setIsPrivacyOpen(false)}
                    className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                  <p className="text-on-surface-variant leading-relaxed text-lg italic">
                    {privacyText}
                  </p>
                </div>
                <div className="mt-10 flex justify-end">
                  <button 
                    onClick={() => setIsPrivacyOpen(false)}
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Preload SOS Images */}
      <div className="hidden">
        <img src="/cart%C3%A3o%201%20antes.png?v=2" alt="preload" />
        <img src="/cart%C3%A3o%201%20depois.png?v=2" alt="preload" />
        <img src="/cart%C3%A3o%202%20antes.png?v=2" alt="preload" />
        <img src="/cart%C3%A3o%202%20depois.png?v=2" alt="preload" />
      </div>

      {/* Modal Método SOS */}
      <AnimatePresence>
        {isSOSOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSOSOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setIsSOSOpen(false)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all shadow-lg border border-outline-variant/10"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto custom-scrollbar">
                <div className="p-8 md:p-16">
                  <div className="max-w-3xl mx-auto">
                    <header className="mb-12">
                      <h2 className="text-3xl md:text-[46px] font-juana italic text-on-surface mb-4 leading-tight whitespace-normal md:whitespace-nowrap">
                        O Método SOS: A Ciência da Reconstrução
                      </h2>
                      <p className="text-primary font-bold tracking-widest text-sm uppercase">
                        Onde a Técnica Encontra a Arte da Correção
                      </p>
                    </header>

                    <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg">
                      <p>
                        O Método SOS não é apenas um procedimento de micropigmentação; é um protocolo de alta complexidade desenvolvido por Fabiana Lopes ao longo de duas décadas entre a Europa e o Brasil. Ele foi criado especificamente para salvar sobrancelhas que foram dadas como "sem solução" por outros especialistas.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 items-start">
                        <BeforeAfterSlider 
                          beforeImage="/cart%C3%A3o%201%20antes.png?v=2" 
                          afterImage="/cart%C3%A3o%201%20depois.png?v=2" 
                          zoom={1.1}
                          beforeObjectPosition="center 35%"
                          afterObjectPosition="center 35%"
                        />
                        <BeforeAfterSlider 
                          beforeImage="/cart%C3%A3o%202%20antes.png?v=2" 
                          afterImage="/cart%C3%A3o%202%20depois.png?v=2" 
                          zoom={1.1}
                          beforeObjectPosition="center 55%"
                          afterObjectPosition="center 52%"
                        />
                      </div>

                      <h3 className="text-3xl font-headline italic text-on-surface mt-12">
                        Como funciona a Neutralização?
                      </h3>

                      <p>
                        Diferente das técnicas comuns que apenas tentam "cobrir" o erro com mais pigmento (o que gera o aspecto pesado e artificial), o Método SOS atua em três pilares:
                      </p>

                      <ul className="space-y-6">
                        <li className="flex gap-4">
                          <span className="text-primary font-headline italic text-2xl">01</span>
                          <div>
                            <strong className="text-on-surface block mb-1">Colorimetria Avançada:</strong>
                            Identificamos a base residual (azul, verde, cinza ou laranja) e aplicamos o pigmento oposto exato para neutralizar o tom indesejado, devolvendo o castanho natural.
                          </div>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-primary font-headline italic text-2xl">02</span>
                          <div>
                            <strong className="text-on-surface block mb-1">Controle de Profundidade:</strong>
                            Trabalhamos na camada exata da derme para não causar danos ao tecido, mesmo em peles que já sofreram traumas de procedimentos antigos.
                          </div>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-primary font-headline italic text-2xl">03</span>
                          <div>
                            <strong className="text-on-surface block mb-1">Restauração do Design:</strong>
                            Mais do que cor, devolvemos o formato ideal que respeita a anatomia do seu rosto, removendo o peso visual de designs saturados.
                          </div>
                        </li>
                      </ul>

                      <div className="bg-surface-low p-8 rounded-3xl border border-outline-variant/10 mt-12">
                        <h4 className="text-2xl font-headline italic text-on-surface mb-4">Segurança em Primeiro Lugar</h4>
                        <p className="text-base italic">
                          Utilizamos pigmentos de alta performance com certificação internacional, garantindo que a cor neutralizada permaneça estável e não sofra novas mutações com o passar do tempo.
                        </p>
                      </div>

                      <div className="pt-12 pb-8 flex justify-center">
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
                          className="relative p-[2px] rounded-full overflow-hidden group shadow-2xl"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#D4AF37_360deg)] opacity-100"
                          />
                          <a 
                            href="https://wa.me/5511999000658?text=Olá!+Vi+o+site+e+quero+garantir+meu+horário+com+a+Fabiana+agora+em+abril." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative z-10 block bg-primary text-white px-6 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-[11px] sm:text-lg hover:bg-primary-dim transition-all text-center whitespace-nowrap"
                          >
                            QUERO UMA AVALIAÇÃO DO MEU CASO
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
