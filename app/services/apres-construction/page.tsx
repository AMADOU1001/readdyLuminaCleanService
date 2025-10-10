'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Brush, Hammer, Home, Droplet, Star, CheckCircle, Phone, Mail } from 'lucide-react';

export default function NettoyageApresConstruction() {
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
    {
      title: 'Élimination poussières',
      description: 'Dépoussiérage complet de toutes les surfaces et recoins',
      icon: 'ri-brush-2-line',
      lucideIcon: Brush
    },
    {
      title: 'Résidus de chantier',
      description: 'Enlèvement des traces de plâtre, peinture, colle',
      icon: 'ri-hammer-line',
      lucideIcon: Hammer
    },
    {
      title: 'Nettoyage des sols',
      description: 'Décapage et nettoyage de tous types de revêtements',
      icon: 'ri-home-wash-line',
      lucideIcon: Home
    },
    {
      title: 'Vitres et menuiseries',
      description: 'Nettoyage des fenêtres, portes et boiseries',
      icon: 'ri-window-line',
      lucideIcon: Home
    },
    {
      title: 'Sanitaires complets',
      description: 'Mise en propreté des salles de bain et WC',
      icon: 'ri-drop-line',
      lucideIcon: Droplet
    },
    {
      title: 'Finitions impeccables',
      description: 'Préparation parfaite pour l\'emménagement',
      icon: 'ri-star-line',
      lucideIcon: Star
    }
  ];

  const etapes = [
    {
      phase: 'Gros œuvre',
      description: 'Après démolition, maçonnerie, charpente',
      services: ['Évacuation gravats', 'Dépoussiérage gros', 'Nettoyage sécurisé']
    },
    {
      phase: 'Second œuvre',
      description: 'Après plomberie, électricité, cloisons',
      services: ['Élimination plâtre', 'Nettoyage câblages', 'Surfaces planes']
    },
    {
      phase: 'Finitions',
      description: 'Après peinture, revêtements, menuiseries',
      services: ['Retrait protections', 'Nettoyage fin', 'Détails soignés']
    },
    {
      phase: 'Livraison',
      description: 'Préparation finale avant remise des clés',
      services: ['Nettoyage complet', 'Contrôle qualité', 'Prêt à habiter']
    }
  ];

  const zones = [
    {
      zone: 'Cuisine',
      details: 'Électroménager, placards, plans de travail, sol carrelage',
      icon: 'ri-restaurant-line'
    },
    {
      zone: 'Salles de bain',
      details: 'Sanitaires, robinetterie, carrelage, joints',
      icon: 'ri-drop-line'
    },
    {
      zone: 'Chambres/Salon',
      details: 'Plinthes, interrupteurs, radiateurs, sols',
      icon: 'ri-home-4-line'
    },
    {
      zone: 'Extérieurs',
      details: 'Terrasses, balcons, façades, accès',
      icon: 'ri-building-line'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50/30 to-orange-50">
      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[500px] flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://readdy.ai/api/search-image?query=Professional%20post-construction%20cleaning%20service%2C%20cleaning%20team%20removing%20dust%20and%20debris%20from%20newly%20built%20modern%20home%20interior%2C%20construction%20cleanup%20with%20specialized%20equipment%2C%20spotless%20new%20building%20ready%20for%20occupancy%2C%20move-in%20ready%20cleaning%20service%2C%20pristine%20finished%20construction&width=1920&height=600&seq=con-hero&orientation=landscape)',
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 hero-title">
            Nettoyage Après-Construction
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 hero-subtitle">
            Transformez votre chantier en espace prêt à vivre
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section id="services" data-animate className="py-16 md:py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Nettoyage de fin de chantier
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Nos équipes spécialisées maîtrisent les techniques spécifiques au nettoyage post-construction pour un résultat impeccable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 transform hover:scale-105 hover:-translate-y-2 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-xl mb-4 transform transition-transform duration-300 hover:scale-110">
                  <i className={`${service.icon} text-yellow-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Équipements spécialisés */}
          <div className={`bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-yellow-200 shadow-lg transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
              Équipements spécialisés
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { nom: 'Aspirateurs industriels', icon: 'ri-focus-3-line' },
                { nom: 'Nettoyeurs vapeur', icon: 'ri-fire-line' },
                { nom: 'Produits dégraissants', icon: 'ri-flask-line' },
                { nom: 'Matériel sécurisé', icon: 'ri-shield-check-line' }
              ].map((equipement, index) => (
                <div
                  key={index}
                  className="text-center transform hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl mx-auto mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <i className={`${equipement.icon} text-2xl text-yellow-600`}></i>
                  </div>
                  <p className="font-medium text-gray-700">{equipement.nom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Étapes de construction */}
      <section id="etapes" data-animate className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('etapes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Intervention à chaque étape
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Nettoyage adapté au stade de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-yellow-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-yellow-100 transform hover:scale-105 ${visibleSections.has('etapes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl mx-auto mb-3 text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-2">{etape.phase}</h3>
                  <p className="text-sm text-gray-600 mb-4">{etape.description}</p>
                </div>
                <ul className="space-y-2">
                  {etape.services.map((service, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <i className="ri-check-line text-yellow-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones traitées */}
      <section id="zones" data-animate className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('zones') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Toutes les zones traitées
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Nettoyage méticuleux de chaque espace
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-yellow-300 text-center transform hover:scale-105 ${visibleSections.has('zones') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-2xl mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                  <i className={`${zone.icon} text-yellow-600 text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{zone.zone}</h3>
                <p className="text-sm text-gray-600">{zone.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section id="processus" data-animate className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('processus') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Notre méthode éprouvée
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              De l'évaluation à la livraison
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  numero: '1',
                  titre: 'Visite technique',
                  description: 'Évaluation de l\'état du chantier et des besoins spécifiques'
                },
                {
                  numero: '2',
                  titre: 'Devis détaillé',
                  description: 'Proposition chiffrée selon les zones et la complexité'
                },
                {
                  numero: '3',
                  titre: 'Planification',
                  description: 'Organisation de l\'intervention selon votre planning'
                },
                {
                  numero: '4',
                  titre: 'Nettoyage gros',
                  description: 'Élimination des gros résidus et poussières'
                },
                {
                  numero: '5',
                  titre: 'Nettoyage fin',
                  description: 'Finitions détaillées et contrôles qualité'
                },
                {
                  numero: '6',
                  titre: 'Réception',
                  description: 'Vérification finale et remise en état parfait'
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start p-4 md:p-6 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${visibleSections.has('processus') ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl mr-4 md:mr-6 flex-shrink-0 text-xl md:text-2xl font-bold shadow-lg">
                    {step.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{step.titre}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section id="garanties" data-animate className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('garanties') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nos garanties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'ri-shield-check-line', color: 'green', title: 'Assurance décennale', desc: 'Couverture complète de nos interventions' },
              { icon: 'ri-award-line', color: 'blue', title: 'Satisfaction garantie', desc: 'Reprise gratuite si non-conformité' },
              { icon: 'ri-time-line', color: 'purple', title: 'Respect des délais', desc: 'Livraison dans les temps convenus' }
            ].map((garantie, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center transform hover:scale-105 hover:-translate-y-2 ${visibleSections.has('garanties') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 flex items-center justify-center bg-${garantie.color}-100 rounded-2xl mx-auto mb-4`}>
                  <i className={`${garantie.icon} text-${garantie.color}-600 text-2xl`}></i>
                </div>
                <h3 className="font-semibold mb-3 text-lg text-gray-900">{garantie.title}</h3>
                <p className="text-sm text-gray-600">{garantie.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500"></div>

        {/* Animated circles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Votre projet mérite une finition parfaite
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 text-white max-w-2xl mx-auto">
            Confiez le nettoyage de fin de chantier à nos experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-yellow-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Planifier l'intervention
            </Link>
            <a
              href="tel:+15142698119"
              className="group inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Appeler maintenant
            </a>
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

        .hero-title {
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
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