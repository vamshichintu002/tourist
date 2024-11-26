import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: parseInt(savedPosition),
            behavior: 'instant'
          });
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
