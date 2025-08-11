
'use client';

import Link from 'next/link';

export default function NettoyageResidentiel() {
  const services = [
    {
      title: 'Nettoyage des sols',
      description: 'Aspirateur, lavage et désinfection de tous types de sols',
      icon: 'ri-home-wash-line'
    },
    {
      title: 'Dépoussiérage complet',
      description: 'Meubles, étagères, objets décoratifs et surfaces',
      icon: 'ri-brush-2-line'
    },
    {
      title: 'Cuisine impeccable',
      description: 'Plans de travail, électroménager, évier et rangements',
      icon: 'ri-restaurant-line'
    },
    {
      title: 'Salle de bain sanitaire',
      description: 'Sanitaires, robinetterie, carrelage et miroirs',
      icon: 'ri-drop-line'
    },
    {
      title: 'Chambres et salon',
      description: 'Literie, rangements et espaces de vie',
      icon: 'ri-sofa-line'
    },
    {
      title: 'Produits écoresponsables',
      description: 'Nettoyage respectueux de votre santé et de l\'environnement',
      icon: 'ri-leaf-line'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20residential%20cleaning%20service%20in%20beautiful%20modern%20home%20interior%2C%20cleaning%20team%20working%20in%20bright%20living%20room%20with%20elegant%20furniture%2C%20vacuum%20cleaner%20and%20eco-friendly%20cleaning%20supplies%2C%20spotless%20organized%20home%20with%20natural%20lighting%2C%20warm%20welcoming%20atmosphere%2C%20high-end%20house%20cleaning%20service&width=1920&height=600&seq=res-hero&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Nettoyage Résidentiel</h1>
          <p className="text-xl opacity-90">
            Un foyer impeccable avec des produits respectueux de votre famille
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos prestations résidentielles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous prenons soin de votre maison comme si c\'était la nôtre, avec attention aux détails et produits écoresponsables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                  <i className={`${service.icon} text-blue-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Notre méthode en 4 étapes</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4 text-2xl font-bold">1</div>
                <h4 className="font-semibold mb-2">Évaluation</h4>
                <p className="text-sm text-gray-600">Visite et devis personnalisé</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4 text-2xl font-bold">2</div>
                <h4 className="font-semibold mb-2">Planification</h4>
                <p className="text-sm text-gray-600">Organisation selon vos horaires</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4 text-2xl font-bold">3</div>
                <h4 className="font-semibold mb-2">Nettoyage</h4>
                <p className="text-sm text-gray-600">Intervention professionnelle</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-4 text-2xl font-bold">4</div>
                <h4 className="font-semibold mb-2">Contrôle</h4>
                <p className="text-sm text-gray-600">Vérification qualité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Votre maison mérite le meilleur</h2>
          <p className="text-xl mb-8 opacity-90">
            Confiez-nous l'entretien de votre foyer et profitez de votre temps libre
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Réserver maintenant
            </Link>
            <a 
              href="tel:+15142698119"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
