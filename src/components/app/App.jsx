import {Routes , Route} from 'react-router-dom';
import { Box } from '@mui/material'
import { Main, Channel, VideoDetail, Search, Navbar, Footer } from '../';


const App = () => {
    return (
        <Box>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/channel/:id" element={<Channel />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/search/:searchID" element={<Search />} />
            </Routes>
            {/* <Footer/> */}
        </Box>
    );
}

export default App;
