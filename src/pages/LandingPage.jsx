import React, { useState } from 'react';

import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';
import Quizz from '../components/quizz.component';

function LandingPage() {
  const [quizzOpen, setQuizzOpen] = useState(false);

  return (
    <>
      <Quizz show={quizzOpen} close={() => setQuizzOpen(false)} />
      <Header onClick={() => setQuizzOpen(true)} />
      <Main />
      <Footer />
    </>
  );
}

export default LandingPage;
