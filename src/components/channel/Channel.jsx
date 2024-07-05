import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../../service/apiService';
import { Box } from '@mui/material'
import { ChannelCard } from '../'
const Channel = () => {
    const { id } = useParams()
    const [channelDetail, setChannelDetail] = useState([])
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
                setChannelDetail(dataChannelDetail.items[0])
                console.log(dataChannelDetail);
                const dataChannelVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet`)
                setVideos(dataChannelVideo)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [id])
    return (
        <Box minHeight={'95vh'} mt={'10vh'}>
            <Box
                width={'100%'}
                height={'300px'}
                sx={{ backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})` }}>

            </Box>
            <ChannelCard video={channelDetail} />
        </Box>
    );
}

export default Channel;
