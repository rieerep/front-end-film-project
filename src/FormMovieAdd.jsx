import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";


const FormMovieAdd = (props) => {
    const [movie, setMovie] = useState(' ');
    const [genre, setGenre] = useState(' ');
    const [expanded, setExpanded] = useState(false);
    console.log(props)


    function handleMovieChange(evt) {
        console.log(evt.target.value);
        setMovie(evt.target.value)
    }

    function handleGenreChange(evt) {
        console.log(evt.target.value);
        setGenre(evt.target.value)
    }

    function handleSubmit(evt) {
        console.log(evt)
        console.log("YOu enetered" + movie + "in the searchbox")
        console.log("YOu enetered" + genre + "in the searchbox")
        // addMovie(personid, movie)

        evt.preventDefault()
        const movieData = {
            movies: movie ? movie : null,
            personId: props.id,
            genreid: genre
        };
        axios.post("http://localhost:5106/addlink", movieData).then((response) => {
            console.log(response.status, response.data);
        });
    }

    /* async function addMovie(user, rating, movie) {
        await axios
            .post("http://localhost:5106/addgenre"(user, rating, movie))
            .then(() => {
                console.log(response.status, response.data);

                console.log('Added');
            })
            .catch(() => {
                console.log('Something went wrong');
            });
    } */

    const allGenres = [
        {
            id: 1,
            name: "Action"
        },
        {
            id: 2,
            name: "Drama"
        },
        {
            id: 3,
            name: "Animation"
        },
        {
            id: 4,
            name: "Horror"
        },
        {
            id: 5,
            name: "Adventure"
        },
        {
            id: 6,
            name: "Comedy"
        },
        {
            id: 7,
            name: "Crime"
        },
        {
            id: 8,
            name: "Documentary"
        },
        {
            id: 9,
            name: "Family"
        },
        {
            id: 10,
            name: "Fantasy"
        },
        {
            id: 11,
            name: "History"
        },
        {
            id: 12,
            name: "Music"
        },
        {
            id: 13,
            name: "Mystery"
        },
        {
            id: 14,
            name: "Romance"
        },
        {
            id: 15,
            name: "Science Fiction"
        },
        {
            id: 16,
            name: "TV Movie"
        },
        {
            id: 18,
            name: "War"
        },
        {
            id: 19,
            name: "Western"
        }
    ]

    const ratings = [1, 2, 3, 4, 5];

    const paraPrompt = styled.p`
    color: #0ae850;
    font-size: 0.8rem;
    `;

    return (
        <>
            <h2>Add a new movie:</h2>
            <paraPrompt>If you leave the movie field empty, you will only add a new favourite genre</paraPrompt>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type in movie"
                    value={movie}
                    onChange={handleMovieChange}
                />
                <label>
                    Genre
                </label>
                <select onChange={handleGenreChange}>
                    <option value=""> Select a genre </option>
                    {allGenres.map(genre => (<option value={genre.id}>{genre.name}</option>))}
                </select>
                <button type="submit">ADD!</button>
            </form>
        </>
    )
}

export default FormMovieAdd;