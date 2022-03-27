import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = styled.div`
    font-family: Arial, sans-serif;
    color: #2f2f2f;
    padding: 40px;
`;

const Title = styled.h2`
   font-size: 1.2em;
`;

const StyledParagraph = styled.p`
    font-size: 0.9em;
`;

const StyledDiv = styled.div`
    font-size: 0.8em;
`;

const Message = styled.h3`
    font-family: Arial, sans-serif;
    color: #2f2f2f;
    padding-left: 100px;
`;

const MoviePreview = ({ selectedMovie }) => {
    return (
        <div>
            {!selectedMovie ?
                <Message>No movie selected</Message> :
                (<Container>
                    <Title>{selectedMovie.title}</Title>
                    <StyledParagraph>{selectedMovie.description}</StyledParagraph>
                    <StyledDiv>Directed By: {selectedMovie.director}</StyledDiv>
                </Container>)
               }
        </div>
    );
};

MoviePreview.propTypes = {
    selectedMovie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
    }),
};

export default MoviePreview;