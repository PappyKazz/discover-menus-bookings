import React from 'react';

interface TimeSlotSelectorProps {
  selectedTime: string;
  onTimeSelect: (time: string) => void;
}

export const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({ selectedTime, onTimeSelect }) => {
  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM'
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">Select Time</label>
      <div className="grid grid-cols-4 gap-2">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => onTimeSelect(time)}
            className={`px-3 py-2 text-sm rounded-lg transition-colors ${
              selectedTime === time
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};
