import React, { useState } from "react";

const FormMovieAdd = () => {
    const [movie, setMovie] = useState(' ');
    const [genre, setGenre] = useState(' ');


    function handleMovieChange(movieName) {
        console.log(movieName.target.value);
        setMovie(movieName.target.value)
    }

    function handleGenreChange(movieName) {
        console.log(movieName.target.value);
        setGenre(gen.target.value)
    }

    function handleSubmit(evt) {
        console.log(evt)
        console.log("YOu enetered" + movie + "in the searchbox")
        console.log("YOu enetered" + genre + "in the searchbox")

        evt.preventDefault()
    }

    const allGenres = [
        {
            id: 28,
            name: "Action"
        },
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 16,
            name: "Animation"
        },
        {
            id: 27,
            name: "Horror"
        },
        {
            id: 12,
            name: "Adventure"
        },
        {
            id: 80,
            name: "Crime"
        },
        {
            id: 99,
            name: "Documentary"
        },
        {
            id: 10751,
            name: "Family"
        },
        {
            id: 14,
            name: "Fantasy"
        },
        {
            id: 36,
            name: "History"
        },
        {
            id: 10402,
            name: "Music"
        },
        {
            id: 9648,
            name: "Mystery"
        },
        {
            id: 10749,
            name: "Romance"
        },
        {
            id: 878,
            name: "Science Fiction"
        },
        {
            id: 10770,
            name: "TV Movie"
        },
        {
            id: 10752,
            name: "War"
        },
        {
            id: 37,
            name: "Western"
        }
    ]

    const ratings = [1, 2, 3, 4, 5];


    return (
        <>
            <h1>Add a new movie:</h1>
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
                <select value={allGenres} onChange={handleGenreChange}>
                    <option value=""> Select a genre </option>
                    {allGenres.map(genre => (<option value={genre.id}>{genre.name}</option>))}
                </select>
            </form>
        </>
    )
}

export default FormMovieAdd;