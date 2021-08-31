import styled from '@emotion/styled';
import { css, keyframes, Theme } from '@emotion/react';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Spinner = styled.div`
  height: 2.5rem;
  margin: auto;
  position: relative;
  width: 2.5rem;
`;

const doubleBounceStyles = (theme: Theme) => css`
  animation: ${bounce} 2s infinite ease-in-out;
  background: ${theme.color.indigo600};
  border-radius: 50%;
  height: 100%;
  left: 0;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const DoubleBounce = styled.div`
  ${({ theme }) => doubleBounceStyles(theme)}
`;

export const DoubleBounceWithDelay = styled.div`
  ${({ theme }) => doubleBounceStyles(theme)}
  animation-delay: -1s;
`;

const bounce = keyframes`
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;
