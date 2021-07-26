import '@emotion/react';

declare module '@emotion/react' {
  export interface BorderRadius {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    full: string;
  }

  export interface BoxShadow {
    base: string;
    darkMd: string;
    darkLg: string;
    darkXl: string;
    indigo: string;
    none: string;
  }

  export interface Color {
    black: string;
    blue700: string;
    blue800: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray600: string;
    gray700: string;
    gray800: string;
    green700: string;
    green800: string;
    indigo200: string;
    indigo400: string;
    indigo500: string;
    indigo600: string;
    indigo700: string;
    red600: string;
    white: string;
  }

  export interface FontSize {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    xxl: string;
    x3l: string;
    x4l: string;
    x5l: string;
    x6l: string;
    x7l: string;
    x8l: string;
  }

  export interface Height {
    header: string;
  }

  export interface LetterSpacing {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  }

  export interface Theme {
    borderRadius: BorderRadius;
    boxShadow: BoxShadow;
    color: Color;
    fontSize: FontSize;
    height: Height;
    letterSpacing: LetterSpacing;
  }
}
