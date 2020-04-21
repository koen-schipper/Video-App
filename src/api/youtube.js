import axios from 'axios';

const KEY = 'AIzaSyCAzi2eon1KMt43laPT750T1OtsrTpb5Ow';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});