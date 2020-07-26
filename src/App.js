import React, { useState } from 'react';
import styled from 'styled-components';
import Info from './Info';

import flowers from './flowers.jpg';
import phlox from './phlox.jpg';

const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 3.5rem;
  text-align: justify;
  line-height: 1.1;
  span {
    color: lightyellow;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    span {
      margin-right: 1rem;
    }
  }
  @media only screen and (max-width: 868px) {
    font-size: 2rem;
  }
`;

const PageWrapper = styled.div`
  background-color: fuchsia;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  @media only screen and (max-width: 868px) {
    flex-wrap: wrap;
  }
`;

const Content = styled.section`
  padding-left: 1rem;
  flex-grow: 1;
  min-height: 200px;
  @media only screen and (max-width: 868px) {
    width: 100vw;
  }
`;

const ImageWrapper = styled.article`
  img {
    height: 100vh;
    @media only screen and (max-width: 868px) {
      height: auto;
      width: 100vw;
    }
  }
`;

function setImage(currFlower) {
  console.log('yo')
  switch (currFlower) {
    case 'phlox':
      return phlox;
    default:
      return flowers;
  }
}

function App() {
  const [currFlower, setCurrFlower] = useState(null);

  return (
    <PageWrapper>
      <Content>
        <H1><span><span>A</span> <span>Small</span> <span>Guide</span> <span>to</span></span> <span><span>Cut</span> <span>✿</span> <span>Flowers</span></span></H1>
        <Info currFlower={currFlower} />
      </Content>
      <ImageWrapper><img onClick={() => setCurrFlower('phlox')} src={setImage(currFlower)} alt="all the beautiful flowers" useMap="flower-map" /></ImageWrapper>
      {/*this really doesnt work w responsive sites gah*/}
      <map name="flower-map">
        <area onClick={() => setCurrFlower('phlox')} alt="phlox" title="phlox" href="#phlox" coords="454,670,455,680,466,684,469,680,472,683,480,683,485,675,483,671,489,668,490,660,482,654,479,655,478,648,472,645,470,656,466,661,463,667,459,664" shape="poly" />
      </map>
    </PageWrapper>
  );
}

export default App;
