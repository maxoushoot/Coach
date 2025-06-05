import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="animate-enter py-16">
      <div className="max-w-lg mx-auto card p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact</h1>
        {sent && (
          <div className="mb-4 text-green-600 text-sm text-center">
            Votre message a bien été envoyé.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className="input h-32 resize-none"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn-primary w-full">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
