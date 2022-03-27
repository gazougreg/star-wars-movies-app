import axios from 'axios';

export default {
    fetchMovies() {
        return axios.get('https://swapi.dev/api/films/?format=json');
    }
};
