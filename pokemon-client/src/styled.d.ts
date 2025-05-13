import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      text: string;
      textLight: string;
      border: string;
      backgroundLight: string;
      error: string;
      success: string;
    };
    shadows: {
      small: string;
      medium: string;
    };
    borderRadius: string;
    breakpoints: {
      mobile: string;
    };
  }
}