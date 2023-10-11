import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /** default theme */
  :root{
    --primary : #0063e5;
    --g_100: #2b3145;
    --g_50: #838383;
    --g_10: #C9C9C9;
    --r_100: #C00A0A;
    --r_50: #F85555;
    --r_10: #FFCECE;
    --b_100: #1104A8;
    --b_10: #8ABDFF;
    --white: #fff;

    --ko:'Gothic A1', sans-serif;
    --en:'Montserrat', sans-serif;

    --fz-xs: 12rem;
    --fz-sm: 14rem;
    --fz-md: 16rem;
    --fz-lg: 18rem;
    --fz-xl: 20rem;
    --fz-xxl: 24rem;
    --fz-xxxl: 30rem;

    --gap-xs: 10rem;
    --gap-sm: 15rem;
    --gap-md: 20rem;
    --gap-lg: 30rem;
  }
  * {
    box-sizing: border-box;
    margin: 0; 
    padding: 0; 
    border: none; 
    background: none;
    -webkit-tap-highlight-color: transparent;
  }
  html {
    font-size: 1px;
    font-family: var(--Ko), sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 180%;
    background: var(--g_100);
  }
  body {
    overflow-x: hidden;
    font-family: -apple-system, 
    BlinkMacSystemFont, 
    system-ui, 
    Roboto, 
    'Helvetica Neue', 
    'Segoe UI', 
    'Apple SD Gothic Neo', 
    'Noto Sans KR', 
    'Malgun Gothic', sans-serif;
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none; 
    color: inherit;
  }
  a:visited {
    background: none; 
    color: inherit;
  }
  a:active {
    background: none; 
    color: inherit;
  }
  button, input {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    margin: 0;
  }
`;
