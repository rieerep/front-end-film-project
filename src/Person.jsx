import React, { useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import axios from "axios";

import PersonDetail from "./PersonDetail";
import PersonMovies from "./PersonMovies";
import FormMovieAdd from "./FormMovieAdd";
import FormGenreAdd from "./FormGenreAdd";
import FormRatingAdd from "./FormRatingAdd";

const PersonContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
/* justify-content: space-evenly; */
align-items: center;
background: #7a7b7a;
min-height: 2em;
width: 25vw;
font-size: 1em;
margin-top: 1em;
margin-bottom: 1em;
border-radius: 0.5em;

&:hover {
    background-color: #648a5b;
};
`;


function Person(props) {
    console.log(props);
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {

        console.log('hello from button you are person with id: ' + props.id)
        setExpanded(true)
    }

    return (
        <PersonContainer onClick={handleClick}>
            <ul>
                <h4 >User: {props.firstName} {props.lastName}</h4>
                <p>email: {props.email}</p>
                {expanded ? <>
                    <PersonDetail id={props.id} />
                    <FormGenreAdd id={props.id} />
                    {<PersonMovies id={props.id} />}
                    <FormMovieAdd id={props.id} />
                    <FormRatingAdd id={props.id} />
                </> : null}
            </ul>
        </PersonContainer>
    );
}

// skapa en ny komponent, PersonDetail X
// skcka med ID som props till denna komponent. X
// den ska bara renderas om expanded är true X
// inuti Persondetal ska du göra ett anrop till ditt eget API X
// Se MovieDetail för hur. Faktum att du kan kopiera MovieDetail och ändra allt X



export default Person;