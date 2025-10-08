import React from 'react';

interface PriceIndicatorProps {
  level: number;
}

export const PriceIndicator: React.FC<PriceIndicatorProps> = ({ level }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4].map((price) => (
        <span
          key={price}
          className={`text-lg ${price <= level ? 'text-gray-700' : 'text-gray-300'}`}
        >
          K
        </span>
      ))}
    </div>
  );
};
