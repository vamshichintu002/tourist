import React from 'react';
import { Check } from 'lucide-react';

interface AttractionHighlightsProps {
  highlights: string[];
}

export default function AttractionHighlights({ highlights }: AttractionHighlightsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="p-2 bg-green-50 rounded-xl">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-gray-700 leading-relaxed">{highlight}</p>
        </div>
      ))}
    </div>
  );
}