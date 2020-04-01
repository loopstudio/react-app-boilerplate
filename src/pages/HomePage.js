import React from 'react';

import Home from 'components/Home';
import MainLayout from 'layouts/MainLayout';
import Navbar from 'components/Navbar';

const HomePage = () => (
  <MainLayout>
    <Navbar />
    <Home />
  </MainLayout>
);

export default HomePage;
