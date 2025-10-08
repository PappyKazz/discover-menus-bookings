import React from 'react';
import { RestaurantCard } from './RestaurantCard';

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  price_range: number;
  rating: number;
  image_url: string;
  description: string;
}

interface RestaurantGridProps {
  restaurants: Restaurant[];
  onRestaurantClick: (id: string) => void;
}

export const RestaurantGrid: React.FC<RestaurantGridProps> = ({ restaurants, onRestaurantClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onClick={onRestaurantClick}
        />
      ))}
    </div>
  );
};
