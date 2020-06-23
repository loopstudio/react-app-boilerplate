import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Screen = styled.div`
  background: ${(props) => props.theme.color.gray200};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: inherit;
  min-width: 100%;
`;

export const AuthContainer = styled.div`
  background: ${(props) => props.theme.color.white};
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  max-width: 24rem;
  padding: 2.5rem 3rem;
`;

export const ViewContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const AuthTitle = styled.h1`
  align-self: center;
  color: ${(props) => props.theme.color.gray700};
  font-size: 1.875rem;
  font-weight: 300;
  margin-bottom: 3rem;
  text-align: center;
`;

export const LegendContainer = styled.div`
  text-align: center;
`;

export const Legend = styled.span`
  color: ${(props) => props.theme.color.gray700};
`;

export const NavigationLink = styled(Link)`
  color: ${(props) => props.theme.color.indigo700};
  grid-area: link;
  grid-column: 1/3;
  grid-row: 3;
  margin-left: 0.5rem;
  text-align: left;
`;
