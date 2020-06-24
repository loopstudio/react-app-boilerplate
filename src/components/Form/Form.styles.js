import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  background-color: ${(props) => props.theme.color.indigo600};
  border-radius: ${(props) => props.theme.borderRadius.base};
  box-shadow: ${(props) => props.theme.boxShadow.base};
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  letter-spacing: ${(props) => props.theme.letterSpacing.wide};
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.color.indigo700};
  }

  &:disabled {
    background-color: ${(props) => props.theme.color.indigo200};
    box-shadow: ${(props) => props.theme.boxShadow.none};

    &:hover {
      background-color: ${(props) => props.theme.color.indigo200};
    }
  }
`;

export const Error = styled.span`
  color: ${(props) => props.theme.color.red600};
  display: block;
  font-size: ${(props) => props.theme.fontSize.sm};
  max-width: fit-content;
`;

export const HelpLink = styled(Link)`
  color: ${(props) => props.theme.color.blue700};
  margin-bottom: 0.25rem;

  &:hover {
    color: ${(props) => props.theme.color.blue800};
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.color.gray100};
  border-radius: ${(props) => props.theme.borderRadius.base};
  border-width: 1px;
  color: ${(props) => props.theme.color.gray700};
  font-size: ${(props) => props.theme.fontSize.sm};
  height: 2.5rem;
  line-height: 1.25;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  width: 16rem;

  &:focus {
    border-color: ${(props) => props.theme.color.gray300};
    outline: 0;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 0.75rem;
  margin-top: ${({ hasError }) => hasError && '0.25rem'};

  > input {
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.color.red600 : theme.color.gray300};

    &:focus {
      outline: ${({ hasError }) => hasError && '0'};
      border-color: ${({ hasError, theme }) => hasError && theme.color.red600};
    }
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.color.gray700};
  display: block;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
`;

export const LabelContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Select = styled.select`
  background-color: ${(props) => props.theme.color.gray100};
  border-radius: ${(props) => props.theme.borderRadius.base};
  border-width: 1px;
  color: ${(props) => props.theme.color.gray700};
  height: 2.5rem;
  line-height: 1.25;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  width: 16rem;

  &:focus {
    border-color: ${(props) => props.theme.color.gray300};
    outline: 0;
  }
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`;
