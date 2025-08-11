
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const services = [
    {
      title: 'Nettoyage résidentiel',
      description: 'Votre maison impeccable avec des produits écoresponsables pour votre famille',
      icon: 'ri-home-4-line',
      href: '/services/residentiel',
      color: 'from-blue-500 to-blue-700',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20housekeeper%20cleaning%20modern%20luxury%20home%20interior%2C%20woman%20in%20uniform%20with%20cleaning%20supplies%20in%20bright%20contemporary%20living%20room%2C%20spotless%20residential%20cleaning%20service%20with%20professional%20lady%20cleaner%20working%20in%20elegant%20home%20environment%20with%20pristine%20furniture%20and%20gleaming%20surfaces%2C%20clean%20organized%20modern%20house%20interior%20showing%20results%20of%20professional%20residential%20cleaning&width=400&height=300&seq=residential-female-clean&orientation=landscape'
    },
    {
      title: 'Nettoyage commercial',
      description: 'Des bureaux impeccables pour booster votre productivité et votre image',
      icon: 'ri-building-2-line',
      href: '/services/commercial',
      color: 'from-green-500 to-green-700',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20janitor%20cleaning%20modern%20corporate%20office%2C%20man%20in%20uniform%20using%20commercial%20cleaning%20equipment%20in%20sleek%20business%20workspace%2C%20professional%20commercial%20cleaner%20working%20in%20contemporary%20office%20environment%20with%20glass%20desks%20and%20modern%20furniture%2C%20spotless%20corporate%20workplace%20demonstrating%20high-quality%20commercial%20cleaning%20services&width=400&height=300&seq=commercial-male-clean&orientation=landscape'
    },
    {
      title: 'Nettoyage Airbnb',
      description: 'Vos invités ravis dès leur arrivée - Service express entre locataires',
      icon: 'ri-key-2-line',
      href: '/services/airbnb',
      color: 'from-purple-500 to-purple-700',
      image: 'https://readdy.ai/api/search-image?query=Two%20professional%20female%20housekeepers%20making%20beds%20in%20ultra%20modern%20Airbnb%20bedroom%2C%20two%20women%20in%20cleaning%20uniforms%20arranging%20fresh%20white%20bedding%20and%20pillows%20in%20contemporary%20minimalist%20bedroom%20with%20sleek%20designer%20furniture%2C%20professional%20cleaning%20ladies%20preparing%20luxurious%20modern%20bedroom%20for%20guests%20with%20floor-to-ceiling%20windows%20and%20elegant%20decor%2C%20hospitality%20cleaning%20service%20showing%20two%20women%20working%20together%20on%20pristine%20bed%20preparation%20in%20stylish%20ultra%20modern%20accommodation&width=400&height=300&seq=airbnb-two-women-modern&orientation=landscape'
    },
    {
      title: 'Nettoyage terrasses',
      description: 'Redonnez vie à vos espaces extérieurs avec notre nettoyage haute pression',
      icon: 'ri-plant-line',
      href: '/services/terrasses',
      color: 'from-orange-500 to-orange-700',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20technician%20actively%20cleaning%20outdoor%20stone%20terrace%20with%20powerful%20pressure%20washer%2C%20man%20in%20work%20uniform%20directly%20power%20washing%20patio%20surface%20showing%20water%20jets%20and%20cleaning%20action%2C%20focused%20worker%20using%20high%20pressure%20equipment%20to%20clean%20deck%20flooring%2C%20male%20cleaning%20specialist%20operating%20commercial%20pressure%20washer%20on%20stone%20terrace%20demonstrating%20professional%20outdoor%20cleaning%20service%20with%20visible%20cleaning%20transformation%20results&width=400&height=300&seq=terrace-man-cleaning&orientation=landscape'
    },
    {
      title: 'Nettoyage vitres',
      description: 'Des vitres cristallines sans traces pour maximiser votre luminosité',
      icon: 'ri-window-line',
      href: '/services/vitres',
      color: 'from-cyan-500 to-cyan-700',
      image: 'https://readdy.ai/api/search-image?query=Professional%20window%20cleaner%20creating%20crystal%20clear%20streak-free%20windows%2C%20male%20worker%20with%20professional%20squeegee%20and%20cleaning%20equipment%20achieving%20spotless%20transparent%20glass%20surfaces%2C%20bright%20natural%20daylight%20streaming%20through%20perfectly%20clean%20residential%20windows%20demonstrating%20professional%20window%20cleaning%20results%2C%20sparkling%20clean%20glass%20with%20maximum%20light%20transmission%20showing%20quality%20window%20cleaning%20service&width=400&height=300&seq=windows-crystal-clean&orientation=landscape'
    },
    {
      title: 'Nettoyage canapés',
      description: 'Mobilier comme neuf - Élimination complète des taches et odeurs',
      icon: 'ri-sofa-line',
      href: '/services/canapes',
      color: 'from-indigo-500 to-indigo-700',
      image: 'https://readdy.ai/api/search-image?query=Professional%20upholstery%20cleaning%20technician%20using%20specialized%20steam%20cleaning%20equipment%20on%20modern%20fabric%20sofa%2C%20male%20cleaner%20in%20uniform%20operating%20powerful%20upholstery%20cleaning%20machine%20with%20steam%20and%20extraction%20system%20on%20contemporary%20couch%2C%20professional%20furniture%20cleaning%20service%20showing%20deep%20cleaning%20process%20removing%20stains%20and%20dirt%20from%20stylish%20modern%20sofa%20with%20visible%20cleaning%20results&width=400&height=300&seq=upholstery-steam-clean&orientation=landscape'
    },
    {
      title: 'Nettoyage après construction',
      description: 'Votre nouveau projet prêt à vivre - Élimination totale des résidus',
      icon: 'ri-hammer-line',
      href: '/services/apres-construction',
      color: 'from-yellow-500 to-yellow-700',
      image: 'https://readdy.ai/api/search-image?query=Professional%20construction%20cleanup%20crew%20cleaning%20newly%20built%20modern%20home%20interior%2C%20workers%20in%20safety%20gear%20removing%20construction%20dust%20and%20debris%20from%20fresh%20renovation%20project%2C%20post%20construction%20cleaning%20team%20making%20new%20building%20move-in%20ready%20with%20specialized%20cleaning%20equipment%2C%20pristine%20new%20construction%20site%20after%20thorough%20professional%20cleanup%20showing%20transformation%20from%20construction%20mess%20to%20spotless%20new%20home&width=400&height=300&seq=construction-cleanup-crew&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Luxurious%20modern%20home%20interior%20showcasing%20professional%20cleaning%20results%2C%20pristine%20contemporary%20living%20space%20with%20sparkling%20clean%20surfaces%20and%20spotless%20furniture%2C%20bright%20elegant%20residential%20interior%20with%20immaculate%20floors%20walls%20and%20windows%20demonstrating%20high-end%20cleaning%20services%2C%20clean%20organized%20modern%20house%20with%20professional%20cleaning%20equipment%20subtly%20visible%2C%20beautiful%20home%20environment%20showing%20the%20transformation%20achieved%20through%20expert%20residential%20cleaning%20services&width=1920&height=1080&seq=hero-luxury-clean-home&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Votre partenaire de confiance pour un nettoyage impeccable
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Services de nettoyage professionnel pour résidentiel, commercial et spécialisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-2xl"
            >
              Obtenez votre devis gratuit
            </Link>
            <Link 
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos services de nettoyage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions de nettoyage adaptées à tous vos besoins avec des équipes professionnelles et des produits écologiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="block bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjwvdXo+';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                      <i className={`${service.icon} text-white text-xl`}></i>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div
                    className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer`}
                  >
                    En savoir plus
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plus de 500 clients satisfaits nous font confiance
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex gap-6 animate-scroll"
              style={{
                animation: 'scroll 30s linear infinite',
                width: 'calc(100% * 2)'
              }}
            >
              {/* Premier set de témoignages */}
              <div className="flex gap-6 min-w-full">
                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Service impeccable ! Mon appartement n'a jamais été aussi propre."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">MJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Marie Jodoin</p>
                      <p className="text-gray-500 text-xs">Airbnb, Laval</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Excellente équipe pour le nettoyage commercial. Service fiable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">DL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">David Leblanc</p>
                      <p className="text-gray-500 text-xs">Directeur, Montréal</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Travail remarquable après rénovation. Je recommande vivement !"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">ST</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Sophie Tremblay</p>
                      <p className="text-gray-500 text-xs">Propriétaire</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Mes vitres brillent comme jamais ! Travail professionnel."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">LM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Luc Martin</p>
                      <p className="text-gray-500 text-xs">Résidentiel, Brossard</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Ma terrasse est comme neuve ! Le nettoyage haute pression est parfait."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">AB</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Anne Bouchard</p>
                      <p className="text-gray-500 text-xs">Propriétaire, Longueuil</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Mes canapés ont retrouvé leur éclat d'origine ! Merci pour ce miracle."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">JR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Jean Roy</p>
                      <p className="text-gray-500 text-xs">Client résidentiel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Duplication pour l'effet de défilement continu */}
              <div className="flex gap-6 min-w-full">
                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Service impeccable ! Mon appartement n'a jamais été aussi propre."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">MJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Marie Jodoin</p>
                      <p className="text-gray-500 text-xs">Airbnb, Laval</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Excellente équipe pour le nettoyage commercial. Service fiable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">DL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">David Leblanc</p>
                      <p className="text-gray-500 text-xs">Directeur, Montréal</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Travail remarquable après rénovation. Je recommande vivement !"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">ST</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Sophie Tremblay</p>
                      <p className="text-gray-500 text-xs">Propriétaire</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Mes vitres brillent comme jamais ! Travail professionnel."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">LM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Luc Martin</p>
                      <p className="text-gray-500 text-xs">Résidentiel, Brossard</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Ma terrasse est comme neuve ! Le nettoyage haute pression est parfait."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">AB</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Anne Bouchard</p>
                      <p className="text-gray-500 text-xs">Propriétaire, Longueuil</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg min-w-[300px] flex-shrink-0">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-xs">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    "Mes canapés ont retrouvé leur éclat d'origine ! Merci pour ce miracle."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold text-xs">JR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Jean Roy</p>
                      <p className="text-gray-500 text-xs">Client résidentiel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Transformez votre espace dès aujourd'hui
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez plus de 500 clients satisfaits - Devis gratuit et intervention rapide garantie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-2xl"
            >
              Planifiez votre nettoyage
            </Link>
            <a 
              href="tel:+15142698119"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}