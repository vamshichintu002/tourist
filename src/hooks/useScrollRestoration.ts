import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export function useScrollRestoration() {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (location.pathname === '/') {
      // Only restore scroll on POP navigation (browser back/forward)
      if (navType === 'POP') {
        const savedPosition = sessionStorage.getItem('scrollPosition');
        if (savedPosition) {
          window.scrollTo(0, parseInt(savedPosition));
        }
      }
    } else {
      // Save scroll position when leaving home page
      if (location.pathname !== '/') {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }
      // Scroll to top for other pages
      window.scrollTo(0, 0);
    }
  }, [location, navType]);
}
