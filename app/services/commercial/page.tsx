'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Building2, Store, Droplet, Home, Shield, CheckCircle, Phone, Mail, Clock, Users, Star, Briefcase } from 'lucide-react';

export default function NettoyageCommercial() {
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
      title: 'Bureaux et espaces de travail',
      description: 'Postes de travail, salles de réunion, espaces communs',
      icon: 'ri-building-2-line'
    },
    {
      title: 'Commerces et boutiques',
      description: 'Espaces de vente, vitrines, zones d\'accueil client',
      icon: 'ri-store-2-line'
    },
    {
      title: 'Sanitaires professionnels',
      description: 'Toilettes, vestiaires, espaces d\'hygiène',
      icon: 'ri-drop-line'
    },
    {
      title: 'Sols et surfaces',
      description: 'Aspirateur, lavage, cirage selon le type de sol',
      icon: 'ri-home-wash-line'
    },
    {
      title: 'Vitres et baies vitrées',
      description: 'Nettoyage intérieur et extérieur des surfaces vitrées',
      icon: 'ri-window-line'
    },
    {
      title: 'Désinfection',
      description: 'Protocoles sanitaires renforcés selon vos besoins',
      icon: 'ri-shield-check-line'
    }
  ];

  const frequences = [
    {
      type: 'Quotidien',
      description: 'Parfait pour les bureaux très fréquentés',
      avantages: ['Propreté constante', 'Image professionnelle', 'Tarif préférentiel']
    },
    {
      type: 'Hebdomadaire',
      description: 'Idéal pour la plupart des entreprises',
      avantages: ['Bon rapport qualité-prix', 'Flexibilité horaire', 'Suivi régulier']
    },
    {
      type: 'Bimensuel',
      description: 'Pour les petites structures',
      avantages: ['Solution économique', 'Entretien suffisant', 'Planning adapté']
    },
    {
      type: 'Ponctuel',
      description: 'Nettoyage de fin de chantier ou événement',
      avantages: ['Intervention rapide', 'Devis sur mesure', 'Résultat garanti']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50">
      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[500px] flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://readdy.ai/api/search-image?query=Professional%20office%20cleaning%20service%20in%20modern%20corporate%20building%2C%20cleaning%20team%20working%20in%20bright%20business%20office%20with%20glass%20windows%20and%20contemporary%20furniture%2C%20commercial%20cleaning%20equipment%2C%20professional%20cleaning%20staff%20in%20uniform%2C%20spotless%20business%20environment%2C%20corporate%20setting&width=1920&height=600&seq=com-hero&orientation=landscape)',
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 hero-title">
            Nettoyage Commercial
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 hero-subtitle">
            Maintenez une image professionnelle avec nos services adaptés
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section data-index="services" className="py-16 md:py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Services pour entreprises
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Nous comprenons l'importance d'un environnement de travail propre pour votre productivité et votre image de marque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:scale-105 hover:-translate-y-2 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl mb-4 transform hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-green-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Avantages */}
          <div className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-200 shadow-lg transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
              Pourquoi nous choisir ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl mx-auto mb-4 shadow-lg">
                  <Clock className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg text-gray-900">Horaires flexibles</h4>
                <p className="text-sm text-gray-600">Intervention en dehors de vos heures d'ouverture</p>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg text-gray-900">Assurance complète</h4>
                <p className="text-sm text-gray-600">Responsabilité civile et garantie décennale</p>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg text-gray-900">Équipe dédiée</h4>
                <p className="text-sm text-gray-600">Même équipe pour assurer la continuité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequences */}
      <section data-index="frequences" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('frequences') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fréquences d'intervention
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Choisissez la formule qui correspond à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frequences.map((freq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-green-100 transform hover:scale-105 ${visibleSections.has('frequences') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-green-600">{freq.type}</h3>
                <p className="text-gray-600 mb-4 text-sm">{freq.description}</p>
                <ul className="space-y-2">
                  {freq.avantages.map((avantage, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      {avantage}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section data-index="secteurs" className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('secteurs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Secteurs d'activité
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Nous intervenons dans tous les secteurs
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Bureaux', icon: 'ri-building-2-line' },
              { name: 'Commerces', icon: 'ri-store-2-line' },
              { name: 'Restaurants', icon: 'ri-restaurant-line' },
              { name: 'Hôtels', icon: 'ri-hotel-line' },
              { name: 'Écoles', icon: 'ri-school-line' },
              { name: 'Cliniques', icon: 'ri-hospital-line' },
              { name: 'Banques', icon: 'ri-bank-line' }
            ].map((secteur, index) => (
              <div
                key={index}
                className={`text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 ${visibleSections.has('secteurs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-2xl mx-auto mb-3 transform hover:rotate-12 transition-transform duration-300">
                  <i className={`${secteur.icon} text-2xl text-green-600`}></i>
                </div>
                <p className="font-medium text-gray-700 text-sm">{secteur.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600"></div>

        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Concentrez-vous sur votre activité
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 text-white max-w-2xl mx-auto">
            Nous nous occupons de maintenir votre espace de travail impeccable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Demander un devis
            </Link>
            <a
              href="tel:+15142698119"
              className="group inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
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