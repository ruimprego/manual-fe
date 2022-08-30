import React from 'react';
import styled from 'styled-components';
import theme from '../assets/colors';

const ButtonContainer = styled.span`
    padding: 15px 30px;
    font-family: 'TTNormsMedium', 'TTNorms', Open-Sans, Helvetica, Sans-Serif;
    font-size: 10px;

    background-color: ${theme.button.background};
    color: ${theme.button.text};
    text-transform: uppercase;
    cursor: pointer;
`;

function Button() {
  return <ButtonContainer>Take the quiz</ButtonContainer>;
}

export default Button;
