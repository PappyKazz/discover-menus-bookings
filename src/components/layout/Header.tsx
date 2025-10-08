import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AuthModal } from '../auth/AuthModal';

export const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-600">DineDiscover</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">Restaurants</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">Cuisines</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-sm text-gray-700">Welcome!</span>
                  <button
                    onClick={() => signOut()}
                    className="px-4 py-2 text-gray-700 hover:text-amber-600 font-medium"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="px-6 py-2 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};
