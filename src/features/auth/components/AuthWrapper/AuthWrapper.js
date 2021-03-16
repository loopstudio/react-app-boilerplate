import PropTypes from 'prop-types';

import {
  AuthContainer,
  AuthTitle,
  LegendContainer,
  Screen,
  ViewContainer,
} from 'features/auth/components/AuthWrapper/AuthWrapper.styles';

const AuthWrapper = ({ title, children, renderLegend }) => (
  <Screen>
    <ViewContainer>
      <AuthContainer>
        <AuthTitle data-testid="authentication-title">{title}</AuthTitle>
        {children}
      </AuthContainer>
      {renderLegend && <LegendContainer>{renderLegend()}</LegendContainer>}
    </ViewContainer>
  </Screen>
);

AuthWrapper.defaultProps = {
  title: '',
  renderLegend: () => {},
};

AuthWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
  renderLegend: PropTypes.func,
};

export default AuthWrapper;
