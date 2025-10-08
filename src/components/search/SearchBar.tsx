import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
        <div className="flex-1 flex items-center px-6 py-4">
          <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search restaurants, cuisines, or locations..."
            className="w-full text-gray-700 placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};
