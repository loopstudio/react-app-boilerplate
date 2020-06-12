import styled from '@emotion/styled';

export const Nav = styled.nav`
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: ${(props) => props.theme.boxShadow.darkMd};
  display: flex;
  flex-wrap: wrap;
  heigh: 4rem;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
`;

export const NavContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  width: inherit;
`;

export const InlineMenu = styled.div`
  align-items: center;
  color: ${(props) => props.theme.color.indigo500};
  display: flex;
  justify-content: space-around;

  & > button {
    cursor: pointer;
    margin-left: 0.75rem;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.color.indigo400};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Avatar = styled.button`
  border-radius: ${(props) => props.theme.borderRadius.full};
  border: solid 1px ${(props) => props.theme.color.white};
  display: block;
  height: 3rem;
  overflow: hidden;
  width: 3rem;

  &:focus {
    border: solid 1px ${(props) => props.theme.color.white};
    outline: none;
  }
`;

export const DesktopDisplay = styled.div`
  display: hidden;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const MobileButton = styled.button`
  display: flex;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: hidden;
  }
`;

export const MenuContainer = styled.div`
  background-color: ${(props) => props.theme.color.indigo500};
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding-top: 0.25rem;
  position: absolute;
  right: 0;
  top: 4rem;
  width: 100vw;

  & > button {
    padding: 0.25rem 0;

    &:focus {
      outline: none;
    }

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.color.indigo500};
    }
  }

  &:after {
    content: '';
    height: 0.6rem;
    right: 0.3rem;
    top: calc(-0.25rem - 1px);
    transform: rotate(-45deg);
    width: 0.6rem;
  }

  @media (min-width: 768px) {
    background-color: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.borderRadius.md};
    border: 1px solid ${(props) => props.theme.color.gray300};
    box-shadow: ${(props) => props.theme.boxShadow.darkXl};
    margin-right: 2rem;
    margin-top: 0.25rem;
    padding: 0.5rem 0;
    width: 12rem;

    &:hover > div {
      display: block;
    }

    & > button {
      color: ${(props) => props.theme.color.gray600};
      display: block;
      font-size: ${(props) => props.theme.fontSize.sm};
      padding: 0.5rem 1rem;
      text-align: right;
      width: 100%;

      &:hover,
      &:focus {
        background-color: ${(props) => props.theme.color.gray300};
      }
    }

    &:after {
      background-color: ${(props) => props.theme.color.white};
      border: 1px solid ${(props) => props.theme.color.gray300};
      border-bottom-width: 0px;
      border-left-width: 0px;
      position: absolute;
    }
  }
`;

export const LogoContainer = styled.div`
  align-items: center;
  color: ${(props) => props.theme.color.indigo400};
  display: flex;
  flex-shrink: 0;
  margin-right: 1.5rem;
`;

export const Brand = styled.a`
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 500;
  letter-spacing: ${(props) => props.theme.letterSpacing.tight};
`;
