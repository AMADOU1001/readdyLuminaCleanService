
'use client';

import Link from 'next/link';

export default function NettoyageVitres() {
  const services = [
    {
      title: 'Vitres intérieures',
      description: 'Nettoyage des faces intérieures de toutes vos fenêtres',
      icon: 'ri-home-4-line'
    },
    {
      title: 'Vitres extérieures',
      description: 'Façades vitrées, fenêtres, baies vitrées accessibles',
      icon: 'ri-building-line'
    },
    {
      title: 'Vitres en hauteur',
      description: 'Intervention sécurisée pour les étages élevés',
      icon: 'ri-building-4-line'
    },
    {
      title: 'Vérandas et verrières',
      description: 'Nettoyage des structures vitrées complexes',
      icon: 'ri-home-smile-line'
    },
    {
      title: 'Miroirs et glaces',
      description: 'Entretien de toutes surfaces réfléchissantes',
      icon: 'ri-focus-2-line'
    },
    {
      title: 'Finition parfaite',
      description: 'Résultat sans traces ni coulures garanti',
      icon: 'ri-star-line'
    }
  ];

  const equipements = [
    {
      nom: 'Raclettes professionnelles',
      description: 'Lames spéciales pour un rendu impeccable',
      icon: 'ri-tools-line'
    },
    {
      nom: 'Eau déminéralisée',
      description: 'Évite les traces de calcaire',
      icon: 'ri-drop-line'
    },
    {
      nom: 'Produits adaptés',
      description: 'Solutions spécifiques selon le type de vitre',
      icon: 'ri-flask-line'
    },
    {
      nom: 'Équipement sécurité',
      description: 'Matériel certifié pour travail en hauteur',
      icon: 'ri-shield-check-line'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20window%20cleaning%20service%20with%20crystal%20clear%20glass%20windows%2C%20window%20cleaner%20using%20professional%20squeegees%20and%20cleaning%20equipment%2C%20spotless%20streak-free%20windows%20in%20modern%20building%2C%20high-quality%20window%20washing%20service%2C%20pristine%20glass%20surfaces%20reflecting%20bright%20daylight&width=1920&height=600&seq=vit-hero&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Nettoyage de Vitres</h1>
          <p className="text-xl opacity-90">
            Des vitres parfaitement transparentes pour plus de luminosité
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expertise vitres et glaces</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos techniques professionnelles garantissent des vitres parfaitement transparentes, sans traces ni coulures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full mb-4">
                  <i className={`${service.icon} text-cyan-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Équipements */}
          <div className="bg-cyan-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Équipement professionnel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipements.map((equipement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4 shadow-sm">
                    <i className={`${equipement.icon} text-2xl text-cyan-600`}></i>
                  </div>
                  <h4 className="font-semibold mb-2">{equipement.nom}</h4>
                  <p className="text-sm text-gray-600">{equipement.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pourquoi des vitres propres ?</h2>
            <p className="text-xl text-gray-600">Les bénéfices d'un nettoyage professionnel régulier</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                titre: 'Plus de luminosité',
                description: 'Jusqu\'à 30% de lumière naturelle en plus dans vos intérieurs',
                icon: 'ri-sun-line',
                color: 'yellow'
              },
              {
                titre: 'Image professionnelle',
                description: 'Des locaux qui reflètent votre souci du détail',
                icon: 'ri-award-line',
                color: 'blue'
              },
              {
                titre: 'Durée de vie prolongée',
                description: 'Prévention de la corrosion et des dégradations',
                icon: 'ri-time-line',
                color: 'green'
              },
              {
                titre: 'Vue dégagée',
                description: 'Profitez pleinement de vos espaces et de la vue',
                icon: 'ri-eye-line',
                color: 'purple'
              },
              {
                titre: 'Économies d\'énergie',
                description: 'Meilleure transmission de la chaleur solaire',
                icon: 'ri-leaf-line',
                color: 'green'
              },
              {
                titre: 'Bien-être',
                description: 'Espaces plus agréables et lumineux au quotidien',
                icon: 'ri-heart-line',
                color: 'red'
              }
            ].map((avantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className={`w-16 h-16 flex items-center justify-center bg-${avantage.color}-100 rounded-full mx-auto mb-4`}>
                  <i className={`${avantage.icon} text-${avantage.color}-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{avantage.titre}</h3>
                <p className="text-gray-600">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de bâtiments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos interventions</h2>
            <p className="text-xl text-gray-600">Nous adaptons nos techniques à chaque type de bâtiment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full mr-4 flex-shrink-0">
                  <i className="ri-home-4-line text-cyan-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Résidentiel</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maisons individuelles</li>
                    <li>• Appartements et copropriétés</li>
                    <li>• Vérandas et jardins d'hiver</li>
                    <li>• Baies vitrées et fenêtres</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full mr-4 flex-shrink-0">
                  <i className="ri-building-2-line text-cyan-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Commercial</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Bureaux et entreprises</li>
                    <li>• Commerces et vitrines</li>
                    <li>• Hôtels et restaurants</li>
                    <li>• Immeubles de bureaux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fréquences */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Fréquences recommandées</h2>
            <p className="text-xl text-gray-600">Adaptées à votre environnement et vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                frequence: 'Mensuel',
                contexte: 'Bureaux, commerces',
                avantage: 'Image parfaite en permanence'
              },
              {
                frequence: 'Trimestriel',
                contexte: 'Résidentiel, copropriétés',
                avantage: 'Bon compromis qualité/prix'
              },
              {
                frequence: 'Semestriel',
                contexte: 'Maisons individuelles',
                avantage: 'Entretien suffisant'
              },
              {
                frequence: 'Ponctuel',
                contexte: 'Événements, déménagements',
                avantage: 'Intervention sur demande'
              }
            ].map((freq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-cyan-600 mb-2">{freq.frequence}</h3>
                <p className="text-gray-600 mb-3 text-sm">{freq.contexte}</p>
                <p className="text-xs text-gray-500">{freq.avantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Retrouvez une vue cristalline</h2>
          <p className="text-xl mb-8 opacity-90">
            Des vitres parfaitement propres pour profiter pleinement de la lumière naturelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Programmer un nettoyage
            </Link>
            <a 
              href="tel:+15142698119"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
