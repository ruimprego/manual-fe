import React from 'react';
import styled from 'styled-components';
import theme from '../assets/colors';

const OptionContainer = styled.div`
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 4px ${theme.option.border};
        transition: box-shadow .3s ease-in;
    }
`;

function Option({ data, callback }) {
  const { display, isRejection } = data;

  return (
    <OptionContainer
      dangerouslySetInnerHTML={{ __html: display }}
      onClick={() => callback(isRejection)}
    />
  );
}

export default Option;
