import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.color.gray600};
  background-color: ${({ theme }) => theme.color.gray100};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.x8l};
  color: ${({ theme }) => theme.color.gray600};
`;

export const Legend = styled.p`
  color: ${({ theme }) => theme.color.gray700};
`;

export const GoBackHome = styled(Link)`
  width: 10rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.indigo};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.indigo600};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;
