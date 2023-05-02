import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';


// deklarera style-component
const MainContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background: red;
min-height: 100vh;

`;

const StyledPara = styled.p`
max-width: 200px;
`

function App() {
  return (
    <MainContainer>
      <h1>Rille</h1>
      <StyledPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis!</StyledPara>
      <Hero />
    </MainContainer>
  )
}

export default App
