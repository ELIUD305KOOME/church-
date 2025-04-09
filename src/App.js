// src/App.js
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './pages/loader'; // Loader with visuals
import './App.css';

const HomePage = lazy(() => import('./pages/Home'));

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
      <Header />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
