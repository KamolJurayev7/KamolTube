import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ApiService } from '../../service/apiService';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player/youtube'
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material';
import { Loader, Videos } from '../'
const VideoDetail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState(null);
    const [related, setRelated] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await ApiService.fetching(`videos?part=snippet&statistics&id=${id}`)
                setDetail(result.data.items[0])
                const relatedData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
                setRelated(relatedData?.data?.items)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [id])

    // const {
    //     snippet: { title, channelId, channelTitle, description, tags, thumbnails },
    //     statistics: { viewCount, likeCount, commentCount }
    // } = videoDetail
    if (!detail?.snippet && !detail?.statistics) return <Loader />
    if (!related) return <Loader />

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                <Box width={{ xs: '100%', md: '72%' }}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls={true} className="react-player" />
                    {detail?.snippet?.tags.map(((item, idx) => (
                        <Chip
                            label={item}
                            key={idx}
                            sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
                            deleteIcon={<Tag />}
                            onDelete={() => { }}
                            variant='outlined'
                        />
                    )))}
                    <Typography variant='h5' fontWeight={'bold'} p={2}>
                        {detail?.snippet?.title}
                    </Typography>
                    <Typography variant='subtitle2' p={2} sx={{ opacity: '.7' }}>
                        {detail?.snippet?.description.slice(0, 610)}
                    </Typography>
                    <Stack direction='row' gap='20px' alignItems='center' py={1} px={2}>
                        <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
                            <Visibility />
                            {parseInt(detail?.statistics?.viewCount).toLocaleString()} views
                        </Stack>
                        <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
                            <FavoriteOutlined />
                            {parseInt(detail?.statistics?.likeCount).toLocaleString()} likes
                        </Stack>
                        <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
                            <MarkChatRead />
                            {parseInt(detail?.statistics?.commentCount).toLocaleString()} comment
                        </Stack>
                    </Stack>
                    <Stack direction='row' py={1} px={2}>
						<Link to={`/channel/${detail?.snippet?.channelId}`}>
							<Stack direction='row' alignItems='center' gap='5px' marginTop='5px'>
								<Avatar
									alt={detail.snippet.channelTitle}
									src={detail.snippet.thumbnails.default.url}
								/>
								<Typography variant='subtitle2' color='gray'>
									{detail.snippet.channelTitle}
									<CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
								</Typography>
							</Stack>
						</Link>
					</Stack>
                </Box>
                <Box 
                width={{ xs: '100%', md: '28%' }}
                px={2}
                py={{md:1,xs:5}}
                justifyContent={'center'}
                alignItems={'center'}
                overflow={'scroll'}
                maxHeight={'100vh'}
                >
                    <Videos videos={related}/>
                </Box>
            </Box>
        </Box>
    );
}

export default VideoDetail;
