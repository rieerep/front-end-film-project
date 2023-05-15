import React, { useState } from "react";
import axios from "axios";


const FormGenreAdd = (props) => {
    const [movie, setMovie] = useState('');
    const [genre, setGenre] = useState();
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

        /* {
        "movies": "Robocop",
        "personid": 1,
        "genreid": 1,
        "rating": 2
        }*/
        evt.preventDefault()
        const movieData = {
            movies: movie ? movie : null,
            personid: props.id,
            genreid: genre
        };
        axios.post("http://localhost:5106/addlink", movieData).then((response) => {
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
            name: "Crime"
        },
        {
            id: 7,
            name: "Documentary"
        },
        {
            id: 8,
            name: "Family"
        },
        {
            id: 9,
            name: "Fantasy"
        },
        {
            id: 10,
            name: "History"
        },
        {
            id: 11,
            name: "Music"
        },
        {
            id: 12,
            name: "Mystery"
        },
        {
            id: 13,
            name: "Romance"
        },
        {
            id: 14,
            name: "Science Fiction"
        },
        {
            id: 15,
            name: "TV Movie"
        },
        {
            id: 16,
            name: "War"
        },
        {
            id: 17,
            name: "Science Fiction"
        }
    ]

    return (
        <>
            <label>Add new favourite genre: </label>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={movie}
                    onChange={handleMovieChange}
                />
                <button type="submit">ADD!</button>
                <label>
                    Genre
                </label>
                <select onChange={handleGenreChange}>
                    <option value=""> Select a genre </option>
                    {allGenres.map(genre => (<option value={genre.id}>{genre.name}</option>))}
                </select>
            </form>
        </>
    )
}

export default FormGenreAdd;