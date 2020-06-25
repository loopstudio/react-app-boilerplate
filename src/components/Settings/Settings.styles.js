import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const SettingsContainer = styled.div`
  background-color: ${(props) => props.theme.color.gray200};
  display: flex;
  flex-direction: column;
  min-height: inherit;
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 2rem;
  width: auto;
`;

export const SettingsTitle = styled.h2`
  align-self: center;
  color: ${(props) => props.theme.color.gray700};
  font-size: ${(props) => props.theme.fontSize.x3l};
  font-weight: 300;
  grid-area: title;
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const SuccessText = styled.p`
  color: ${(props) => props.theme.color.green700};
`;

export const formStyles = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  width: fit-content;
`;

export const buttonStyles = css`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 16rem;
`;
