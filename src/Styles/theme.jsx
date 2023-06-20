import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  FontFamily: 'Roboto, sans-serif',
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

const GlobalStyles = createGlobalStyle`
body{
    font-family: ${({ theme }) => theme.FontFamily};
    font-size: 18px;
    margine2: 0;
    padding-top: 40px;
    padding-left: 15px;
    padding-right:15px;
}
`;

export const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
