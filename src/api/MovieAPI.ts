import { get } from './api';

export default {
  index: (movieId: number) => get(`${process.env.MOVIE_API}/movie/${movieId}`)
};
