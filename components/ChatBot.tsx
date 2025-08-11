
'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis votre assistant virtuel Lumina Clean. Comment puis-je vous aider aujourd\'hui ?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (date: Date) => {
    if (!isMounted) return '';

    try {
      return date.toLocaleTimeString('fr-FR', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'America/Toronto' 
      });
    } catch {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('prix') || message.includes('tarif') || message.includes('coût') || message.includes('combien')) {
      return 'Nos tarifs varient selon le type de service et la superficie. Nous proposons toujours un devis gratuit et personnalisé. Contactez-nous au +1 (514) 269-8119 pour obtenir votre devis !';
    }

    if (message.includes('service') || message.includes('nettoyage')) {
      return 'Nous offrons plusieurs services : nettoyage résidentiel, commercial, Airbnb, terrasses, vitres, canapés, et après-construction. Quel service vous intéresse ?';
    }

    if (message.includes('airbnb')) {
      return 'Notre service Airbnb comprend la remise en ordre rapide entre deux réservations : nettoyage complet, changement de literie, vérification des équipements. Parfait pour maintenir d\'excellentes évaluations !';
    }

    if (message.includes('résidentiel') || message.includes('maison') || message.includes('appartement')) {
      return 'Notre service résidentiel inclut le nettoyage des sols, dépoussiérage, cuisine, salle de bain avec des produits écoresponsables. Fréquence adaptable selon vos besoins.';
    }

    if (message.includes('commercial') || message.includes('bureau') || message.includes('entreprise')) {
      return 'Nous proposons des services de nettoyage pour bureaux et commerces avec une fréquence personnalisable. Maintenance régulière ou ponctuelle selon vos besoins.';
    }

    if (message.includes('terrasse') || message.includes('extérieur')) {
      return 'Notre service terrasses comprend le lavage haute pression, démoussage et nettoyage du mobilier extérieur. Redonnez vie à vos espaces extérieurs !';
    }

    if (message.includes('vitre') || message.includes('fenêtre')) {
      return 'Nous nettoyons vos vitres intérieur/extérieur, même en hauteur, avec un rendu sans traces garanti. Équipement professionnel pour un résultat parfait.';
    }

    if (message.includes('canapé') || message.includes('tissu') || message.includes('cuir')) {
      return 'Nettoyage vapeur ou à sec de vos canapés et fauteuils. Nous éliminons les taches et odeurs pour redonner une seconde vie à vos meubles.';
    }

    if (message.includes('construction') || message.includes('chantier') || message.includes('rénovation')) {
      return 'Notre service après-construction élimine tous les résidus de chantier et prépare votre espace à l\'emménagement. Nettoyage en profondeur garanti.';
    }

    if (message.includes('horaire') || message.includes('disponible') || message.includes('quand')) {
      return 'Nous sommes disponibles du lundi au vendredi de 8h à 18h, et le samedi de 9h à 16h. Nous adaptons nos horaires selon vos besoins !';
    }

    if (message.includes('contact') || message.includes('téléphone') || message.includes('email')) {
      return 'Vous pouvez nous joindre au +1 (514) 269-8119 ou par courriel à luminacleanservice@gmail.com. Nous répondons rapidement à toutes vos demandes !';
    }

    if (message.includes('devis') || message.includes('estimation')) {
      return 'Nous offrons des devis gratuits et personnalisés ! Contactez-nous au +1 (514) 269-8119 ou remplissez notre formulaire de contact pour recevoir votre estimation.';
    }

    if (message.includes('produit') || message.includes('écologique') || message.includes('environnement')) {
      return 'Nous utilisons exclusivement des produits écoresponsables, certifiés et respectueux de votre santé et de l\'environnement. Efficacité et respect de la nature !';
    }

    if (message.includes('assurance') || message.includes('garanti')) {
      return 'Oui, nous disposons d\'une assurance responsabilité civile professionnelle et d\'une garantie décennale. Vous êtes entièrement protégés !';
    }

    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
      return 'Bonjour ! Ravi de vous rencontrer. Comment puis-je vous aider avec vos besoins de nettoyage aujourd\'hui ?';
    }

    if (message.includes('merci') || message.includes('au revoir') || message.includes('bye')) {
      return 'Je vous en prie ! N\'hésitez pas à me recontacter si vous avez d\'autres questions. Bonne journée !';
    }

    return 'Je comprends votre question. Pour une réponse plus précise, je vous invite à nous contacter directement au +1 (514) 269-8119 ou à remplir notre formulaire de contact. Notre équipe se fera un plaisir de vous aider !';
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <i className="ri-chat-3-line text-xl w-6 h-6 flex items-center justify-center"></i>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border transition-all duration-300 z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <i className="ri-robot-line text-sm"></i>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Assistant Lumina Clean</h3>
              <p className="text-xs opacity-90">En ligne</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center hover:bg-blue-500 rounded-full transition-colors"
          >
            <i className="ri-close-line text-lg"></i>
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-sm ${ 
                  message.isUser
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                <p>{message.text}</p>
                {isMounted && (
                  <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`} suppressHydrationWarning={true}>
                    {formatTime(message.timestamp)}
                  </p>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg rounded-bl-none text-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={inputMessage.trim() === ''}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <i className="ri-send-plane-line w-4 h-4 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
