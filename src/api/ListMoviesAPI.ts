import { get } from './api';

export default {
  index: (list: string | undefined) =>
    get(`${process.env.MOVIE_API}/movie/${list}`)
};
