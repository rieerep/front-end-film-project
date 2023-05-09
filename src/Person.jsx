import React, { useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import PersonDetail from "./PersonDetail";

const PersonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
background: #92e87c;
border: 1px black;
height: 4em;
width: 100vw;
margin-bottom: 1em;
&:hover {
    background-color: #22331e;
};
`;

const CardImage = styled.img`
object-fit: cover;
height: 10em;
`;

function Person(props) {
    console.log(props);
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {

        console.log('hello from button you are person with id: ' + props.id)
        setExpanded(!expanded)
    }

    return (
        <PersonContainer onClick={handleClick}>

            <h1 >{props.firstName} {props.lastName}</h1>
            <p>{props.email}</p>
            <button >Click Me</button>
            {expanded ? <><PersonDetail id={props.id} /> <h1>Test</h1></> : null}
        </PersonContainer>
    );
}

// skapa en ny komponent, PersonDetail X
// skcka med ID som props till denna komponent. X
// den ska bara renderas om expanded är true X
// inuti Persondetal ska du göra ett anrop till ditt eget API X
// Se MovieDetail för hur. Faktum att du kan kopiera MovieDetail och ändra allt X



export default Person;