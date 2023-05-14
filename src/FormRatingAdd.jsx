import React, { useState } from "react";

const FormMovieAdd = () => {
    const [movie, setMovie] = useState(' ');
    const [genre, setGenre] = useState(' ');
    const [rating, setRating] = useState(' ';)


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

    const ratings = [1, 2, 3, 4, 5];

    return (
        <>
            <h1>FormMovieAdd</h1>
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