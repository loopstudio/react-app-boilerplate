import styled from '@emotion/styled';

export const Content = styled.main`
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray800};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 1.5rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Legend = styled.p`
  font-size: 1.875rem;
`;

export const ErrorMessage = styled.p`
  margin: 1.25rem 0;
  width: 50%;
  text-align: left;
`;

export const ReportButton = styled.a`
  background-color: ${({ theme }) => theme.color.indigo600};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: 0 0 1.5rem 0.1rem rgba(102, 126, 234, 0.6);
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  margin: 2.5rem 0;
  padding: 0.5rem 1rem;
  width: 10rem;
`;
