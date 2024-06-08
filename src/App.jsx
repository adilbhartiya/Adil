import React, { useRef, useState, useEffect } from 'react';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Certificate from './sections/certificate/Certificate';

import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';




const App = () => {
  const { themeState } = useThemeContext();
  const mainRef = useRef(null);
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  useEffect(() => {
    const floatingNavToggleHandler = () => {
      if (!mainRef.current) return;
      const newPosition = mainRef.current.getBoundingClientRect().y;
      if (
        siteYPosition < newPosition - 20 ||
        siteYPosition > newPosition + 20
      ) {
        showFloatingNavHandler();
      } else {
        hideFloatingNavHandler();
      }
      setSiteYPosition(prevPosition => {
        if (prevPosition !== newPosition) {
          return newPosition;
        }
        return prevPosition;
      });
    };

    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // Cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPosition]); // Include siteYPosition in the dependency array

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Certificate />

      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
