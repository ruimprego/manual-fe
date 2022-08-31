import React from 'react';
import styled from 'styled-components';
import theme from '../assets/colors';

const OptionContainer = styled.div`
    cursor: pointer;
    font-size: 15pt;
    border: 1px solid ${theme.option.border};
    border-radius: 5px;

    &:hover {
        box-shadow: 0 0 4px ${theme.option.border};
        transition: box-shadow .3s ease-in;
    }
`;

function Option({ data, callback, className }) {
  const { display, isRejection } = data;

  return (
    <OptionContainer
      className={className}
      dangerouslySetInnerHTML={{ __html: display }}
      onClick={() => callback(isRejection)}
    />
  );
}

export default Option;
