import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { ApiService } from '../../service/apiService';
import { Box, Container, Typography } from '@mui/material';
import { colors } from '../../constants/colors';
import Videos from '../videos/Videos';

const Search = () => {
    const { searchID } = useParams()
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${searchID}`)
                setVideos(data?.data?.items)
            }
            catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [searchID])
    return (
        <Box p={2} sx={{ height: '90vh' }}>
            <Container maxWidth={'90%'}>
                <Typography variant='h4' fontWeight={'bold'} mb={2}>
                    Search results for <span style={{ color: colors.secondary }}>{searchID}</span>videos
                </Typography>
                <Videos videos={videos} />
            </Container>
        </Box>
    );
}

export default Search;
