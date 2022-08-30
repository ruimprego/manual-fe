import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo.component';
import Background from '../../assets/background.png';
import Button from '../../components/button.component';

const MainContainer = styled.div`
    height: 750px;
    background-image: url(${Background});
    background-size: cover;
    padding: 32px 138px;
`;

const Title = styled.div`
    font-family: "TTNorms Medium";
    font-size: 90px;
    line-height: 90px;
    margin-bottom: 20px;
`;

const TextContainer = styled.div`
    width: 468px;
    margin-bottom: 36px;
    margin-top: 120px;
`;

const SmallLogo = styled(Logo)`
    width: 40px;
`;

function Header() {
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
      <Button />
    </MainContainer>
  );
}

export default Header;
