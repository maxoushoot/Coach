import React, { useState } from 'react';

const SignUpPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError('Tous les champs sont obligatoires.');
      return;
    }
    if (!form.email.includes('@')) {
      setError('Adresse e-mail invalide.');
      return;
    }
    if (form.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    // In a real app we would send the data to the server here
    setSuccess('Compte créé avec succès !');
    setForm({ name: '', email: '', password: '', confirm: '' });
  };

  return (
    <div className="animate-enter py-16">
      <div className="max-w-md mx-auto card p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Inscription</h1>
        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}
        {success && (
          <div className="mb-4 text-green-600 text-sm text-center">{success}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
            placeholder="Nom complet"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input"
            placeholder="Adresse e-mail"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="input"
            placeholder="Mot de passe"
          />
          <input
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            className="input"
            placeholder="Confirmer le mot de passe"
          />
          <button type="submit" className="btn-primary w-full">
            Créer mon compte
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
