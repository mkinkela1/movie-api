import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.MOVIE_API,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json'
  },
  params: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    api_key: process.env.MOVIE_API_KEY,
    language: 'en-US'
  }
});

api.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  async error => Promise.reject(error)
);

const { get } = api;
export { get };
export default api;
