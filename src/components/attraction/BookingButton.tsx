import React from 'react';
import { Calendar } from 'lucide-react';
import { AttractionType } from '../../types/attraction';

interface BookingButtonProps {
  attraction: AttractionType;
  onBookNow: (attraction: AttractionType) => void;
}

export default function BookingButton({ attraction, onBookNow }: BookingButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
        <div>
          <p className="text-lg font-semibold text-gray-900">From $149 per person</p>
          <p className="text-sm text-gray-600">*Price varies by group size</p>
        </div>
        <button
          onClick={() => onBookNow(attraction)}
          className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          <Calendar className="w-5 h-5" />
          Book Now
        </button>
      </div>
    </div>
  );
}