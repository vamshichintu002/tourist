import { type FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdditionalServices from './components/AdditionalServices.js';
import Destinations from './components/Destinations';
import Partners from './components/Partners';
import Newsletter from './components/newsletter';
import Footer from './components/Footer';
import DubaiExplorer from './pages/DubaiExplorer';
import AbuDhabiExplorer from './pages/AbuDhabiExplorer';
import SharjahExplorer from './pages/SharjahExplorer';
import ScrollToTop from './components/ScrollToTop';
import TourPackageSection from './components/TourPackageSection';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <AdditionalServices />
      <TourPackageSection />
      <Partners />
      <Newsletter />
    </>
  );
};

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const App: FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname === '/') {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dubai" element={<DubaiExplorer />} />
            <Route path="/abu-dhabi" element={<AbuDhabiExplorer />} />
            <Route path="/sharjah" element={<SharjahExplorer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;