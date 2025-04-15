import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './pages/loader'; // Loader with visuals
import './App.css';
import Depart from './pages/departments';
import Watch from './pages/watch-us';
import SocialMediaPage from './pages/SocialMediaPage';
import CursorFollower from './pages/CursorFollower';

// Lazy loading HomePage component
const HomePage = lazy(() => import('./pages/Home'));

// AnimatedPage component to handle page transition
const AnimatedPage = ({ children }) => {
  const location = useLocation();
  
  // Track the previous location
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {
    setPrevLocation(location.pathname);
  }, [location]);

  const getTransitionClass = () => {
    // Determine the direction of the slide based on previous and current routes
    if (prevLocation === '/' && location.pathname === '/ministries') {
      return 'translate-x-full'; // Slide right to go to Ministries
    } else if (prevLocation === '/ministries' && location.pathname === '/') {
      return '-translate-x-full'; // Slide left to go back to Home
    } else if (prevLocation === '/Watch-Online' && location.pathname === '/social-media') {
      return 'translate-x-full'; // Slide right to go to Social Media
    } else if (prevLocation === '/social-media' && location.pathname === '/Watch-Online') {
      return '-translate-x-full'; // Slide left to go back to Watch-Online
    }
    return 'translate-x-0'; // Default: no transition
  };

  return (
    <div
      className={`transition-all duration-700 ease-in-out transform ${getTransitionClass()}`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Always wait 5 seconds before showing the actual app
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <Loader />;

  return (
    <Router>
      <CursorFollower />
      <Header />
      <Suspense fallback={<div className="loading"><Loader /></div>}>
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <HomePage />
              </AnimatedPage>
            }
          />
          <Route
            path="/ministries"
            element={
              <AnimatedPage>
                <Depart />
              </AnimatedPage>
            }
          />
          <Route
            path="/Watch-Online"
            element={
              <AnimatedPage>
                <Watch />
              </AnimatedPage>
            }
          />
          <Route
            path="/social-media"
            element={
              <AnimatedPage>
                <SocialMediaPage />
              </AnimatedPage>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
