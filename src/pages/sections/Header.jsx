import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo.component';
import Background from '../../assets/background.png';
import Button from '../../components/button.component';
import theme from '../../assets/colors';

const MainContainer = styled.div`
    max-height: 750px;
    height: 100vh;
    background-image: url(${Background});
    padding: 32px 138px;
    background-size: cover;
    background-position: center center;

    @media (max-width: 1024px) {
      background-color: ${theme.header.background};
      padding: 3vh 5vw;
      width: 100%;
      background-image: none;
      box-sizing: border-box;
    }
`;

const Title = styled.div`
    font-family: "TTNorms Medium";
    font-size: 90px;
    line-height: 90px;
    margin-bottom: 20px;

    @media (max-width: 720px) {
      font-size: 40pt;
      line-height: 50px;
    }
`;

const TextContainer = styled.div`
    width: 468px;
    margin-bottom: 36px;
    margin-top: 120px;

    @media (max-width: 900px) {
      width: 90vw;
    }
`;

const SmallLogo = styled(Logo)`
    width: 40px;
`;

function Header({ onClick }) {
  return (
    <MainContainer>
      <SmallLogo />
      <TextContainer>
        <Title>Be good to yourself</Title>
        <div>
          We’re working around the clock to bring you a holistic approach to your wellness.
          From top to bottom, inside and out.
        </div>
      </TextContainer>
      <Button onClick={onClick} />
    </MainContainer>
  );
}

export default Header;
