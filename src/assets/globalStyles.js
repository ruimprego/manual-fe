import { createGlobalStyle } from 'styled-components';
import TTNorms from './TTNorms-Regular.otf';
import TTNormsMedium from './TTNorms-Medium.otf';
import theme from './colors';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "TTNorms";
    src: local("TTNorms"),
    url(${TTNorms}) format("opentype");
  }

  @font-face {
    font-family: "TTNorms Medium";
    src: local("TTNorms Medium"),
    url(${TTNormsMedium}) format("opentype")
  }
  
  body {
    margin: 0;
    padding: 0;
    background: ${theme.global.background};
    color: ${theme.global.text};
    font-family: "TTNorms", Open-Sans, Helvetica, Sans-Serif;
    font-size: 18px;
    box-sizing: border-box;

    @media (max-width: 720px) {
      font-size: 10pt;
    }

  }
`;

export default GlobalStyle;
