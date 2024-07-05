import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { colors } from '../../constants/colors';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        if (value) {
            setIsError(false)
            navigate(`/search/${value}`)
            setValue('')
        } else { setIsError(true) }
    }
    return (
        <Paper
            onSubmit={submitHandler}
            component={"form"}
            sx={{
                border: ` ${isError ? "2px solid red" : `1px solid ${colors.secondary}`}`,
                pl: 2, boxShadow: 'none',
                mr: 5
            }}
        >
            <input
                type="text"
                placeholder='Search..'
                className='search_bar'
                value={value}
                onChange={e => setValue(e.target.value)} />
            <IconButton type='submit'>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
