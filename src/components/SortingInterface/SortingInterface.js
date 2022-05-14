import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'
import { SORT_BY_EPISODE, SORT_BY_YEAR } from '../../constants/sorts';

const StyledPopover = styled.div`
    font-family: Arial, sans-serif;
    width: 300px;
`;
const PopoverHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cdcdcd;
`;
const Title = styled.span`
    padding: 0 10px;
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

const buttonStyle = {
    color: '#7a7a7a',
    background: '#ffff',
    textTransform: 'none',
    border: '#7a7a7a',
    flexDirection: 'row',
};
const closeIconStyle = {
    color: '#7a7a7a',
};
const optionsButtonStyle = {
    width: '100%',
    paddingLeft: '20px',
    color: '#7a7a7a',
    justifyContent: 'flex-start',
    textTransform: 'none',
    borderBottom: '1px solid #cdcdcd',
};

const SortingInterface = ({ setSort }) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSort = (sort) => {
        setSort(sort);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'sorting-popover' : undefined;

    return (
        <>
            <Button
                variant="outlined"
                sx={buttonStyle}
                onClick={handleClick}
            >
                Sort by...
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <StyledPopover>
                    <PopoverHeader>
                        <Title>
                            Sort by
                        </Title>
                        <Button
                            type="button"
                            sx={buttonStyle}
                            onClick={handleClose}
                        >
                            <CloseIcon sx={closeIconStyle}/>
                        </Button>

                    </PopoverHeader>
                    <Body>
                        <Button
                            type="button"
                            sx={optionsButtonStyle}
                            onClick={() => handleSort(SORT_BY_EPISODE)}
                        >
                            Episode
                        </Button>
                        <Button
                            type="button"
                            sx={optionsButtonStyle}
                            onClick={() => handleSort(SORT_BY_YEAR)}
                        >
                            Year
                        </Button>
                    </Body>
                </StyledPopover>
            </Popover>
        </>
    );
};

SortingInterface.propTypes = {
    setSort: PropTypes.func.isRequired,
};

export default SortingInterface;