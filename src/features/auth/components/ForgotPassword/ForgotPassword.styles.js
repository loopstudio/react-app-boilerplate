import styled from '@emotion/styled';
import Form from 'features/app/components/Form';

export const FormInput = styled(Form.Input)`
  width: 100%;
`;

export const Legend = styled.p`
  color: ${({ theme }) => theme.color.gray700};
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const LinkButton = styled.button`
  color: ${({ theme }) => theme.color.indigo700};
  grid-area: link;
  grid-column: 1/3;
  grid-row: 3;
  text-align: left;
`;
