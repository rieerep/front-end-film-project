import * as React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import CardList from './CardList';
import PersonList from './PersonList';


// deklarera style-component
const MainContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background: gray;
min-height: 100vh;

`;

const StyledPara = styled.p`
max-width: 200px;
`
// console.log(myMovies)
function App() {
  return (
    <MainContainer>
      <h1>Rille</h1>
      <StyledPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis!</StyledPara>
      <Hero />
      <PersonList />
      <CardList />
      {/* {myMovies.map(function (movie) { return <Card title={movie.title} description={movie.description} poster={movie.poster} /> })} */}
      {/* {myMovies.map(movie => <Card title={movie.title} description={movie.description} poster={movie.poster} />)} */}
    </MainContainer>
  )
}

export default App
