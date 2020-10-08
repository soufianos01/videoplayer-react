import axios from 'axios';

const KEY = 'AIzaSyDq0Ymtu39ZQKihgQuVCgxsyP5zMPQcwU0'; // PUT HERE YOUR API KEY

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
