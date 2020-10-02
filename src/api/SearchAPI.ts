import { get } from './api';

export default {
  index: (query: string, page = 1) =>
    get(`${process.env.MOVIE_API}/search/movie?query=${query}&page=${page}`)
};
