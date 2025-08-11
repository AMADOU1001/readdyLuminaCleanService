
'use client';

export default function AirbnbCleaning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-20 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Two%20professional%20female%20cleaners%20preparing%20Airbnb%20bedroom%20with%20fresh%20white%20linens%2C%20women%20in%20cleaning%20uniforms%20making%20bed%20together%2C%20housekeeping%20ladies%20arranging%20pillows%20and%20bedding%20in%20modern%20bright%20apartment%20bedroom%2C%20two%20women%20cleaning%20staff%20setting%20up%20pristine%20guest%20room%2C%20female%20cleaning%20team%20working%20together%20in%20well-lit%20spacious%20bedroom%20with%20white%20walls%20and%20natural%20lighting%2C%20professional%20housekeeping%20service%20preparing%20luxury%20accommodation&width=1200&height=600&seq=airbnb-hero-clean&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">Nettoyage Airbnb</h1>
            <p className="text-base md:text-lg lg:text-xl opacity-90 mb-6 md:mb-8 leading-relaxed px-2">
              Service de nettoyage professionnel spécialisé pour les propriétés Airbnb
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md mx-auto sm:max-w-none">
              <a
                href="tel:+15142698119"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap cursor-pointer shadow-lg text-center text-sm md:text-base"
              >
                Appeler maintenant
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 whitespace-nowrap cursor-pointer text-center text-sm md:text-base"
              >
                Devis gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Notre service Airbnb</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Nettoyage complet et professionnel entre chaque séjour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-home-4-line text-blue-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-center text-gray-900">Nettoyage complet</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                Toutes les pièces, de la cuisine à la salle de bain, en passant par les chambres
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-shield-check-line text-blue-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-center text-gray-900">Désinfection</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                Désinfection complète des surfaces et points de contact
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-time-line text-blue-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-center text-gray-900">Rapidité</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                Intervention rapide entre les départs et arrivées
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Notre processus</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Un processus optimisé pour préparer votre logement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              <div className="flex items-start">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 md:mr-4 mt-1 flex-shrink-0 text-sm md:text-base">
                  1
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Inspection initiale</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Évaluation de l'état du logement et des besoins spécifiques
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 md:mr-4 mt-1 flex-shrink-0 text-sm md:text-base">
                  2
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Nettoyage approfondi</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Nettoyage de toutes les surfaces, sols, sanitaires et équipements
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 md:mr-4 mt-1 flex-shrink-0 text-sm md:text-base">
                  3
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Désinfection</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Désinfection complète selon les normes sanitaires
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 md:mr-4 mt-1 flex-shrink-0 text-sm md:text-base">
                  4
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Contrôle qualité</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Vérification finale pour garantir la perfection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Pourquoi choisir notre service</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Les avantages d'un service professionnel pour votre Airbnb
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-star-line text-green-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-center text-gray-900">Meilleures notes</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                Un logement impeccable garantit de meilleures évaluations
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-calendar-check-line text-green-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-center text-gray-900">Disponibilité</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                Intervention flexible selon vos réservations
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-heart-line text-green-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-center text-gray-900">Satisfaction garantie</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                Vos invités repartiront avec une excellente impression
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact rapide mobile */}
      <section className="py-12 bg-blue-50 md:hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Besoin d'un devis rapide ?</h3>
            <p className="text-gray-600 text-sm">Contactez-nous maintenant</p>
          </div>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href="tel:+15142698119"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center shadow-lg flex items-center justify-center"
            >
              <i className="ri-phone-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              Appeler maintenant
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center flex items-center justify-center"
            >
              <i className="ri-mail-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Prêt à optimiser votre Airbnb ?</h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed px-2">
              Contactez-nous pour un service de nettoyage professionnel adapté à vos besoins
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md mx-auto sm:max-w-none">
              <a
                href="tel:+15142698119"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap cursor-pointer shadow-lg text-center text-sm md:text-base"
              >
                Appeler maintenant
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 whitespace-nowrap cursor-pointer text-center text-sm md:text-base"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
