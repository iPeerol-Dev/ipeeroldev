import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

const App = () => {
  return (
   <>
      <Helmet>
        <title>iPeerol's Portfolio</title>
        <meta name="description" content="MERN Stack Developer | Robotics and AI Enthusiast." />
        
        {/* Open Graph */}
        <meta property="og:title" content="iPeerol's Portfolio" />
          <meta property="og:description" content="MERN Stack Developer | Robotics and AI Enthusiast." />
          <meta property="og:image" content="https://ipeeroldev.vercel.app/preview-image.png" />
        <meta property="og:url" content="https://ipeeroldev.vercel.app" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="iPeerol's Portfolio" />
        <meta name="twitter:description" content="MERN Stack Developer | Robotics and AI Enthusiast." />
        <meta name="twitter:image" content="https://ipeeroldev.vercel.app/preview-image.png" />
      </Helmet>

    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    </>
  );
};

export default App;
