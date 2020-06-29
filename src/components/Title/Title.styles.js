import styled from '@emotion/styled';

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.gray800};
  font-size: ${({ as, theme: { fontSize } }) => {
    switch (as) {
      case 'h1':
        return fontSize.x4l;
      case 'h2':
        return fontSize.xxl;
      case 'h3':
        return fontSize.xl;
      default:
        return '';
    }
  }};
`;
