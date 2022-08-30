import React from 'react';
import styled from 'styled-components';
import theme from '../assets/colors';

const CardContainer = styled.div`
    display: flex;
    position: relative;

    ${(props) => props.even && `
            flex-direction: row-reverse;
    `}
`;

const CardTitle = styled.div`
    font-size: 10px;
    text-transform: uppercase;
    font-family: 'TTNorms Medium';
    margin-bottom: 10px;
`;

const CardSubtitle = styled.div`
    font-size: 28px;
    font-family: 'TTNorms Medium';
    margin-bottom: 22px;
`;

const CardText = styled.div``;

const ImageContainer = styled.img``;

const TextContainer = styled.div`
    width: 372px;
    margin-left: 123px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${(props) => props.even && `
            margin-left: 0;
            margin-right: 123px;
    `}
`;

const BackgroundNumber = styled.div`
    color: ${theme.card.backgroundNumber};
    font-size: 450px;
    position: absolute;
    z-index: -1;
    margin: 0 275px;
    font-family: 'TTNorms Medium';
    top: -30px;
`;

function Card(props) {
  return (
    <CardContainer even={props.even}>
      <BackgroundNumber>{(`0${props.index}`).slice(-2)}</BackgroundNumber>
      <ImageContainer src={props.data.image} />
      <TextContainer even={props.even}>
        <CardTitle>{props.data.title}</CardTitle>
        <CardSubtitle>{props.data.subtitle}</CardSubtitle>
        <CardText>{props.data.text}</CardText>
      </TextContainer>
    </CardContainer>
  );
}

export default Card;
