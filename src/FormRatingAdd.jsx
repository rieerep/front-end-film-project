import React, { useState } from "react";
import axios from "axios";

const FormRatingAdd = (props) => {
    const [movie, setMovie] = useState(' ');
    const [genre, setGenre] = useState(' ');
    const [rating, setRating] = useState(' ');


    function handleMovieChange(movieName) {
        console.log(movieName.target.value);
        setMovie(movieName.target.value)
    }

    function handleGenreChange(evt) {
        console.log(evt.target.value);
        setGenre(evt.target.value)
    }

    function handleRatingChange(evt) {
        console.log(evt.target.value);
        setRating(evt.target.value)
    }

    function handleSubmit(evt) {
        console.log(evt)
        console.log("You entered" + movie + "in the searchbox")
        console.log("You entered" + genre + "in the searchbox")

        evt.preventDefault()

        evt.preventDefault()
        const movieData = {
            movies: movie ? movie : null,
            personId: props.id,
            genreid: genre,
            rating: rating
        };
        axios.post("http://localhost:5106/setrating", movieData).then((response) => {
            console.log(response.status, response.data);
        });
    }

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
            id: 17,
            name: "Thriller"
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

    return (
        <>
            <h1>Add movie</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type in movie"
                    value={movie}
                    onChange={handleMovieChange}
                />
                {/* <label>
                    <select value={rating} onChange={handleRatingChange}></select>
                </label> */}

                <label>
                    Genre
                </label>
                <select onChange={handleGenreChange}>
                    <option value=""> Select a genre </option>
                    {allGenres.map(genre => (<option value={genre.id}>{genre.name}</option>))}
                </select>
                <label>
                    Rating
                </label>
                <select onChange={handleRatingChange}>
                    <option value=""> Rate your movie! </option>
                    {ratings.map(option => (<option value={option}>{option}</option>))}
                </select>
                <button type="submit">Add</button>

            </form>
        </>
    )
}

export default FormRatingAdd;