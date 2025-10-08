import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Easy Discovery',
      description: 'Find the perfect restaurant with advanced search and filters'
    },
    {
      icon: '📅',
      title: 'Instant Booking',
      description: 'Reserve your table in seconds with real-time availability'
    },
    {
      icon: '⭐',
      title: 'Verified Reviews',
      description: 'Read authentic reviews from real diners'
    },
    {
      icon: '🍽️',
      title: 'Detailed Menus',
      description: 'Browse complete menus with prices before you go'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose DineDiscover
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
