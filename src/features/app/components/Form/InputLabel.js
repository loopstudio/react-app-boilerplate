import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Label, LabelContent, Span } from './Form.styles';

const InputLabel = ({ htmlFor, name, label }) => (
  <LabelContent>
    <Label htmlFor={htmlFor}>
      <Span>{label ?? <FormattedMessage id={`common.${name}`} />}</Span>
    </Label>
  </LabelContent>
);

InputLabel.defaultProps = {
  label: null,
};

InputLabel.propTypes = {
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default InputLabel;
