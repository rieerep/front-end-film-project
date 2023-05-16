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

    function handleGenreChange(movieName) {
        console.log(movieName.target.value);
        setGenre(gen.target.value)
    }

    function handleRatingChange(evt) {
        console.log(evt.target.value);
        setRating(evt.target.value)
    }

    function handleSubmit(evt) {
        console.log(evt)
        console.log("YOu enetered" + movie + "in the searchbox")
        console.log("YOu enetered" + genre + "in the searchbox")

        evt.preventDefault()

        evt.preventDefault()
        const movieData = {
            movies: movie ? movie : null,
            personid: props.id,
            genreid: genre,
            rating: rating
        };
        axios.post("http://localhost:5106/setrating", movieData).then((response) => {
            console.log(response.status, response.data);
        });
    }

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
                <label>
                    <select value={rating} onChange={handleRatingChange}></select>
                </label>
                <label>
                    Rating
                </label>
                <select value={ratings} onChange={handleRatingChange}>
                    <option value=""> Rate your movie! </option>
                    {ratings.map(ratings => (<option value={rating}>{ratings}</option>))}
                </select>
                <button type="submit">Add</button>

            </form>
        </>
    )
}

export default FormRatingAdd;