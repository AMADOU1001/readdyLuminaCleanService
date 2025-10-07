'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  Home,
  Brush,
  Hammer,
  Window as WindowIcon, // ✅ évite le conflit avec l'objet global "window"
  Droplet,
  Star,
  Search,
  Activity,
  Beaker,
  ShieldCheck,
  CheckCircle,
  Phone,
  Mail,
  Layers,
  Grid,
} from 'lucide-react';


export default function NettoyageApresConstruction() {
  // Observer state (sections visibles)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    let prefersReducedMotion = false;
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    if (prefersReducedMotion) return; // ne pas activer les animations si l’utilisateur préfère les mouvements réduits

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const next = new Set(prev);
              const target = entry.target as HTMLElement;
              next.add(target.id || target.dataset.animate || '');
              return next;
            });
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );

    observerRef.current = observer;

    const sections = document.querySelectorAll<HTMLElement>('[data-animate], section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);


  // --- Données (logique inchangée, icônes remplacées par Lucide) ---
  const services = [
    {
      title: 'Élimination poussières',
      description: 'Dépoussiérage complet de toutes les surfaces et recoins',
      icon: Brush
    },
    {
      title: 'Résidus de chantier',
      description: 'Enlèvement des traces de plâtre, peinture, colle',
      icon: Hammer
    },
    {
      title: 'Nettoyage des sols',
      description: 'Décapage et nettoyage de tous types de revêtements',
      icon: Home
    },
    {
      title: 'Vitres et menuiseries',
      description: 'Nettoyage des fenêtres, portes et boiseries',
      icon: WindowIcon // ✅ renommé ici
    },
    {
      title: 'Sanitaires complets',
      description: 'Mise en propreté des salles de bain et WC',
      icon: Droplet
    },
    {
      title: 'Finitions impeccables',
      description: "Préparation parfaite pour l'emménagement",
      icon: Star
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
      icon: Search
    },
    {
      zone: 'Salles de bain',
      details: 'Sanitaires, robinetterie, carrelage, joints',
      icon: Droplet
    },
    {
      zone: 'Chambres/Salon',
      details: 'Plinthes, interrupteurs, radiateurs, sols',
      icon: Home
    },
    {
      zone: 'Extérieurs',
      details: 'Terrasses, balcons, façades, accès',
      icon: Activity
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50/30 to-orange-50">
      {/* -------------------- HERO -------------------- */}
      <section
        id="hero"
        data-animate="hero"
        className="relative h-96 flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(250,204,21,0.85) 0%, rgba(255,138,112,0.85) 100%), url(https://readdy.ai/api/search-image?query=Professional%20post-construction%20cleaning%20service%2C%20cleaning%20team%20removing%20dust%20and%20debris&width=1920&height=600&seq=con-hero&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* bulles flottantes */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-12 w-64 h-64 rounded-full opacity-30 blur-2xl animate-float-slow bg-white/10"></div>
          <div className="absolute right-10 top-6 w-48 h-48 rounded-full opacity-20 blur-2xl animate-float bg-white/8"></div>
          <div className="absolute left-8 bottom-10 w-36 h-36 rounded-full opacity-18 blur-2xl animate-float-slower bg-white/6"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1
            className={`text-5xl md:text-6xl font-extrabold mb-4 hero-title transition-all duration-700 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ animationDelay: '0ms' }}
          >
            Nettoyage Après-Construction
          </h1>
          <p
            className={`text-xl opacity-95 hero-subtitle transition-all duration-700 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '120ms' }}
          >
            Transformez votre chantier en espace prêt à vivre
          </p>

          <div className={`mt-6 flex gap-4 justify-center hero-ctas ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '240ms' }}>
            <a
              href="tel:+15142698119"
              className="group bg-white text-yellow-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center gap-3"
            >
              <Phone className="w-4 h-4" />
              Appeler maintenant
            </a>
            <Link
              href="/contact"
              className="group border-2 border-white text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-500 flex items-center gap-3"
            >
              <Mail className="w-4 h-4" />
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------- Services Details -------------------- */}
      <section id="services" data-animate="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nettoyage de fin de chantier</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos équipes spécialisées maîtrisent les techniques spécifiques au nettoyage post-construction pour un résultat impeccable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              const visible = visibleSections.has('services');
              return (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-lg border transition-all duration-500 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Équipements spécialisés */}
          <div className={`bg-yellow-50 rounded-2xl p-8 transition-all duration-700 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-center mb-8">Équipements spécialisés</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { nom: 'Aspirateurs industriels', icon: Search },
                { nom: 'Nettoyeurs vapeur', icon: Activity },
                { nom: 'Produits dégraissants', icon: Beaker },
                { nom: 'Matériel sécurisé', icon: ShieldCheck }
              ].map((equipement, i) => {
                const Icon = equipement.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4 shadow-sm transform transition-transform duration-300 hover:scale-105">
                      <Icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <p className="font-medium text-gray-700">{equipement.nom}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Étapes de construction -------------------- */}
      <section id="etapes" data-animate="etapes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${visibleSections.has('etapes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Intervention à chaque étape</h2>
            <p className="text-xl text-gray-600">Nettoyage adapté au stade de votre projet</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, index) => {
              const visible = visibleSections.has('etapes');
              return (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-sm transition-all duration-500 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-lg hover:scale-105`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-yellow-600 text-white rounded-2xl mx-auto mb-2 text-xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-yellow-600">{etape.phase}</h3>
                    <p className="text-sm text-gray-600 mb-4">{etape.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {etape.services.map((s, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------- Zones traitées -------------------- */}
      <section id="zones" data-animate="zones" className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${visibleSections.has('zones') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Toutes les zones traitées</h2>
            <p className="text-xl text-gray-600">Nettoyage méticuleux de chaque espace</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, index) => {
              const Icon = zone.icon;
              const visible = visibleSections.has('zones');
              return (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-sm border text-center transition-all duration-500 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-lg hover:scale-105`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-yellow-50 rounded-full mx-auto mb-4">
                    <Icon className="text-yellow-600 w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{zone.zone}</h3>
                  <p className="text-sm text-gray-600">{zone.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------- Processus (détail) -------------------- */}
      <section id="processus" data-animate="processus" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${visibleSections.has('processus') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre méthode éprouvée</h2>
            <p className="text-xl text-gray-600">De l'évaluation à la livraison</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
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
              ].map((step, index) => {
                const visible = visibleSections.has('processus');
                // alternance left/right handled visually by translateX animated entry
                return (
                  <div
                    key={index}
                    className={`flex items-start p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-500 transform ${visible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'} hover:shadow-lg hover:scale-102`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-yellow-600 text-white rounded-2xl mr-6 flex-shrink-0 text-2xl font-bold shadow">
                      {step.numero}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.titre}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Garanties -------------------- */}
      <section id="garanties" data-animate="garanties" className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${visibleSections.has('garanties') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos garanties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className={`bg-white p-6 rounded-2xl shadow-sm text-center transition-all duration-500 transform ${visibleSections.has('garanties') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-lg hover:scale-105`}>
              <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-full mx-auto mb-4">
                <ShieldCheck className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-3">Assurance décennale</h3>
              <p className="text-sm text-gray-600">Couverture complète de nos interventions</p>
            </div>

            <div className={`bg-white p-6 rounded-2xl shadow-sm text-center transition-all duration-600 transform ${visibleSections.has('garanties') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-lg hover:scale-105`} style={{ transitionDelay: '120ms' }}>
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mx-auto mb-4">
                <Star className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-3">Satisfaction garantie</h3>
              <p className="text-sm text-gray-600">Reprise gratuite si non-conformité</p>
            </div>

            <div className={`bg-white p-6 rounded-2xl shadow-sm text-center transition-all duration-700 transform ${visibleSections.has('garanties') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-lg hover:scale-105`} style={{ transitionDelay: '240ms' }}>
              <div className="w-16 h-16 flex items-center justify-center bg-purple-50 rounded-full mx-auto mb-4">
                <Layers className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-3">Respect des délais</h3>
              <p className="text-sm text-gray-600">Livraison dans les temps convenus</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- CTA -------------------- */}
      <section id="cta" data-animate="cta" className="py-20 relative overflow-hidden">
        {/* background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-500 -z-10"></div>

        {/* animated circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-6 animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full opacity-5 animate-pulse-slower" style={{ animationDelay: '1.2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Votre projet mérite une finition parfaite</h2>
            <p className="text-xl mb-8 opacity-90">
              Confiez le nettoyage de fin de chantier à nos experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-yellow-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center gap-3 justify-center"
              >
                <Phone className="w-4 h-4" />
                Planifier l'intervention
              </Link>
              <a
                href="tel:+15142698119"
                className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 justify-center"
              >
                <Phone className="w-4 h-4" />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Styles spécifiques -------------------- */}
      <style jsx>{`
        /* keyframes */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slower {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-slow {
          0% { transform: scale(1); opacity: 0.06; }
          50% { transform: scale(1.08); opacity: 0.12; }
          100% { transform: scale(1); opacity: 0.06; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 14s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slow 10s ease-in-out infinite; }

        /* reduced motion fallback */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-float-slow,
          .animate-float-slower,
          .animate-pulse-slow,
          .animate-pulse-slower {
            animation: none !important;
          }
        }

        /* small animation helpers for hero text (already handled by tailwind transitions) */
        .hero-title,
        .hero-subtitle,
        .hero-ctas {
          will-change: transform, opacity;
        }

        /* accessibility: reduce motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }

        /* tiny utility to slightly scale on focus for keyboard users */
        a:focus {
          outline: 3px solid rgba(0,0,0,0.08);
          outline-offset: 3px;
        }
      `}</style>
    </div>
  );
}
