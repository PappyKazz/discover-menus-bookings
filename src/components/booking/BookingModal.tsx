import React, { useState } from 'react';
import { TimeSlotSelector } from './TimeSlotSelector';

interface BookingModalProps {
  restaurantName: string;
  onClose: () => void;
  onConfirm: (booking: { date: string; time: string; partySize: number }) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ restaurantName, onClose, onConfirm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && time) {
      onConfirm({ date, time, partySize });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book a Table at {restaurantName}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Party Size</label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                  <option key={size} value={size}>{size} {size === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <TimeSlotSelector selectedTime={time} onTimeSelect={setTime} />
            <button
              type="submit"
              className="w-full py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
