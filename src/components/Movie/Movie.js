import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    background-color: #ffff;
    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

const Movie = ({ movie, selectMovie }) => {
    return (
        <li>
            <StyledButton type="button" onClick={selectMovie}>
                <span>EPISODE {movie.episodeId}</span>
                <span>{movie.title}</span>
                <span>{movie.releaseDate}</span>
            </StyledButton>
        </li>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        episodeId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
    }).isRequired,
    selectMovie: PropTypes.func.isRequired,
};

export default Movie;