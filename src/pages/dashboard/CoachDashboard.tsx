import React from 'react';
import { Calendar, Users, CreditCard, BarChart2, TrendingUp, MessageSquare, BookOpen } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface CoachDashboardProps {
  isDemo?: boolean;
}

const CoachDashboard: React.FC<CoachDashboardProps> = ({ isDemo }) => {
  // Mock data for the dashboard
  const todaySessions = [
    {
      id: 1,
      title: 'Renforcement musculaire',
      client: 'Marie Dubois',
      time: new Date(2025, 3, 15, 9, 0),
      duration: 60,
      type: 'Individuel',
      status: 'upcoming', // 'completed', 'upcoming', 'cancelled'
    },
    {
      id: 2,
      title: 'Cardio HIIT',
      client: 'Groupe (5 personnes)',
      time: new Date(2025, 3, 15, 12, 30),
      duration: 45,
      type: 'Groupe',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Yoga débutant',
      client: 'Thomas Martin',
      time: new Date(2025, 3, 15, 18, 0),
      duration: 60,
      type: 'Individuel',
      status: 'upcoming',
    },
  ];

  const recentClients = [
    {
      id: 1,
      name: 'Sophie Leroux',
      plan: 'Abonnement mensuel',
      lastSession: new Date(2025, 3, 14),
      progress: 'good', // 'good', 'average', 'poor'
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 2,
      name: 'Marc Dupont',
      plan: 'Pack 10 séances',
      lastSession: new Date(2025, 3, 13),
      progress: 'average',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 3,
      name: 'Julie Moreau',
      plan: 'Abonnement mensuel',
      lastSession: new Date(2025, 3, 10),
      progress: 'good',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const formatTime = (date: Date) => {
    return format(date, 'HH:mm', { locale: fr });
  };

  const formatDate = (date: Date) => {
    return format(date, 'dd/MM/yyyy', { locale: fr });
  };

  // Statistics
  const stats = [
    { label: 'Clients actifs', value: '24', icon: Users, color: 'primary' },
    { label: 'Séances ce mois', value: '48', icon: Calendar, color: 'secondary' },
    { label: 'Taux de renouvellement', value: '87%', icon: TrendingUp, color: 'accent' },
    { label: 'Revenus mensuels', value: '3 600 €', icon: CreditCard, color: 'success' },
  ];

  return (
    <div className="animate-enter">
      {isDemo && (
        <div className="mb-4 p-3 text-sm rounded bg-orange-100 text-orange-800 text-center">
          Vous utilisez la version démo. Les données sont fictives.
        </div>
      )}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Bienvenue, Thomas 👋</h1>
        <p className="text-gray-600">Voici un aperçu de votre activité aujourd'hui.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            primary: 'bg-primary-100 text-primary-600',
            secondary: 'bg-secondary-100 text-secondary-600',
            accent: 'bg-accent-100 text-accent-600',
            success: 'bg-green-100 text-green-600',
          };
          
          return (
            <div key={index} className="card p-4 flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Sessions */}
        <div className="lg:col-span-2 card overflow-hidden">
          <div className="bg-primary-600 px-4 py-3 text-white flex justify-between items-center">
            <h3 className="font-semibold">Séances d'aujourd'hui</h3>
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {format(new Date(), "EEEE d MMMM", { locale: fr })}
            </div>
          </div>
          <div className="divide-y">
            {todaySessions.length > 0 ? (
              todaySessions.map((session) => (
                <div key={session.id} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center">
                        <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                          session.status === 'completed' 
                            ? 'bg-green-500' 
                            : session.status === 'upcoming' 
                              ? 'bg-blue-500' 
                              : 'bg-red-500'
                        }`}></span>
                        <h4 className="font-medium">{session.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Client: {session.client}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        {formatTime(session.time)} - {formatTime(new Date(session.time.getTime() + session.duration * 60000))}
                      </div>
                      <span className={`badge mt-1 ${
                        session.type === 'Individuel' 
                          ? 'badge-primary' 
                          : 'badge-secondary'
                      }`}>
                        {session.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <button className="btn-outline text-xs py-1 px-3">Détails</button>
                    <button className="btn-ghost text-xs py-1 px-3">Modifier</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                <Calendar className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p>Aucune séance programmée aujourd'hui</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="card p-4">
            <h3 className="font-semibold mb-4">Actions rapides</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="btn-primary text-sm py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Nouvelle séance
              </button>
              <button className="btn-outline text-sm py-2">
                <Users className="h-4 w-4 mr-2" />
                Ajouter client
              </button>
              <button className="btn-outline text-sm py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Créer programme
              </button>
              <button className="btn-outline text-sm py-2">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </button>
            </div>
          </div>

          {/* Recent Clients */}
          <div className="card overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-b">
              <h3 className="font-semibold">Clients récents</h3>
            </div>
            <div className="divide-y">
              {recentClients.map((client) => (
                <div key={client.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="h-10 w-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h4 className="font-medium">{client.name}</h4>
                      <p className="text-xs text-gray-600">{client.plan}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <div className={`h-2 w-16 rounded-full ${
                        client.progress === 'good' 
                          ? 'bg-green-500' 
                          : client.progress === 'average' 
                            ? 'bg-yellow-500' 
                            : 'bg-red-500'
                      }`}></div>
                      <p className="text-xs text-gray-600 mt-1">
                        {formatDate(client.lastSession)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-gray-50 border-t text-center">
              <a href="#" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                Voir tous les clients
              </a>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Revenus mensuels</h3>
              <button className="text-sm text-gray-500 hover:text-gray-700">
                <BarChart2 className="h-4 w-4" />
              </button>
            </div>
            <div className="h-48 flex items-end justify-between px-2">
              {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'].map((month, index) => {
                // Simulate revenue data
                const height = [60, 45, 70, 55, 80, 90][index];
                return (
                  <div key={month} className="flex flex-col items-center">
                    <div 
                      className="w-8 bg-primary-500 rounded-t" 
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs mt-1">{month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachDashboard;