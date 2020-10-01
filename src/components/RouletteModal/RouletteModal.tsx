import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState
} from 'react';
import { useHistory } from 'react-router-dom';
import GenresAPI from '../../api/GenresAPI';
import { RouletteModalContext } from '../../contexts/RouletteModalContext';

interface Genre {
  id: number;
  name: string;
}

const RouletteModal: FunctionComponent = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const { getRandomMovie, isOpen, setIsOpen } = useContext(
    RouletteModalContext
  );
  const history = useHistory();

  useEffect(() => {
    GenresAPI.index().then(r => setGenres(r.data.genres));
  }, []);

  if (isOpen)
    return (
      <div className="c-roulette-modal">
        <div className="c-roulette-modal__content">
          <div className="c-roulette-modal__content--header">
            Movie Roulette
          </div>
          <div className="c-roulette-modal__content--options">
            <div className="l-grid">
              <div className="l-grid__row">
                {genres.map((genre: Genre, idx: number) => (
                  <div
                    className="l-grid__row-12"
                    style={{ justifyContent: 'flex-start' }}
                    key={idx}>
                    <input
                      type="radio"
                      name="genre"
                      id={genre.name}
                      value={genre.name}
                    />
                    <label htmlFor={genre.name}>{genre.name}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="c-roulette-modal__content--button"
            type="button"
            onClick={() =>
              getRandomMovie
                ? getRandomMovie().then((r: number) => {
                    if (setIsOpen) {
                      setIsOpen(false);
                    }
                    history.push(`/movie/${r}`);
                  })
                : undefined
            }>
            Roll
          </button>
        </div>
      </div>
    );
  return <></>;
};

export default RouletteModal;
