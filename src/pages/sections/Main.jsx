import React from 'react';
import styled from 'styled-components';
import CardsData from '../../data/cards-data';
import Card from '../../components/card.component';

const MainContainer = styled.div`
    padding-top: 70px;
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-size: 40px;
    font-family: 'TTNorms Medium';
    margin-bottom: 70px;
`;

const CardsContainer = styled.div`
    display: flex;
    gap: 180px;
    flex-direction: column;
`;

function Main() {
  return (
    <MainContainer>
      <Title>What we can help with</Title>
      <CardsContainer>
        {CardsData.map((card, i) => (
          <Card data={card} key={i} index={i + 1} even={(i + 1) % 2 === 0} />
        ))}
      </CardsContainer>
    </MainContainer>
  );
}

export default Main;
