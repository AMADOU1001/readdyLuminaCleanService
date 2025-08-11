
'use client';

import Link from 'next/link';

export default function NettoyageTerrasses() {
  const services = [
    {
      title: 'Lavage haute pression',
      description: 'Nettoyage en profondeur des sols et surfaces avec équipement professionnel',
      icon: 'ri-drop-line'
    },
    {
      title: 'Démoussage complet',
      description: 'Élimination des mousses, lichens et végétation indésirable',
      icon: 'ri-plant-line'
    },
    {
      title: 'Mobilier extérieur',
      description: 'Nettoyage et entretien de vos meubles de jardin',
      icon: 'ri-armchair-line'
    },
    {
      title: 'Sols et dallages',
      description: 'Pierre, béton, carrelage, bois - tous matériaux',
      icon: 'ri-building-4-line'
    },
    {
      title: 'Protection et traitement',
      description: 'Application de produits de protection contre les intempéries',
      icon: 'ri-shield-line'
    },
    {
      title: 'Évacuation déchets',
      description: 'Ramassage et évacuation des déchets végétaux',
      icon: 'ri-delete-bin-line'
    }
  ];

  const materiaux = [
    { nom: 'Pierre naturelle', icon: 'ri-ancient-gate-line' },
    { nom: 'Béton', icon: 'ri-road-map-line' },
    { nom: 'Carrelage', icon: 'ri-layout-grid-line' },
    { nom: 'Bois composite', icon: 'ri-tree-line' },
    { nom: 'Résine', icon: 'ri-drop-fill' },
    { nom: 'Pavés', icon: 'ri-building-4-line' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20male%20worker%20cleaning%20outdoor%20terrace%20with%20pressure%20washer%20equipment%2C%20man%20in%20work%20uniform%20actively%20cleaning%20stone%20patio%20surface%2C%20focused%20action%20shot%20of%20professional%20terrace%20cleaning%20service%20with%20powerful%20cleaning%20equipment%2C%20male%20technician%20working%20on%20deck%20maintenance%20with%20high%20pressure%20cleaning%20tools%2C%20outdoor%20cleaning%20specialist%20in%20action%20maintaining%20beautiful%20terrace%20space&width=1920&height=600&seq=ter-hero-cleaning-action&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Nettoyage de Terrasses</h1>
          <p className="text-xl opacity-90">
            Redonnez vie à vos espaces extérieurs avec notre service professionnel
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nettoyage haute pression professionnel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos équipements haute pression et notre expertise permettent de redonner tout leur éclat à vos espaces extérieurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                  <i className={`${service.icon} text-orange-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Matériaux */}
          <div className="bg-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Tous types de matériaux</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {materiaux.map((materiau, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-3 shadow-sm">
                    <i className={`${materiau.icon} text-2xl text-orange-600`}></i>
                  </div>
                  <p className="font-medium text-gray-700 text-sm">{materiau.nom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre méthode en 5 étapes</h2>
            <p className="text-xl text-gray-600">Un processus éprouvé pour des résultats optimaux</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  numero: '1',
                  titre: 'Évaluation',
                  description: 'Diagnostic du type de surface et du niveau de salissure'
                },
                {
                  numero: '2',
                  titre: 'Préparation',
                  description: 'Protection des végétaux et mobilier, préparation des équipements'
                },
                {
                  numero: '3',
                  titre: 'Démoussage',
                  description: 'Élimination manuelle et chimique des mousses et lichens'
                },
                {
                  numero: '4',
                  titre: 'Lavage haute pression',
                  description: 'Nettoyage en profondeur avec réglage adapté au matériau'
                },
                {
                  numero: '5',
                  titre: 'Finitions',
                  description: 'Rinçage, évacuation des déchets et protection optionnelle'
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 flex items-center justify-center bg-orange-600 text-white rounded-full mr-6 flex-shrink-0 text-2xl font-bold">
                    {step.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.titre}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conseils */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Conseils d\'entretien</h2>
            <p className="text-xl text-gray-600">Préservez vos terrasses plus longtemps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titre: 'Fréquence',
                conseil: 'Nettoyage annuel recommandé, bi-annuel pour les expositions ombragées',
                icon: 'ri-calendar-line'
              },
              {
                titre: 'Prévention',
                conseil: 'Balayage régulier et évacuation des feuilles mortes',
                icon: 'ri-broom-line'
              },
              {
                titre: 'Protection',
                conseil: 'Application d\'un hydrofuge tous les 2-3 ans selon le matériau',
                icon: 'ri-shield-line'
              },
              {
                titre: 'Mobilier',
                conseil: 'Nettoyage du mobilier en même temps que la terrasse',
                icon: 'ri-armchair-line'
              }
            ].map((conseil, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                  <i className={`${conseil.icon} text-orange-600 text-xl`}></i>
                </div>
                <h3 className="font-semibold mb-3">{conseil.titre}</h3>
                <p className="text-sm text-gray-600">{conseil.conseil}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Profitez pleinement de vos espaces extérieurs</h2>
          <p className="text-xl mb-8 opacity-90">
            Une terrasse propre pour des moments de détente inoubliables
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Réserver maintenant
            </Link>
            <a 
              href="tel:+15142698119"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
