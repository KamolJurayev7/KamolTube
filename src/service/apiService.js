import axios from 'axios'

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '903cbe9aafmshb80d0822c06d159p144f52jsnc6ed6f2f3523',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};
export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response
    }
} 