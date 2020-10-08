import React from 'react';

import { NoMatch } from 'components';
import MainLayout from 'layouts/MainLayout';

const NoMatchPage = () => (
  <MainLayout noHeader>
    <NoMatch />
  </MainLayout>
);

export default NoMatchPage;
