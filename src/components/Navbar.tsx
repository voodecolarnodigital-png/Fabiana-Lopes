import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Serviços", id: "servicos" },
    { name: "Depoimentos", id: "depoimentos" },
    { name: "Sobre", id: "sobre" },
    { name: "Mentoria", id: "mentoria" },
    { name: "Contato", id: "contato" },
    { name: "FAQ", id: "faq" },
    { name: "Cursos", id: "cursos" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

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
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a href="#contato" onClick={(e) => handleScrollTo(e, "contato")} className="btn-primary flex items-center gap-2 text-sm ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Agendar Avaliação
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-outline-variant/10 p-6 flex flex-col gap-4 shadow-xl absolute top-full left-0 w-full"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-on-surface-variant text-lg font-medium border-b border-outline-variant/10 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a href="#contato" onClick={(e) => handleScrollTo(e, "contato")} className="btn-primary text-center mt-2 justify-center py-4">
            Agendar Avaliação
          </a>
        </motion.div>
      )}
    </nav>
  );
}