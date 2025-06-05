import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    if (!email || !password) {
      setMessage('Veuillez renseigner votre email et votre mot de passe.');
      return;
    }
    // Here we would usually send credentials to the server
    setMessage(`Bienvenue !${remember ? ' (session mémorisée)' : ''}`);
    setEmail('');
    setPassword('');
    setRemember(false);
  };

  return (
    <div className="animate-enter py-16">
      <div className="max-w-md mx-auto card p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
        {message && (
          <div className="mb-4 text-sm text-center text-primary-600">{message}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            className="input"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Se souvenir de moi
          </label>
          <button type="submit" className="btn-primary w-full">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
