import React from 'react';
import { cn } from '../lib/utils';

interface ImageCardProps {
  src: string;
  title: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageCard = ({ src, title, description, className, style }: ImageCardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg group transition-all duration-300 hover:shadow-xl",
        className
      )}
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <img 
        src={src} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform transition-transform duration-300">
        <h4 className="text-lg font-semibold leading-tight mb-1">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-white/90 leading-snug">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;