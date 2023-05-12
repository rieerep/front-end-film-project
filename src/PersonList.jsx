import * as React from "react";
import axios from "axios";

import Person from './Person';
import falling_down from './assets/down_fall.jpg'

const GET_PERSON = "https://localhost:7071/persons"
const api = "http://localhost:5106"
const POSTER_PREURL = ""
// Function CardList (props) {
function PersonList(props) {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(GET_PERSON);
            console.log(result);
            setData(result.data);
        };

        // console.log(result);
        fetchData();

    }, []);

    return (
        // React.Fragment syns inte HTML 
        <React.Fragment>
            {/* {data.results.map(movie => <Card title={movie.title} description={movie.description} poster={movie.poster} />)} */}
            {data.map(person => (
                <Person key={person.id} firstName={person.firstName} lastName={person.lastName} email={person.email} id={person.id} />
            ))}
        </React.Fragment>
    );
}
export default PersonList