import React from 'react';

type Props = {
  name: string,
  role: string,
  quote: string,
}

const TestimonialCard = ({ name, role, quote }: Props) => (
  <div className="rounded-lg bg-white p-6 shadow-md">
    <p className="mb-4 text-gray-700">&ldquo;{quote}&rdquo;</p>
    <div className="font-semibold text-primary">{name}</div>
    <div className="text-sm text-gray-600">{role}</div>
  </div>
);

export default TestimonialCard;