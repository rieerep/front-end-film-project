import * as React from "react";
import axios from "axios";

import Card from './Card';
import falling_down from './assets/down_fall.jpg'

const GET_PERSON = "http://localhost:5106/persons"
const POSTER_PREURL = ""
// Function CardList (props) {
function PersonList(props) {
    const [data, setData] = React.useState([]);

    // TMDB-key cb362116c7c70793fce05c7369dc033c

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(GET_PERSON);
            console.log(result);
            setData(result.data);
        };

        // console.log(result);
        fetchData();

    }, []);

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
            {/* {data.results.map(movie => <Card title={movie.title} description={movie.description} poster={movie.poster} />)} */}
            {data.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.email}</a>
                </li>
            ))}
        </React.Fragment>
    );
}
export default PersonList