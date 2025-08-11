
'use client';

import Link from 'next/link';

export default function NettoyageCanapes() {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20male%20cleaner%20using%20powerful%20vacuum%20cleaner%20directly%20on%20modern%20sofa%20surface%2C%20man%20in%20uniform%20operating%20specialized%20upholstery%20vacuum%20on%20contemporary%20couch%20fabric%2C%20male%20technician%20using%20industrial%20vacuum%20cleaner%20with%20upholstery%20attachment%20on%20stylish%20modern%20sofa%2C%20hands-on%20sofa%20cleaning%20with%20professional%20vacuum%20equipment%2C%20direct%20vacuum%20cleaning%20of%20contemporary%20furniture%20upholstery&width=1200&height=400&seq=direct-vacuum-sofa-cleaning&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Nettoyage de Canapés</h1>
          <p className="text-xl opacity-90">
            Redonnez vie à vos meubles avec nos techniques professionnelles
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nettoyage professionnel du mobilier</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos techniques adaptées à chaque matériau permettent de nettoyer en profondeur tout en préservant vos meubles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mb-4">
                  <i className={`${service.icon} text-indigo-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Matériaux */}
          <div className="bg-indigo-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Tous types de matériaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materiaux.map((materiau, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h4 className="font-semibold text-indigo-600 mb-2">{materiau.type}</h4>
                  <p className="text-sm text-gray-600 mb-3">{materiau.description}</p>
                  <p className="text-xs text-gray-500 font-medium">{materiau.methode}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes traités */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Problèmes traités</h2>
            <p className="text-xl text-gray-600">Solutions adaptées à chaque situation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemes.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full mx-auto mb-4">
                  <i className={`${item.icon} text-indigo-600 text-2xl`}></i>
                </div>
                <h3 className="font-semibold mb-3">{item.probleme}</h3>
                <p className="text-sm text-gray-600">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre processus en 6 étapes</h2>
            <p className="text-xl text-gray-600">Méthode éprouvée pour des résultats optimaux</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  numero: '1',
                  titre: 'Diagnostic',
                  description: 'Identification du matériau et des problèmes'
                },
                {
                  numero: '2',
                  titre: 'Test préalable',
                  description: 'Vérification de la compatibilité des produits'
                },
                {
                  numero: '3',
                  titre: 'Préparation',
                  description: 'Aspiration et prétraitement des taches'
                },
                {
                  numero: '4',
                  titre: 'Nettoyage',
                  description: 'Application de la technique adaptée'
                },
                {
                  numero: '5',
                  titre: 'Rinçage',
                  description: 'Extraction des résidus et impuretés'
                },
                {
                  numero: '6',
                  titre: 'Finition',
                  description: 'Séchage et protection optionnelle'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-indigo-600 text-white rounded-full mx-auto mb-4 text-2xl font-bold">
                    {step.numero}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.titre}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Avantages du nettoyage professionnel</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                titre: 'Prolongation de la durée de vie',
                description: 'Préservez vos investissements mobiliers',
                icon: 'ri-time-line'
              },
              {
                titre: 'Hygiène optimale',
                description: 'Élimination des acariens et bactéries',
                icon: 'ri-shield-check-line'
              },
              {
                titre: 'Apparence restaurée',
                description: 'Couleurs ravivées, aspect comme neuf',
                icon: 'ri-magic-line'
              },
              {
                titre: 'Air plus sain',
                description: 'Réduction des allergènes dans l\'air',
                icon: 'ri-leaf-line'
              },
              {
                titre: 'Économies réalisées',
                description: 'Évitez le remplacement prématuré',
                icon: 'ri-coin-line'
              },
              {
                titre: 'Confort retrouvé',
                description: 'Sensation de fraîcheur et de propreté',
                icon: 'ri-heart-line'
              }
            ].map((avantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mx-auto mb-4">
                  <i className={`${avantage.icon} text-indigo-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-3">{avantage.titre}</h3>
                <p className="text-gray-600 text-sm">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Conseils d\'entretien</h2>
            <p className="text-xl text-gray-600">Préservez vos meubles entre les nettoyages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                conseil: 'Aspirez régulièrement',
                description: 'Éliminez la poussière et les miettes chaque semaine',
                icon: 'ri-brush-line'
              },
              {
                conseil: 'Traitez immédiatement',
                description: 'Nettoyez les taches dès leur apparition',
                icon: 'ri-timer-line'
              },
              {
                conseil: 'Évitez le soleil direct',
                description: 'Protégez vos tissus de la décoloration',
                icon: 'ri-sun-line'
              },
              {
                conseil: 'Aérez régulièrement',
                description: 'Retournez et aérez les coussins',
                icon: 'ri-wind-line'
              }
            ].map((conseil, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mx-auto mb-4">
                  <i className={`${conseil.icon} text-indigo-600 text-xl`}></i>
                </div>
                <h3 className="font-semibold mb-3">{conseil.conseil}</h3>
                <p className="text-sm text-gray-600">{conseil.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Retrouvez un mobilier comme neuf</h2>
          <p className="text-xl mb-8 opacity-90">
            Nos experts redonnent vie à vos canapés et fauteuils préférés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Réserver une intervention
            </Link>
            <a 
              href="tel:+15142698119"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
