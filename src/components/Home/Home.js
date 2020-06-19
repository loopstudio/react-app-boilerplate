import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import queryString from 'query-string';

import style from './Home.module.scss';

const Home = () => {
  const { location } = useHistory();

  const resetPasswordSuccess =
    queryString.parse(location.search)?.resetPassword === 'success';

  return (
    <div className={style.content}>
      {resetPasswordSuccess && (
        <p className={style.success}>
          <FormattedMessage id="common.resetPasswordSuccess" />
        </p>
      )}
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
