import React from 'react';
import { BookOpen, Clock, MapPin, Tag, Calendar } from 'lucide-react';
import AttractionHighlights from './AttractionHighlights';
import { AttractionType } from '../../types/attraction';

interface AttractionOverviewProps {
  attraction: AttractionType;
}

export default function AttractionOverview({ attraction }: AttractionOverviewProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">{attraction.description}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">Key Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Duration</h3>
              <p className="text-gray-600">{attraction.duration}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Location</h3>
              <p className="text-gray-600">{attraction.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Tag className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Category</h3>
              <p className="text-gray-600">{attraction.category}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Availability</h3>
              <p className="text-gray-600">Open Daily</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">Key Highlights</h2>
        <AttractionHighlights highlights={attraction.highlights} />
      </div>
    </div>
  );
}