import React from 'react';
import { StarRating } from '../ui/StarRating';
import { PriceIndicator } from '../ui/PriceIndicator';

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  price_range: number;
  rating: number;
  image_url: string;
  description: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: (id: string) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  return (
    <div
      onClick={() => onClick(restaurant.id)}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full">
          <PriceIndicator level={restaurant.price_range} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{restaurant.name}</h3>
        <p className="text-sm text-amber-600 font-medium mb-2">{restaurant.cuisine}</p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{restaurant.description}</p>
        <div className="flex items-center justify-between">
          <StarRating rating={restaurant.rating} size="sm" />
          <button className="px-4 py-1.5 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
