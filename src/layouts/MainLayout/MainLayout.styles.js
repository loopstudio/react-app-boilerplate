import styled from '@emotion/styled';

export const MainContainer = styled.main`
  padding-top: ${({ noHeader, theme }) =>
    noHeader ? null : `${theme.height.header}`};
  min-height: ${({ noHeader, theme }) =>
    noHeader ? '100vh' : `calc(100vh - ${theme.height.header})`};
`;
