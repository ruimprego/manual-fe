import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import theme from '../assets/colors';
import QuizzData from '../data/data.json';
import Question from './question.component';

const QuizzContainer = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: ${theme.global.background};
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextButton = styled.div`
    font-size: 16px;
    font-family: 'TTNorms Medium';
    text-transform: uppercase;
    cursor: pointer;
    align-self: end;
    width: 1fr;
    flex: 50%;

    &:last-child {
        text-align: end;
    }
`;

const InformationContainer = styled.div`
    width: 590px;
    padding-top: 40px;
    font-family: 'TTNorms Medium';
    
    @media (max-width: 900px) {
        width: 90vw;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    width: 720px;

    @media (max-width: 900px) {
        width: 90vw;
    }
`

function Quizz({ show, close }) {
  const [isRejected, setIsRejected] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const handleQuestionAnswer = useCallback((isRejection) => {
    setIsRejected(isRejection);
    setSelectedQuestion(selectedQuestion => selectedQuestion + 1);
  }, [setIsRejected, setSelectedQuestion]);

  const resetQuizz = () => {
    setIsRejected(false);
    setSelectedQuestion(0);
  }

  if (show) {
    return (
      <QuizzContainer>
        <ButtonsContainer>
            <TextButton onClick={resetQuizz}>Reset quizz</TextButton>
            <TextButton onClick={close}>x</TextButton>
        </ButtonsContainer>
        {
        isRejected
          ? (
            <InformationContainer>
              Unfortunately, we are unable to prescribe this medication for you.
              This is because finasteride can alter the PSA levels, which maybe
              used to monitor for cancer. You should discuss this further with
              your GP or specialist if you would still like this medication.
            </InformationContainer>
          )
          : QuizzData.questions.map((question, i) => (
            (i === selectedQuestion && i <= QuizzData.questions.length)
              ? <Question data={question} clickCallback={handleQuestionAnswer} key={i} />
              : null
          ))
        }
        {
            (selectedQuestion === QuizzData.questions.length)
            ? (
                <InformationContainer>
                Great news! We have the perfect treatment for your
                hair loss. Proceed to 
                <a href="www.manual.co">www.manual.co</a>
                , and prepare to say hello to your new hair!
                </InformationContainer>
            )
            : null
        }
      </QuizzContainer>
    );
  }

  return null;
}

export default Quizz;
