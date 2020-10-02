import { get } from './api';

export default {
  index: async (pageNumber: number) =>
    get(
      `${process.env.MOVIE_API}/discover/movie?vote_average.gte=0.0&page=${pageNumber}`
    )
};
