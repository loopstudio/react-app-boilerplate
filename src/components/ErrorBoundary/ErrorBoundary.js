import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: {},
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
  }

  render() {
    const {
      hasError,
      error: { message },
    } = this.state;
    const { children } = this.props;
    const isDevelopmentMode = process.env.NODE_ENV === 'development';

    if (hasError)
      return (
        <main className={styles.content}>
          <div className={styles.wrapper}>
            <p className={styles.legend}>
              <FormattedMessage id="common.errorBoundaryMessage" />
            </p>
            {isDevelopmentMode && (
              <>
                <p className={styles.errorMessage}>{message}</p>
                <a
                  href="https://github.com/LoopStudio/react-app-boilerplate/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnReportIssue}
                >
                  <FormattedMessage id="common.reportError" />
                </a>
              </>
            )}
          </div>
        </main>
      );

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
