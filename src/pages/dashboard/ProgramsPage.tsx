import React, { useState } from 'react';
import ProgramCard from '../../components/common/ProgramCard';

interface Program {
  id: number;
  title: string;
  description: string;
  sessions: number;
}

const ProgramsPage: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([
    {
      id: 1,
      title: 'Remise en forme',
      description: "Programme de 4 semaines pour reprendre le sport en douceur.",
      sessions: 12,
    },
    {
      id: 2,
      title: 'Prise de masse',
      description: 'Entraînements intensifs sur 8 semaines pour développer la masse musculaire.',
      sessions: 24,
    },
  ]);

  const [form, setForm] = useState({ title: '', description: '', sessions: 1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description) return;
    const newProgram: Program = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      sessions: Number(form.sessions),
    };
    setPrograms([...programs, newProgram]);
    setForm({ title: '', description: '', sessions: 1 });
  };

  const handleDelete = (id: number) => {
    setPrograms(programs.filter((p) => p.id !== id));
  };

  return (
    <div className="animate-enter py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Mes programmes</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
              sessions={program.sessions}
              onDelete={() => handleDelete(program.id)}
            />
          ))}
        </div>

        <div className="card p-6 max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-4">Nouveau programme</h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="input"
              placeholder="Titre"
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="input h-24 resize-none"
              placeholder="Description"
            ></textarea>
            <input
              type="number"
              name="sessions"
              value={form.sessions}
              min={1}
              onChange={handleChange}
              className="input"
              placeholder="Nombre de séances"
            />
            <button type="submit" className="btn-primary w-full">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
