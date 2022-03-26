import { connect } from 'react-redux';
import MoviePreview from '../components/MoviePreview';

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.movies.listOfMovies.find(el => el.id === state.movies.selectedMovieId) || null,
        // selectedMovie:{
        //     title: "A New Hope",
        //     episodeId: 4,
        //     description: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        //     director: "George Lucas",
        // },
    };
};

export default connect(mapStateToProps,null)(MoviePreview);