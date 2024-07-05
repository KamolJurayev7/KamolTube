import React from 'react';
import { Stack, Box } from '@mui/material';
import { colors } from '../../constants/colors'
import { Link } from 'react-router-dom';
import SearchBar from '../search-bar/SearchBar';
import TelegramIcon from '@mui/icons-material/Telegram';

const Navbar = () => {
    return (
        <Stack
            direction={'row'}
            alignItems="center"
            justifyContent={"space-between"}
            p={2}
            sx={{ position: "sticky", top: 0, zIndex: 99, background: colors.primary , height:'10vh' }}
        >
            <Link to={'/'}> <p  className='logo_site'>KamolTube</p></Link>
            <SearchBar/>
            <Box mr={3} >
                <Link to={'https://t.me/kamoljurayev'}>
                <TelegramIcon sx={{ fontSize: '35px', color: colors.secondary}}/>
                </Link>
            </Box>
        </Stack>
    );
}

export default Navbar;
