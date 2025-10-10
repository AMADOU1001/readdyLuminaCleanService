'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Wind, Flame, Droplet, Shield, RefreshCw, CheckCircle, Phone, Mail, Heart, Clock, Sun, Brush, Star } from 'lucide-react';

export default function NettoyageCanapes() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              const index = target.getAttribute('data-index');
              if (index) {
                setVisibleSections((prev) => new Set([...prev, index]));
              }
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );

      const sections = document.querySelectorAll('[data-index]');
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
    }
  }, []);

  const services = [
    {
      title: 'Nettoyage à sec',
      description: 'Pour les tissus délicats et les matériaux sensibles à l\'eau',
      icon: 'ri-wind-line'
    },
    {
      title: 'Nettoyage vapeur',
      description: 'Désinfection en profondeur pour éliminer acariens et bactéries',
      icon: 'ri-fire-line'
    },
    {
      title: 'Détachage spécialisé',
      description: 'Traitement ciblé des taches tenaces et anciennes',
      icon: 'ri-drop-line'
    },
    {
      title: 'Cuir et similicuir',
      description: 'Nettoyage et conditionnement des matériaux en cuir',
      icon: 'ri-shirt-line'
    },
    {
      title: 'Élimination des odeurs',
      description: 'Traitement contre les mauvaises odeurs et les allergènes',
      icon: 'ri-refresh-line'
    },
    {
      title: 'Protection textile',
      description: 'Application d\'un traitement protecteur optionnel',
      icon: 'ri-shield-line'
    }
  ];

  const materiaux = [
    { type: 'Tissu', description: 'Coton, lin, velours, microfibre', methode: 'Vapeur ou à sec' },
    { type: 'Cuir', description: 'Cuir pleine fleur, cuir grainé', methode: 'Produits spécialisés' },
    { type: 'Similicuir', description: 'Skaï, cuir synthétique', methode: 'Nettoyage doux' },
    { type: 'Alcantara', description: 'Suédine, daim synthétique', methode: 'Techniques spécifiques' }
  ];

  const problemes = [
    {
      probleme: 'Taches alimentaires',
      solution: 'Détachage enzymatique ciblé',
      icon: 'ri-restaurant-line'
    },
    {
      probleme: 'Taches de boisson',
      solution: 'Extraction et neutralisation',
      icon: 'ri-goblet-line'
    },
    {
      probleme: 'Odeurs d\'animaux',
      solution: 'Traitement bactéricide profond',
      icon: 'ri-bear-smile-line'
    },
    {
      probleme: 'Usure et ternissement',
      solution: 'Ravivage des couleurs',
      icon: 'ri-palette-line'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50">
      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[500px] flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://readdy.ai/api/search-image?query=Professional%20male%20cleaner%20using%20powerful%20vacuum%20cleaner%20directly%20on%20modern%20sofa%20surface%2C%20man%20in%20uniform%20operating%20specialized%20upholstery%20vacuum%20on%20contemporary%20couch%20fabric%2C%20male%20technician%20using%20industrial%20vacuum%20cleaner%20with%20upholstery%20attachment%20on%20stylish%20modern%20sofa%2C%20hands-on%20sofa%20cleaning%20with%20professional%20vacuum%20equipment%2C%20direct%20vacuum%20cleaning%20of%20contemporary%20furniture%20upholstery&width=1200&height=400&seq=direct-vacuum-sofa-cleaning&orientation=landscape)',
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 hero-title">
            Nettoyage de Canapés
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 hero-subtitle">
            Redonnez vie à vos meubles avec nos techniques professionnelles
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section data-index="services" className="py-16 md:py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nettoyage professionnel du mobilier
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Nos techniques adaptées à chaque matériau permettent de nettoyer en profondeur tout en préservant vos meubles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:scale-105 hover:-translate-y-2 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-xl mb-4 transform hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-indigo-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Matériaux */}
          <div className={`bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-200 shadow-lg transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
              Tous types de matériaux
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {materiaux.map((materiau, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105"
                >
                  <h4 className="font-semibold text-indigo-600 mb-2 text-lg">{materiau.type}</h4>
                  <p className="text-sm text-gray-600 mb-3">{materiau.description}</p>
                  <p className="text-xs text-gray-500 font-medium bg-indigo-50 rounded-full px-3 py-1 inline-block">
                    {materiau.methode}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes traités */}
      <section data-index="problemes" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('problemes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Problèmes traités
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Solutions adaptées à chaque situation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemes.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 text-center border border-indigo-100 transform hover:scale-105 ${visibleSections.has('problemes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-2xl mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                  <i className={`${item.icon} text-indigo-600 text-2xl`}></i>
                </div>
                <h3 className="font-semibold mb-3 text-gray-900">{item.probleme}</h3>
                <p className="text-sm text-gray-600">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section data-index="processus" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('processus') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre processus en 6 étapes
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Méthode éprouvée pour des résultats optimaux
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { numero: '1', titre: 'Diagnostic', description: 'Identification du matériau et des problèmes' },
                { numero: '2', titre: 'Test préalable', description: 'Vérification de la compatibilité des produits' },
                { numero: '3', titre: 'Préparation', description: 'Aspiration et prétraitement des taches' },
                { numero: '4', titre: 'Nettoyage', description: 'Application de la technique adaptée' },
                { numero: '5', titre: 'Rinçage', description: 'Extraction des résidus et impuretés' },
                { numero: '6', titre: 'Finition', description: 'Séchage et protection optionnelle' }
              ].map((step, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${visibleSections.has('processus') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl mx-auto mb-4 text-2xl font-bold shadow-lg">
                    {step.numero}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.titre}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section data-index="avantages" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('avantages') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Avantages du nettoyage professionnel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { titre: 'Prolongation de la durée de vie', description: 'Préservez vos investissements mobiliers', icon: 'ri-time-line' },
              { titre: 'Hygiène optimale', description: 'Élimination des acariens et bactéries', icon: 'ri-shield-check-line' },
              { titre: 'Apparence restaurée', description: 'Couleurs ravivées, aspect comme neuf', icon: 'ri-magic-line' },
              { titre: 'Air plus sain', description: 'Réduction des allergènes dans l\'air', icon: 'ri-leaf-line' },
              { titre: 'Économies réalisées', description: 'Évitez le remplacement prématuré', icon: 'ri-coin-line' },
              { titre: 'Confort retrouvé', description: 'Sensation de fraîcheur et de propreté', icon: 'ri-heart-line' }
            ].map((avantage, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 text-center border border-indigo-100 transform hover:scale-105 ${visibleSections.has('avantages') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-xl mx-auto mb-4">
                  <i className={`${avantage.icon} text-indigo-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{avantage.titre}</h3>
                <p className="text-gray-600 text-sm">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils */}
      <section data-index="conseils" className="py-16 md:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('conseils') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conseils d'entretien
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Préservez vos meubles entre les nettoyages
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { conseil: 'Aspirez régulièrement', description: 'Éliminez la poussière et les miettes chaque semaine', icon: 'ri-brush-line' },
              { conseil: 'Traitez immédiatement', description: 'Nettoyez les taches dès leur apparition', icon: 'ri-timer-line' },
              { conseil: 'Évitez le soleil direct', description: 'Protégez vos tissus de la décoloration', icon: 'ri-sun-line' },
              { conseil: 'Aérez régulièrement', description: 'Retournez et aérez les coussins', icon: 'ri-wind-line' }
            ].map((conseil, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 text-center transform hover:scale-105 ${visibleSections.has('conseils') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-xl mx-auto mb-4">
                  <i className={`${conseil.icon} text-indigo-600 text-xl`}></i>
                </div>
                <h3 className="font-semibold mb-3 text-gray-900">{conseil.conseil}</h3>
                <p className="text-sm text-gray-600">{conseil.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600"></div>

        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Retrouvez un mobilier comme neuf
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 text-white max-w-2xl mx-auto">
            Nos experts redonnent vie à vos canapés et fauteuils préférés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Réserver une intervention
            </Link>
            <a
              href="tel:+15142698119"
              className="group inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-title { animation: fadeInUp 0.8s ease-out; }
        .hero-subtitle { animation: fadeInUp 0.8s ease-out 0.2s backwards; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}