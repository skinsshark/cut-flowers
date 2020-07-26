import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: lightyellow;
  font-size: 3.5rem;
  text-align: justify;
  line-height: 1.1;
  @media only screen and (max-width: 868px) {
    font-size: 2rem;
  }
`;

function Info(props) {
  const { currFlower } = props;
  return (
    <P>{currFlower}</P>
  );
}

export default Info;
