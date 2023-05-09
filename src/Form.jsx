import React from "react";
import { useState } from 'react';

const Form = () => {
    const [movie, setMovie] = useState(' ');

    function handleChange(movieName) {
        setMovie(movieName.target.value)
    }

    function handleSubmit(evt) {
        console.log(evt)
    }

    return (
        <>
            <h1>FORM</h1>
            ID:
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={movie}
                    onChange={handleChange} />
                <button type="submit">SEND</button>
            </form>
        </>
    )
}

export default Form;