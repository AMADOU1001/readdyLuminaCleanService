'use client';

import { useEffect, useRef, useState } from 'react';
import { Home, Shield, Clock, Star, Calendar, Heart, Phone, Mail, CheckCircle } from 'lucide-react';

export default function AirbnbCleaning() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const services = [
    { icon: Home, title: 'Nettoyage complet', description: 'Toutes les pièces, de la cuisine à la salle de bain, en passant par les chambres', color: 'blue' },
    { icon: Shield, title: 'Désinfection', description: 'Désinfection complète des surfaces et points de contact', color: 'blue' },
    { icon: Clock, title: 'Rapidité', description: 'Intervention rapide entre les départs et arrivées', color: 'blue' }
  ];

  const processSteps = [
    { step: 1, title: 'Inspection initiale', description: 'Évaluation de l\'état du logement et des besoins spécifiques' },
    { step: 2, title: 'Nettoyage approfondi', description: 'Nettoyage de toutes les surfaces, sols, sanitaires et équipements' },
    { step: 3, title: 'Désinfection', description: 'Désinfection complète selon les normes sanitaires' },
    { step: 4, title: 'Contrôle qualité', description: 'Vérification finale pour garantir la perfection' }
  ];

  const benefits = [
    { icon: Star, title: 'Meilleures notes', description: 'Un logement impeccable garantit de meilleures évaluations', color: 'green' },
    { icon: Calendar, title: 'Disponibilité', description: 'Intervention flexible selon vos réservations', color: 'green' },
    { icon: Heart, title: 'Satisfaction garantie', description: 'Vos invités repartiront avec une excellente impression', color: 'green' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>

        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight hero-title">
              Nettoyage Airbnb
            </h1>
            <p className="text-base md:text-lg lg:text-xl opacity-90 mb-6 md:mb-8 leading-relaxed px-2 hero-subtitle">
              Service de nettoyage professionnel spécialisé pour les propriétés Airbnb
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md mx-auto sm:max-w-none hero-buttons">
              <a
                href="tel:+15142698119"
                className="group bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center text-sm md:text-base flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Appeler maintenant
              </a>
              <a
                href="/contact"
                className="group border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center text-sm md:text-base flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Devis gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section id="services" data-animate className="py-16 md:py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Notre service Airbnb</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Nettoyage complet et professionnel entre chaque séjour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:scale-105 hover:-translate-y-2 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-4 text-center text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" data-animate className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Notre processus</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Un processus optimisé pour préparer votre logement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`flex items-start p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${visibleSections.has('process') ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold mr-4 flex-shrink-0 shadow-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" data-animate className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Pourquoi choisir notre service</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Les avantages d'un service professionnel pour votre Airbnb
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-green-600 w-8 h-8" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-4 text-center text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact rapide mobile */}
      <section className="py-12 bg-gradient-to-r from-blue-100 to-indigo-100 md:hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Besoin d'un devis rapide ?</h3>
            <p className="text-gray-600 text-sm">Contactez-nous maintenant</p>
          </div>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href="tel:+15142698119"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center shadow-lg flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

        {/* Animated circles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Prêt à optimiser votre Airbnb ?</h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed px-2">
              Contactez-nous pour un service de nettoyage professionnel adapté à vos besoins
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md mx-auto sm:max-w-none">
              <a
                href="tel:+15142698119"
                className="group bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-sm md:text-base transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Appeler maintenant
              </a>
              <a
                href="/contact"
                className="group border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-center text-sm md:text-base transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-title {
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .hero-buttons {
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}