import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background: red;
border: 1px black;
height: 10em;
width: 20em;
margin-bottom: 1em;
`;

const CardImage = styled.img`
object-fit: cover;
height: 10em;
`;

function Card(props) {
    console.log(props);

    return (
        <CardContainer>
            <h1>{props.title}</h1>
            <CardImage src={props.poster} alt="Falling Down" />
            <p>{props.description}</p>
        </CardContainer>
    );
}

export default Card;