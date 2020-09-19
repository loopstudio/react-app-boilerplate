import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import queryString from 'query-string';

import { Content, SuccessText } from 'components/Home/Home.styles';

const Home = () => {
  const { location } = useHistory();

  const resetPasswordSuccess =
    queryString.parse(location.search)?.resetPassword === 'success';

  return (
    <Content>
      {resetPasswordSuccess && (
        <SuccessText>
          <FormattedMessage id="common.resetPasswordSuccess" />
        </SuccessText>
      )}
      <h1>Hello World</h1>
    </Content>
  );
};

export default Home;
