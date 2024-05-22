// App.js

import React from 'react';
import HomePage from './HomePage';
import LocalNewsPage from './pages/LocalNewsPage';
import OFKPage from './pages/OfkPage';
import PredictionsPage from './pages/PredictionsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/local-news" element={<LocalNewsPage />} />
        <Route path="/ofk" element={<OFKPage />} />
        <Route path="/predictions" element={<PredictionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
