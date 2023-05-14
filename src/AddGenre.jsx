import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Person from "./Person";
import PersonList from "./PersonList";

const GET_GENRES = "http://localhost:5106/genres";

const AddGenre = (props) => {

    const [personGenres, setPersonGenres] = useState();
    const [genres, setGenres] = useState();

    useEffect(() => {
        const fetchPersonGenre = async () => {
            const result = await axios("http://localhost:5106/persongenres/" + props.id);
            setPersonGenres(result.personGenres);
        };

        const fetchGenres = async () => {
            const result = await axios(GET_GENRES);
            setGenres(result.genres);
        };

        fetchPersonGenre();
        fetchGenres();
    }, []);

    return (
        <div className="create">
            <form>
                <select name="genres" defaultValue="">
                    <option hidden disabled value="">
                        sdssdsd
                    </option>
                    {genres && genres.map(genre => <><p key={genre.id}>{genre.genre}</p></>)}
                </select>

            </form>
        </div>);
}

export default AddGenre;