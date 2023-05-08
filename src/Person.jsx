import React from "react";
import styled from "styled-components";


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

    return (
        <PersonContainer>
            <h1>{props.firstName} {props.lastName}</h1>
            <p>{props.email}</p>
        </PersonContainer>
    );
}

export default Person;