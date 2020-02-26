import React from 'react';

import Navbar from 'components/Navbar';
import Settings from 'components/Settings';
import MainLayout from 'layouts/MainLayout';

const SettingsPage = () => (
  <MainLayout>
    <Navbar />
    <Settings />
  </MainLayout>
);

export default SettingsPage;
