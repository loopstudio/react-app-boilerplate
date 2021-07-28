import PropTypes from 'prop-types';

import {
  Wrapper,
  Spinner,
  DoubleBounce,
  DoubleBounceWithDelay,
} from './Loading.styles';

const Loading = ({ styles, className }) => (
  <Wrapper styles={styles} className={className}>
    <Spinner>
      <DoubleBounce />
      <DoubleBounceWithDelay />
    </Spinner>
  </Wrapper>
);

Loading.defaultProps = {
  className: '',
  styles: {},
};

Loading.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
};

export default Loading;
