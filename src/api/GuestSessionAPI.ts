import { get } from './api';

export default {
  index: () =>
    get(
      `${process.env.MOVIE_API}/authentication/guest_session/new?api_key=${process.env.MOVIE_API_KEY}`
    ).then(({ data }) => {
      localStorage.setItem('guest_session_id', data.guest_session_id);
    })
};
