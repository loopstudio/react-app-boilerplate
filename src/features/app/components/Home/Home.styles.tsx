import styled from '@emotion/styled';

export const Content = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray700};
  min-height: inherit;
  padding: 1.5rem;
`;

export const SuccessText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.green800};
  padding-bottom: 1rem;
`;
