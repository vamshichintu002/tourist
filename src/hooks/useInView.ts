import { useState, useEffect, RefObject } from 'react';

export function useInView(ref: RefObject<HTMLElement>, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
      }
    }, {
      rootMargin: '0px 0px -15% 0px',
      threshold: [0, 0.1, 0.2],
      ...options,
    });

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options]);

  return isIntersecting;
}