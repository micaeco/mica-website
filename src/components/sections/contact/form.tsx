'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="container mx-auto max-w-6xl">
        <h3 className="mb-4 font-bold">Estem buscant:</h3>
        <ul className="mb-16 space-y-4">
          {[
            { title: 'Beta testers', description: 'per ajudar-nos a desenvolupar i millorar MICA' },
            { title: 'Lampistes experimentats', description: 'per a la instal·lació de sensors' },
            { title: 'Socis estratègics', description: 'que comparteixin la nostra visió' },
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>
                <strong className="text-primary">{item.title}</strong> {item.description}
              </span>
            </li>
          ))}
        </ul>
        <h3 className="mb-6 font-bold">T&apos;hi apuntes?</h3>
        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-8 shadow-md">
          {[
            { id: 'name', label: 'Nom', type: 'text', value: name, onChange: setName },
            {
              id: 'email',
              label: 'Correu electrònic',
              type: 'email',
              value: email,
              onChange: setEmail,
            },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="mb-2 block text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-2 block text-gray-700">
              Missatge
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-md bg-accent px-4 py-2 font-semibold text-white transition-colors hover:bg-accent-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
