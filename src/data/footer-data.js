import Facebook from '../assets/facebook.svg';
import Google from '../assets/google.svg';
import Twitter from '../assets/twitter.svg';

const FooterData = {
  navigation: [
    {
      label: 'product',
      links: ['Popular', 'Trending', 'Guided', 'Products'],
    },
    {
      label: 'company',
      links: ['Press', 'Mission', 'Strategy', 'About'],
    },
    {
      label: 'info',
      links: ['Support', 'Customer Service', 'Get Started'],
    },
  ],
  socialNetworks: {
    label: 'follow us',
    icons: [Facebook, Google, Twitter],
  },
};

export default FooterData;
