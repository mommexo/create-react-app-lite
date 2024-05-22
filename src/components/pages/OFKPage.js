// OFKPage.js

import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const OFKPage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <MainContent />
      <Sidebar />
    </div>
  );
};

export default OFKPage;
