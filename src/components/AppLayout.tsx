import React, { useState } from 'react';
import { Header } from './layout/Header';
import { Hero } from './layout/Hero';
import { Footer } from './layout/Footer';
import { FilterBar } from './filters/FilterBar';
import { RestaurantGrid } from './restaurants/RestaurantGrid';
import { RestaurantDetail } from './restaurants/RestaurantDetail';
import { mockRestaurants } from '../data/mockData';

const AppLayout: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const filteredRestaurants = mockRestaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    const matchesPrice = selectedPrice === null || restaurant.price_range === selectedPrice;
    const matchesRating = selectedRating === null || restaurant.rating >= selectedRating;
    return matchesSearch && matchesCuisine && matchesPrice && matchesRating;
  });

  const handleRestaurantClick = (id: string) => {
    const restaurant = mockRestaurants.find((r) => r.id === id);
    setSelectedRestaurant(restaurant);
  };

  if (selectedRestaurant) {
    return <RestaurantDetail restaurant={selectedRestaurant} onBack={() => setSelectedRestaurant(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Hero onSearch={setSearchQuery} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <FilterBar
          selectedCuisine={selectedCuisine}
          selectedPrice={selectedPrice}
          selectedRating={selectedRating}
          onCuisineChange={setSelectedCuisine}
          onPriceChange={setSelectedPrice}
          onRatingChange={setSelectedRating}
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {filteredRestaurants.length} Restaurants Found
        </h2>
        <RestaurantGrid restaurants={filteredRestaurants} onRestaurantClick={handleRestaurantClick} />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
