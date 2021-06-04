import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ForgotPasswordLink = styled(Link)`
  color: ${(props) => props.theme.color.blue700};
  margin-bottom: 0.25rem;
  margin-left: 0.25rem;
  white-space: nowrap;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.color.blue800};
  }
`;
