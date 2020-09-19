import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  Content,
  Wrapper,
  Title,
  Legend,
  GoBackHome,
} from 'components/NoMatch/NoMatch.styles';

const NoMatch = () => (
  <Content>
    <Wrapper>
      <Title>
        <FormattedMessage id="common.pageNotFoundTitle" />
      </Title>
      <Legend>
        <FormattedMessage id="common.pageNotFoundLegend" />
      </Legend>
      <GoBackHome to="/">
        <FormattedMessage id="common.goBackHome" />
      </GoBackHome>
    </Wrapper>
  </Content>
);

export default NoMatch;
