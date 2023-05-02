import * as React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import axios from "axios";
import Card from './Card';
import falling_down from './assets/down_fall.jpg'

// Function CardList (props) {
const CardList = (props) => {
    const myMovies = [
        {
            poster: falling_down,
            description: "Description about movie",
            title: "Falling down 1"
        },
        {
            poster: falling_down,
            description: "Description about movie",
            title: "Falling down 2"
        },
        {
            poster: falling_down,
            description: "Description about movie",
            title: "Falling down 3"
        },

    ];


    return (
        // React.Fragment syns inte HTML 
        <React.Fragment>
            {myMovies.map(movie => <Card key={movie.title} title={movie.title} description={movie.description} poster={movie.poster} />)}
        </React.Fragment>
    );
}
export default CardList