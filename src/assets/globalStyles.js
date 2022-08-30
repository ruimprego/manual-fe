import { createGlobalStyle } from 'styled-components';
import TTNorms from './TTNorms-Regular.otf';
import theme from './colors';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "TTNorms";
    src: local("TTNorms"),
    url(${TTNorms}) format("opentype");
  }
  
  body {
    margin: 0;
    padding: 0;
    background: ${theme.global.background};
    color: ${theme.global.text};
    font-family: "TTNorms", Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
