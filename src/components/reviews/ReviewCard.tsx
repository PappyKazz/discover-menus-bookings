import React from 'react';
import { StarRating } from '../ui/StarRating';

interface ReviewCardProps {
  review: {
    user_name: string;
    rating: number;
    comment: string;
    created_at: string;
  };
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold">
            {review.user_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{review.user_name}</p>
            <p className="text-xs text-gray-500">{new Date(review.created_at).toLocaleDateString()}</p>
          </div>
        </div>
        <StarRating rating={review.rating} size="sm" showNumber={false} />
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};
