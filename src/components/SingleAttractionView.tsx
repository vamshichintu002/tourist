import React from 'react';
import AttractionHero from './attraction/AttractionHero';
import AttractionOverview from './attraction/AttractionOverview';
import BookingButton from './attraction/BookingButton';
import { AttractionType } from '../types/attraction';

interface SingleAttractionViewProps {
  attraction: AttractionType;
  onBookNow: (attraction: AttractionType) => void;
}

export default function SingleAttractionView({ attraction, onBookNow }: SingleAttractionViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AttractionHero attraction={attraction} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AttractionOverview attraction={attraction} />
      </div>
      <BookingButton attraction={attraction} onBookNow={onBookNow} />
    </div>
  );
}