import { get, post } from './api';

export default {
  ratedMovies: () =>
    get(
      `/guest_session/${localStorage.getItem('guest_session_id')}/rated/movies`
    ),

  rateMovie: (movieId: number, value: number) =>
    post(
      `/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
        'guest_session_id'
      )}`,
      { value }
    )
};
