'use client';

import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // Intersection Observer pour les animations au scroll
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleElements((prev) => new Set([...prev, entry.target.dataset.index]));
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );

      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      const elements = document.querySelectorAll('[data-index]');
      elements.forEach((el) => observerRef.current.observe(el));
    }
  }, []);

  const services = [
    {
      title: 'Nettoyage résidentiel',
      description: 'Votre maison impeccable avec des produits écoresponsables pour votre famille',
      icon: 'ri-home-4-line',
      href: '/services/residentiel',
      color: 'from-blue-500 to-blue-700',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage commercial',
      description: 'Des bureaux impeccables pour booster votre productivité et votre image',
      icon: 'ri-building-2-line',
      href: '/services/commercial',
      color: 'from-green-500 to-green-700',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage Airbnb',
      description: 'Vos invités ravis dès leur arrivée - Service express entre locataires',
      icon: 'ri-key-2-line',
      href: '/services/airbnb',
      color: 'from-purple-500 to-purple-700',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage terrasses',
      description: 'Redonnez vie à vos espaces extérieurs avec notre nettoyage haute pression',
      icon: 'ri-plant-line',
      href: '/services/terrasses',
      color: 'from-orange-500 to-orange-700',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage vitres',
      description: 'Des vitres cristallines sans traces pour maximiser votre luminosité',
      icon: 'ri-window-line',
      href: '/services/vitres',
      color: 'from-cyan-500 to-cyan-700',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage canapés',
      description: 'Mobilier comme neuf - Élimination complète des taches et odeurs',
      icon: 'ri-sofa-line',
      href: '/services/canapes',
      color: 'from-indigo-500 to-indigo-700',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop'
    },
    {
      title: 'Nettoyage après construction',
      description: 'Votre nouveau projet prêt à vivre - Élimination totale des résidus',
      icon: 'ri-hammer-line',
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
    <div className="min-h-screen overflow-hidden">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Votre partenaire de confiance pour un nettoyage impeccable
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Services de nettoyage professionnel pour résidentiel, commercial et spécialisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-2xl"
            >
              Obtenez votre devis gratuit
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16"
            data-index="services-header"
          >
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-700 ${visibleElements.has('services-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Nos services de nettoyage
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-100 ${visibleElements.has('services-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Des solutions de nettoyage adaptées à tous vos besoins avec des équipes professionnelles et des produits écologiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                data-index={`service-${index}`}
                className={`transition-all duration-700 ${visibleElements.has(`service-${index}`) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a href={service.href} className="block bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                        <i className={`${service.icon} text-white text-xl`}></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div
                      className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer group-hover:translate-x-2`}
                    >
                      En savoir plus
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-index="testimonials-header"
          >
            <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${visibleElements.has('testimonials-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ce que disent nos clients
            </h2>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${visibleElements.has('testimonials-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Plus de 500 clients satisfaits nous font confiance
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 animate-scroll"
              style={{
                animation: 'scroll 30s linear infinite',
                width: 'calc(100% * 2)'
              }}
            >
              {/* Premier set de témoignages */}
              <div className="flex gap-6 min-w-full">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="ri-star-fill"></i>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-xs">5/5</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-semibold text-xs">{testimonial.initials}</span>
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
                  <div key={`dup-${index}`} className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="ri-star-fill"></i>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-xs">5/5</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-semibold text-xs">{testimonial.initials}</span>
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
        className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white relative overflow-hidden"
        data-index="cta-section"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`text-4xl font-bold mb-6 transition-all duration-700 ${visibleElements.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transformez votre espace dès aujourd'hui
          </h2>
          <p className={`text-xl mb-8 opacity-90 transition-all duration-700 delay-100 ${visibleElements.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Rejoignez plus de 500 clients satisfaits - Devis gratuit et intervention rapide garantie
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${visibleElements.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-2xl"
            >
              Planifiez votre nettoyage
            </a>
            <a
              href="tel:+15142698119"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Appeler maintenant
            </a>
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}