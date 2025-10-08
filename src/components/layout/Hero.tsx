import React from 'react';
import { SearchBar } from '../search/SearchBar';

interface HeroProps {
  onSearch: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/68dc863d5499bd43d8f66795_1759282797125_2fd4373b.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Discover Your Next
          <span className="text-amber-400"> Dining Experience</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Find and book the best restaurants in your city. From cozy bistros to fine dining.
        </p>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};
