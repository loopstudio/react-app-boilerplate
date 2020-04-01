import React from 'react';

import NoMatch from 'components/NoMatch';
import MainLayout from 'layouts/MainLayout';

const NoMatchPage = () => {
  return (
    <MainLayout noHeader>
      <NoMatch />
    </MainLayout>
  );
};

export default NoMatchPage;
