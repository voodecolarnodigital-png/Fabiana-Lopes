import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <div className="flex-1 p-12 lg:p-24">
            <span className="text-primary tracking-widest text-xs font-bold block mb-4 uppercase">Contato</span>
            <h2 className="text-4xl md:text-[46px] text-on-surface mb-12 font-juana italic whitespace-normal md:whitespace-nowrap">Agende sua avaliação</h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <MapPin className="text-primary shrink-0" size={32} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&amp;query=R.%20%C3%81gua%20Comprida%2C%20257%20-%20Jardim%20Franca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002339-040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Endereço</h5>
                  <p className="text-on-surface-variant leading-relaxed group-hover:text-primary transition-colors">
                    R. Água Comprida, 257 - Jardim Franca<br />
                    São Paulo - SP, 02339-040
                  </p>
                </a>
              </div>
              
              <div className="flex gap-6">
                <Phone className="text-primary shrink-0" size={32} />
                <div>
                  <h5 className="font-bold text-lg mb-2">Telefone</h5>
                  <p className="text-on-surface-variant leading-relaxed">
                    (11) 99900-0658
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <Clock className="text-primary shrink-0" size={32} />
                <div>
                  <h5 className="font-bold text-lg mb-2">Horário de Atendimento</h5>
                  <p className="text-on-surface-variant leading-relaxed">
                    Seg-Sex: 09:00 - 19:00<br />
                    Sáb: 09:00 - 18:00
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://wa.me/5511999000658?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00a82d] to-[#25d366] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:shadow-[0_10px_30px_rgba(0,168,45,0.4)] transition-all shadow-lg hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Ou fale pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <a 
            href="https://www.google.com/maps/search/?api=1&amp;query=R.%20%C3%81gua%20Comprida%2C%20257%20-%20Jardim%20Franca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002339-040"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:w-1/2 min-h-[500px] relative block overflow-hidden bg-surface-low group cursor-pointer"
          >
            <iframe 
              src="https://maps.google.com/maps?q=R.%20%C3%81gua%20Comprida%2C%20257%20-%20Jardim%20Franca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002339-040&amp;z=16&amp;output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Fabiana Lopes Clinic"
              className="absolute inset-0 w-full h-full pointer-events-none"
            ></iframe>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm text-on-surface px-8 py-4 rounded-full font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                Ver rota no Google Maps
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
