import React from 'react';

type Props = {
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({ name, role, quote }: Props) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <p className="mb-4 text-gray-700">&ldquo;{quote}&rdquo;</p>
      <div className="font-semibold text-primary">{name}</div>
      <div className="text-sm font-light">{role}</div>
    </div>
  );
}
