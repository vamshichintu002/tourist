import React from 'react';
import TimelineItem from './TimelineItem';
import { useInView } from '../hooks/useInView';

interface TimelineProps {
  dayPlans: {
    day: number;
    title: string;
    activities: string[];
  }[];
}

const Timeline = ({ dayPlans }: TimelineProps) => {
  return (
    <div className="space-y-0"> {/* Removed space-y-16 to let TimelineItem handle spacing */}
      {dayPlans.map((day, index) => (
        <TimelineItemWrapper
          key={day.day}
          {...day}
          index={index}
          isLast={index === dayPlans.length - 1}
        />
      ))}
    </div>
  );
};

const TimelineItemWrapper = (props: any) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <div ref={ref}>
      <TimelineItem {...props} isVisible={isVisible} />
    </div>
  );
};

export default Timeline;