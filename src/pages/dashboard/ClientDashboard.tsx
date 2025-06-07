import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, Activity, TrendingUp, Trophy } from 'lucide-react';
import ProgressChart from '../../components/common/ProgressChart';

const ClientDashboard = () => {
  const navigate = useNavigate();
  // Mock data for the dashboard
  const upcomingSessions = [
    {
      id: 1,
      title: 'Renforcement musculaire',
      coach: 'Thomas Dubois',
      date: new Date(2025, 3, 20, 18, 30),
      type: 'Individuel',
    },
    {
      id: 2,
      title: 'Cardio HIIT',
      coach: 'Emma Laurent',
      date: new Date(2025, 3, 22, 17, 0),
      type: 'Groupe',
    },
  ];

  const progressData = {
    weight: {
      data: [78, 77.5, 76.8, 76.2, 75.7, 75.1, 74.8],
      labels: ['1 Mars', '8 Mars', '15 Mars', '22 Mars', '29 Mars', '5 Avril', '12 Avril'],
    },
    performance: {
      data: [12, 14, 13, 15, 18, 17, 20],
      labels: ['1 Mars', '8 Mars', '15 Mars', '22 Mars', '29 Mars', '5 Avril', '12 Avril'],
    },
  };

  // Format date
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('fr-FR', options);
  };

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="animate-enter">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Bonjour, Sophie 👋</h1>
        <p className="text-gray-600">Voici un aperçu de vos progrès et séances à venir.</p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <Activity className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Séances du mois</p>
                <p className="text-xl font-semibold">8 / 12</p>
              </div>
            </div>
            
            <div className="card p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-secondary-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Progression</p>
                <p className="text-xl font-semibold">+12%</p>
              </div>
            </div>
            
            <div className="card p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center mr-4">
                <Trophy className="h-6 w-6 text-accent-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Objectifs atteints</p>
                <p className="text-xl font-semibold">2 / 4</p>
              </div>
            </div>
          </div>
          
          {/* Progress Charts */}
          <div className="space-y-6">
            <ProgressChart 
              title="Évolution du poids" 
              data={progressData.weight.data} 
              labels={progressData.weight.labels}
              color="#0EA5E9"
              unit=" kg"
            />
            
            <ProgressChart 
              title="Performance (Burpees en 1 min)" 
              data={progressData.performance.data} 
              labels={progressData.performance.labels}
              color="#10B981"
            />
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Next Session */}
          <div className="card overflow-hidden">
            <div className="bg-primary-600 px-4 py-3 text-white">
              <h3 className="font-semibold">Prochaine séance</h3>
            </div>
            <div className="p-4">
              {upcomingSessions.length > 0 ? (
                <div>
                  <h4 className="font-semibold text-lg mb-2">{upcomingSessions[0].title}</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Coach: {upcomingSessions[0].coach}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="capitalize">{formatDate(upcomingSessions[0].date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{formatTime(upcomingSessions[0].date)}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className={`badge ${
                      upcomingSessions[0].type === 'Individuel' 
                        ? 'badge-primary' 
                        : 'badge-secondary'
                    }`}>
                      {upcomingSessions[0].type}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">Aucune séance programmée</p>
              )}
              <div className="mt-4">
                <button
                  className="btn-primary w-full"
                  onClick={() => navigate('/dashboard/seances')}
                >
                  Réserver une séance
                </button>
              </div>
            </div>
          </div>
          
          {/* Upcoming Sessions */}
          <div className="card overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-b">
              <h3 className="font-semibold">Séances à venir</h3>
            </div>
            <div className="divide-y">
              {upcomingSessions.slice(1).map((session) => (
                <div key={session.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{session.title}</h4>
                      <p className="text-sm text-gray-600">Coach: {session.coach}</p>
                      <div className="mt-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          <span className="capitalize">{formatDate(session.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          <span>{formatTime(session.date)}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`badge ${
                      session.type === 'Individuel' 
                        ? 'badge-primary' 
                        : 'badge-secondary'
                    }`}>
                      {session.type}
                    </span>
                  </div>
                </div>
              ))}
              {upcomingSessions.length <= 1 && (
                <div className="p-4 text-gray-600 text-center">
                  Pas d'autres séances programmées
                </div>
              )}
            </div>
          </div>
          
          {/* Objectives */}
          <div className="card overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-b">
              <h3 className="font-semibold">Mes objectifs</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Perte de poids</span>
                    <span className="text-sm font-medium text-primary-600">75% complété</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Musculation</span>
                    <span className="text-sm font-medium text-secondary-600">40% complété</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Endurance</span>
                    <span className="text-sm font-medium text-accent-600">60% complété</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;