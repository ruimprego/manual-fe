import React from 'react';
import styled from 'styled-components';
import theme from '../../assets/colors';
import Logo from '../../components/logo.component';
import FooterData from '../../data/footer-data';

const FooterContainer = styled.div`
    background-color: ${theme.footer.background};
    height: 345px;
    padding: 70px 138px 0;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const StyledLogo = styled(Logo)`
    width: 75px;
`;

const LinksContainer = styled.div`
    display: flex;
    gap: 25px;
    margin-left: auto;
`;

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 174px;
    gap: 20px;
`;

const FooterColumnTitle = styled.div`
    font-size: 10px;
    text-transform: uppercase;
    font-family: 'TTNorms Medium';
`;

const FooterLink = styled.a`
    font-size: 16px;
    line-height: 30px;
    text-decoration: none;
    color: ${theme.global.text};
`;

const SocialNetworksSection = styled.div`
    display: flex;
    gap: 25px;
`;

const SocialNetworkButton = styled.button`
    all: unset;
    cursor: pointer;
`;

const SocialNetworkIcon = styled.img`
    height: 20px;
`;

const Copyright = styled.div`
    width: 100%;
    flex-basis: 100%;
    border-top: 1px solid ${theme.footer.separator};
    display: flex;
    justify-content: center;
    padding: 25px 0;
    align-self: end;
`;

function Footer() {
  return (
    <FooterContainer>
      <StyledLogo />
      <LinksContainer>
        {FooterData.navigation.map((footerSection, i) => (
          <FooterColumn key={i}>
            <FooterColumnTitle>{footerSection.label}</FooterColumnTitle>
            {footerSection.links.map((link, n) => (
              <FooterLink key={n} href="#">{link}</FooterLink>
            ))}
          </FooterColumn>
        ))}
        <FooterColumn>
          <FooterColumnTitle>{FooterData.socialNetworks.label}</FooterColumnTitle>
          <SocialNetworksSection>
            {FooterData.socialNetworks.icons.map((icon, d) => (
              <SocialNetworkButton key={d}>
                <SocialNetworkIcon src={icon} alt="social network" />
              </SocialNetworkButton>
            ))}
          </SocialNetworksSection>
        </FooterColumn>
      </LinksContainer>
      <Copyright>© 2021 Manual. All rights reserverd</Copyright>
    </FooterContainer>
  );
}

export default Footer;
