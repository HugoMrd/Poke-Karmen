// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      text: string;
      textLight: string;
      border: string;
      backgroundLight: string;
      backgroundCard: string;
      error: string;
      success: string;
      accent: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: string;
    breakpoints: {
      mobile: string;
    };
  }
}