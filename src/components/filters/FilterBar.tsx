import React from 'react';

interface FilterBarProps {
  selectedCuisine: string;
  selectedPrice: number | null;
  selectedRating: number | null;
  onCuisineChange: (cuisine: string) => void;
  onPriceChange: (price: number | null) => void;
  onRatingChange: (rating: number | null) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCuisine,
  selectedPrice,
  selectedRating,
  onCuisineChange,
  onPriceChange,
  onRatingChange,
}) => {
  const cuisines = ['All', 'Italian', 'Japanese', 'Mexican', 'American', 'Indian', 'French', 'Thai', 'Greek', 'Korean', 'Vegan'];
  const prices = [1, 2, 3, 4];
  const ratings = [3, 4, 4.5];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="flex flex-wrap gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine</label>
          <select
            value={selectedCuisine}
            onChange={(e) => onCuisineChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="flex gap-2">
            {prices.map((price) => (
              <button
                key={price}
                onClick={() => onPriceChange(selectedPrice === price ? null : price)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  selectedPrice === price ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {'K'.repeat(price)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Min Rating</label>
          <div className="flex gap-2">
            {ratings.map((rating) => (
              <button
                key={rating}
                onClick={() => onRatingChange(selectedRating === rating ? null : rating)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  selectedRating === rating ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {rating}+
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
