import * as React from "react";
import axios from "axios";

import Card from './Card';
import falling_down from './assets/down_fall.jpg'

const TMDB_GET_MOVIES = "https://api.themoviedb.org/3/discover/movie?api_key=cb362116c7c70793fce05c7369dc033c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genre=80,18,53"
const POSTER_PREURL = "https://image.tmdb.org/t/p/original/"
// Function CardList (props) {
function CardList(props) {
    const [data, setData] = React.useState({ results: [] });

    // TMDB-key cb362116c7c70793fce05c7369dc033c

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(TMDB_GET_MOVIES + POSTER_PREURL
            );

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
            {data.results.map(movie => <Card title={movie.title} description={movie.overview} poster={POSTER_PREURL + movie.poster_path} />)}
            {data.results.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </React.Fragment>
    );
}
export default CardList