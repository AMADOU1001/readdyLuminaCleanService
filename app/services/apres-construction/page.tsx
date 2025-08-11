
'use client';

import Link from 'next/link';

export default function NettoyageApresConstruction() {
  const services = [
    {
      title: 'Élimination poussières',
      description: 'Dépoussiérage complet de toutes les surfaces et recoins',
      icon: 'ri-brush-2-line'
    },
    {
      title: 'Résidus de chantier',
      description: 'Enlèvement des traces de plâtre, peinture, colle',
      icon: 'ri-hammer-line'
    },
    {
      title: 'Nettoyage des sols',
      description: 'Décapage et nettoyage de tous types de revêtements',
      icon: 'ri-home-wash-line'
    },
    {
      title: 'Vitres et menuiseries',
      description: 'Nettoyage des fenêtres, portes et boiseries',
      icon: 'ri-window-line'
    },
    {
      title: 'Sanitaires complets',
      description: 'Mise en propreté des salles de bain et WC',
      icon: 'ri-drop-line'
    },
    {
      title: 'Finitions impeccables',
      description: 'Préparation parfaite pour l\'emménagement',
      icon: 'ri-star-line'
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20post-construction%20cleaning%20service%2C%20cleaning%20team%20removing%20dust%20and%20debris%20from%20newly%20built%20modern%20home%20interior%2C%20construction%20cleanup%20with%20specialized%20equipment%2C%20spotless%20new%20building%20ready%20for%20occupancy%2C%20move-in%20ready%20cleaning%20service%2C%20pristine%20finished%20construction&width=1920&height=600&seq=con-hero&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Nettoyage Après-Construction</h1>
          <p className="text-xl opacity-90">
            Transformez votre chantier en espace prêt à vivre
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nettoyage de fin de chantier</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos équipes spécialisées maîtrisent les techniques spécifiques au nettoyage post-construction pour un résultat impeccable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                  <i className={`${service.icon} text-yellow-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Équipements spécialisés */}
          <div className="bg-yellow-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Équipements spécialisés</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[ 
                { nom: 'Aspirateurs industriels', icon: 'ri-focus-3-line' },
                { nom: 'Nettoyeurs vapeur', icon: 'ri-fire-line' },
                { nom: 'Produits dégraissants', icon: 'ri-flask-line' },
                { nom: 'Matériel sécurisé', icon: 'ri-shield-check-line' }
              ].map((equipement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4 shadow-sm">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Intervention à chaque étape</h2>
            <p className="text-xl text-gray-600">Nettoyage adapté au stade de votre projet</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-600 text-white rounded-full mx-auto mb-2 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-600">{etape.phase}</h3>
                  <p className="text-sm text-gray-600 mb-4">{etape.description}</p>
                </div>
                <ul className="space-y-2">
                  {etape.services.map((service, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <i className="ri-check-line text-yellow-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Toutes les zones traitées</h2>
            <p className="text-xl text-gray-600">Nettoyage méticuleux de chaque espace</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                  <i className={`${zone.icon} text-yellow-600 text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-3">{zone.zone}</h3>
                <p className="text-sm text-gray-600">{zone.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre méthode éprouvée</h2>
            <p className="text-xl text-gray-600">De l\'évaluation à la livraison</p>
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
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 flex items-center justify-center bg-yellow-600 text-white rounded-full mr-6 flex-shrink-0 text-2xl font-bold">
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

      {/* Garanties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos garanties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-3">Assurance décennale</h3>
              <p className="text-sm text-gray-600">Couverture complète de nos interventions</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-award-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-3">Satisfaction garantie</h3>
              <p className="text-sm text-gray-600">Reprise gratuite si non-conformité</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-time-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-3">Respect des délais</h3>
              <p className="text-sm text-gray-600">Livraison dans les temps convenus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Votre projet mérite une finition parfaite</h2>
          <p className="text-xl mb-8 opacity-90">
            Confiez le nettoyage de fin de chantier à nos experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Planifier l\'intervention
            </Link>
            <a 
              href="tel:+15142698119"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-yellow-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
