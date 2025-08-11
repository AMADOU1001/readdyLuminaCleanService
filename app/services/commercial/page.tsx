
'use client';

import Link from 'next/link';

export default function NettoyageCommercial() {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20office%20cleaning%20service%20in%20modern%20corporate%20building%2C%20cleaning%20team%20working%20in%20bright%20business%20office%20with%20glass%20windows%20and%20contemporary%20furniture%2C%20commercial%20cleaning%20equipment%2C%20professional%20cleaning%20staff%20in%20uniform%2C%20spotless%20business%20environment%2C%20corporate%20setting&width=1920&height=600&seq=com-hero&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Nettoyage Commercial</h1>
          <p className="text-xl opacity-90">
            Maintenez une image professionnelle avec nos services adaptés
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Services pour entreprises</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous comprenons l'importance d'un environnement de travail propre pour votre productivité et votre image de marque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                  <i className={`${service.icon} text-green-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Avantages */}
          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Pourquoi nous choisir ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mx-auto mb-4">
                  <i className="ri-time-line text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Horaires flexibles</h4>
                <p className="text-sm text-gray-600">Intervention en dehors de vos heures d'ouverture</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mx-auto mb-4">
                  <i className="ri-shield-check-line text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Assurance complète</h4>
                <p className="text-sm text-gray-600">Responsabilité civile et garantie décennale</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mx-auto mb-4">
                  <i className="ri-team-line text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Équipe dédiée</h4>
                <p className="text-sm text-gray-600">Même équipe pour assurer la continuité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequences */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Fréquences d'intervention</h2>
            <p className="text-xl text-gray-600">Choisissez la formule qui correspond à vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frequences.map((freq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-600">{freq.type}</h3>
                <p className="text-gray-600 mb-4">{freq.description}</p>
                <ul className="space-y-2">
                  {freq.avantages.map((avantage, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Secteurs d'activité</h2>
            <p className="text-xl text-gray-600">Nous intervenons dans tous les secteurs</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[ 
              { name: 'Bureaux', icon: 'ri-building-2-line' },
              { name: 'Commerces', icon: 'ri-store-2-line' },
              { name: 'Restaurants', icon: 'ri-restaurant-line' },
              { name: 'Hôtels', icon: 'ri-hotel-line' },
              { name: 'Écoles', icon: 'ri-school-line' },
              { name: 'Cliniques', icon: 'ri-hospital-line' },
              { name: 'Banques', icon: 'ri-bank-line' }
            ].map((secteur, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-3">
                  <i className={`${secteur.icon} text-2xl text-gray-600`}></i>
                </div>
                <p className="font-medium text-gray-700">{secteur.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Concentrez-vous sur votre activité</h2>
          <p className="text-xl mb-8 opacity-90">
            Nous nous occupons de maintenir votre espace de travail impeccable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Demander un devis
            </Link>
            <a 
              href="tel:+15142698119"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
