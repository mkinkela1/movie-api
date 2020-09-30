import { get } from './api';
import { NOW_PLAYING } from '../constants/MovieListConstants';

export default {
  index: (list: string = NOW_PLAYING, page = 1) =>
    get(`${process.env.MOVIE_API}/movie/${list}?page=${page}`)
};
