
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-3 text-blue-400">Lumina Clean</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins de nettoyage professionnel au Québec.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/19C3ACUVGV/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors"
              >
                <i className="ri-facebook-fill text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/lumina_clean_service?igsh=azdoMDY2MjlxazY2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <i className="ri-instagram-line text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-blue-400">Services</h4>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <Link href="/services/residentiel" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Résidentiel</Link>
              <Link href="/services/commercial" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Commercial</Link>
              <Link href="/services/airbnb" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Airbnb</Link>
              <Link href="/services/vitres" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Vitres</Link>
              <Link href="/services/terrasses" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Terrasses</Link>
              <Link href="/services/canapes" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Canapés</Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-blue-400">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <i className="ri-phone-line text-blue-400 mr-2"></i>
                <span className="text-white">+1 (514) 269-8119</span>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-blue-400 mr-2"></i>
                <span className="text-white">luminacleanservice@gmail.com</span>
              </div>
              <div className="flex items-start">
                <i className="ri-map-pin-line text-blue-400 mr-2 mt-0.5"></i>
                <span className="text-white">401 Bd Du Curé Labelle<br />Laval, H7V-0E6</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p> 2025 Lumina Clean. Tous droits réservés.</p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <span>NEQ : 2279963633</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
