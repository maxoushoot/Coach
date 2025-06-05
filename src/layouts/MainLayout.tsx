import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Instagram, Facebook, Twitter,
  Mail, Dumbbell, User
} from 'lucide-react';
import Logo from '../components/common/Logo';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Fonctionnalités', href: '/fonctionnalites' },
    { name: 'Coachs', href: '/coachs' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <Logo className="h-8 w-auto sm:h-10" />
              </Link>
            </div>
            
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                onClick={() => setIsMenuOpen(true)}
              >
                <span className="sr-only">Ouvrir le menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <nav className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium ${
                    location.pathname === item.href
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="/connexion"
                className="whitespace-nowrap text-base font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
              >
                Connexion
              </Link>
              <Link
                to="/inscription"
                className="ml-8 whitespace-nowrap btn-primary"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'fixed inset-0 z-50 overflow-hidden' : 'hidden'
          }`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-auto">
                <div className="px-4 sm:px-6 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Fermer le menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 px-4 sm:px-6">
                  <nav className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block py-2 px-3 rounded-md ${
                          location.pathname === item.href
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        } transition-colors duration-200`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="mt-6 px-4 sm:px-6">
                  <div className="space-y-4">
                    <Link
                      to="/connexion"
                      className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <User className="mr-2 h-5 w-5" />
                      Connexion
                    </Link>
                    <Link
                      to="/inscription"
                      className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                    >
                      <Dumbbell className="mr-2 h-5 w-5" />
                      S'inscrire
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Logo className="h-8 w-auto text-white" />
              <p className="mt-4 text-sm text-gray-300">
                Votre plateforme de coaching sportif personnalisé, pour atteindre vos objectifs avec un suivi professionnel.
              </p>
              <div className="mt-6 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Légal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="#" className="text-base text-gray-300 hover:text-white">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-base text-gray-300 hover:text-white">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-base text-gray-300 hover:text-white">
                    Conditions d'utilisation
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex">
                  <Mail className="h-6 w-6 mr-2" />
                  <a href="mailto:contact@fitcoach.pro" className="text-gray-300 hover:text-white">
                    contact@fitcoach.pro
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} FitCoach Pro. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;