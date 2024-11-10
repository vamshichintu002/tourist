import { type FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import AdditionalServices from './components/AdditionalServices.js';
import Destinations from './components/Destinations';
import Partners from './components/Partners';
import Newsletter from './components/newsletter';

import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
  
        <Destinations />
        <AdditionalServices />
        <Partners />
        <Newsletter />
      
      </main>
      <Footer />
    </div>
  );
};

export default App;