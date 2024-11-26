import React from 'react';
import { AttractionType } from '../../types/attraction';
import AttractionCard from './AttractionCard';

interface SearchResultsProps {
  results: AttractionType[];
  onClose: () => void;
}

export default function SearchResults({ results, onClose }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {results.length} {results.length === 1 ? 'Result' : 'Results'} Found
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}