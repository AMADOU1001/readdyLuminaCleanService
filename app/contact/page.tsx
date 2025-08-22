'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (formData.message.length > 500) {
      setSubmitStatus('Le message ne peut pas dépasser 500 caractères.');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('Votre demande a été envoyée ! Nous vous rappelons dans les 2h.');
        setFormData({ nom: '', email: '', telephone: '', message: '' });
      } else {
        setSubmitStatus('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setSubmitStatus('Une erreur est survenue. Veuillez réessayer.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.85)), url('https://readdy.ai/api/search-image?query=Professional%20cleaning%20service%20contact%20center%20with%20modern%20office%20environment%2C%20customer%20service%20representatives%20at%20clean%20organized%20desks%20with%20computers%20phones%20and%20documentation%2C%20business%20communication%20setup%20with%20blue%20corporate%20theme%2C%20bright%20professional%20workspace%20with%20cleaning%20supplies%20visible%20in%20background%2C%20modern%20office%20interior%20with%20friendly%20staff%20ready%20to%20help%20customers%2C%20contact%20and%20consultation%20atmosphere%20for%20cleaning%20services&width=1200&height=600&seq=contact-hero-clean&orientation=landscape')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Contactez-nous
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed px-4 sm:px-0">
              Obtenez un devis gratuit et personnalisé pour vos besoins de nettoyage
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">
                Obtenez votre devis personnalisé
              </h2>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
                      placeholder="(514) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3"
                  >
                    Courriel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
                    placeholder="votre@courriel.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3"
                  >
                    Détails de votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none transition-all duration-200"
                    placeholder="Superficie, fréquence souhaitée, adresse..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer shadow-lg text-sm sm:text-base"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon devis gratuit'}
                </button>
                {submitStatus && (
                  <div
                    className={`p-3 sm:p-4 rounded-lg text-center font-medium text-sm sm:text-base ${submitStatus.includes('envoyée')
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-red-100 text-red-700 border border-red-200'
                      }`}
                  >
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900">
                  Contactez Lumina Clean
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-100 rounded-full mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <i className="ri-phone-line text-blue-600 text-lg sm:text-xl"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        Appelez-nous maintenant
                      </p>
                      <a
                        href="tel:+15142698119"
                        className="text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-200 text-sm sm:text-base lg:text-lg break-all"
                      >
                        +1 (514) 269-8119
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Réponse immédiate 7j/7</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-100 rounded-full mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <i className="ri-mail-line text-blue-600 text-lg sm:text-xl"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Courriel</p>
                      <a
                        href="mailto:luminacleanservice@gmail.com"
                        className="text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-200 text-sm sm:text-base break-all"
                      >
                        luminacleanservice@gmail.com
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Réponse sous 2h</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-100 rounded-full mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <i className="ri-time-line text-blue-600 text-lg sm:text-xl"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        Horaires d'intervention
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Lun-Ven : 7h-19h
                        <br />
                        Sam-Dim : 8h-17h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-100 rounded-full mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <i className="ri-map-pin-line text-blue-600 text-lg sm:text-xl"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        Zone de service
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Laval, Montréal, Longueuil, Brossard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
