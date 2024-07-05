import { useState, useEffect } from 'react'
import { Stack, Box, Container, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import { Category, Videos } from '../'
import { ApiService } from '../../service/apiService'

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])
    const selectedCategoryHandler = (category) => {
        setSelectedCategory(category)
    }
    useEffect(() => {
        const getDate = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
                setVideos(data?.data?.items)
            }
            catch (err) {
                console.log(err)
            }
        }
        getDate()
    }, [selectedCategory]);
    return (
        <div>
            <Stack>
                <Category
                    selectedCategoryHandler={selectedCategoryHandler}
                    selectedCategory={selectedCategory} />
                <Box p={2} sx={{ height: '90vh', }}>
                    <Container maxWidth={'90%'}>
                        <Typography variant='h4' mb={2} fontWeight={'bold'}>
                            {selectedCategory} <span style={{ color: colors.secondary }}>videos</span>
                        </Typography>
                        <Videos videos={videos} />
                    </Container>
                </Box>
            </Stack>
        </div>
    );
}

export default Main;
