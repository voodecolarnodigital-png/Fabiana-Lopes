import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "A micropigmentação dói?",
    answer: "Sabemos que cada pessoa sente de um jeito, por isso todo o procedimento é feito com muito cuidado para garantir o máximo de conforto. A maioria das clientes relata apenas um leve incômodo."
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer: "Em média, a micropigmentação dura de 8 a 18 meses, dependendo do tipo de pele, cuidados pós-procedimento e técnica utilizada. Recomendamos um retoque anual para manter a cor e o design sempre perfeitos."
  },
  {
    question: "Qual a diferença entre Microblading e Ombrè Shadow?",
    answer: "O Microblading simula fios ultra-realistas, ideal para preencher falhas pontuais. A Ombrè Shadow cria um efeito de sombreamento degradê, como uma maquiagem leve, sendo a técnica favorita da Fabiana Lopes por sua durabilidade e naturalidade em todos os tipos de pele."
  },
  {
    question: "Existe algum preparo antes do procedimento?",
    answer: "Sim. Recomendamos não consumir bebidas alcoólicas 24h antes, evitar exposição solar intensa e não realizar procedimentos agressivos (como peelings) na região nos 15 dias anteriores."
  },
  {
    question: "Quem não pode fazer a micropigmentação?",
    answer: "O procedimento é contraindicado para gestantes, pessoas com queloides na região, processos inflamatórios ativos ou que estejam fazendo uso de medicamentos anticoagulantes. Sempre realizamos uma ficha de anamnese detalhada antes de iniciar."
  },
  {
    question: "Como é o processo de cicatrização?",
    answer: "A cicatrização completa leva cerca de 30 dias. Nos primeiros dias a cor fica mais intensa e pode haver uma leve descamação. Após esse período, a cor clareia cerca de 30% a 50%, revelando o resultado final e natural."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          >
            Dúvidas Comuns
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[46px] font-juana italic text-on-surface"
          >
            Perguntas Frequentes
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-outline-variant/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-primary border-primary text-white rotate-180' : 'border-outline-variant/30 text-primary group-hover:border-primary'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-on-surface-variant leading-relaxed text-lg max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[3rem] bg-primary/5 border border-primary/10 text-center"
        >
          <h3 className="text-2xl font-headline italic text-primary mb-4">Ainda tem alguma dúvida?</h3>
          <p className="text-on-surface-variant mb-8">Estamos à disposição para conversar e tirar todas as suas dúvidas pelo WhatsApp.</p>
          <a
            href="https://wa.me/5511999000658?text=Ol%C3%A1!%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20os%20procedimentos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary-dim transition-all shadow-lg"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
