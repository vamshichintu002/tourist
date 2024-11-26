import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_POSITIONS: { [key: string]: number } = {};

export const useScrollPosition = () => {
  const location = useLocation();

  useEffect(() => {
    // Save scroll position when leaving a page
    return () => {
      SCROLL_POSITIONS[location.pathname] = window.scrollY;
    };
  }, [location]);

  useEffect(() => {
    // Restore scroll position when returning to a page
    const savedPosition = SCROLL_POSITIONS[location.pathname];
    if (savedPosition) {
      window.scrollTo(0, savedPosition);
    }
  }, [location]);
};
