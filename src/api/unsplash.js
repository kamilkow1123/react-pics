import axios from 'axios';

const {REACT_APP_CLIENT_ID} = process.env;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${REACT_APP_CLIENT_ID}` 
    }
});