import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lAKxUqJOFNFMwHhYPVeLSbLNiBXJwKt7S0xkv0xlt_Y' 
    }
});