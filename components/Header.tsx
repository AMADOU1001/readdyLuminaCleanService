
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ensure component is mounted before allowing state updates
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isMounted && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    if (isMounted) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMounted]);

  const services = [
    { name: 'Nettoyage résidentiel', href: '/services/residentiel' },
    { name: 'Nettoyage commercial', href: '/services/commercial' },
    { name: 'Airbnb', href: '/services/airbnb' },
    { name: 'Terrasses', href: '/services/terrasses' },
    { name: 'Vitres', href: '/services/vitres' },
    { name: 'Canapés', href: '/services/canapes' },
    { name: 'Après-construction', href: '/services/apres-construction' },
    { name: 'Admin', href: '/admin' }
  ];

  const handleServicesToggle = () => {
    if (isMounted) {
      setIsServicesOpen(!isServicesOpen);
    }
  };

  const handleMenuToggle = () => {
    if (isMounted) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img
              src="https://static.readdy.ai/image/35649d6e4e85d955ed4f7e483825eb28/3c7437a326e8f9f84684f8ca5264b0a5.jfif"
              alt="Lumina Clean Service"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Accueil
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer flex items-center"
                onClick={handleServicesToggle}
              >
                Services
                <i className="ri-arrow-down-s-line ml-1 w-4 h-4 flex items-center justify-center"></i>
              </button>

              {isMounted && isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Demander un devis
          </Link>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={handleMenuToggle}
          >
            <i className={`${isMounted && isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>
        </div>

        {isMounted && isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Accueil
              </Link>

              <div className="text-gray-500 font-medium">Services</div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}

              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
