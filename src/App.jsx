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
import Form from './Form';
import PersonDetail from './PersonDetail';


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

const StyledPara = styled.p`
max-width: 200px;
`
// console.log(myMovies)
function App() {
  return (
    <Router>
      <MainContainer>
        <h1>Filmsystemet</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/persons">Persons</Link></li>
        </ul>
        <StyledPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis!</StyledPara>
        <Hero />
        <Switch>

          <Route path="/persons">
            <PersonList />
            <PersonDetail />
          </Route>
          <Form />
        </Switch>
        {/* <CardList /> */}
        {/* {myMovies.map(function (movie) { return <Card title={movie.title} description={movie.description} poster={movie.poster} /> })} */}
        {/* {myMovies.map(movie => <Card title={movie.title} description={movie.description} poster={movie.poster} />)} */}
      </MainContainer>
    </Router>

  )
}

export default App
