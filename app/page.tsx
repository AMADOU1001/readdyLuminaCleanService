'use client';

import { useEffect, useState, useRef } from 'react';
import { Building2, Key, Leaf, Sofa, Hammer, Phone, Mail, ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);

    if (typeof window !== 'undefined') {
      // Intersection Observer pour les animations au scroll
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              const index = target.getAttribute('data-index');
              if (index) {
                setVisibleElements((prev) => new Set([...prev, index]));
              }
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );

      const elements = document.querySelectorAll('[data-index]');
      elements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el);
        }
      });

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, []);

  const services = [
    {
      title: 'Nettoyage résidentiel',
      description: 'Votre maison impeccable avec des produits écoresponsables pour votre famille',
      icon: 'ri-home-4-line',
      lucideIcon: Home,
      href: '/services/residentiel',
      color: 'from-blue-500 to-blue-700',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage commercial',
      description: 'Des bureaux impeccables pour booster votre productivité et votre image',
      icon: 'ri-building-2-line',
      lucideIcon: Building2,
      href: '/services/commercial',
      color: 'from-green-500 to-green-700',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage Airbnb',
      description: 'Vos invités ravis dès leur arrivée - Service express entre locataires',
      icon: 'ri-key-2-line',
      lucideIcon: Key,
      href: '/services/airbnb',
      color: 'from-purple-500 to-purple-700',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage terrasses',
      description: 'Redonnez vie à vos espaces extérieurs avec notre nettoyage haute pression',
      icon: 'ri-plant-line',
      lucideIcon: Leaf,
      href: '/services/terrasses',
      color: 'from-orange-500 to-orange-700',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage vitres',
      description: 'Des vitres cristallines sans traces pour maximiser votre luminosité',
      icon: 'ri-window-line',
      lucideIcon: Home,
      href: '/services/vitres',
      color: 'from-cyan-500 to-cyan-700',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage canapés',
      description: 'Mobilier comme neuf - Élimination complète des taches et odeurs',
      icon: 'ri-sofa-line',
      lucideIcon: Sofa,
      href: '/services/canapes',
      color: 'from-indigo-500 to-indigo-700',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage après construction',
      description: 'Votre nouveau projet prêt à vivre - Élimination totale des résidus',
      icon: 'ri-hammer-line',
      lucideIcon: Hammer,
      href: '/services/apres-construction',
      color: 'from-yellow-500 to-yellow-700',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Jodoin',
      role: 'Airbnb, Laval',
      initials: 'MJ',
      text: 'Service impeccable ! Mon appartement n\'a jamais été aussi propre.'
    },
    {
      name: 'David Leblanc',
      role: 'Directeur, Montréal',
      initials: 'DL',
      text: 'Excellente équipe pour le nettoyage commercial. Service fiable.'
    },
    {
      name: 'Sophie Tremblay',
      role: 'Propriétaire',
      initials: 'ST',
      text: 'Travail remarquable après rénovation. Je recommande vivement !'
    },
    {
      name: 'Luc Martin',
      role: 'Résidentiel, Brossard',
      initials: 'LM',
      text: 'Mes vitres brillent comme jamais ! Travail professionnel.'
    },
    {
      name: 'Anne Bouchard',
      role: 'Propriétaire, Longueuil',
      initials: 'AB',
      text: 'Ma terrasse est comme neuve ! Le nettoyage haute pression est parfait.'
    },
    {
      name: 'Jean Roy',
      role: 'Client résidentiel',
      initials: 'JR',
      text: 'Mes canapés ont retrouvé leur éclat d\'origine ! Merci pour ce miracle.'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1080&fit=crurl(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-indigo-900/70"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full opacity-5 animate-ping" style={{ animationDuration: '4s' }}></div>
        </div>

        <div className={`relative z-10 text-center max-w-5xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 hero-icon">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-white/20">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight hero-title">
            Votre partenaire de confiance pour un nettoyage impeccable
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 hero-subtitle max-w-3xl mx-auto">
            Services de nettoyage professionnel pour résidentiel, commercial et spécialisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Obtenez votre devis gratuit
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12 md:mb-16"
            data-index="services-header"
          >
            <div className={`transition-all duration-1000 ${visibleElements.has('services-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Nos services de nettoyage
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Des solutions de nettoyage adaptées à tous vos besoins avec des équipes professionnelles et des produits écologiques
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                data-index={`service-${index}`}
                className={`transition-all duration-700 ${visibleElements.has(`service-${index}`) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a href={service.href} className="block bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                        <i className={`${service.icon} text-white text-xl`}></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:translate-x-2`}
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-index="testimonials-header"
          >
            <div className={`transition-all duration-1000 ${visibleElements.has('testimonials-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Ce que disent nos clients
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Plus de 500 clients satisfaits nous font confiance
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 animate-scroll"
              style={{
                animation: 'scroll 40s linear infinite',
                width: 'calc(100% * 2)'
              }}
            >
              {/* Premier set de témoignages */}
              <div className="flex gap-6 min-w-full">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl min-w-[320px] flex-shrink-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 text-base">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-sm font-semibold">5.0</span>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold text-sm">{testimonial.initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                        <p className="text-gray-500 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Duplication pour l'effet de défilement continu */}
              <div className="flex gap-6 min-w-full">
                {testimonials.map((testimonial, index) => (
                  <div key={`dup-${index}`} className="bg-white p-6 rounded-2xl min-w-[320px] flex-shrink-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 text-base">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-sm font-semibold">5.0</span>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold text-sm">{testimonial.initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                        <p className="text-gray-500 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        data-index="cta-section"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>

        {/* Animated circles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${visibleElements.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Transformez votre espace dès aujourd'hui
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 text-white max-w-3xl mx-auto leading-relaxed">
              Rejoignez plus de 500 clients satisfaits - Devis gratuit et intervention rapide garantie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Planifiez votre nettoyage
              </a>
              <a
                href="tel:+15142698119"
                className="group inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

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

        .hero-icon {
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-title {
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .hero-buttons {
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
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