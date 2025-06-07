import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Bell, User, Calendar, Activity, 
  Users, MessageSquare, BookOpen, LogOut,
  Settings
} from 'lucide-react';
import Logo from '../components/common/Logo';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Mock data for current user - in a real app this would come from auth context
  const currentUser = {
    name: 'Sophie Martin',
    email: 'sophie@example.com',
    role: 'client', // or 'coach'
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  };

  const isCoach = currentUser.role === 'coach';

  const navigation = isCoach
    ? [
        { name: 'Tableau de bord', href: '/dashboard/coach', icon: Activity },
        { name: 'Calendrier', href: '/dashboard/seances', icon: Calendar },
        { name: 'Clients', href: '/dashboard/clients', icon: Users },
        { name: 'Programmes', href: '/dashboard/programmes', icon: BookOpen },
        { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
      ]
    : [
        { name: 'Tableau de bord', href: '/dashboard/client', icon: Activity },
        { name: 'Mes progrès', href: '/dashboard/progres', icon: Activity },
        { name: 'Mes séances', href: '/dashboard/seances', icon: Calendar },
        { name: 'Mes programmes', href: '/dashboard/programmes', icon: BookOpen },
        { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
      ];

  // Mock notifications
  const notifications = [
    { id: 1, text: 'Nouvelle séance programmée', time: 'Il y a 5 min', read: false },
    { id: 2, text: 'Thomas a commenté votre progrès', time: 'Il y a 1 heure', read: false },
    { id: 3, text: 'Votre nouveau programme est disponible', time: 'Hier', read: true },
  ];

  const handleSignOut = () => {
    // In a real app, handle the sign out logic here
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-primary-900">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary-950">
              <Link to="/" className="flex items-center">
                <Logo className="h-8 w-auto text-white" />
              </Link>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${
                        location.pathname === item.href
                          ? 'bg-primary-800 text-white'
                          : 'text-primary-100 hover:bg-primary-800'
                      } group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors duration-200`}
                    >
                      <Icon className="mr-3 h-6 w-6 flex-shrink-0" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'fixed inset-0 z-40 flex md:hidden' : 'hidden'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-primary-900">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <Logo className="h-8 w-auto text-white" />
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      location.pathname === item.href
                        ? 'bg-primary-800 text-white'
                        : 'text-primary-100 hover:bg-primary-800'
                    } group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors duration-200`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Icon className="mr-4 h-6 w-6" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-primary-800 p-4">
            <div className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src={currentUser.avatar}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">
                    {currentUser.name}
                  </p>
                  <p className="text-sm font-medium text-primary-200">
                    {isCoach ? 'Coach' : 'Client'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {navigation.find((item) => item.href === location.pathname)?.name || 'Tableau de bord'}
              </h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* Notifications dropdown */}
              <div className="ml-3 relative">
                <button
                  type="button"
                  className="relative p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-full"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                  <span className="sr-only">Voir les notifications</span>
                  <Bell className="h-6 w-6" />
                  {notifications.some(n => !n.read) && (
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                  )}
                </button>
                
                {isNotificationsOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <div className="font-medium">Notifications</div>
                    </div>
                    {notifications.length > 0 ? (
                      <div className="max-h-60 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 hover:bg-gray-50 ${
                              !notification.read ? 'bg-primary-50' : ''
                            }`}
                          >
                            <p className="text-sm font-medium text-gray-900">
                              {notification.text}
                            </p>
                            <p className="text-xs text-gray-500">
                              {notification.time}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-700">
                        Aucune notification
                      </div>
                    )}
                    <div className="border-t border-gray-100">
                      <Link
                        to="/dashboard/messages"
                        className="block px-4 py-2 text-sm text-center text-primary-600 hover:bg-gray-50"
                        onClick={() => setIsNotificationsOpen(false)}
                      >
                        Voir toutes les notifications
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  >
                    <span className="sr-only">Ouvrir le menu utilisateur</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={currentUser.avatar}
                      alt=""
                    />
                  </button>
                </div>

                {isProfileMenuOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <div className="font-medium">{currentUser.name}</div>
                      <div className="text-gray-500">{currentUser.email}</div>
                    </div>
                    <Link
                      to="/dashboard/profil"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <User className="mr-3 h-5 w-5 text-gray-400" />
                        Profil
                      </div>
                    </Link>
                    <Link
                      to="/dashboard/parametres"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <Settings className="mr-3 h-5 w-5 text-gray-400" />
                        Paramètres
                      </div>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <div className="flex items-center">
                        <LogOut className="mr-3 h-5 w-5 text-gray-400" />
                        Déconnexion
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="page-transition">
                <Outlet />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;