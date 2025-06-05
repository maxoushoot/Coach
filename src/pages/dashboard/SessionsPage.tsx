import React, { useState } from 'react';
import SessionCard from '../../components/common/SessionCard';
import { sessions as mockSessions } from '../../data/mockData';

interface Session {
  id: string;
  title: string;
  type: string;
  date: string | Date;
  duration: number;
  location: string;
  capacity: number;
  enrolled: number;
}

const SessionsPage: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>(
    mockSessions.map((s) => ({ ...s, date: new Date(s.date) }))
  );
  const [booked, setBooked] = useState<string[]>([]);

  const handleBook = (id: string) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === id && session.type === 'Groupe'
          ? { ...session, enrolled: Math.min(session.enrolled + 1, session.capacity) }
          : session
      )
    );
    setBooked((prev) => [...prev, id]);
  };

  return (
    <div className="animate-enter py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Séances à venir</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session) => (
            <SessionCard
              key={session.id}
              title={session.title}
              type={session.type}
              date={session.date as Date}
              duration={session.duration}
              location={session.location}
              capacity={session.capacity}
              enrolled={session.enrolled}
              booked={booked.includes(session.id)}
              onBook={() => handleBook(session.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionsPage;
