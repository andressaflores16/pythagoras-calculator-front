import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import CalculatorBase from './components/CalculatorBase'
import pattern from '../src/images/clean-textile.png'

const AppContainer = styled.div`
  @media screen {
   min-width: 1060px; 
  }
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-image: url(${pattern});
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <CalculatorBase />
    </AppContainer>
  );
}

export default App;
