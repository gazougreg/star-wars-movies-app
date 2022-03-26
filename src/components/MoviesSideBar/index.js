import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Movie from '../Movie';

const StyledList = styled.ul`
    font-family: Arial, san-serif;
    list-style: none;
    padding: 20px;
    border-right: 1px solid #cdcdcd;
    @media (max-width: 480px) {
        border: none;
    }
    li {
        padding : 15px;
        border-bottom: 1px solid #cdcdcd;
    }
`;

const MoviesSideBar = ({ sortedList, setSelectedMovie}) => {
    const handleMovieSelection = (movieId) => {
        setSelectedMovie(movieId);
    };
    return(
        <StyledList>
            {sortedList.map((movie) => (
                <Movie
                    key={movie.id}
                    movie={movie}
                    selectMovie={() => handleMovieSelection(movie.id)}
                />
            ))}
        </StyledList>
    );
};

MoviesSideBar.propTypes = {
    sortedList: PropTypes.arrayOf(
        PropTypes.shape({
            episodeId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            releaseDate: PropTypes.string.isRequired,
        })
    ),
    setSelectedMovie: PropTypes.func.isRequired,
};

export default MoviesSideBar;