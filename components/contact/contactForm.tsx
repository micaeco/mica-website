'use client';

import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // Here you would implement the logic to send the form data to your Gmail inbox
    console.log('Form submitted:', { name, email, message })
    // Reset form fields after submission
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg p-6">
      <h3 className="mb-4 text-center font-bold">Envia&apos;ns un missatge</h3>
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block text-neutral-600">Nom</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded border border-neutral-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block text-neutral-600">Correu electrònic</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border border-neutral-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="mb-2 block text-neutral-600">Missatge</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full rounded border border-neutral-300 p-2"
          rows={4}
        ></textarea>
      </div>
      <button type="submit" className="rounded-lg bg-accent px-4 py-2 text-white transition-colors hover:bg-accent-300">
        Enviar
      </button>
    </form>
  )
}