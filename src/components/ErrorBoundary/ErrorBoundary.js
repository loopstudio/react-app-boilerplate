import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Content,
  ErrorMessage,
  Legend,
  ReportButton,
  Wrapper,
} from './ErrorBoundary.styles';

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
        <Content>
          <Wrapper>
            <Legend>
              <FormattedMessage id="common.errorBoundaryMessage" />
            </Legend>
            {isDevelopmentMode && (
              <>
                <ErrorMessage>{message}</ErrorMessage>
                <ReportButton
                  href="https://github.com/LoopStudio/react-app-boilerplate/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="common.reportError" />
                </ReportButton>
              </>
            )}
          </Wrapper>
        </Content>
      );

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
