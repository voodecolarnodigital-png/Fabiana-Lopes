import { motion } from "motion/react";
import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Mentoria", href: "#mentoria" },
    { name: "Contato", href: "#contato" },
    { name: "FAQ", href: "#faq" },
    { name: "Cursos", href: "#cursos" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="./logo.png?v=1" 
            alt="Fabiana Lopes Logo" 
            className="h-[67px] w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511999000658?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20no%20Google%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Fabiana."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
          >
            <Calendar size={16} />
            Agendar Avaliação
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-outline-variant/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-on-surface-variant text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511999000658?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20no%20Google%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Fabiana."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-full text-base font-semibold text-center"
          >
            Agendar Avaliação
          </a>
        </motion.div>
      )}
    </nav>
  );
}
