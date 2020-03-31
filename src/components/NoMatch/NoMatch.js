import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import styles from './NoMatch.module.scss';

const NoMatch = () => (
  <div className={styles.content}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <FormattedMessage id="common.pageNotFoundTitle" />
      </h1>
      <p className={styles.legend}>
        <FormattedMessage id="common.pageNotFoundLegend" />
      </p>
      <Link to="/" className={styles.goBackHome}>
        <FormattedMessage id="common.goBackHome" />
      </Link>
    </div>
  </div>
);

export default NoMatch;
