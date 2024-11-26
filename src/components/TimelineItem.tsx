import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '../lib/utils';

interface TimelineItemProps {
  day: number;
  title: string;
  activities: string[];
  isVisible: boolean;
  index: number;
  isLast: boolean;
}

const TimelineItem = ({ day, title, activities, isVisible, index, isLast }: TimelineItemProps) => {
  return (
    <div 
      className={cn(
        "relative pl-8 pb-16", // Added padding bottom for consistent spacing
        "transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Timeline dot and connecting line */}
      <div className="absolute -left-3 top-0 h-[calc(100%+4rem)]"> {/* Extended height */}
        {/* Dot */}
        <div 
          className={cn(
            "bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm transition-all duration-700 relative z-10",
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
          style={{ 
            transitionDelay: `${index * 150 + 200}ms`,
          }}
        >
          {day}
        </div>
        {/* Connecting Line */}
        {!isLast && (
          <div 
            className={cn(
              "absolute left-[11px] top-6 w-[2px] bg-primary/30 transition-all duration-1000",
              isVisible ? "h-full opacity-100" : "h-0 opacity-0"
            )}
            style={{ 
              transitionDelay: `${index * 150 + 400}ms`,
            }}
          >
            <div 
              className={cn(
                "absolute top-0 left-0 w-full bg-primary transition-all duration-1000",
                isVisible ? "h-full" : "h-0",
                "origin-top"
              )}
              style={{ 
                transitionDelay: `${index * 150 + 600}ms`,
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative">
        <h3 
          className={cn(
            "text-xl font-semibold mb-4 text-primary transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}
          style={{ 
            transitionDelay: `${index * 150 + 300}ms`,
          }}
        >
          {title}
        </h3>
        <ul className="space-y-3">
          {activities.map((activity, activityIndex) => (
            <li 
              key={activityIndex} 
              className={cn(
                "flex items-center gap-3 bg-accent p-3 rounded-lg transform transition-all duration-700",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              )}
              style={{ 
                transitionDelay: `${index * 150 + activityIndex * 100 + 500}ms`,
              }}
            >
              <div className="rounded-full p-2 bg-primary/10 text-primary transition-all duration-300 hover:scale-110">
                <Clock className="h-4 w-4" />
              </div>
              <span className="text-foreground">{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;