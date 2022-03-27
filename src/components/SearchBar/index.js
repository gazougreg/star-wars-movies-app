import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import styled from 'styled-components'
import { FILTER_BY_INPUT } from '../../constants/filters';

const SearchContainer = styled.div`
    font-family: Arial, sans-serif;
    display:flex;
    align-items: center;
    background: #ffff;
    padding-left: 10px;
    margin-right: 50px;
    border: 1px solid #cdcdcd;
    border-radius:5px;
    width: 85%;
    @media (max-width: 480px) {
      margin: 20px 0 0 0;
      height: 50px;
    }
`;

const searchIconStyle = {
    height: '100%',
    color: '#7a7a7a',

};

const inputBaseStyle = {
    width: '100%',
};

const SearchBar = ({ filter, setFilter }) => {
    const handleChange = (e) => {
        setFilter({ type: FILTER_BY_INPUT, input: e.target.value });
    };
    return (
        <SearchContainer>
            <SearchIcon
                className="search-bar__icon"
                sx={searchIconStyle}
            />
            <InputBase
                id="search-bar-input"
                name="searchBarInput"
                placeholder="Type to search..."
                value={filter.input}
                onChange={handleChange}
                sx={inputBaseStyle}

            />
        </SearchContainer>
    );
}

SearchBar.propTypes = {
    filter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        input: PropTypes.string.isRequired,
    }),
    setFilter: PropTypes.func.isRequired,
};

export default SearchBar;