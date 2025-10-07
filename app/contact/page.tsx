'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Appelez-nous maintenant',
      content: '+1 (514) 269-8119',
      subtitle: 'Réponse immédiate 7j/7',
      href: 'tel:+15142698119',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Mail,
      title: 'Courriel',
      content: 'luminacleanservice@gmail.com',
      subtitle: 'Réponse sous 2h',
      href: 'mailto:luminacleanservice@gmail.com',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      icon: Clock,
      title: 'Horaires d\'intervention',
      content: 'Lun-Ven : 7h-19h\nSam-Dim : 8h-17h',
      subtitle: null,
      href: null,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      icon: MapPin,
      title: 'Zone de service',
      content: 'Laval, Montréal, Longueuil, Brossard',
      subtitle: null,
      href: null,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full opacity-5 animate-ping" style={{ animationDuration: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up">
              Contactez-nous
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed px-4 sm:px-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Obtenez un devis gratuit et personnalisé pour vos besoins de nettoyage
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 md:py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 hover-lift animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Obtenez votre devis personnalisé
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="form-group">
                    <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-300 hover:border-blue-400"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="form-group" style={{ animationDelay: '0.1s' }}>
                    <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-300 hover:border-blue-400"
                      placeholder="(514) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ animationDelay: '0.2s' }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Courriel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-300 hover:border-blue-400"
                    placeholder="votre@courriel.com"
                  />
                </div>

                <div className="form-group" style={{ animationDelay: '0.3s' }}>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Détails de votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none transition-all duration-300 hover:border-blue-400"
                    placeholder="Superficie, fréquence souhaitée, adresse..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 caractères</p>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e as any);
                  }}
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base flex items-center justify-center gap-2"
                  style={{ animationDelay: '0.4s' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Recevoir mon devis gratuit
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {submitStatus && (
                  <div className={`p-3 sm:p-4 rounded-xl text-center font-medium text-sm sm:text-base flex items-center justify-center gap-3 animate-fade-in ${submitStatus.includes('envoyée')
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {submitStatus.includes('envoyée') ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>{submitStatus}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 animate-slide-in-right">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 hover-lift">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Contactez Lumina Clean
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div
                        key={info.title}
                        className={`contact-card flex items-start p-4 rounded-xl border ${info.borderColor} ${info.bgColor} hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${info.bgColor} rounded-xl mr-3 sm:mr-4 flex-shrink-0 border ${info.borderColor}`}>
                          <IconComponent className={`${info.iconColor} w-5 h-5 sm:w-6 sm:h-6`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                            {info.title}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-200 text-sm sm:text-base break-all hover:underline"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-600 text-sm sm:text-base whitespace-pre-line">
                              {info.content}
                            </p>
                          )}
                          {info.subtitle && (
                            <p className="text-xs text-gray-500 mt-1">{info.subtitle}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Call to action card */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-2xl text-white hover-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-xl font-bold mb-3">Besoin d'une intervention rapide ?</h4>
                <p className="text-blue-100 mb-4 text-sm">
                  Notre équipe est disponible 7j/7 pour répondre à toutes vos urgences de nettoyage.
                </p>
                <a
                  href="tel:+15142698119"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .form-group {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .contact-card {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
        }

        input:focus,
        textarea:focus {
          transform: scale(1.01);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-slide-in-left,
          .animate-slide-in-right,
          .animate-fade-in,
          .form-group,
          .contact-card {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}