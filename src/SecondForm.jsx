import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


const SecondForm = () => {

    const [link, setLink] = useState('');
    const [person, setPerson] = React.useState('Choose genre');
    const [genre, setGenre] = useState('')

    const AddMovieForm = styled.form`
    display: flex;
    flex-direction: column;
    `
    const AddButton = styled.button`
    background: #f1356d;
    color: #fff;
    border: 0;
    padding: 5px;
    border-radius: 8px;
    margin-left: 1em;
    margin-top: 1em;
    max-width: fit-content;
    cursor: pointer;
    `;

    return (
        <div>
            <h2></h2>
            <AddMovieForm>
                <label>User ID</label>
                <select>
                    <option value="user 1">user 1</option>
                    <option value="user 1">user 2</option>
                </select>
                <label> Type in movie: </label>
                <input
                    type="text"
                    required
                    value={link}
                    onChange={(textinput) => setLink(textinput.target.value)}
                />
                <label>Genre:</label>
                <select
                    value={genre}
                    onChange={(chosenGenre) => setGenre(chosenPerson.target.value)}>
                    <option value="">Choose genre</option>
                    <option value="user 1">user 2</option>
                </select>
                <AddButton>Add movie</AddButton>
                <p>{link}</p>
                <p>{person}</p>
            </AddMovieForm>
        </div>
    );
}

export default SecondForm;