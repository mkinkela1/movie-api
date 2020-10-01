import { get } from './api';

export default {
  index: () => get(`${process.env.MOVIE_API}/genre/movie/list`)
};
