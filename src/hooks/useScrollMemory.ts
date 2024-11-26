import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useScrollMemory = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Save scroll position before leaving
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Restore scroll position when returning to home
  useEffect(() => {
    if (location.pathname === '/') {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo({
          top: parseInt(savedPosition),
          behavior: 'instant'
        });
      }
    }
  }, [location.pathname]);

  const navigateWithScroll = (path: string) => {
    // Save current scroll position before navigating
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    navigate(path);
  };

  return { navigateWithScroll };
};
