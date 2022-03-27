import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchBar from '../../containers/SearchBar';
import SortingInterface from '../../containers/SortingInterface';
import MoviesSideBar from '../../containers/MoviesSideBar';
import MoviePreview from '../../containers/MoviePreview';

const AppWrapper = styled.div`
    background: #ffff;
    max-width: 100%;
    overflow-x: hidden;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #ededed;
    width: 100%;
    padding: 20px;
    @media (max-width: 480px) {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const App = ({ fetchMoviesIfNeeded }) => {

    useEffect(() => {
        fetchMoviesIfNeeded();
    }, []);


    return (
        <AppWrapper>
            <Header>
                <SortingInterface />
                <SearchBar />
            </Header>
            <Content>
                <MoviesSideBar />
                <MoviePreview />
            </Content>
        </AppWrapper>
    );
};

App.propTypes = {
    fetchMoviesIfNeeded: PropTypes.func.isRequired,
};

export default App;
