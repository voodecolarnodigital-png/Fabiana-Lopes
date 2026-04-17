import { useState, useEffect } from 'react';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, onSnapshot, doc, setDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { motion } from 'motion/react';
import { LogOut, Plus, Trash2, Edit2, Save, X } from 'lucide-react';

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'services' | 'testimonials'>('services');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'services'), orderBy('order', 'asc'));
    const unsubscribeServices = onSnapshot(q, (snapshot) => {
      const servicesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServices(servicesData);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'services');
    });

    const qTestimonials = query(collection(db, 'testimonials'), orderBy('order', 'asc'));
    const unsubscribeTestimonials = onSnapshot(qTestimonials, (snapshot) => {
      const testimonialsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(testimonialsData);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'testimonials');
    });

    return () => {
      unsubscribeServices();
      unsubscribeTestimonials();
    };
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed", error);
      alert("Erro ao fazer login. Tente novamente.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface">Carregando...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface px-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
          <h1 className="text-3xl font-juana italic text-on-surface mb-6">Painel Administrativo</h1>
          <p className="text-on-surface-variant mb-8">Faça login com sua conta Google para gerenciar o conteúdo do site.</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-primary text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Entrar com Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-white border-b border-outline-variant/20 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div>
          <h1 className="text-2xl font-juana italic text-on-surface">Painel Admin</h1>
          <p className="text-xs text-on-surface-variant">{user.email}</p>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-on-surface-variant hover:text-error transition-colors"
        >
          <LogOut size={18} />
          <span className="text-sm font-bold uppercase tracking-widest hidden md:inline">Sair</span>
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-4 mb-8 border-b border-outline-variant/20 pb-4 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('services')}
            className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs whitespace-nowrap transition-colors ${activeTab === 'services' ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant hover:bg-outline-variant/20'}`}
          >
            Serviços
          </button>
          <button 
            onClick={() => setActiveTab('testimonials')}
            className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs whitespace-nowrap transition-colors ${activeTab === 'testimonials' ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant hover:bg-outline-variant/20'}`}
          >
            Depoimentos
          </button>
        </div>

        {activeTab === 'services' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-headline italic text-on-surface">Gerenciar Serviços</h2>
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
                <Plus size={16} /> Novo Serviço
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <div key={service.id} className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/20">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-surface-variant">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">{service.description}</p>
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors bg-surface-variant rounded-full">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-on-surface-variant hover:text-error transition-colors bg-surface-variant rounded-full">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {services.length === 0 && (
                <div className="col-span-full text-center py-12 text-on-surface-variant">
                  Nenhum serviço cadastrado ainda.
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-headline italic text-on-surface">Gerenciar Depoimentos</h2>
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
                <Plus size={16} /> Novo Depoimento
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/20">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-surface-variant relative">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    {!testimonial.active && (
                      <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">
                        Oculto
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{testimonial.name}</h3>
                  <div className="flex justify-end gap-2 mt-4">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors bg-surface-variant rounded-full">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-on-surface-variant hover:text-error transition-colors bg-surface-variant rounded-full">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {testimonials.length === 0 && (
                <div className="col-span-full text-center py-12 text-on-surface-variant">
                  Nenhum depoimento cadastrado.
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
