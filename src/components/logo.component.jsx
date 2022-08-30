import React from 'react';
import LogoImage from '../assets/logo.svg';

function Logo({ className }) {
  return <img src={LogoImage} alt="logo" className={className} />;
}

export default Logo;
