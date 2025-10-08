import React, { useState } from 'react';
import { StarRating } from '../ui/StarRating';
import { PriceIndicator } from '../ui/PriceIndicator';
import { BookingModal } from '../booking/BookingModal';

interface RestaurantDetailProps {
  restaurant: any;
  onBack: () => void;
}

export const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, onBack }) => {
  const [showBooking, setShowBooking] = useState(false);

  const menuItems = [
    { name: 'Grilled Salmon', price: 28, category: 'Main Course', image: 'https://d64gsuwffb70l.cloudfront.net/68dc863d5499bd43d8f66795_1759282824674_1a1e2c88.webp' },
    { name: 'Caesar Salad', price: 12, category: 'Appetizer', image: 'https://d64gsuwffb70l.cloudfront.net/68dc863d5499bd43d8f66795_1759282826399_23d6b0cb.webp' },
    { name: 'Beef Tenderloin', price: 42, category: 'Main Course', image: 'https://d64gsuwffb70l.cloudfront.net/68dc863d5499bd43d8f66795_1759282828139_4bc9c591.webp' },
    { name: 'Tiramisu', price: 10, category: 'Dessert', image: 'https://d64gsuwffb70l.cloudfront.net/68dc863d5499bd43d8f66795_1759282829867_01a9c6e2.webp' },
  ];

  const handleBooking = (booking: any) => {
    console.log('Booking confirmed:', booking);
    setShowBooking(false);
    alert('Reservation confirmed!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Restaurants
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <img src={restaurant.image_url} alt={restaurant.name} className="w-full h-96 object-cover" />
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
                <p className="text-lg text-amber-600 font-medium">{restaurant.cuisine}</p>
              </div>
              <PriceIndicator level={restaurant.price_range} />
            </div>
            <StarRating rating={restaurant.rating} size="lg" />
            <p className="text-gray-600 mt-4 mb-6">{restaurant.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {restaurant.address}
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {restaurant.phone}
              </div>
            </div>
            <button
              onClick={() => setShowBooking(true)}
              className="w-full md:w-auto px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              Make a Reservation
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-amber-600 font-bold">K{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showBooking && (
        <BookingModal
          restaurantName={restaurant.name}
          onClose={() => setShowBooking(false)}
          onConfirm={handleBooking}
        />
      )}
    </div>
  );
};
