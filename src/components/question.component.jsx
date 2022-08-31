import React from 'react';
import styled from 'styled-components';
import Option from './option.component';

const QuestionContainer = styled.div`
    width: 590px;
`;

const QuestionTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 10px 0;
`;

const OptionsContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 150px);
    text-align: center;
`;

function Question({ data, clickCallback }) {
  const { question, options } = data;

  return (
    <QuestionContainer>
      <QuestionTitle>
        {question}
      </QuestionTitle>
      <OptionsContainer>
        {options.map((option, i) => (
          <Option data={option} key={i} callback={clickCallback} />
        ))}
      </OptionsContainer>
    </QuestionContainer>
  );
}

export default Question;
