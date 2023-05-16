import * as React from 'react'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import axios from 'axios';

import Hero from './Hero';
import PersonList from './PersonList';
import FormGenreAdd from './FormGenreAdd';
import FormRatingAdd from './FormRatingAdd';


// deklarera style-component
const MainContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background: lightgray;
min-height: 100vh;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const FormStyle = styled.main`

`;

const Title = styled.h1`
font-size: 1em;
font-family: Georgia, 'Times New Roman', Times, serif;
display: flex;
`;

const StyledPara = styled.p`
max-width: 200px;
`
function App() {
  return (
    <Router>
      <MainContainer>
        <Title>
          Filmsystemet
        </Title>
        <FormGenreAdd />
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/persons">Persons</Link></li>
        </ul> */}
        <PersonList />
        <FormRatingAdd />
        <Hero />
        <Switch>
          <Route path="/persons">
          </Route>
        </Switch>
        {/* <CardList /> */}
        {/* {myMovies.map(function (movie) { return <Card title={movie.title} description={movie.description} poster={movie.poster} /> })} */}
        {/* {myMovies.map(movie => <Card title={movie.title} description={movie.description} poster={movie.poster} />)} */}
      </MainContainer>
    </Router>

  )
}

export default App
