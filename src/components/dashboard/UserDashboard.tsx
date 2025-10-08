import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  const mockReservations = [
    { id: '1', restaurant: 'La Bella Vista', date: '2025-10-15', time: '7:00 PM', partySize: 4, status: 'Confirmed' },
    { id: '2', restaurant: 'Sakura Sushi', date: '2025-10-20', time: '6:30 PM', partySize: 2, status: 'Pending' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Information</h2>
        <p className="text-gray-700">Email: {user?.email}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">My Reservations</h2>
        <div className="space-y-4">
          {mockReservations.map((reservation) => (
            <div key={reservation.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{reservation.restaurant}</h3>
                  <p className="text-sm text-gray-600">{reservation.date} at {reservation.time}</p>
                  <p className="text-sm text-gray-600">Party of {reservation.partySize}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  reservation.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {reservation.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
