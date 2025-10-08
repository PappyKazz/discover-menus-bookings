import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">DineDiscover</h3>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for discovering and booking the best restaurants in town.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Diners</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400">Browse Restaurants</a></li>
              <li><a href="#" className="hover:text-amber-400">Make Reservations</a></li>
              <li><a href="#" className="hover:text-amber-400">Write Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Restaurants</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400">List Your Restaurant</a></li>
              <li><a href="#" className="hover:text-amber-400">Owner Dashboard</a></li>
              <li><a href="#" className="hover:text-amber-400">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400">Contact</a></li>
              <li><a href="#" className="hover:text-amber-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 DineDiscover. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
