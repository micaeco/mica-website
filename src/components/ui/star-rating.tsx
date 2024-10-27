import { Star } from 'lucide-react';

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="relative">
          <Star className="text-gray-300" size={24} />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${Math.max(0, Math.min(100, (rating - star + 1) * 100))}%` }}
          >
            <Star className="text-brand-accent" size={24} />
          </div>
        </div>
      ))}
    </div>
  );
}
